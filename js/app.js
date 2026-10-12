/* Recipe Book BD — offline bilingual recipe app. Zero network requests. */
(function () {
  "use strict";
  var RECIPES = window.RECIPES || [];
  var CATS = window.RB_CATS || {};
  var FAV_KEY = "rbbd_favs_v1";
  var LANG_KEY = "rbbd_lang_v1";

  var lang = "en";
  try { lang = localStorage.getItem(LANG_KEY) || "en"; } catch (e) {}
  if (lang !== "bn") lang = "en";

  var favs = [];
  try { favs = JSON.parse(localStorage.getItem(FAV_KEY) || "[]"); } catch (e) { favs = []; }
  favs = favs.filter(function (id) { return RECIPES.some(function (r) { return r.id === id; }); });

  var showFavsOnly = false;

  var BN_D = { "0": "০", "1": "১", "2": "২", "3": "৩", "4": "৪", "5": "৫", "6": "৬", "7": "৭", "8": "৮", "9": "৯" };
  function bnNum(v) {
    return String(v).replace(/[0-9]/g, function (d) { return BN_D[d]; });
  }
  function t(en, bn) { return lang === "bn" ? bn : en; }
  function num(v) { return lang === "bn" ? bnNum(v) : String(v); }

  var STR = {
    en: {
      title: "Recipe Book BD", sub: "235+ Bangladeshi recipes · 100% offline",
      searchPh: "Search recipes or ingredients…",
      allCat: "All categories", allDiff: "Any difficulty", anyTime: "Any time",
      easy: "Easy", medium: "Medium", hard: "Hard",
      min: "min", servings: "servings",
      results: function (n) { return n + (n === 1 ? " recipe" : " recipes"); },
      noResults: "No recipes found. Try another search or filter.",
      ingredients: "Ingredients", steps: "Steps",
      addFav: "♡ Save to favorites", removeFav: "❤ Saved",
      export: "Export", import: "Import",
      foot: "Recipe Book BD · offline-first · data stored only in your browser",
      favsTitle: "Favorite recipes", backAll: "← All recipes",
      imported: function (n) { return "Imported " + n + " favorites."; },
      importBad: "Could not import: invalid file.",
      timeUnder: function (m) { return "Under " + m + " min"; }
    },
    bn: {
      title: "রেসিপি বুক বিডি", sub: "২৩৫+ বাংলাদেশি রেসিপি · সম্পূর্ণ অফলাইন",
      searchPh: "রেসিপি বা উপকরণ খুঁজুন…",
      allCat: "সব ক্যাটাগরি", allDiff: "যেকোনো কঠিনতা", anyTime: "যেকোনো সময়",
      easy: "সহজ", medium: "মাঝারি", hard: "কঠিন",
      min: "মিনিট", servings: "জনের",
      results: function (n) { return bnNum(n) + "টি রেসিপি"; },
      noResults: "কোনো রেসিপি পাওয়া যায়নি। অন্য কিছু খুঁজে দেখুন।",
      ingredients: "উপকরণ", steps: "প্রণালি",
      addFav: "♡ পছন্দের তালিকায় রাখুন", removeFav: "❤ সংরক্ষিত",
      export: "এক্সপোর্ট", import: "ইমপোর্ট",
      foot: "রেসিপি বুক বিডি · অফলাইন-ফার্স্ট · তথ্য শুধু আপনার ব্রাউজারে থাকে",
      favsTitle: "পছন্দের রেসিপি", backAll: "← সব রেসিপি",
      imported: function (n) { return bnNum(n) + "টি পছন্দের রেসিপি ইমপোর্ট হয়েছে।"; },
      importBad: "ইমপোর্ট করা যায়নি: ফাইলটি সঠিক নয়।",
      timeUnder: function (m) { return bnNum(m) + " মিনিটের মধ্যে"; }
    }
  };
  function S() { return STR[lang]; }

  var $ = function (id) { return document.getElementById(id); };
  var els = {
    search: $("search"), cat: $("catFilter"), diff: $("diffFilter"), time: $("timeFilter"),
    grid: $("grid"), count: $("resultCount"), empty: $("emptyState"),
    modal: $("modal"), favCount: $("favCount"), langToggle: $("langToggle"),
    favViewBtn: $("favViewBtn")
  };

  function isFav(id) { return favs.indexOf(id) !== -1; }
  function saveFavs() {
    try { localStorage.setItem(FAV_KEY, JSON.stringify(favs)); } catch (e) {}
    els.favCount.textContent = num(favs.length);
  }
  function toggleFav(id) {
    var i = favs.indexOf(id);
    if (i === -1) favs.push(id); else favs.splice(i, 1);
    saveFavs();
    render();
    if (!els.modal.classList.contains("hidden") && els.modal.dataset.rid === id) paintModalFav(id);
  }

  function diffLabel(d) {
    return d === "easy" ? S().easy : d === "medium" ? S().medium : S().hard;
  }

  function matches(r, q) {
    if (!q) return true;
    q = q.toLowerCase();
    if (r.name.en.toLowerCase().indexOf(q) !== -1) return true;
    if (r.name.bn.indexOf(q) !== -1) return true;
    for (var i = 0; i < r.ingredients.length; i++) {
      var g = r.ingredients[i];
      if (g.en.toLowerCase().indexOf(q) !== -1 || g.bn.indexOf(q) !== -1) return true;
    }
    return false;
  }

  function filtered() {
    var q = els.search.value.trim();
    var cat = els.cat.value, diff = els.diff.value, maxT = els.time.value;
    return RECIPES.filter(function (r) {
      if (showFavsOnly && !isFav(r.id)) return false;
      if (cat && r.cat !== cat) return false;
      if (diff && r.diff !== diff) return false;
      if (maxT && r.time > parseInt(maxT, 10)) return false;
      return matches(r, q);
    });
  }

  function cardHTML(r) {
    var fav = isFav(r.id) ? " active" : "";
    var heart = isFav(r.id) ? "❤️" : "🤍";
    return '<article class="card" data-id="' + r.id + '" tabindex="0">' +
      '<button class="fav-btn' + fav + '" data-fav="' + r.id + '" aria-label="favorite">' + heart + "</button>" +
      '<span class="cat">' + t(CATS[r.cat].en, CATS[r.cat].bn) + "</span>" +
      "<h3>" + t(r.name.en, r.name.bn) + "</h3>" +
      '<div class="specs"><span>⏱ ' + num(r.time) + " " + S().min + "</span>" +
      "<span>🍽 " + num(r.servings) + " " + S().servings + "</span>" +
      '<span class="diff-' + r.diff + '">' + diffLabel(r.diff) + "</span></div>" +
      "</article>";
  }

  function render() {
    var list = filtered();
    els.grid.innerHTML = list.map(cardHTML).join("");
    els.count.textContent = showFavsOnly ? S().favsTitle + " · " + S().results(list.length) : S().results(list.length);
    els.empty.textContent = S().noResults;
    els.empty.classList.toggle("hidden", list.length !== 0);
    els.grid.classList.toggle("hidden", list.length === 0);
    els.favViewBtn.innerHTML = (showFavsOnly ? S().backAll : "❤") + ' <span id="favCount">' + num(favs.length) + "</span>";
    els.favCount = $("favCount");
  }

  function openRecipe(id) {
    var r = RECIPES.find(function (x) { return x.id === id; });
    if (!r) return;
    els.modal.dataset.rid = id;
    $("modalTitle").textContent = t(r.name.en, r.name.bn);
    $("modalMeta").innerHTML =
      '<span class="cat">' + t(CATS[r.cat].en, CATS[r.cat].bn) + "</span>" +
      "<span>⏱ " + num(r.time) + " " + S().min + "</span>" +
      "<span>🍽 " + num(r.servings) + " " + S().servings + "</span>" +
      '<span class="diff-' + r.diff + '">' + diffLabel(r.diff) + "</span>";
    $("ingHeading").textContent = S().ingredients;
    $("modalIng").innerHTML = r.ingredients.map(function (g) {
      return "<li><span>" + (lang === "bn" ? g.bn : g.en) + '</span><span class="qty">' + (lang === "bn" ? g.qtyBn : g.qty) + "</span></li>";
    }).join("");
    $("stepsHeading").textContent = S().steps;
    $("modalSteps").innerHTML = r.steps[lang].map(function (s) { return "<li>" + s + "</li>"; }).join("");
    paintModalFav(id);
    els.modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
  function paintModalFav(id) {
    $("modalFav").textContent = isFav(id) ? S().removeFav : S().addFav;
  }
  function closeModal() {
    els.modal.classList.add("hidden");
    document.body.style.overflow = "";
  }

  function buildFilters() {
    var s = S();
    els.cat.innerHTML = '<option value="">' + s.allCat + "</option>" +
      Object.keys(CATS).map(function (c) {
        return '<option value="' + c + '">' + t(CATS[c].en, CATS[c].bn) + "</option>";
      }).join("");
    els.diff.innerHTML = '<option value="">' + s.allDiff + "</option>" +
      '<option value="easy">' + s.easy + '</option>' +
      '<option value="medium">' + s.medium + '</option>' +
      '<option value="hard">' + s.hard + "</option>";
    els.time.innerHTML = '<option value="">' + s.anyTime + "</option>" +
      [30, 60, 120].map(function (m) {
        return '<option value="' + m + '">' + s.timeUnder(m) + "</option>";
      }).join("");
  }

  function applyLang() {
    var s = S();
    document.documentElement.lang = lang === "bn" ? "bn" : "en";
    $("appTitle").textContent = s.title;
    $("appSub").textContent = s.sub;
    els.langToggle.textContent = lang === "bn" ? "English" : "বাংলা";
    els.search.placeholder = s.searchPh;
    $("footText").textContent = s.foot;
    document.querySelector('[data-i18n="export"]').textContent = s.export;
    document.querySelector('[data-i18n="import"]').textContent = s.import;
    var cv = els.cat.value, dv = els.diff.value, tv = els.time.value;
    buildFilters();
    els.cat.value = cv; els.diff.value = dv; els.time.value = tv;
    render();
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  }

  function exportFavs() {
    var data = favs.map(function (id) {
      var r = RECIPES.find(function (x) { return x.id === id; });
      return r ? { id: r.id, name_en: r.name.en, name_bn: r.name.bn } : null;
    }).filter(Boolean);
    var blob = new Blob([JSON.stringify({ app: "recipe-book-bd", favorites: data }, null, 2)], { type: "application/json" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "recipe-book-bd-favorites.json";
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }

  function importFavs(file) {
    var reader = new FileReader();
    reader.onload = function () {
      try {
        var obj = JSON.parse(reader.result);
        var arr = Array.isArray(obj) ? obj : obj.favorites;
        if (!Array.isArray(arr)) throw new Error("bad");
        var ids = arr.map(function (x) { return typeof x === "string" ? x : x.id; })
          .filter(function (id) { return RECIPES.some(function (r) { return r.id === id; }); });
        var added = 0;
        ids.forEach(function (id) { if (favs.indexOf(id) === -1) { favs.push(id); added++; } });
        saveFavs(); render();
        alert(S().imported(added));
      } catch (e) { alert(S().importBad); }
    };
    reader.readAsText(file);
  }

  // events
  els.search.addEventListener("input", render);
  els.cat.addEventListener("change", render);
  els.diff.addEventListener("change", render);
  els.time.addEventListener("change", render);
  els.langToggle.addEventListener("click", function () { lang = lang === "bn" ? "en" : "bn"; applyLang(); });
  els.favViewBtn.addEventListener("click", function () { showFavsOnly = !showFavsOnly; render(); });
  $("exportBtn").addEventListener("click", exportFavs);
  $("importFile").addEventListener("change", function (e) {
    if (e.target.files[0]) importFavs(e.target.files[0]);
    e.target.value = "";
  });
  els.grid.addEventListener("click", function (e) {
    var fb = e.target.closest("[data-fav]");
    if (fb) { e.stopPropagation(); toggleFav(fb.getAttribute("data-fav")); return; }
    var card = e.target.closest(".card");
    if (card) openRecipe(card.getAttribute("data-id"));
  });
  els.grid.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      var card = e.target.closest(".card");
      if (card) openRecipe(card.getAttribute("data-id"));
    }
  });
  $("modalClose").addEventListener("click", closeModal);
  $("modalFav").addEventListener("click", function () { toggleFav(els.modal.dataset.rid); });
  els.modal.addEventListener("click", function (e) { if (e.target === els.modal) closeModal(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeModal(); });

  buildFilters();
  applyLang();
  saveFavs();
})();
