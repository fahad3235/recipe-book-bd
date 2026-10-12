// Step templates per cooking style. {M} = main ingredient (EN), {MB} = main ingredient (BN).
// Each recipe picks one template; dishes files supply M/MB via the `main` ingredient key.
export const STEPS = {
  // ================= FISH =================
  "fish-jhol": {
    en: [
      "Wash the {M} pieces well, rub with 1 tsp turmeric and salt, and rest for 10 minutes.",
      "Heat mustard oil until it smokes lightly, then fry the {M} pieces until golden on both sides. Set aside.",
      "In the same oil, temper with nigella seeds and slit green chilies.",
      "Add sliced onions and fry until soft, then add ginger-garlic paste and saute 2 minutes.",
      "Add turmeric, red chili powder, cumin powder and salt with a splash of water; cook until oil separates.",
      "Add potato wedges and tomato pieces, pour in 2 cups warm water and bring to a boil.",
      "Slide the fried {M} back in, cover and simmer 8-10 minutes on medium heat.",
      "Sprinkle chopped coriander leaves and rest 5 minutes before serving hot with rice."
    ],
    bn: [
      "{MB} টুকরোগুলো ভালো করে ধুয়ে ১ চা চামচ হলুদ ও লবণ মাখিয়ে ১০ মিনিট রেখে দিন।",
      "সরষের তেল হালকা ধোঁয়া ওঠা পর্যন্ত গরম করে {MB} টুকরোগুলো দুই পাশ সোনালি করে ভেজে তুলে রাখুন।",
      "একই তেলে কালোজিরা ও চেরা কাঁচা মরিচ ফোড়ন দিন।",
      "কাটা পেঁয়াজ দিয়ে নরম হওয়া পর্যন্ত ভাজুন, তারপর আদা-রসুন বাটা দিয়ে ২ মিনিট কষান।",
      "হলুদ, মরিচ গুঁড়া, জিরা গুঁড়া ও লবণ সামান্য পানি দিয়ে কষান যতক্ষণ না তেল ছাড়ে।",
      "আলুর টুকরা ও টমেটো দিয়ে ২ কাপ হালকা গরম পানি ঢেলে ফুটতে দিন।",
      "ভাজা {MB} আবার দিয়ে ঢেকে মাঝারি আঁচে ৮-১০ মিনিট রান্না করুন।",
      "ধনে পাতা ছড়িয়ে ৫ মিনিট রেখে গরম ভাতের সাথে পরিবেশন করুন।"
    ]
  },
  "fish-shorshe": {
    en: [
      "Soak 3 tbsp mustard seeds in warm water for 15 minutes, then grind to a smooth paste with 2 green chilies and a pinch of salt.",
      "Wash the {M} pieces, rub with turmeric and salt, and rest 10 minutes.",
      "Heat mustard oil till smoking, lightly fry the {M} pieces for 2 minutes per side. Remove.",
      "Lower the heat; add nigella seeds and the mustard paste thinned with 1 cup water.",
      "Stir in turmeric, salt and slit green chilies; simmer the gravy 3-4 minutes (do not overcook mustard).",
      "Add the fried {M}, spoon gravy over, cover and cook 5-6 minutes on low.",
      "Drizzle a teaspoon of raw mustard oil on top and serve hot with steamed rice."
    ],
    bn: [
      "৩ টেবিল চামচ সরষে হালকা গরম পানিতে ১৫ মিনিট ভিজিয়ে ২টি কাঁচা মরিচ ও এক চিমটি লবণ দিয়ে মিহি বেটে নিন।",
      "{MB} টুকরোগুলো ধুয়ে হলুদ ও লবণ মাখিয়ে ১০ মিনিট রাখুন।",
      "সরষের তেল ধোঁয়া ওঠা পর্যন্ত গরম করে {MB} প্রতি পাশ ২ মিনিট করে হালকা ভেজে তুলুন।",
      "আঁচ কমিয়ে কালোজিরা ফোড়ন দিয়ে ১ কাপ পানিতে গোলানো সরষে বাটা দিন।",
      "হলুদ, লবণ ও চেরা কাঁচা মরিচ দিয়ে ঝোল ৩-৪ মিনিট ফোটান (সরষে বেশি রাঁধবেন না)।",
      "ভাজা {MB} দিয়ে ঝোল চামচে তুলে ওপরে দিন, ঢেকে অল্প আঁচে ৫-৬ মিনিট রান্না করুন।",
      "ওপরে এক চা চামচ কাঁচা সরষের তেল ছড়িয়ে গরম ভাতের সাথে পরিবেশন করুন।"
    ]
  },
  "fish-bhuna": {
    en: [
      "Wash the {M} pieces, rub with turmeric and salt, and rest 10 minutes.",
      "Fry the {M} in hot oil until crisp and golden; set aside.",
      "In the same oil, fry sliced onions until deep golden brown.",
      "Add ginger-garlic paste, then turmeric, chili, cumin and coriander powders with a little water; bhuna until oil separates.",
      "Add chopped tomatoes and cook till they melt into the masala.",
      "Add the fried {M} and 1/2 cup warm water; toss well to coat.",
      "Cover and cook on low 8 minutes so the {M} soaks up the masala.",
      "Garnish with green chilies and coriander; serve with rice or polao."
    ],
    bn: [
      "{MB} ধুয়ে হলুদ ও লবণ মাখিয়ে ১০ মিনিট রাখুন।",
      "গরম তেলে {MB} মচমচে সোনালি করে ভেজে তুলে রাখুন।",
      "একই তেলে কাটা পেঁয়াজ গাঢ় বাদামি করে ভাজুন।",
      "আদা-রসুন বাটা, তারপর হলুদ, মরিচ, জিরা ও ধনে গুঁড়া সামান্য পানি দিয়ে তেল ছাড়া পর্যন্ত ভুনুন।",
      "কাটা টমেটো দিয়ে মসলার সাথে গলে যাওয়া পর্যন্ত রান্না করুন।",
      "ভাজা {MB} ও আধা কাপ হালকা গরম পানি দিয়ে ভালো করে মিশিয়ে নিন।",
      "ঢেকে অল্প আঁচে ৮ মিনিট রান্না করুন যাতে মসলা {MB}-তে ঢোকে।",
      "কাঁচা মরিচ ও ধনে পাতা দিয়ে সাজিয়ে ভাত বা পোলাওয়ের সাথে পরিবেশন করুন।"
    ]
  },
  "fish-bhapa": {
    en: [
      "Grind mustard seeds with green chilies, salt and a little water into a fine paste.",
      "Wash the {M} pieces and coat with turmeric, salt and the mustard paste.",
      "Add 2 tbsp mustard oil and 1/2 cup water; mix gently.",
      "Transfer to a steel tiffin box or heatproof bowl and close the lid.",
      "Steam in a large covered pot with 2 inches of boiling water for 20-25 minutes.",
      "Rest 5 minutes, open carefully, and drizzle raw mustard oil on top.",
      "Serve the steamed {M} hot with plain rice."
    ],
    bn: [
      "সরষে, কাঁচা মরিচ, লবণ ও সামান্য পানি দিয়ে মিহি বাটা তৈরি করুন।",
      "ধোয়া {MB} টুকরোতে হলুদ, লবণ ও সরষে বাটা মাখিয়ে নিন।",
      "২ টেবিল চামচ সরষের তেল ও আধা কাপ পানি দিয়ে আলতো করে মেশান।",
      "স্টিলের টিফিন বাটি বা তাপসহ বাটিতে ঢেলে ঢাকনা বন্ধ করুন।",
      "বড় পাতিলে ২ ইঞ্চি ফুটন্ত পানি দিয়ে ঢেকে ২০-২৫ মিনিট ভাপে রান্না করুন।",
      "৫ মিনিট রেখে সাবধানে খুলে ওপরে কাঁচা সরষের তেল ছড়িয়ে দিন।",
      "ভাপা {MB} গরম ভাতের সাথে পরিবেশন করুন।"
    ]
  },
  "fish-paturi": {
    en: [
      "Grind mustard seeds, grated coconut, green chilies and salt into a thick paste.",
      "Marinate the {M} pieces with turmeric, salt and the paste for 20 minutes.",
      "Wilt banana leaves over a flame so they turn pliable without tearing.",
      "Place each {M} piece on a leaf with a spoon of paste, slit chilies and a drizzle of mustard oil.",
      "Fold into neat parcels and tie with thin leaf strips or toothpicks.",
      "Cook the parcels on a hot tawa 8-10 minutes per side until the leaf chars lightly.",
      "Unwrap and serve the fragrant {M} paturi with hot rice."
    ],
    bn: [
      "সরষে, কোরানো নারকেল, কাঁচা মরিচ ও লবণ দিয়ে ঘন বাটা তৈরি করুন।",
      "হলুদ, লবণ ও বাটা দিয়ে {MB} টুকরো ২০ মিনিট ম্যারিনেট করুন।",
      "কলা পাতা আগুনের ওপর হালকা সেঁকে নরম করে নিন যাতে না ছিঁড়ে।",
      "প্রতিটি পাতায় {MB} টুকরা, এক চামচ বাটা, চেরা মরিচ ও সরষের তেল দিয়ে রাখুন।",
      "সুন্দর করে মুড়ে পাতার সরু ফালি বা টুথপিক দিয়ে বেঁধে নিন।",
      "গরম তাওয়ায় প্রতি পাশ ৮-১০ মিনিট করে পাতা হালকা পোড়া না হওয়া পর্যন্ত রান্না করুন।",
      "খুলে সুগন্ধি {MB} পাতুরি গরম ভাতের সাথে পরিবেশন করুন।"
    ]
  },
  "fish-malai": {
    en: [
      "Clean and devein the prawns; rub with turmeric and salt, rest 10 minutes.",
      "Lightly fry the prawns in ghee for 2 minutes per side; set aside.",
      "In the same pan, fry sliced onions till golden, add ginger paste and whole garam masala.",
      "Add turmeric, chili powder and salt with a splash of water; cook 2 minutes.",
      "Pour in coconut milk and 1/2 cup warm water; simmer gently 5 minutes.",
      "Add the prawns, cover and cook on low 6-8 minutes until the gravy thickens.",
      "Finish with garam masala powder and a drizzle of ghee; serve with rice."
    ],
    bn: [
      "চিংড়ি পরিষ্কার করে শিরা ফেলে হলুদ ও লবণ মাখিয়ে ১০ মিনিট রাখুন।",
      "ঘিয়ে চিংড়ি প্রতি পাশ ২ মিনিট হালকা ভেজে তুলে রাখুন।",
      "একই কড়াইতে কাটা পেঁয়াজ সোনালি করে ভেজে আদা বাটা ও আস্ত গরম মসলা দিন।",
      "হলুদ, মরিচ গুঁড়া ও লবণ সামান্য পানি দিয়ে ২ মিনিট কষান।",
      "নারকেলের দুধ ও আধা কাপ হালকা গরম পানি ঢেলে ৫ মিনিট অল্প আঁচে ফোটান।",
      "চিংড়ি দিয়ে ঢেকে অল্প আঁচে ৬-৮ মিনিট রান্না করুন যতক্ষণ না ঝোল ঘন হয়।",
      "গরম মসলা গুঁড়া ও একটু ঘি দিয়ে নামিয়ে ভাতের সাথে পরিবেশন করুন।"
    ]
  },
  "fish-chorchori": {
    en: [
      "Wash the small {M} gently and drain well.",
      "Mix turmeric, chili powder, salt, mustard oil and sliced onions with the {M}.",
      "Add chopped vegetables (potato, eggplant) if using and toss everything together.",
      "Spread in a wide pan, add 1/2 cup water, cover and cook on medium heat.",
      "Cook 12-15 minutes, stirring once halfway, until water dries and oil glistens.",
      "Add slit green chilies and cook 2 more minutes uncovered.",
      "Serve hot with steamed rice."
    ],
    bn: [
      "ছোট {MB} আলতো করে ধুয়ে পানি ঝরিয়ে নিন।",
      "হলুদ, মরিচ গুঁড়া, লবণ, সরষের তেল ও কাটা পেঁয়াজ {MB}-র সাথে মাখিয়ে নিন।",
      "চাইলে কাটা সবজি (আলু, বেগুন) দিয়ে সব একসাথে মিশিয়ে নিন।",
      "চওড়া কড়াইতে ছড়িয়ে আধা কাপ পানি দিয়ে ঢেকে মাঝারি আঁচে বসান।",
      "মাঝে একবার নেড়ে ১২-১৫ মিনিট রান্না করুন যতক্ষণ না পানি শুকিয়ে তেল ভাসে।",
      "চেরা কাঁচা মরিচ দিয়ে ঢাকনা খুলে আরও ২ মিনিট রান্না করুন।",
      "গরম ভাতের সাথে পরিবেশন করুন।"
    ]
  },
  "fish-kalia": {
    en: [
      "Rub the {M} pieces with turmeric and salt; fry in mustard oil till golden and set aside.",
      "In the same oil, add bay leaves, cinnamon, cardamom and cloves.",
      "Fry onion paste till golden, then add ginger-garlic paste and cook 3 minutes.",
      "Add turmeric, chili, cumin, coriander powders and salt; bhuna with splashes of water till oil separates.",
      "Stir in whisked yogurt and cook 3-4 minutes on low so it does not split.",
      "Add 1.5 cups warm water, return the {M}, and simmer covered 10 minutes.",
      "Finish with garam masala and ghee; rest 10 minutes and serve with polao or rice."
    ],
    bn: [
      "{MB} টুকরোতে হলুদ ও লবণ মাখিয়ে সরষের তেলে সোনালি করে ভেজে তুলে রাখুন।",
      "একই তেলে তেজপাতা, দারুচিনি, এলাচ ও লবঙ্গ দিন।",
      "পেঁয়াজ বাটা সোনালি করে ভেজে আদা-রসুন বাটা দিয়ে ৩ মিনিট কষান।",
      "হলুদ, মরিচ, জিরা, ধনে গুঁড়া ও লবণ সামান্য পানি ছিটিয়ে তেল ছাড়া পর্যন্ত ভুনুন।",
      "ফেটানো টক দই দিয়ে অল্প আঁচে ৩-৪ মিনিট রান্না করুন যাতে না ফাটে।",
      "দেড় কাপ হালকা গরম পানি দিয়ে {MB} ফিরিয়ে ঢেকে ১০ মিনিট রান্না করুন।",
      "গরম মসলা ও ঘি দিয়ে নামিয়ে ১০ মিনিট রেখে পোলাও বা ভাতের সাথে পরিবেশন করুন।"
    ]
  },
  "fish-dopyaza": {
    en: [
      "Rub the {M} with turmeric and salt; fry lightly and set aside.",
      "Fry half the onions till crisp golden for beresta; set aside.",
      "In the same oil, saute remaining sliced onions till soft and translucent.",
      "Add ginger-garlic paste, turmeric, chili and cumin powders; cook 3 minutes.",
      "Add chopped tomatoes and cook till soft.",
      "Add the {M} with 1 cup warm water; simmer 8 minutes.",
      "Top with the crisp beresta and green chilies; serve hot."
    ],
    bn: [
      "{MB}-তে হলুদ ও লবণ মাখিয়ে হালকা ভেজে তুলে রাখুন।",
      "অর্ধেক পেঁয়াজ মচমচে বেরেস্তা করে ভেজে তুলে রাখুন।",
      "একই তেলে বাকি কাটা পেঁয়াজ নরম ও স্বচ্ছ হওয়া পর্যন্ত ভাজুন।",
      "আদা-রসুন বাটা, হলুদ, মরিচ ও জিরা গুঁড়া দিয়ে ৩ মিনিট কষান।",
      "কাটা টমেটো দিয়ে নরম হওয়া পর্যন্ত রান্না করুন।",
      "{MB} ও ১ কাপ হালকা গরম পানি দিয়ে ৮ মিনিট অল্প আঁচে রান্না করুন।",
      "ওপরে মচমচে বেরেস্তা ও কাঁচা মরিচ দিয়ে গরম পরিবেশন করুন।"
    ]
  },
  "fish-fry": {
    en: [
      "Wash the {M} pieces and pat dry.",
      "Make a marinade of turmeric, chili powder, salt, lemon juice and a little mustard oil.",
      "Coat the {M} well and rest 20 minutes.",
      "Heat oil in a pan and fry the {M} 4-5 minutes per side until crisp and golden.",
      "Drain on paper and serve hot with onion rings and lemon wedges."
    ],
    bn: [
      "{MB} টুকরো ধুয়ে পানি মুছে নিন।",
      "হলুদ, মরিচ গুঁড়া, লবণ, লেবুর রস ও সামান্য সরষের তেল দিয়ে ম্যারিনেড তৈরি করুন।",
      "{MB}-তে ভালো করে মাখিয়ে ২০ মিনিট রাখুন।",
      "কড়াইতে তেল গরম করে প্রতি পাশ ৪-৫ মিনিট মচমচে সোনালি করে ভাজুন।",
      "কাগজে তেল ঝরিয়ে পেঁয়াজের রিং ও লেবুর টুকরার সাথে গরম পরিবেশন করুন।"
    ]
  },
  "fish-dim-bhuna": {
    en: [
      "Gently wash the {M} without breaking the sacs; drain.",
      "Heat mustard oil, temper with nigella seeds and sliced onions.",
      "Fry onions till golden, add ginger-garlic paste and cook 2 minutes.",
      "Add turmeric, chili powder and salt with a splash of water.",
      "Add the {M} carefully, breaking into large chunks with the spoon.",
      "Bhuna on medium heat 8-10 minutes, stirring gently, until oil separates.",
      "Add green chilies and coriander; serve with hot rice."
    ],
    bn: [
      "{MB} থলি না ভেঙে আলতো করে ধুয়ে পানি ঝরান।",
      "সরষের তেল গরম করে কালোজিরা ও কাটা পেঁয়াজ ফোড়ন দিন।",
      "পেঁয়াজ সোনালি করে ভেজে আদা-রসুন বাটা দিয়ে ২ মিনিট কষান।",
      "হলুদ, মরিচ গুঁড়া ও লবণ সামান্য পানি দিয়ে দিন।",
      "{MB} সাবধানে দিয়ে চামচে বড় টুকরা করে ভেঙে নিন।",
      "মাঝারি আঁচে আলতো নেড়ে ৮-১০ মিনিট ভুনুন যতক্ষণ না তেল ছাড়ে।",
      "কাঁচা মরিচ ও ধনে পাতা দিয়ে গরম ভাতের সাথে পরিবেশন করুন।"
    ]
  },
  "shutki-bhuna": {
    en: [
      "Roast the {M} lightly on a tawa, then soak in warm water 10 minutes and clean.",
      "Heat mustard oil; fry sliced onions till golden.",
      "Add garlic paste and plenty of chopped garlic; saute 2 minutes.",
      "Add turmeric, chili powder and salt; cook 2 minutes.",
      "Add the cleaned {M} and bhuna 8-10 minutes, mashing slightly.",
      "Add chopped tomatoes and green chilies; cook till tomatoes soften.",
      "Serve the pungent {M} bhuna with hot rice."
    ],
    bn: [
      "{MB} তাওয়ায় হালকা সেঁকে ১০ মিনিট হালকা গরম পানিতে ভিজিয়ে পরিষ্কার করুন।",
      "সরষের তেল গরম করে কাটা পেঁয়াজ সোনালি করে ভাজুন।",
      "রসুন বাটা ও প্রচুর কুচি রসুন দিয়ে ২ মিনিট ভাজুন।",
      "হলুদ, মরিচ গুঁড়া ও লবণ দিয়ে ২ মিনিট কষান।",
      "পরিষ্কার {MB} দিয়ে ৮-১০ মিনিট ভুনুন, হালকা ভেঙে দিন।",
      "কাটা টমেটো ও কাঁচা মরিচ দিয়ে টমেটো নরম হওয়া পর্যন্ত রান্না করুন।",
      "ঝাঁঝালো {MB} ভুনা গরম ভাতের সাথে পরিবেশন করুন।"
    ]
  },
  "muitha": {
    en: [
      "Scrape the flesh from the {M}, removing bones carefully; mash with salt and turmeric.",
      "Mix in a little rice flour and grated coconut; knead into a firm dough.",
      "Shape into oval dumplings (muitha) with oiled hands.",
      "Boil the dumplings in salted water 5 minutes until they float; drain.",
      "Make a rich gravy: fry onion paste, ginger-garlic paste and spices till oil separates.",
      "Add 2 cups warm water, simmer 5 minutes, then add the muitha gently.",
      "Cover and cook 10 minutes on low; finish with garam masala and ghee."
    ],
    bn: [
      "{MB}-র কাঁটা সাবধানে বেছে মাংস ছাড়িয়ে লবণ ও হলুদ দিয়ে চটকে নিন।",
      "সামান্য চালের গুঁড়া ও কোরানো নারকেল মিশিয়ে শক্ত খামির তৈরি করুন।",
      "তেল মাখা হাতে ডিম্বাকার মুইঠা গড়ে নিন।",
      "লবণ পানিতে মুইঠা ৫ মিনিট সেদ্ধ করুন যতক্ষণ না ভেসে ওঠে; পানি ঝরান।",
      "ঘন ঝোল তৈরি করুন: পেঁয়াজ বাটা, আদা-রসুন বাটা ও মসলা তেল ছাড়া পর্যন্ত ভুনুন।",
      "২ কাপ হালকা গরম পানি দিয়ে ৫ মিনিট ফুটিয়ে মুইঠা আলতো করে ছাড়ুন।",
      "ঢেকে অল্প আঁচে ১০ মিনিট রান্না করে গরম মসলা ও ঘি দিয়ে নামান।"
    ]
  },

  // ================= BHORTA =================
  "bhorta-mash": {
    en: [
      "Boil or roast the {M} until completely soft; peel if needed and cool slightly.",
      "Mash the {M} smoothly with your hand or a masher.",
      "Mix in finely chopped onions, chopped green chilies and salt.",
      "Pour 2 tbsp hot mustard oil over and mix thoroughly.",
      "Add chopped coriander leaves, mix once more and serve with hot rice."
    ],
    bn: [
      "{MB} সম্পূর্ণ নরম হওয়া পর্যন্ত সেদ্ধ বা পুড়িয়ে নিন; দরকার হলে খোসা ছাড়িয়ে হালকা ঠান্ডা করুন।",
      "{MB} হাত বা ম্যাশার দিয়ে মসৃণ করে চটকে নিন।",
      "মিহি কাটা পেঁয়াজ, কাটা কাঁচা মরিচ ও লবণ মেশান।",
      "২ টেবিল চামচ গরম সরষের তেল ঢেলে ভালো করে মাখিয়ে নিন।",
      "ধনে পাতা কুচি দিয়ে আরেকবার মিশিয়ে গরম ভাতের সাথে পরিবেশন করুন।"
    ]
  },
  "bhorta-fry": {
    en: [
      "Chop the {M} into small pieces.",
      "Heat mustard oil; fry the {M} with sliced onions till soft and lightly browned.",
      "Add chopped garlic and green chilies; fry 2 more minutes.",
      "Cool slightly, then mash coarsely with salt.",
      "Mix in a teaspoon of mustard oil and serve with rice."
    ],
    bn: [
      "{MB} ছোট টুকরা করে কেটে নিন।",
      "সরষের তেল গরম করে কাটা পেঁয়াজসহ {MB} নরম ও হালকা বাদামি হওয়া পর্যন্ত ভাজুন।",
      "কুচি রসুন ও কাঁচা মরিচ দিয়ে আরও ২ মিনিট ভাজুন।",
      "হালকা ঠান্ডা করে লবণ দিয়ে আধভাঙা করে চটকে নিন।",
      "এক চা চামচ সরষের তেল মিশিয়ে ভাতের সাথে পরিবেশন করুন।"
    ]
  },
  "bhorta-shutki": {
    en: [
      "Roast the {M} on a tawa till crisp and aromatic.",
      "Soak in warm water 10 minutes, clean and drain.",
      "Fry the {M} in mustard oil till crisp; cool.",
      "Pound with roasted dried red chilies, chopped onions and salt.",
      "Mix in hot mustard oil and chopped coriander; serve with rice."
    ],
    bn: [
      "{MB} তাওয়ায় মচমচে ও সুগন্ধি হওয়া পর্যন্ত সেঁকে নিন।",
      "১০ মিনিট হালকা গরম পানিতে ভিজিয়ে পরিষ্কার করে পানি ঝরান।",
      "সরষের তেলে {MB} মচমচে করে ভেজে ঠান্ডা করুন।",
      "ভাজা শুকনো মরিচ, কাটা পেঁয়াজ ও লবণ দিয়ে বেটে নিন।",
      "গরম সরষের তেল ও ধনে পাতা মিশিয়ে ভাতের সাথে পরিবেশন করুন।"
    ]
  },
  "bhorta-fish": {
    en: [
      "Boil or fry the {M} until cooked; remove all bones carefully.",
      "Flake the flesh finely with your fingers.",
      "Mix with chopped onions, green chilies, salt and turmeric.",
      "Heat mustard oil till smoking and pour over the mixture.",
      "Mash everything together and serve with hot rice and dal."
    ],
    bn: [
      "{MB} সেদ্ধ বা ভেজে রান্না করে সব কাঁটা সাবধানে বেছে নিন।",
      "মাছ আঙুলে মিহি করে ছাড়িয়ে নিন।",
      "কাটা পেঁয়াজ, কাঁচা মরিচ, লবণ ও হলুদ দিয়ে মেশান।",
      "সরষের তেল ধোঁয়া ওঠা পর্যন্ত গরম করে মিশ্রণের ওপর ঢেলে দিন।",
      "সব একসাথে চটকে গরম ভাত ও ডালের সাথে পরিবেশন করুন।"
    ]
  },
  "bhorta-dal": {
    en: [
      "Boil the {M} with turmeric and salt until very soft and dry.",
      "Mash the dal smoothly.",
      "Mix in chopped onions, green chilies and salt to taste.",
      "Temper: heat mustard oil, fry dried red chilies and pour over the dal.",
      "Mix well and serve with hot rice."
    ],
    bn: [
      "{MB} হলুদ ও লবণ দিয়ে খুব নরম ও শুকনো হওয়া পর্যন্ত সেদ্ধ করুন।",
      "ডাল মসৃণ করে চটকে নিন।",
      "কাটা পেঁয়াজ, কাঁচা মরিচ ও স্বাদমতো লবণ মেশান।",
      "ফোড়ন: সরষের তেল গরম করে শুকনো মরিচ ভেজে ডালের ওপর ঢেলে দিন।",
      "ভালো করে মিশিয়ে গরম ভাতের সাথে পরিবেশন করুন।"
    ]
  },
  "bhorta-fruit": {
    en: [
      "Chop or grate the {M} as needed; sprinkle with salt and rest 10 minutes.",
      "Pound roasted dried red chilies coarsely.",
      "Mix the {M} with the chilies, a pinch of sugar and mustard oil.",
      "Add chopped coriander leaves and toss well.",
      "Serve immediately as a tangy side with rice."
    ],
    bn: [
      "{MB} দরকারমতো কেটে বা কুরে লবণ ছিটিয়ে ১০ মিনিট রাখুন।",
      "ভাজা শুকনো মরিচ আধভাঙা করে গুঁড়া করুন।",
      "{MB}-র সাথে মরিচ, এক চিমটি চিনি ও সরষের তেল মেশান।",
      "ধনে পাতা কুচি দিয়ে ভালো করে মাখিয়ে নিন।",
      "টক-ঝাল সাইড হিসেবে ভাতের সাথে সাথে পরিবেশন করুন।"
    ]
  },

  // ================= PITHA =================
  "pitha-chitoi": {
    en: [
      "Soak rice 4-5 hours, then grind with a little water into a thick smooth batter.",
      "Add salt and rest the batter 30 minutes.",
      "Heat a clay tawa or small pan on medium-high; grease lightly.",
      "Pour a ladle of batter, cover immediately with a lid.",
      "Cook 2-3 minutes until the top sets and edges lift.",
      "Serve the {M} hot with jaggery, or soak in milk-jaggery for dudh chitoi."
    ],
    bn: [
      "চাল ৪-৫ ঘণ্টা ভিজিয়ে সামান্য পানি দিয়ে ঘন মসৃণ বাটা তৈরি করুন।",
      "লবণ দিয়ে বাটা ৩০ মিনিট রেখে দিন।",
      "মাটির তাওয়া বা ছোট প্যান মাঝারি-বেশি আঁচে গরম করে হালকা তেল মাখান।",
      "এক হাতা বাটা ঢেলে সাথে সাথে ঢাকনা দিন।",
      "২-৩ মিনিট রান্না করুন যতক্ষণ না ওপর জমে ও কিনারা ওঠে।",
      "{MB} গরম গরম গুড় দিয়ে পরিবেশন করুন, বা দুধ-গুড়ে ভিজিয়ে দুধ চিতই বানান।"
    ]
  },
  "pitha-patisha": {
    en: [
      "Make a thin batter with rice flour, a little flour, milk, salt and a pinch of sugar.",
      "For filling: cook grated coconut with jaggery till sticky and dry.",
      "Heat a nonstick pan, pour a thin ladle of batter and swirl into a crepe.",
      "Cook 1 minute until set but not browned.",
      "Place coconut filling along one edge and roll tightly.",
      "Serve the {M} warm; they keep well for a day."
    ],
    bn: [
      "চালের গুঁড়া, সামান্য ময়দা, দুধ, লবণ ও এক চিমটি চিনি দিয়ে পাতলা বাটা তৈরি করুন।",
      "পুরের জন্য: কোরানো নারকেল গুড় দিয়ে আঠালো ও শুকনো হওয়া পর্যন্ত রান্না করুন।",
      "ননস্টিক প্যান গরম করে পাতলা এক হাতা বাটা ঢেলে ঘুরিয়ে ক্রেপের মতো ছড়ান।",
      "১ মিনিট রান্না করুন যতক্ষণ না জমে (বাদামি করবেন না)।",
      "এক কিনারায় নারকেলের পুর দিয়ে শক্ত করে রোল করুন।",
      "{MB} হালকা গরম পরিবেশন করুন; এক দিন ভালো থাকে।"
    ]
  },
  "pitha-bhapa": {
    en: [
      "Mix rice flour with salt and hot water into a crumbly dough; rest 15 minutes.",
      "Mix grated coconut with jaggery for the filling.",
      "Take a small bowl, layer dough, then filling, then more dough; press gently.",
      "Steam in a steamer or over boiling water 10-12 minutes.",
      "Unmould carefully and serve the {M} hot."
    ],
    bn: [
      "চালের গুঁড়া লবণ ও গরম পানি দিয়ে ঝুরঝুরে খামির তৈরি করে ১৫ মিনিট রাখুন।",
      "কোরানো নারকেল গুড় দিয়ে মিশিয়ে পুর তৈরি করুন।",
      "ছোট বাটিতে খামির, তারপর পুর, তারপর আবার খামির দিয়ে আলতো চাপুন।",
      "স্টিমারে বা ফুটন্ত পানির ওপর ১০-১২ মিনিট ভাপান।",
      "সাবধানে বাটি উল্টে {MB} গরম পরিবেশন করুন।"
    ]
  },
  "pitha-puli": {
    en: [
      "Knead rice flour with hot water and salt into a smooth soft dough.",
      "Cook grated coconut with jaggery into a dry sticky filling; cool.",
      "Pinch small balls, flatten into cups, fill with coconut and seal into half-moons.",
      "Steam the puli 10 minutes or boil gently in water till they float.",
      "Serve the {M} warm with extra jaggery on the side."
    ],
    bn: [
      "চালের গুঁড়া গরম পানি ও লবণ দিয়ে মসৃণ নরম খামির তৈরি করুন।",
      "কোরানো নারকেল গুড় দিয়ে শুকনো আঠালো পুর রান্না করে ঠান্ডা করুন।",
      "ছোট লেচি কেটে বাটি বানিয়ে নারকেলের পুর ভরে অর্ধচন্দ্রাকার মুড়ে সিল করুন।",
      "পুলি ১০ মিনিট ভাপান বা পানিতে আলতো সেদ্ধ করুন যতক্ষণ না ভেসে ওঠে।",
      "{MB} হালকা গরম পরিবেশন করুন, পাশে বাড়তি গুড় দিন।"
    ]
  },
  "pitha-dudhpuli": {
    en: [
      "Prepare coconut-jaggery puli as usual and steam them.",
      "Boil milk with cardamom; sweeten with jaggery off the heat.",
      "Slide the hot puli into the warm sweetened milk.",
      "Rest 1 hour so the puli soaks up the milk.",
      "Serve the {M} at room temperature or chilled."
    ],
    bn: [
      "নারকেল-গুড়ের পুলি যথারীতি বানিয়ে ভাপিয়ে নিন।",
      "এলাচ দিয়ে দুধ ফুটিয়ে আঁচ থেকে নামিয়ে গুড় দিয়ে মিষ্টি করুন।",
      "গরম পুলি হালকা গরম মিষ্টি দুধে ছেড়ে দিন।",
      "১ ঘণ্টা রেখে দিন যাতে পুলি দুধ শুষে নেয়।",
      "{MB} স্বাভাবিক তাপমাত্রায় বা ঠান্ডা পরিবেশন করুন।"
    ]
  },
  "pitha-fry": {
    en: [
      "Make a thick batter or dough as the {M} requires; rest 15-20 minutes.",
      "Heat oil on medium; it should not be smoking hot.",
      "Drop spoonfuls or shaped pieces into the oil in batches.",
      "Fry turning occasionally till deep golden and crisp, 4-6 minutes.",
      "Drain on paper; serve the {M} warm, with syrup if the recipe uses it."
    ],
    bn: [
      "{MB}-র জন্য প্রয়োজনমতো ঘন বাটা বা খামির তৈরি করে ১৫-২০ মিনিট রাখুন।",
      "মাঝারি আঁচে তেল গরম করুন; ধোঁয়া ওঠা গরম নয়।",
      "ব্যাচে ব্যাচে চামচে বা আকৃতি দিয়ে তেলে ছাড়ুন।",
      "মাঝে মাঝে উল্টে ৪-৬ মিনিট গাঢ় সোনালি ও মচমচে করে ভাজুন।",
      "কাগজে তেল ঝরিয়ে {MB} হালকা গরম পরিবেশন করুন; সিরা থাকলে সিরাসহ দিন।"
    ]
  },
  "pitha-nakshi": {
    en: [
      "Knead rice flour with hot water into a pliable dough; rest 20 minutes.",
      "Roll small discs and carve traditional nakshi designs with a toothpick or date thorn.",
      "Fry the discs in medium-hot oil till crisp and golden.",
      "Dip hot pitha in thin sugar or jaggery syrup for 1 minute.",
      "Drain and cool; the {M} turns crisp as it cools."
    ],
    bn: [
      "চালের গুঁড়া গরম পানি দিয়ে নমনীয় খামির তৈরি করে ২০ মিনিট রাখুন।",
      "ছোট ডিস্ক বেলে টুথপিক বা খেজুর কাঁটা দিয়ে ঐতিহ্যবাহী নকশি নকশা কাটুন।",
      "মাঝারি গরম তেলে ডিস্ক মচমচে সোনালি করে ভাজুন।",
      "গরম পিঠা পাতলা চিনি বা গুড়ের সিরায় ১ মিনিট ডুবিয়ে তুলুন।",
      "পানি ঝরিয়ে ঠান্ডা করুন; ঠান্ডা হলে {MB} মচমচে হবে।"
    ]
  },
  "pitha-bibikhana": {
    en: [
      "Mix rice flour, grated coconut, jaggery, milk and a pinch of salt into a thick batter.",
      "Rest the batter 30 minutes.",
      "Pour into a greased baking dish.",
      "Bake at 170°C for 35-40 minutes or steam 40 minutes till set and golden on top.",
      "Cool, cut into squares and serve the {M}."
    ],
    bn: [
      "চালের গুঁড়া, কোরানো নারকেল, গুড়, দুধ ও এক চিমটি লবণ দিয়ে ঘন বাটা তৈরি করুন।",
      "বাটা ৩০ মিনিট রেখে দিন।",
      "তেল মাখানো বেকিং ডিশে ঢালুন।",
      "১৭০°সে তাপে ৩৫-৪০ মিনিট বেক করুন বা ৪০ মিনিট ভাপান যতক্ষণ না জমে ও ওপর সোনালি হয়।",
      "ঠান্ডা করে চৌকো কেটে {MB} পরিবেশন করুন।"
    ]
  },
  "pitha-chandrapuli": {
    en: [
      "Cook grated coconut with jaggery and cardamom into a firm dry filling.",
      "Knead rice flour dough with hot water; rest 15 minutes.",
      "Roll thin small discs, fill with coconut and fold into crescents; seal edges with a fork.",
      "Deep fry in medium oil till golden, or steam for a softer version.",
      "Cool slightly and serve the {M}."
    ],
    bn: [
      "কোরানো নারকেল গুড় ও এলাচ দিয়ে শক্ত শুকনো পুর রান্না করুন।",
      "চালের গুঁড়া গরম পানি দিয়ে খামির তৈরি করে ১৫ মিনিট রাখুন।",
      "পাতলা ছোট ডিস্ক বেলে নারকেলের পুর দিয়ে অর্ধচন্দ্রাকার মুড়ে কাঁটা চামচে কিনারা সিল করুন।",
      "মাঝারি তেলে সোনালি করে ডুবো ভাজুন, বা নরম সংস্করণে ভাপান।",
      "হালকা ঠান্ডা করে {MB} পরিবেশন করুন।"
    ]
  },
  "pitha-malpu": {
    en: [
      "Whisk flour, suji, sugar, milk and fennel seeds into a thick pouring batter.",
      "Rest 30 minutes.",
      "Heat oil or ghee on medium; pour small ladles of batter.",
      "Fry 2-3 minutes per side till golden and crisp at edges.",
      "Soak briefly in light sugar syrup if you like; serve the {M} warm."
    ],
    bn: [
      "ময়দা, সুজি, চিনি, দুধ ও মৌরি দিয়ে ঘন ঢালা বাটা তৈরি করুন।",
      "৩০ মিনিট রেখে দিন।",
      "মাঝারি আঁচে তেল বা ঘি গরম করে ছোট হাতায় বাটা ঢালুন।",
      "প্রতি পাশ ২-৩ মিনিট সোনালি ও কিনারা মচমচে করে ভাজুন।",
      "চাইলে হালকা চিনির সিরায় অল্প ডুবিয়ে {MB} গরম পরিবেশন করুন।"
    ]
  },
  "pitha-shemai": {
    en: [
      "Crush vermicelli lightly and toss with a little ghee.",
      "Mix with rice flour dough or shape into small nests as the {M} needs.",
      "Steam 10 minutes until set.",
      "Soak in warm jaggery-milk for 30 minutes.",
      "Serve the {M} chilled or at room temperature."
    ],
    bn: [
      "সেমাই হালকা ভেঙে সামান্য ঘি মাখিয়ে নিন।",
      "{MB}-র প্রয়োজনমতো চালের গুঁড়ার খামিরের সাথে মেশান বা ছোট বাসা বানান।",
      "১০ মিনিট ভাপান যতক্ষণ না জমে।",
      "হালকা গরম গুড়-দুধে ৩০ মিনিট ভিজিয়ে রাখুন।",
      "{MB} ঠান্ডা বা স্বাভাবিক তাপমাত্রায় পরিবেশন করুন।"
    ]
  },

  // ================= BIRYANI / TEHARI / KHICHURI / POLAO =================
  "biryani-kacchi": {
    en: [
      "Marinate the {M} with yogurt, fried onions, ginger-garlic paste, biryani spices and salt for at least 2 hours.",
      "Soak basmati rice 30 minutes; parboil with whole spices till 70% done and drain.",
      "Layer marinated {M} at the bottom of a heavy pot; top with the rice.",
      "Add fried onions, ghee, saffron milk and kewra water over the rice.",
      "Seal the lid with dough and cook on high 10 minutes, then low 40 minutes (dum).",
      "Rest 15 minutes before opening; mix gently and serve the {M} kacchi with borhani."
    ],
    bn: [
      "টক দই, ভাজা পেঁয়াজ, আদা-রসুন বাটা, বিরিয়ানি মসলা ও লবণ দিয়ে {MB} কমপক্ষে ২ ঘণ্টা ম্যারিনেট করুন।",
      "বাসমতী চাল ৩০ মিনিট ভিজিয়ে আস্ত মসলা দিয়ে ৭০% সেদ্ধ করে পানি ঝরান।",
      "ভারী পাতিলের তলায় ম্যারিনেট করা {MB}, ওপরে ভাতের স্তর দিন।",
      "ভাতের ওপর ভাজা পেঁয়াজ, ঘি, জাফরান-দুধ ও কেওড়া জল ছড়ান।",
      "ঢাকনা আটা দিয়ে সিল করে বেশি আঁচে ১০ মিনিট, তারপর অল্প আঁচে ৪০ মিনিট দমে রাখুন।",
      "খোলার আগে ১৫ মিনিট রাখুন; আলতো মিশিয়ে বোরহানির সাথে {MB} কাচ্চি পরিবেশন করুন।"
    ]
  },
  "biryani-tehari": {
    en: [
      "Cut the {M} into small cubes; marinate with yogurt, spices and salt 30 minutes.",
      "Fry sliced onions till golden; add the {M} and bhuna 10 minutes.",
      "Add soaked chinigura rice and fry 2-3 minutes with the masala.",
      "Add hot water (1.5 cups per cup of rice) and green chilies; bring to a boil.",
      "Cover and cook on low 20 minutes until rice is done and water absorbed.",
      "Rest 10 minutes; fluff and serve the {M} tehari with salad."
    ],
    bn: [
      "{MB} ছোট টুকরা করে টক দই, মসলা ও লবণ দিয়ে ৩০ মিনিট ম্যারিনেট করুন।",
      "কাটা পেঁয়াজ সোনালি করে ভেজে {MB} দিয়ে ১০ মিনিট ভুনুন।",
      "ভেজানো চিনিগুঁড়া চাল দিয়ে মসলার সাথে ২-৩ মিনিট ভাজুন।",
      "গরম পানি (প্রতি কাপ চালে দেড় কাপ) ও কাঁচা মরিচ দিয়ে ফুটতে দিন।",
      "ঢেকে অল্প আঁচে ২০ মিনিট রান্না করুন যতক্ষণ না ভাত সেদ্ধ ও পানি শুকায়।",
      "১০ মিনিট রেখে ঝুরঝুরে করে সালাদের সাথে {MB} তেহারি পরিবেশন করুন।"
    ]
  },
  "biryani-chicken": {
    en: [
      "Marinate the {M} pieces with yogurt, ginger-garlic paste, biryani masala and salt 1 hour.",
      "Fry the {M} in oil till golden; set aside with its masala.",
      "Parboil soaked basmati rice with whole spices; drain at 80% done.",
      "Layer the {M} and rice alternately in a pot with fried onions and ghee.",
      "Sprinkle saffron milk and kewra water; seal and dum on low 25 minutes.",
      "Rest 10 minutes and serve the {M} biryani hot with raita."
    ],
    bn: [
      "{MB} টুকরা টক দই, আদা-রসুন বাটা, বিরিয়ানি মসলা ও লবণ দিয়ে ১ ঘণ্টা ম্যারিনেট করুন।",
      "তেলে {MB} সোনালি করে ভেজে মসলাসহ তুলে রাখুন।",
      "ভেজানো বাসমতী চাল আস্ত মসলা দিয়ে ৮০% সেদ্ধ করে পানি ঝরান।",
      "পাতিলে {MB} ও ভাত স্তরে স্তরে সাজিয়ে ভাজা পেঁয়াজ ও ঘি দিন।",
      "জাফরান-দুধ ও কেওড়া জল ছিটিয়ে সিল করে অল্প আঁচে ২৫ মিনিট দম দিন।",
      "১০ মিনিট রেখে রায়তার সাথে {MB} বিরিয়ানি গরম পরিবেশন করুন।"
    ]
  },
  "khichuri-bhuna": {
    en: [
      "Wash rice and dal together; soak 20 minutes and drain.",
      "Fry onions till golden; add ginger-garlic paste, turmeric, chili, cumin and garam masala.",
      "Add the {M} (if meat/vegetables) and bhuna 8-10 minutes.",
      "Add the rice-dal mix and fry 3 minutes till fragrant.",
      "Add hot water (2.5 cups per cup of mix); boil, then cover on low 25 minutes.",
      "Stir in ghee and fried onions; serve the {M} bhuna khichuri hot."
    ],
    bn: [
      "চাল ও ডাল একসাথে ধুয়ে ২০ মিনিট ভিজিয়ে পানি ঝরান।",
      "পেঁয়াজ সোনালি করে ভেজে আদা-রসুন বাটা, হলুদ, মরিচ, জিরা ও গরম মসলা দিন।",
      "{MB} (মাংস/সবজি হলে) দিয়ে ৮-১০ মিনিট ভুনুন।",
      "চাল-ডালের মিশ্রণ দিয়ে ৩ মিনিট সুগন্ধি হওয়া পর্যন্ত ভাজুন।",
      "গরম পানি (প্রতি কাপ মিশ্রণে আড়াই কাপ) দিয়ে ফুটিয়ে ঢেকে অল্প আঁচে ২৫ মিনিট রান্না করুন।",
      "ঘি ও ভাজা পেঁয়াজ মিশিয়ে {MB} ভুনা খিচুড়ি গরম পরিবেশন করুন।"
    ]
  },
  "khichuri-patla": {
    en: [
      "Wash rice and masoor dal; soak 15 minutes.",
      "Boil with turmeric, salt and 5 cups water until soft and porridge-like, 30 minutes.",
      "Mash lightly for a soupy texture.",
      "Temper mustard oil with dried red chilies, panchforon and sliced garlic; pour over.",
      "Mix well and serve the patla khichuri hot with fried egg or begun bhaja."
    ],
    bn: [
      "চাল ও মসুর ডাল ধুয়ে ১৫ মিনিট ভিজিয়ে রাখুন।",
      "হলুদ, লবণ ও ৫ কাপ পানি দিয়ে নরম ও ঘন হওয়া পর্যন্ত ৩০ মিনিট সেদ্ধ করুন।",
      "ঝোলঝোলে করতে হালকা ঘুঁটে নিন।",
      "সরষের তেলে শুকনো মরিচ, পাঁচফোড়ন ও কাটা রসুন ফোড়ন দিয়ে ওপরে ঢালুন।",
      "ভালো করে মিশিয়ে ভাজা ডিম বা বেগুন ভাজার সাথে পাতলা খিচুড়ি গরম পরিবেশন করুন।"
    ]
  },
  "polao-plain": {
    en: [
      "Wash chinigura rice and soak 20 minutes; drain.",
      "Heat ghee; fry whole garam masala, bay leaves and sliced onions till golden.",
      "Add the rice and fry 3-4 minutes till translucent.",
      "Add hot water (1.5 cups per cup rice) and salt; bring to a boil.",
      "Cover tightly and cook on lowest heat 15 minutes.",
      "Rest 10 minutes, fluff with a fork and serve the polao hot."
    ],
    bn: [
      "চিনিগুঁড়া চাল ধুয়ে ২০ মিনিট ভিজিয়ে পানি ঝরান।",
      "ঘি গরম করে আস্ত গরম মসলা, তেজপাতা ও কাটা পেঁয়াজ সোনালি করে ভাজুন।",
      "চাল দিয়ে ৩-৪ মিনিট স্বচ্ছ হওয়া পর্যন্ত ভাজুন।",
      "গরম পানি (প্রতি কাপ চালে দেড় কাপ) ও লবণ দিয়ে ফুটতে দিন।",
      "শক্ত করে ঢেকে সবচেয়ে অল্প আঁচে ১৫ মিনিট রান্না করুন।",
      "১০ মিনিট রেখে কাঁটা চামচে ঝুরঝুরে করে পোলাও গরম পরিবেশন করুন।"
    ]
  },
  "polao-morog": {
    en: [
      "Marinate chicken with yogurt, ginger-garlic paste and salt 30 minutes.",
      "Fry the chicken in ghee till golden; set aside.",
      "In the same ghee, fry onions, whole garam masala and soaked chinigura rice.",
      "Add hot water, the chicken, green chilies and salt; boil 2 minutes.",
      "Cover and dum on low 20 minutes.",
      "Add kewra water and extra ghee; rest 10 minutes and serve the {M} morog polao."
    ],
    bn: [
      "মুরগি টক দই, আদা-রসুন বাটা ও লবণ দিয়ে ৩০ মিনিট ম্যারিনেট করুন।",
      "ঘিয়ে মুরগি সোনালি করে ভেজে তুলে রাখুন।",
      "একই ঘিয়ে পেঁয়াজ, আস্ত গরম মসলা ও ভেজানো চিনিগুঁড়া চাল ভাজুন।",
      "গরম পানি, মুরগি, কাঁচা মরিচ ও লবণ দিয়ে ২ মিনিট ফোটান।",
      "ঢেকে অল্প আঁচে ২০ মিনিট দম দিন।",
      "কেওড়া জল ও বাড়তি ঘি দিয়ে ১০ মিনিট রেখে {MB} মোরগ পোলাও পরিবেশন করুন।"
    ]
  },

  // ================= MEAT =================
  "meat-bhuna": {
    en: [
      "Wash the {M} and drain well.",
      "Heat oil; fry sliced onions till deep golden brown.",
      "Add ginger-garlic paste and cook 2 minutes.",
      "Add turmeric, chili, cumin, coriander powders and salt with splashes of water; bhuna till oil separates.",
      "Add the {M} and bhuna on high heat 10 minutes, stirring often.",
      "Add 1 cup hot water, cover and cook on low till the {M} is tender (30-45 minutes for beef/mutton).",
      "Uncover and bhuna 5 more minutes till the gravy clings to the meat.",
      "Finish with garam masala and green chilies; serve with rice or polao."
    ],
    bn: [
      "{MB} ধুয়ে ভালো করে পানি ঝরান।",
      "তেল গরম করে কাটা পেঁয়াজ গাঢ় বাদামি করে ভাজুন।",
      "আদা-রসুন বাটা দিয়ে ২ মিনিট কষান।",
      "হলুদ, মরিচ, জিরা, ধনে গুঁড়া ও লবণ সামান্য পানি ছিটিয়ে তেল ছাড়া পর্যন্ত ভুনুন।",
      "{MB} দিয়ে বেশি আঁচে ঘন ঘন নেড়ে ১০ মিনিট ভুনুন।",
      "১ কাপ গরম পানি দিয়ে ঢেকে অল্প আঁচে {MB} নরম হওয়া পর্যন্ত রান্না করুন (গরু/খাসিতে ৩০-৪৫ মিনিট)।",
      "ঢাকনা খুলে আরও ৫ মিনিট ভুনুন যাতে ঝোল মাংসে লেগে থাকে।",
      "গরম মসলা ও কাঁচা মরিচ দিয়ে নামিয়ে ভাত বা পোলাওয়ের সাথে পরিবেশন করুন।"
    ]
  },
  "meat-jhol": {
    en: [
      "Wash the {M} and marinate with turmeric and salt 15 minutes.",
      "Fry onions till golden; add ginger-garlic paste and whole garam masala.",
      "Add the spice powders with water; bhuna till oil separates.",
      "Add the {M} and sear 8 minutes on high heat.",
      "Add potato chunks and 3 cups hot water; bring to a boil.",
      "Cover and simmer till the {M} is tender and the gravy is flavourful.",
      "Add green chilies and coriander; serve the {M} jhol with steamed rice."
    ],
    bn: [
      "{MB} ধুয়ে হলুদ ও লবণ দিয়ে ১৫ মিনিট ম্যারিনেট করুন।",
      "পেঁয়াজ সোনালি করে ভেজে আদা-রসুন বাটা ও আস্ত গরম মসলা দিন।",
      "মসলা গুঁড়া পানি দিয়ে তেল ছাড়া পর্যন্ত ভুনুন।",
      "{MB} দিয়ে বেশি আঁচে ৮ মিনিট সেঁকে নিন।",
      "আলুর টুকরা ও ৩ কাপ গরম পানি দিয়ে ফুটতে দিন।",
      "ঢেকে {MB} নরম ও ঝোল সুস্বাদু হওয়া পর্যন্ত অল্প আঁচে রান্না করুন।",
      "কাঁচা মরিচ ও ধনে পাতা দিয়ে {MB} ঝোল গরম ভাতের সাথে পরিবেশন করুন।"
    ]
  },
  "meat-korma": {
    en: [
      "Marinate the {M} with yogurt, ginger-garlic paste and salt 1 hour.",
      "Heat ghee; fry whole garam masala and sliced onions till golden.",
      "Add the {M} with its marinade; bhuna 10 minutes on medium heat.",
      "Add 1 cup warm water; cover and cook till tender.",
      "Stir in extra whisked yogurt and cook 5 minutes on low.",
      "Finish with kewra water, garam masala and fried onions; serve with polao."
    ],
    bn: [
      "{MB} টক দই, আদা-রসুন বাটা ও লবণ দিয়ে ১ ঘণ্টা ম্যারিনেট করুন।",
      "ঘি গরম করে আস্ত গরম মসলা ও কাটা পেঁয়াজ সোনালি করে ভাজুন।",
      "ম্যারিনেডসহ {MB} দিয়ে মাঝারি আঁচে ১০ মিনিট ভুনুন।",
      "১ কাপ হালকা গরম পানি দিয়ে ঢেকে নরম হওয়া পর্যন্ত রান্না করুন।",
      "বাড়তি ফেটানো দই দিয়ে অল্প আঁচে ৫ মিনিট রান্না করুন।",
      "কেওড়া জল, গরম মসলা ও ভাজা পেঁয়াজ দিয়ে নামিয়ে পোলাওয়ের সাথে পরিবেশন করুন।"
    ]
  },
  "meat-roast": {
    en: [
      "Make deep cuts in the {M} pieces; rub with lemon juice and salt, rest 20 minutes.",
      "Make a paste of yogurt, ginger-garlic, chili powder, garam masala and oil.",
      "Coat the {M} thickly and marinate 2 hours (or overnight).",
      "Roast in a 200°C oven 35-45 minutes, turning and basting halfway.",
      "Alternatively, cook covered in a heavy pan on low with the marinade 40 minutes.",
      "Rest 10 minutes, slice and serve the {M} roast with polao or naan."
    ],
    bn: [
      "{MB} টুকরোতে গভীর কাট দিন; লেবুর রস ও লবণ মাখিয়ে ২০ মিনিট রাখুন।",
      "টক দই, আদা-রসুন, মরিচ গুঁড়া, গরম মসলা ও তেল দিয়ে পেস্ট তৈরি করুন।",
      "{MB}-তে ঘন করে মাখিয়ে ২ ঘণ্টা (বা সারারাত) ম্যারিনেট করুন।",
      "২০০°সে ওভেনে ৩৫-৪৫ মিনিট রোস্ট করুন, মাঝে উল্টে ম্যারিনেড মাখান।",
      "অথবা ভারী প্যানে ঢেকে অল্প আঁচে ম্যারিনেডসহ ৪০ মিনিট রান্না করুন।",
      "১০ মিনিট রেখে কেটে পোলাও বা নানের সাথে {MB} রোস্ট পরিবেশন করুন।"
    ]
  },
  "meat-rezala": {
    en: [
      "Marinate the {M} with yogurt, poppy seed paste and salt 1 hour.",
      "Heat ghee and oil; fry whole spices and sliced onions till soft.",
      "Add ginger-garlic paste; cook 2 minutes.",
      "Add the {M}; bhuna gently 10 minutes.",
      "Add warm water to cover; simmer till tender and the gravy turns creamy white.",
      "Finish with green chilies, kewra water and a spoon of ghee; serve with polao."
    ],
    bn: [
      "{MB} টক দই, পোস্ত বাটা ও লবণ দিয়ে ১ ঘণ্টা ম্যারিনেট করুন।",
      "ঘি ও তেল গরম করে আস্ত মসলা ও কাটা পেঁয়াজ নরম হওয়া পর্যন্ত ভাজুন।",
      "আদা-রসুন বাটা দিয়ে ২ মিনিট কষান।",
      "{MB} দিয়ে আলতো করে ১০ মিনিট ভুনুন।",
      "ডুবে থাকে এমন গরম পানি দিয়ে নরম ও ঝোল ঘন সাদাটে হওয়া পর্যন্ত রান্না করুন।",
      "কাঁচা মরিচ, কেওড়া জল ও এক চামচ ঘি দিয়ে নামিয়ে পোলাওয়ের সাথে পরিবেশন করুন।"
    ]
  },
  "meat-kalabhuna": {
    en: [
      "Wash the beef and mix with all ground spices, yogurt, mustard oil and salt.",
      "Marinate 2 hours.",
      "Cook the beef in its own juices on medium heat 20 minutes, stirring.",
      "Add fried onions and continue bhuna on low 30-40 minutes till dark and tender.",
      "The meat should turn deep brown-black with a thick clinging masala.",
      "Add green chilies and serve the kala bhuna with rice or porota."
    ],
    bn: [
      "গরুর মাংস ধুয়ে সব গুঁড়া মসলা, দই, সরষের তেল ও লবণ দিয়ে মাখান।",
      "২ ঘণ্টা ম্যারিনেট করুন।",
      "মাঝারি আঁচে নিজের রসে ২০ মিনিট নেড়ে রান্না করুন।",
      "ভাজা পেঁয়াজ দিয়ে অল্প আঁচে ৩০-৪০ মিনিট ভুনুন যতক্ষণ না কালচে ও নরম হয়।",
      "মাংস গাঢ় বাদামি-কালো হবে ও ঘন মসলা লেগে থাকবে।",
      "কাঁচা মরিচ দিয়ে কালো ভুনা ভাত বা পরোটার সাথে পরিবেশন করুন।"
    ]
  },
  "meat-nehari": {
    en: [
      "Wash the {M} (shank pieces); marinate with yogurt and spices 1 hour.",
      "Heat oil/ghee; fry onions till golden, add ginger-garlic paste.",
      "Add the {M} and bhuna 15 minutes.",
      "Add 6 cups hot water; bring to a boil, then simmer covered 2-3 hours till the meat falls off the bone.",
      "Mix wheat flour with water into a slurry; stir in to thicken the gravy.",
      "Simmer 15 more minutes; garnish with ginger juliennes, green chilies and lemon; serve with naan."
    ],
    bn: [
      "{MB} (নলির টুকরা) ধুয়ে দই ও মসলা দিয়ে ১ ঘণ্টা ম্যারিনেট করুন।",
      "তেল/ঘি গরম করে পেঁয়াজ সোনালি করে ভেজে আদা-রসুন বাটা দিন।",
      "{MB} দিয়ে ১৫ মিনিট ভুনুন।",
      "৬ কাপ গরম পানি দিয়ে ফুটিয়ে ঢেকে ২-৩ ঘণ্টা অল্প আঁচে রান্না করুন যতক্ষণ না মাংস হাড় থেকে খুলে আসে।",
      "আটা পানি দিয়ে গুলে ঝোল ঘন করতে মেশান।",
      "আরও ১৫ মিনিট ফুটিয়ে আদার কুচি, কাঁচা মরিচ ও লেবু দিয়ে সাজিয়ে নানের সাথে পরিবেশন করুন।"
    ]
  },
  "meat-offal": {
    en: [
      "Clean the {M} thoroughly; boil with turmeric and salt 15 minutes and drain.",
      "Cut into small pieces.",
      "Heat mustard oil; fry onions, ginger-garlic paste and whole spices.",
      "Add turmeric, chili, cumin powders; bhuna till oil separates.",
      "Add the {M} pieces and bhuna 15-20 minutes on medium heat.",
      "Sprinkle water as needed; cook till tender and the masala coats well.",
      "Add green chilies; serve hot with rice."
    ],
    bn: [
      "{MB} ভালো করে পরিষ্কার করে হলুদ ও লবণ দিয়ে ১৫ মিনিট সেদ্ধ করে পানি ঝরান।",
      "ছোট টুকরা করে কাটুন।",
      "সরষের তেল গরম করে পেঁয়াজ, আদা-রসুন বাটা ও আস্ত মসলা ভাজুন।",
      "হলুদ, মরিচ, জিরা গুঁড়া দিয়ে তেল ছাড়া পর্যন্ত ভুনুন।",
      "{MB} টুকরা দিয়ে মাঝারি আঁচে ১৫-২০ মিনিট ভুনুন।",
      "দরকারে পানি ছিটিয়ে নরম ও মসলা ভালো করে লাগা পর্যন্ত রান্না করুন।",
      "কাঁচা মরিচ দিয়ে গরম ভাতের সাথে পরিবেশন করুন।"
    ]
  },
  "meat-duck": {
    en: [
      "Cut the {M} into pieces; singe off any fine feathers and wash well.",
      "Rub with turmeric and salt; rest 15 minutes.",
      "Heat mustard oil; fry onions till golden, add ginger-garlic paste.",
      "Add all spice powders; bhuna till oil separates.",
      "Add the {M} and bhuna 15 minutes on medium-high heat.",
      "Add 2 cups hot water; cover and cook 40-50 minutes till tender.",
      "Finish with garam masala; serve the {M} curry with rice or chitoi pitha."
    ],
    bn: [
      "{MB} টুকরা করুন; সূক্ষ্ম পালক পুড়িয়ে ভালো করে ধুয়ে নিন।",
      "হলুদ ও লবণ মাখিয়ে ১৫ মিনিট রাখুন।",
      "সরষের তেল গরম করে পেঁয়াজ সোনালি করে ভেজে আদা-রসুন বাটা দিন।",
      "সব মসলা গুঁড়া দিয়ে তেল ছাড়া পর্যন্ত ভুনুন।",
      "{MB} দিয়ে মাঝারি-বেশি আঁচে ১৫ মিনিট ভুনুন।",
      "২ কাপ গরম পানি দিয়ে ঢেকে ৪০-৫০ মিনিট নরম হওয়া পর্যন্ত রান্না করুন।",
      "গরম মসলা দিয়ে নামিয়ে ভাত বা চিতই পিঠার সাথে {MB} তরকারি পরিবেশন করুন।"
    ]
  },
  "egg-bhuna": {
    en: [
      "Hard-boil the eggs 10 minutes; cool, peel and make light slits.",
      "Rub with turmeric and salt; fry in oil till golden and set aside.",
      "In the same oil, fry onions till golden; add ginger-garlic paste.",
      "Add turmeric, chili, cumin, coriander powders; bhuna till oil separates.",
      "Add chopped tomatoes; cook till soft.",
      "Add 1 cup warm water and the eggs; simmer 8 minutes.",
      "Garnish with green chilies and coriander; serve with rice."
    ],
    bn: [
      "ডিম ১০ মিনিট সেদ্ধ করে ঠান্ডা করে খোসা ছাড়িয়ে হালকা চির দিন।",
      "হলুদ ও লবণ মাখিয়ে তেলে সোনালি করে ভেজে তুলে রাখুন।",
      "একই তেলে পেঁয়াজ সোনালি করে ভেজে আদা-রসুন বাটা দিন।",
      "হলুদ, মরিচ, জিরা, ধনে গুঁড়া দিয়ে তেল ছাড়া পর্যন্ত ভুনুন।",
      "কাটা টমেটো দিয়ে নরম হওয়া পর্যন্ত রান্না করুন।",
      "১ কাপ হালকা গরম পানি ও ডিম দিয়ে ৮ মিনিট অল্প আঁচে রান্না করুন।",
      "কাঁচা মরিচ ও ধনে পাতা দিয়ে সাজিয়ে ভাতের সাথে পরিবেশন করুন।"
    ]
  },
  "egg-korma": {
    en: [
      "Hard-boil eggs; peel and fry lightly in ghee till golden.",
      "Heat ghee; add whole garam masala and sliced onions; fry till soft.",
      "Add ginger paste, then whisked yogurt; cook on low 4 minutes.",
      "Add a little water, salt and the eggs; simmer 6 minutes.",
      "Finish with kewra water and fried onions; serve with polao."
    ],
    bn: [
      "ডিম সেদ্ধ করে খোসা ছাড়িয়ে ঘিয়ে হালকা সোনালি করে ভেজে নিন।",
      "ঘি গরম করে আস্ত গরম মসলা ও কাটা পেঁয়াজ নরম হওয়া পর্যন্ত ভাজুন।",
      "আদা বাটা, তারপর ফেটানো দই দিয়ে অল্প আঁচে ৪ মিনিট রান্না করুন।",
      "সামান্য পানি, লবণ ও ডিম দিয়ে ৬ মিনিট অল্প আঁচে রান্না করুন।",
      "কেওড়া জল ও ভাজা পেঁয়াজ দিয়ে নামিয়ে পোলাওয়ের সাথে পরিবেশন করুন।"
    ]
  },
  "meat-dopyaza": {
    en: [
      "Wash the {M}; marinate with turmeric and salt 15 minutes.",
      "Fry half the onions crisp golden for beresta; set aside.",
      "In the same oil, saute remaining onions till soft; add ginger-garlic paste.",
      "Add spice powders; bhuna 3 minutes.",
      "Add the {M}; sear 8 minutes, then add 1.5 cups hot water.",
      "Cover and cook till tender and the gravy thickens.",
      "Top with beresta and green chilies; serve hot."
    ],
    bn: [
      "{MB} ধুয়ে হলুদ ও লবণ দিয়ে ১৫ মিনিট ম্যারিনেট করুন।",
      "অর্ধেক পেঁয়াজ মচমচে বেরেস্তা করে ভেজে তুলে রাখুন।",
      "একই তেলে বাকি পেঁয়াজ নরম হওয়া পর্যন্ত ভেজে আদা-রসুন বাটা দিন।",
      "মসলা গুঁড়া দিয়ে ৩ মিনিট ভুনুন।",
      "{MB} দিয়ে ৮ মিনিট সেঁকে দেড় কাপ গরম পানি দিন।",
      "ঢেকে নরম ও ঝোল ঘন হওয়া পর্যন্ত রান্না করুন।",
      "ওপরে বেরেস্তা ও কাঁচা মরিচ দিয়ে গরম পরিবেশন করুন।"
    ]
  },

  // ================= DAL =================
  "dal-basic": {
    en: [
      "Wash the {M} well and boil with turmeric, salt and 3 cups water till soft, 20 minutes.",
      "Whisk lightly to a creamy consistency.",
      "Heat oil or ghee; temper with dried red chilies, cumin seeds and sliced garlic.",
      "Pour the tempering over the dal and mix.",
      "Simmer 5 minutes; add green chilies and coriander.",
      "Serve the {M} hot with rice."
    ],
    bn: [
      "{MB} ভালো করে ধুয়ে হলুদ, লবণ ও ৩ কাপ পানি দিয়ে ২০ মিনিট নরম হওয়া পর্যন্ত সেদ্ধ করুন।",
      "হালকা ঘুঁটে ঘন করে নিন।",
      "তেল বা ঘি গরম করে শুকনো মরিচ, জিরা ও কাটা রসুন ফোড়ন দিন।",
      "ফোড়ন ডালের ওপর ঢেলে মেশান।",
      "৫ মিনিট ফুটিয়ে কাঁচা মরিচ ও ধনে পাতা দিন।",
      "{MB} গরম ভাতের সাথে পরিবেশন করুন।"
    ]
  },
  "dal-lau": {
    en: [
      "Boil masoor dal with turmeric and salt till half done.",
      "Add cubed bottle gourd and cook till both are soft, 15 minutes.",
      "Mash lightly.",
      "Temper mustard oil with panchforon, dried red chilies and sliced garlic.",
      "Pour over the dal, add green chilies and simmer 5 minutes.",
      "Serve the lau dal with hot rice."
    ],
    bn: [
      "মসুর ডাল হলুদ ও লবণ দিয়ে অর্ধসেদ্ধ করুন।",
      "লাউয়ের টুকরা দিয়ে দুটোই নরম হওয়া পর্যন্ত ১৫ মিনিট রান্না করুন।",
      "হালকা ঘুঁটে নিন।",
      "সরষের তেলে পাঁচফোড়ন, শুকনো মরিচ ও কাটা রসুন ফোড়ন দিন।",
      "ডালের ওপর ঢেলে কাঁচা মরিচ দিয়ে ৫ মিনিট ফোটান।",
      "লাউ ডাল গরম ভাতের সাথে পরিবেশন করুন।"
    ]
  },
  "dal-chhola": {
    en: [
      "Soak chholar dal 4 hours; boil with turmeric and salt till soft.",
      "Heat oil; fry grated coconut pieces till golden and set aside.",
      "In the same oil, temper bay leaves, cumin seeds and dried red chilies.",
      "Add the dal with its water, sugar and salt.",
      "Simmer 10 minutes; add the fried coconut and green chilies.",
      "Finish with ghee and serve the {M} with luchi or rice."
    ],
    bn: [
      "ছোলার ডাল ৪ ঘণ্টা ভিজিয়ে হলুদ ও লবণ দিয়ে নরম হওয়া পর্যন্ত সেদ্ধ করুন।",
      "তেল গরম করে নারকেলের টুকরা সোনালি করে ভেজে তুলে রাখুন।",
      "একই তেলে তেজপাতা, জিরা ও শুকনো মরিচ ফোড়ন দিন।",
      "পানিসহ ডাল, চিনি ও লবণ দিন।",
      "১০ মিনিট ফুটিয়ে ভাজা নারকেল ও কাঁচা মরিচ দিন।",
      "ঘি দিয়ে নামিয়ে লুচি বা ভাতের সাথে {MB} পরিবেশন করুন।"
    ]
  },
  "dal-tok": {
    en: [
      "Boil masoor dal with turmeric and salt till soft.",
      "Soak tamarind in warm water; extract the pulp.",
      "Add the tamarind pulp to the dal with a little sugar.",
      "Temper mustard oil with mustard seeds, dried red chilies and curry-style garlic.",
      "Pour over, simmer 5 minutes and serve the tok dal with rice."
    ],
    bn: [
      "মসুর ডাল হলুদ ও লবণ দিয়ে নরম হওয়া পর্যন্ত সেদ্ধ করুন।",
      "তেঁতুল হালকা গরম পানিতে ভিজিয়ে ক্বাথ বের করুন।",
      "ডালে তেঁতুলের ক্বাথ ও সামান্য চিনি দিন।",
      "সরষের তেলে সরষে, শুকনো মরিচ ও রসুন ফোড়ন দিন।",
      "ওপরে ঢেলে ৫ মিনিট ফুটিয়ে টক ডাল ভাতের সাথে পরিবেশন করুন।"
    ]
  },
  "dal-aam": {
    en: [
      "Boil masoor dal with turmeric and salt till soft.",
      "Add peeled green mango pieces and cook 10 minutes till the mango softens.",
      "Mash lightly.",
      "Temper mustard oil with mustard seeds and dried red chilies.",
      "Pour over the dal, simmer 5 minutes and serve the aam dal with rice."
    ],
    bn: [
      "মসুর ডাল হলুদ ও লবণ দিয়ে নরম হওয়া পর্যন্ত সেদ্ধ করুন।",
      "খোসা ছাড়ানো কাঁচা আমের টুকরা দিয়ে ১০ মিনিট রান্না করুন যতক্ষণ না আম নরম হয়।",
      "হালকা ঘুঁটে নিন।",
      "সরষের তেলে সরষে ও শুকনো মরিচ ফোড়ন দিন।",
      "ডালের ওপর ঢেলে ৫ মিনিট ফুটিয়ে আম ডাল ভাতের সাথে পরিবেশন করুন।"
    ]
  },
  // ================= VEGETABLE =================
  "veg-bhaji": {
    en: [
      "Cut the {M} into thin even pieces; wash and drain.",
      "Heat oil; temper with panchforon or nigella seeds and dried red chilies.",
      "Add sliced onions and fry 2 minutes.",
      "Add the {M}, turmeric and salt; toss well.",
      "Cover and cook on low 10-12 minutes, stirring twice, till tender.",
      "Uncover, add green chilies and fry 2 more minutes.",
      "Serve the {M} bhaji with rice and dal."
    ],
    bn: [
      "{MB} পাতলা সমান টুকরা করে ধুয়ে পানি ঝরান।",
      "তেল গরম করে পাঁচফোড়ন বা কালোজিরা ও শুকনো মরিচ ফোড়ন দিন।",
      "কাটা পেঁয়াজ দিয়ে ২ মিনিট ভাজুন।",
      "{MB}, হলুদ ও লবণ দিয়ে ভালো করে মেশান।",
      "ঢেকে অল্প আঁচে ১০-১২ মিনিট রান্না করুন, দুবার নেড়ে, যতক্ষণ না নরম হয়।",
      "ঢাকনা খুলে কাঁচা মরিচ দিয়ে আরও ২ মিনিট ভাজুন।",
      "{MB} ভাজি ভাত ও ডালের সাথে পরিবেশন করুন।"
    ]
  },
  "veg-ghonto": {
    en: [
      "Chop the {M} into small pieces.",
      "Heat mustard oil; temper with panchforon and bay leaf.",
      "Add the {M}, turmeric, salt and a little sugar; mix well.",
      "Add 1/2 cup water, cover and cook 15 minutes till soft and mashed.",
      "Mash coarsely with the spoon and cook 3 more minutes uncovered.",
      "Drizzle ghee and serve the {M} ghonto with hot rice."
    ],
    bn: [
      "{MB} ছোট টুকরা করে কাটুন।",
      "সরষের তেল গরম করে পাঁচফোড়ন ও তেজপাতা ফোড়ন দিন।",
      "{MB}, হলুদ, লবণ ও সামান্য চিনি দিয়ে ভালো করে মেশান।",
      "আধা কাপ পানি দিয়ে ঢেকে ১৫ মিনিট নরম ও ঘুঁটা হওয়া পর্যন্ত রান্না করুন।",
      "চামচে আধভাঙা করে ঢাকনা খুলে আরও ৩ মিনিট রান্না করুন।",
      "ঘি ছড়িয়ে {MB} ঘণ্ট গরম ভাতের সাথে পরিবেশন করুন।"
    ]
  },
  "veg-chingri": {
    en: [
      "Clean the prawns; rub with turmeric and salt.",
      "Cut the {M} into pieces.",
      "Heat mustard oil; lightly fry the prawns 2 minutes and set aside.",
      "In the same oil, temper nigella seeds; add onions and fry till soft.",
      "Add the {M}, turmeric, chili powder and salt; toss 3 minutes.",
      "Add 1 cup warm water; cover and cook till the {M} is tender.",
      "Return the prawns; simmer 5 minutes.",
      "Add green chilies and serve with rice."
    ],
    bn: [
      "চিংড়ি পরিষ্কার করে হলুদ ও লবণ মাখান।",
      "{MB} টুকরা করে কাটুন।",
      "সরষের তেল গরম করে চিংড়ি ২ মিনিট হালকা ভেজে তুলে রাখুন।",
      "একই তেলে কালোজিরা ফোড়ন দিয়ে পেঁয়াজ নরম হওয়া পর্যন্ত ভাজুন।",
      "{MB}, হলুদ, মরিচ গুঁড়া ও লবণ দিয়ে ৩ মিনিট নাড়ুন।",
      "১ কাপ হালকা গরম পানি দিয়ে ঢেকে {MB} নরম হওয়া পর্যন্ত রান্না করুন।",
      "চিংড়ি ফিরিয়ে ৫ মিনিট অল্প আঁচে রান্না করুন।",
      "কাঁচা মরিচ দিয়ে ভাতের সাথে পরিবেশন করুন।"
    ]
  },
  "veg-bhaja": {
    en: [
      "Cut the {M} into thick round slices.",
      "Rub with turmeric, chili powder and salt; rest 10 minutes.",
      "Heat mustard oil in a wide pan.",
      "Fry the slices 3-4 minutes per side till golden and crisp.",
      "Drain and serve the {M} bhaja hot with rice and dal."
    ],
    bn: [
      "{MB} মোটা গোল টুকরা করে কাটুন।",
      "হলুদ, মরিচ গুঁড়া ও লবণ মাখিয়ে ১০ মিনিট রাখুন।",
      "চওড়া কড়াইতে সরষের তেল গরম করুন।",
      "টুকরোগুলো প্রতি পাশ ৩-৪ মিনিট সোনালি ও মচমচে করে ভাজুন।",
      "তেল ঝরিয়ে {MB} ভাজা গরম ভাত ও ডালের সাথে পরিবেশন করুন।"
    ]
  },
  "veg-dolma": {
    en: [
      "Choose medium {M}; scoop out the insides carefully, keeping shells intact.",
      "Make a filling: fry the scooped flesh with prawns or minced meat, onions and spices.",
      "Stuff the shells firmly with the filling.",
      "Heat oil; place the stuffed {M} and fry gently till golden.",
      "Make a light gravy with onion paste, spices and 1 cup water.",
      "Add the dolma, cover and simmer 12 minutes.",
      "Serve the {M} dolma with polao or rice."
    ],
    bn: [
      "মাঝারি {MB} বেছে খোসা অক্ষত রেখে ভেতর সাবধানে বের করুন।",
      "পুর তৈরি করুন: বের করা শাঁস চিংড়ি বা কিমা, পেঁয়াজ ও মসলা দিয়ে ভেজে নিন।",
      "খোসায় পুর শক্ত করে ভরুন।",
      "তেল গরম করে ভরা {MB} আলতো করে সোনালি হওয়া পর্যন্ত ভাজুন।",
      "পেঁয়াজ বাটা, মসলা ও ১ কাপ পানি দিয়ে হালকা ঝোল তৈরি করুন।",
      "দোলমা দিয়ে ঢেকে ১২ মিনিট অল্প আঁচে রান্না করুন।",
      "{MB} দোলমা পোলাও বা ভাতের সাথে পরিবেশন করুন।"
    ]
  },
  "veg-shak": {
    en: [
      "Wash the {M} leaves thoroughly in several changes of water.",
      "Chop roughly.",
      "Heat mustard oil; temper with dried red chilies and plenty of sliced garlic.",
      "Add the {M} and salt; toss on high heat 3-4 minutes till wilted.",
      "Cover 2 minutes, then uncover and dry out any water.",
      "Serve the {M} bhaji with hot rice."
    ],
    bn: [
      "{MB} পাতা কয়েকবার পানি বদলে ভালো করে ধুয়ে নিন।",
      "মোটা করে কুচি করুন।",
      "সরষের তেল গরম করে শুকনো মরিচ ও প্রচুর কাটা রসুন ফোড়ন দিন।",
      "{MB} ও লবণ দিয়ে বেশি আঁচে ৩-৪ মিনিট নাড়ুন যতক্ষণ না নেতিয়ে যায়।",
      "২ মিনিট ঢেকে রেখে ঢাকনা খুলে পানি শুকিয়ে নিন।",
      "{MB} ভাজি গরম ভাতের সাথে পরিবেশন করুন।"
    ]
  },
  "veg-dom": {
    en: [
      "Boil baby potatoes till just tender; peel.",
      "Heat mustard oil; fry the potatoes golden and set aside.",
      "In the same oil, add bay leaf, cumin seeds and onion paste; fry till golden.",
      "Add ginger paste, turmeric, chili, cumin powders and salt; bhuna 3 minutes.",
      "Add whisked yogurt and 1 cup warm water; simmer 5 minutes.",
      "Add the potatoes; cover and cook 10 minutes on low.",
      "Finish with garam masala and coriander; serve alur dom with luchi or rice."
    ],
    bn: [
      "ছোট আলু হালকা সেদ্ধ করে খোসা ছাড়ান।",
      "সরষের তেল গরম করে আলু সোনালি করে ভেজে তুলে রাখুন।",
      "একই তেলে তেজপাতা, জিরা ও পেঁয়াজ বাটা সোনালি করে ভাজুন।",
      "আদা বাটা, হলুদ, মরিচ, জিরা গুঁড়া ও লবণ দিয়ে ৩ মিনিট ভুনুন।",
      "ফেটানো দই ও ১ কাপ হালকা গরম পানি দিয়ে ৫ মিনিট ফোটান।",
      "আলু দিয়ে ঢেকে অল্প আঁচে ১০ মিনিট রান্না করুন।",
      "গরম মসলা ও ধনে পাতা দিয়ে নামিয়ে লুচি বা ভাতের সাথে আলুর দম পরিবেশন করুন।"
    ]
  },
  "veg-doi": {
    en: [
      "Cut the {M} into thick slices; rub with turmeric and salt.",
      "Fry the slices in mustard oil till golden; set aside.",
      "In the same oil, temper nigella seeds and add onion paste.",
      "Add turmeric, chili powder and salt; cook 2 minutes.",
      "Whisk yogurt smooth and stir in on low heat; do not boil hard.",
      "Add the fried {M} and simmer 5 minutes.",
      "Serve the doi {M} with rice."
    ],
    bn: [
      "{MB} মোটা টুকরা করে হলুদ ও লবণ মাখান।",
      "সরষের তেলে টুকরো সোনালি করে ভেজে তুলে রাখুন।",
      "একই তেলে কালোজিরা ফোড়ন দিয়ে পেঁয়াজ বাটা দিন।",
      "হলুদ, মরিচ গুঁড়া ও লবণ দিয়ে ২ মিনিট কষান।",
      "দই মসৃণ করে ফেটে অল্প আঁচে মেশান; জোরে ফোটাবেন না।",
      "ভাজা {MB} দিয়ে ৫ মিনিট অল্প আঁচে রান্না করুন।",
      "দই {MB} ভাতের সাথে পরিবেশন করুন।"
    ]
  },

  // ================= SWEETS =================
  "sweet-chhana-boil": {
    en: [
      "Knead fresh soft chhana with a pinch of flour till completely smooth, 8-10 minutes.",
      "Roll into crack-free small balls.",
      "Boil 4 cups water with 2 cups sugar and cardamom into a light syrup.",
      "Gently drop the balls into the rolling syrup; cover and boil 12-15 minutes.",
      "The {M} will double in size; cool in the syrup.",
      "Serve at room temperature or chilled."
    ],
    bn: [
      "টাটকা নরম ছানা এক চিমটি ময়দা দিয়ে ৮-১০ মিনিট সম্পূর্ণ মসৃণ হওয়া পর্যন্ত মথুন।",
      "ফাটলহীন ছোট বল গড়ে নিন।",
      "৪ কাপ পানি ও ২ কাপ চিনি এলাচ দিয়ে ফুটিয়ে হালকা সিরা তৈরি করুন।",
      "ফুটন্ত সিরায় বল আলতো করে ছেড়ে ঢেকে ১২-১৫ মিনিট ফোটান।",
      "{MB} দ্বিগুণ ফুলবে; সিরাতেই ঠান্ডা করুন।",
      "স্বাভাবিক তাপমাত্রায় বা ঠান্ডা পরিবেশন করুন।"
    ]
  },
  "sweet-kalojam": {
    en: [
      "Knead chhana, flour, suji and a pinch of baking soda into a soft dough.",
      "Shape into smooth oval {M}.",
      "Fry in medium-low oil, stirring gently, till deep brown all over, 10-12 minutes.",
      "Soak the hot {M} in warm cardamom syrup 1 hour.",
      "Serve at room temperature."
    ],
    bn: [
      "ছানা, ময়দা, সুজি ও এক চিমটি বেকিং সোডা দিয়ে নরম খামির তৈরি করুন।",
      "মসৃণ ডিম্বাকার {MB} গড়ুন।",
      "মাঝারি-অল্প তেলে আলতো নেড়ে ১০-১২ মিনিট সবদিক গাঢ় বাদামি করে ভাজুন।",
      "গরম {MB} হালকা গরম এলাচি সিরায় ১ ঘণ্টা ভিজিয়ে রাখুন।",
      "স্বাভাবিক তাপমাত্রায় পরিবেশন করুন।"
    ]
  },
  "sweet-sandesh": {
    en: [
      "Knead fresh chhana till smooth and grain-free.",
      "Cook the chhana with sugar or jaggery on low heat 8-10 minutes, stirring constantly.",
      "The mixture should leave the pan and form a soft ball.",
      "Cool slightly; add cardamom powder.",
      "Shape into {M} with moulds or by hand; garnish with pistachio if you like.",
      "Chill 1 hour before serving."
    ],
    bn: [
      "টাটকা ছানা মসৃণ ও দানাহীন হওয়া পর্যন্ত মথুন।",
      "অল্প আঁচে চিনি বা গুড় দিয়ে ৮-১০ মিনিট অনবরত নেড়ে রান্না করুন।",
      "মিশ্রণ প্যান ছেড়ে নরম বল হবে।",
      "হালকা ঠান্ডা করে এলাচ গুঁড়া মেশান।",
      "ছাঁচে বা হাতে {MB} আকৃতি দিন; চাইলে পেস্তা দিয়ে সাজান।",
      "পরিবেশনের আগে ১ ঘণ্টা ঠান্ডা করুন।"
    ]
  },
  "sweet-payesh": {
    en: [
      "Wash the rice and soak 15 minutes.",
      "Boil milk in a heavy pot; add the rice and bay leaf.",
      "Cook on low 35-40 minutes, stirring often, till the rice is soft and milk thickens.",
      "Sweeten with sugar or jaggery off the heat (for jaggery, cool the milk slightly first).",
      "Add cardamom and raisins; cool.",
      "Serve the payesh chilled or at room temperature."
    ],
    bn: [
      "চাল ধুয়ে ১৫ মিনিট ভিজিয়ে রাখুন।",
      "ভারী পাতিলে দুধ ফুটিয়ে চাল ও তেজপাতা দিন।",
      "অল্প আঁচে ৩৫-৪০ মিনিট ঘন ঘন নেড়ে রান্না করুন যতক্ষণ না চাল নরম ও দুধ ঘন হয়।",
      "আঁচ থেকে নামিয়ে চিনি বা গুড় দিয়ে মিষ্টি করুন (গুড় হলে দুধ সামান্য ঠান্ডা করে নিন)।",
      "এলাচ ও কিশমিশ দিন; ঠান্ডা করুন।",
      "পায়েস ঠান্ডা বা স্বাভাবিক তাপমাত্রায় পরিবেশন করুন।"
    ]
  },
  "sweet-firni": {
    en: [
      "Soak basmati rice 1 hour; grind coarsely with a little water.",
      "Boil milk; stir in the rice paste.",
      "Cook on low 20-25 minutes, stirring constantly, till thick and creamy.",
      "Sweeten with sugar; add cardamom and rose water.",
      "Pour into bowls; chill 2 hours.",
      "Garnish the {M} with pistachios before serving."
    ],
    bn: [
      "বাসমতী চাল ১ ঘণ্টা ভিজিয়ে সামান্য পানি দিয়ে আধভাঙা বেটে নিন।",
      "দুধ ফুটিয়ে চালের বাটা মেশান।",
      "অল্প আঁচে ২০-২৫ মিনিট অনবরত নেড়ে ঘন ও ক্রিমি হওয়া পর্যন্ত রান্না করুন।",
      "চিনি দিয়ে মিষ্টি করে এলাচ ও গোলাপ জল দিন।",
      "বাটিতে ঢেলে ২ ঘণ্টা ঠান্ডা করুন।",
      "পরিবেশনের আগে পেস্তা দিয়ে {MB} সাজান।"
    ]
  },
  "sweet-jilapi": {
    en: [
      "Make a batter with flour, a little yogurt and water; ferment 6-8 hours.",
      "Boil sugar with water, lemon and cardamom into a sticky syrup; keep warm.",
      "Heat oil on medium; pipe the batter in spirals using a cloth or bottle.",
      "Fry till crisp and golden, 2-3 minutes.",
      "Soak immediately in the warm syrup 1 minute.",
      "Drain and serve the {M} hot and crisp."
    ],
    bn: [
      "ময়দা, সামান্য দই ও পানি দিয়ে বাটা তৈরি করে ৬-৮ ঘণ্টা গাঁজতে দিন।",
      "চিনি, পানি, লেবু ও এলাচ ফুটিয়ে আঠালো সিরা তৈরি করে গরম রাখুন।",
      "মাঝারি আঁচে তেল গরম করে কাপড় বা বোতলে বাটা ভরে প্যাঁচানো আকারে ছাড়ুন।",
      "২-৩ মিনিট মচমচে সোনালি করে ভাজুন।",
      "সাথে সাথে গরম সিরায় ১ মিনিট ডুবিয়ে তুলুন।",
      "পানি ঝরিয়ে {MB} গরম ও মচমচে পরিবেশন করুন।"
    ]
  },
  "sweet-doi": {
    en: [
      "Boil milk and reduce to two-thirds; cool to lukewarm.",
      "Caramelize sugar till amber; stir into the milk.",
      "Whisk in 2 tbsp yogurt starter.",
      "Pour into earthen bowls; cover and keep undisturbed in a warm place 8-10 hours.",
      "Chill 2 hours; serve the {M} cold."
    ],
    bn: [
      "দুধ ফুটিয়ে তিনভাগের দুইভাগ করুন; কুসুম গরম করুন।",
      "চিনি ক্যারামেল করে বাদামি হলে দুধে মেশান।",
      "২ টেবিল চামচ দইয়ের বীজ ফেটে মেশান।",
      "মাটির বাটিতে ঢেলে ঢেকে ৮-১০ ঘণ্টা গরম জায়গায় না নেড়ে রাখুন।",
      "২ ঘণ্টা ঠান্ডা করে {MB} ঠান্ডা পরিবেশন করুন।"
    ]
  },
  "sweet-naru": {
    en: [
      "Mix grated coconut with jaggery in a pan.",
      "Cook on medium heat 10-12 minutes, stirring, till sticky and dry.",
      "Add cardamom powder and cool slightly.",
      "With greased hands, roll into small {M} balls.",
      "Cool completely; store airtight up to a week."
    ],
    bn: [
      "কড়াইতে কোরানো নারকেল গুড় দিয়ে মেশান।",
      "মাঝারি আঁচে ১০-১২ মিনিট নেড়ে আঠালো ও শুকনো হওয়া পর্যন্ত রান্না করুন।",
      "এলাচ গুঁড়া দিয়ে হালকা ঠান্ডা করুন।",
      "তেল মাখা হাতে ছোট {MB} বল গড়ুন।",
      "সম্পূর্ণ ঠান্ডা করে বায়ুরোধী বাক্সে এক সপ্তাহ রাখুন।"
    ]
  },
  "sweet-halua": {
    en: [
      "Heat ghee; roast suji on low till golden and fragrant, 8-10 minutes.",
      "Boil water with sugar and cardamom separately.",
      "Pour the hot syrup into the suji carefully, stirring fast.",
      "Cook 5 minutes till the halua leaves the pan.",
      "Add raisins and nuts; serve the {M} warm."
    ],
    bn: [
      "ঘি গরম করে অল্প আঁচে ৮-১০ মিনিট সুজি সোনালি ও সুগন্ধি হওয়া পর্যন্ত ভাজুন।",
      "আলাদা পাত্রে পানি চিনি ও এলাচ দিয়ে ফোটান।",
      "গরম সিরা সাবধানে সুজিতে ঢেলে দ্রুত নাড়ুন।",
      "৫ মিনিট রান্না করুন যতক্ষণ না হালুয়া প্যান ছাড়ে।",
      "কিশমিশ ও বাদাম দিয়ে {MB} গরম পরিবেশন করুন।"
    ]
  },
  "sweet-zarda": {
    en: [
      "Boil basmati rice with a little food colour till 90% done; drain.",
      "Heat ghee; fry nuts, raisins and candied fruits.",
      "Add the rice, sugar and cardamom; toss gently.",
      "Cover and cook on low 10 minutes.",
      "Add kewra water; rest 10 minutes and serve the {M}."
    ],
    bn: [
      "বাসমতী চাল সামান্য ফুড কালার দিয়ে ৯০% সেদ্ধ করে পানি ঝরান।",
      "ঘি গরম করে বাদাম, কিশমিশ ও মোরব্বা ভাজুন।",
      "ভাত, চিনি ও এলাচ দিয়ে আলতো মেশান।",
      "ঢেকে অল্প আঁচে ১০ মিনিট রান্না করুন।",
      "কেওড়া জল দিয়ে ১০ মিনিট রেখে {MB} পরিবেশন করুন।"
    ]
  },
  "sweet-rasmalai": {
    en: [
      "Make small flat chhana discs; boil in light sugar syrup 10 minutes.",
      "Squeeze gently and soak in plain water 10 minutes; squeeze again.",
      "Boil milk and reduce by half; sweeten with sugar and cardamom.",
      "Cool the milk to lukewarm; add the discs and rose water.",
      "Chill 3-4 hours; serve the {M} cold with pistachios."
    ],
    bn: [
      "ছানার ছোট চ্যাপ্টা ডিস্ক বানিয়ে হালকা চিনির সিরায় ১০ মিনিট ফোটান।",
      "আলতো চিপে সাদা পানিতে ১০ মিনিট ভিজিয়ে আবার চিপুন।",
      "দুধ ফুটিয়ে অর্ধেক করুন; চিনি ও এলাচ দিয়ে মিষ্টি করুন।",
      "দুধ কুসুম গরম করে ডিস্ক ও গোলাপ জল দিন।",
      "৩-৪ ঘণ্টা ঠান্ডা করে পেস্তা দিয়ে {MB} ঠান্ডা পরিবেশন করুন।"
    ]
  },
  "sweet-goja": {
    en: [
      "Knead flour with ghee, salt and water into a firm dough; rest 30 minutes.",
      "Roll and cut into {M} shapes; prick lightly.",
      "Fry in medium-hot oil till golden and crisp, 6-8 minutes.",
      "Make a thick sugar syrup; toss the hot {M} in it to coat.",
      "Cool on a tray; the coating will crystallize.",
      "Store the {M} airtight."
    ],
    bn: [
      "ময়দা ঘি, লবণ ও পানি দিয়ে শক্ত খামির তৈরি করে ৩০ মিনিট রাখুন।",
      "বেলে {MB} আকৃতিতে কেটে হালকা ছিদ্র করুন।",
      "মাঝারি গরম তেলে ৬-৮ মিনিট সোনালি ও মচমচে করে ভাজুন।",
      "ঘন চিনির সিরা তৈরি করে গরম {MB} তাতে মাখিয়ে নিন।",
      "ট্রেতে ঠান্ডা করুন; প্রলেপ জমে যাবে।",
      "{MB} বায়ুরোধী বাক্সে রাখুন।"
    ]
  },

  // ================= SNACKS =================
  "snack-singara": {
    en: [
      "Knead flour with oil, nigella seeds, salt and water into a stiff dough; rest 30 minutes.",
      "Boil and cube potatoes; toss with peas, turmeric, chili, cumin and salt.",
      "Roll the dough into ovals, cut in half, form cones and seal edges with water.",
      "Fill with the potato mixture and seal the tops firmly.",
      "Fry in medium-hot oil 8-10 minutes till golden and crisp.",
      "Serve the {M} hot with tamarind chutney."
    ],
    bn: [
      "ময়দা তেল, কালোজিরা, লবণ ও পানি দিয়ে শক্ত খামির তৈরি করে ৩০ মিনিট রাখুন।",
      "আলু সেদ্ধ করে টুকরা করে মটরশুঁটি, হলুদ, মরিচ, জিরা ও লবণ দিয়ে মেশান।",
      "খামির ডিম্বাকার বেলে অর্ধেক কেটে কোণ বানিয়ে পানি দিয়ে কিনারা সিল করুন।",
      "আলুর পুর ভরে ওপর শক্ত করে সিল করুন।",
      "মাঝারি গরম তেলে ৮-১০ মিনিট সোনালি ও মচমচে করে ভাজুন।",
      "{MB} তেঁতুলের চাটনির সাথে গরম পরিবেশন করুন।"
    ]
  },
  "snack-batter": {
    en: [
      "Make a thick batter with besan, rice flour, turmeric, chili powder, salt and water.",
      "Rest the batter 15 minutes.",
      "Prepare the {M} pieces (sliced eggplant, onion rings or potato slices).",
      "Heat oil on medium-high.",
      "Dip each piece in batter and fry 3-4 minutes till golden and crisp.",
      "Drain and serve the {M} hot with puffed rice or chutney."
    ],
    bn: [
      "বেসন, চালের গুঁড়া, হলুদ, মরিচ গুঁড়া, লবণ ও পানি দিয়ে ঘন বাটা তৈরি করুন।",
      "বাটা ১৫ মিনিট রেখে দিন।",
      "{MB} টুকরা তৈরি করুন (বেগুনের ফালি, পেঁয়াজের রিং বা আলুর ফালি)।",
      "মাঝারি-বেশি আঁচে তেল গরম করুন।",
      "প্রতিটি টুকরা বাটায় ডুবিয়ে ৩-৪ মিনিট সোনালি ও মচমচে করে ভাজুন।",
      "তেল ঝরিয়ে মুড়ি বা চাটনির সাথে {MB} গরম পরিবেশন করুন।"
    ]
  },
  "snack-cutlet": {
    en: [
      "Boil potatoes; mash with the {M} (minced fish/chicken), onions, chilies and spices.",
      "Shape into patties or ovals.",
      "Dip in beaten egg, then coat with breadcrumbs.",
      "Chill 15 minutes to set the coating.",
      "Shallow-fry 3-4 minutes per side till golden and crisp.",
      "Serve the {M} cutlets hot with kasundi or sauce."
    ],
    bn: [
      "আলু সেদ্ধ করে {MB} (মাছ/মুরগির কিমা), পেঁয়াজ, মরিচ ও মসলা দিয়ে চটকে নিন।",
      "টিকিয়া বা ডিম্বাকার আকৃতি দিন।",
      "ফেটানো ডিমে ডুবিয়ে ব্রেডক্রাম্বে গড়ান।",
      "প্রলেপ জমতে ১৫ মিনিট ঠান্ডা করুন।",
      "অল্প তেলে প্রতি পাশ ৩-৪ মিনিট সোনালি ও মচমচে করে ভাজুন।",
      "{MB} কাটলেট কাসুন্দি বা সসের সাথে গরম পরিবেশন করুন।"
    ]
  },
  "snack-jhalmuri": {
    en: [
      "Take fresh crisp puffed rice in a large bowl.",
      "Add chopped onions, green chilies, boiled potatoes, chickpeas and coriander.",
      "Add roasted peanuts, chanachur, mustard oil and a squeeze of lemon.",
      "Toss everything quickly and thoroughly.",
      "Serve the {M} immediately in paper cones."
    ],
    bn: [
      "বড় বাটিতে টাটকা মচমচে মুড়ি নিন।",
      "কাটা পেঁয়াজ, কাঁচা মরিচ, সেদ্ধ আলু, ছোলা ও ধনে পাতা দিন।",
      "ভাজা বাদাম, চানাচুর, সরষের তেল ও লেবুর রস দিন।",
      "সব দ্রুত ভালো করে মাখিয়ে নিন।",
      "{MB} সাথে সাথে কাগজের ঠোঙায় পরিবেশন করুন।"
    ]
  },
  "snack-chotpoti": {
    en: [
      "Soak chickpeas and dried peas overnight; boil with salt till soft.",
      "Boil potatoes separately; cube them.",
      "Mix everything with chopped onions, green chilies and tamarind water.",
      "Add roasted cumin powder, chili powder and salt to taste.",
      "Top the {M} with chopped boiled egg, coriander and fuchka shells; serve."
    ],
    bn: [
      "ছোলা ও মটর সারারাত ভিজিয়ে লবণ দিয়ে নরম হওয়া পর্যন্ত সেদ্ধ করুন।",
      "আলু আলাদা সেদ্ধ করে টুকরা করুন।",
      "কাটা পেঁয়াজ, কাঁচা মরিচ ও তেঁতুল পানি দিয়ে সব মেশান।",
      "ভাজা জিরা গুঁড়া, মরিচ গুঁড়া ও স্বাদমতো লবণ দিন।",
      "কাটা সেদ্ধ ডিম, ধনে পাতা ও ফুচকার খোলা দিয়ে {MB} সাজিয়ে পরিবেশন করুন।"
    ]
  },
  "snack-ghugni": {
    en: [
      "Soak dried peas overnight; boil with turmeric and salt till soft.",
      "Heat mustard oil; temper cumin seeds and bay leaf.",
      "Add onion paste, ginger paste and spice powders; bhuna 5 minutes.",
      "Add the boiled peas with 1 cup water; simmer 10 minutes.",
      "Mash a few peas to thicken.",
      "Serve the {M} hot topped with onions, chilies, coriander and lemon."
    ],
    bn: [
      "মটর সারারাত ভিজিয়ে হলুদ ও লবণ দিয়ে নরম হওয়া পর্যন্ত সেদ্ধ করুন।",
      "সরষের তেল গরম করে জিরা ও তেজপাতা ফোড়ন দিন।",
      "পেঁয়াজ বাটা, আদা বাটা ও মসলা গুঁড়া দিয়ে ৫ মিনিট ভুনুন।",
      "সেদ্ধ মটর ১ কাপ পানিসহ দিয়ে ১০ মিনিট অল্প আঁচে রান্না করুন।",
      "কয়েকটা মটর ঘুঁটে ঘন করুন।",
      "পেঁয়াজ, মরিচ, ধনে পাতা ও লেবু দিয়ে {MB} গরম পরিবেশন করুন।"
    ]
  },
  "snack-puri": {
    en: [
      "Knead flour with salt, oil and water into a soft dough; rest 20 minutes.",
      "Cook the dal filling: boil chholar dal, mash with fried onions, chilies and spices till dry.",
      "Roll small puris, place filling in the centre and seal.",
      "Roll gently into discs.",
      "Deep-fry in hot oil till puffed and golden, 1-2 minutes per side.",
      "Serve the {M} hot."
    ],
    bn: [
      "ময়দা লবণ, তেল ও পানি দিয়ে নরম খামির তৈরি করে ২০ মিনিট রাখুন।",
      "ডালের পুর রান্না করুন: ছোলার ডাল সেদ্ধ করে ভাজা পেঁয়াজ, মরিচ ও মসলা দিয়ে শুকনো হওয়া পর্যন্ত ভুনুন।",
      "ছোট পুরি বেলে মাঝে পুর দিয়ে সিল করুন।",
      "আলতো করে ডিস্কের মতো বেলে নিন।",
      "গরম তেলে প্রতি পাশ ১-২ মিনিট ফুলে সোনালি হওয়া পর্যন্ত ডুবো ভাজুন।",
      "{MB} গরম পরিবেশন করুন।"
    ]
  },
  "snack-porota": {
    en: [
      "Knead flour with salt, oil and warm water into a soft dough; rest 30 minutes.",
      "Divide into balls; roll, brush with oil and fold into layers.",
      "Roll out into {M}.",
      "Cook on a hot tawa, brushing oil on both sides, till golden spots appear.",
      "Serve hot with curry or bhaji."
    ],
    bn: [
      "ময়দা লবণ, তেল ও হালকা গরম পানি দিয়ে নরম খামির তৈরি করে ৩০ মিনিট রাখুন।",
      "বল ভাগ করে বেলে তেল মাখিয়ে ভাঁজে ভাঁজে স্তর তৈরি করুন।",
      "{MB} বেলে নিন।",
      "গরম তাওয়ায় দুই পাশে তেল মাখিয়ে সোনালি ছোপ না পড়া পর্যন্ত সেঁকুন।",
      "তরকারি বা ভাজির সাথে গরম পরিবেশন করুন।"
    ]
  },
  "snack-kabab": {
    en: [
      "Cut the {M} into cubes; make deep slashes.",
      "Marinate with yogurt, ginger-garlic paste, chili, garam masala and mustard oil 2 hours.",
      "Thread onto skewers with onion and capsicum pieces.",
      "Grill over charcoal or in a 220°C oven 15-20 minutes, turning and basting.",
      "Rest 5 minutes; serve the {M} kabab with onion rings and lemon."
    ],
    bn: [
      "{MB} টুকরা করে গভীর চির দিন।",
      "দই, আদা-রসুন বাটা, মরিচ, গরম মসলা ও সরষের তেল দিয়ে ২ ঘণ্টা ম্যারিনেট করুন।",
      "পেঁয়াজ ও ক্যাপসিকামের টুকরাসহ শিকে গাঁথুন।",
      "কাঠকয়লায় বা ২২০°সে ওভেনে ১৫-২০ মিনিট গ্রিল করুন, মাঝে উল্টে ম্যারিনেড মাখান।",
      "৫ মিনিট রেখে পেঁয়াজের রিং ও লেবুর সাথে {MB} কাবাব পরিবেশন করুন।"
    ]
  },
  // ================= PICKLES =================
  "pickle-oil": {
    en: [
      "Cut the {M} into pieces; toss with salt and turmeric, sun-dry 1 day.",
      "Dry-roast panchforon, fennel and mustard seeds; grind coarsely.",
      "Mix the {M} with the ground spices, chili powder and more salt.",
      "Pack into a sterilized glass jar; pour mustard oil to cover completely.",
      "Keep in sunlight 5-7 days, shaking daily.",
      "The {M} pickle is ready; it keeps for months."
    ],
    bn: [
      "{MB} টুকরা করে লবণ ও হলুদ মাখিয়ে ১ দিন রোদে শুকান।",
      "পাঁচফোড়ন, মৌরি ও সরষে শুকনো ভেজে আধভাঙা গুঁড়া করুন।",
      "{MB}-র সাথে গুঁড়া মসলা, মরিচ গুঁড়া ও বাড়তি লবণ মেশান।",
      "জীবাণুমুক্ত কাচের বয়ামে ভরে সরষের তেল দিয়ে সম্পূর্ণ ডুবিয়ে দিন।",
      "৫-৭ দিন রোদে রাখুন, প্রতিদিন ঝাঁকান।",
      "{MB} আচার তৈরি; মাসের পর মাস ভালো থাকে।"
    ]
  },
  "pickle-mustard": {
    en: [
      "Cut the {M} into pieces; rub with salt and rest 2 hours.",
      "Grind mustard seeds with green chilies into a coarse paste.",
      "Mix the {M} with the mustard paste, turmeric and mustard oil.",
      "Pack into a clean jar; add enough mustard oil to cover.",
      "Sun for 3-4 days; the {M} pickle is ready."
    ],
    bn: [
      "{MB} টুকরা করে লবণ মাখিয়ে ২ ঘণ্টা রাখুন।",
      "সরষে কাঁচা মরিচ দিয়ে আধভাঙা বেটে নিন।",
      "{MB}-র সাথে সরষে বাটা, হলুদ ও সরষের তেল মেশান।",
      "পরিষ্কার বয়ামে ভরে ডুবে থাকে এমন সরষের তেল দিন।",
      "৩-৪ দিন রোদে রাখুন; {MB} আচার তৈরি।"
    ]
  },
  "pickle-sweet": {
    en: [
      "Cut the {M} into pieces.",
      "Cook jaggery with a little water into a syrup.",
      "Add the {M}, salt, chili powder and roasted panchforon powder.",
      "Cook on low 15-20 minutes till the {M} softens and the syrup thickens.",
      "Cool and bottle; the sweet {M} pickle keeps for weeks."
    ],
    bn: [
      "{MB} টুকরা করে কাটুন।",
      "গুড় সামান্য পানি দিয়ে সিরা তৈরি করুন।",
      "{MB}, লবণ, মরিচ গুঁড়া ও ভাজা পাঁচফোড়ন গুঁড়া দিন।",
      "অল্প আঁচে ১৫-২০ মিনিট রান্না করুন যতক্ষণ না {MB} নরম ও সিরা ঘন হয়।",
      "ঠান্ডা করে বোতলে ভরুন; মিষ্টি {MB} আচার সপ্তাহের পর সপ্তাহ ভালো থাকে।"
    ]
  },

  "pitha-hand": {
    en: [
      "Knead rice flour with hot water and salt into a smooth pliable dough; rest 15 minutes.",
      "With wet hands, shape the dough into small balls or elongated {M} by hand.",
      "Steam 10-12 minutes until firm and translucent.",
      "Serve the {M} warm with jaggery, or soak in warm jaggery-milk for 30 minutes."
    ],
    bn: [
      "চালের গুঁড়া গরম পানি ও লবণ দিয়ে মসৃণ নমনীয় খামির তৈরি করে ১৫ মিনিট রাখুন।",
      "ভেজা হাতে খামির দিয়ে ছোট বল বা লম্বা {MB} হাতে গড়ে নিন।",
      "১০-১২ মিনিট ভাপান যতক্ষণ না শক্ত ও স্বচ্ছ হয়।",
      "{MB} গুড় দিয়ে গরম পরিবেশন করুন, বা হালকা গরম গুড়-দুধে ৩০ মিনিট ভিজিয়ে রাখুন।"
    ]
  },

  "veg-torkari": {
    en: [
      "Cut the {M} into bite-size pieces; wash and drain.",
      "Heat mustard oil; temper with panchforon and bay leaf.",
      "Add sliced onions and fry till soft; add ginger paste.",
      "Add turmeric, chili, cumin powders and salt with a splash of water; cook 2 minutes.",
      "Add the {M}; toss to coat with masala.",
      "Add 1.5 cups warm water; cover and simmer till the {M} is tender, 12-15 minutes.",
      "Add green chilies and a drizzle of mustard oil; serve with rice."
    ],
    bn: [
      "{MB} কামড়-সাইজের টুকরা করে ধুয়ে পানি ঝরান।",
      "সরষের তেল গরম করে পাঁচফোড়ন ও তেজপাতা ফোড়ন দিন।",
      "কাটা পেঁয়াজ নরম হওয়া পর্যন্ত ভেজে আদা বাটা দিন।",
      "হলুদ, মরিচ, জিরা গুঁড়া ও লবণ সামান্য পানি দিয়ে ২ মিনিট কষান।",
      "{MB} দিয়ে মসলার সাথে মাখিয়ে নিন।",
      "দেড় কাপ হালকা গরম পানি দিয়ে ঢেকে {MB} নরম হওয়া পর্যন্ত ১২-১৫ মিনিট রান্না করুন।",
      "কাঁচা মরিচ ও সামান্য সরষের তেল দিয়ে ভাতের সাথে পরিবেশন করুন।"
    ]
  },

  "snack-fuchka": {
    en: [
      "Knead suji, a little maida, salt and warm water into a stiff dough; rest 30 minutes covered.",
      "Roll tiny thin puris; keep covered with a damp cloth.",
      "Deep-fry in hot oil, pressing gently, till they puff and turn golden; drain.",
      "Boil dried peas with salt till soft; mash lightly.",
      "Mix with boiled potato cubes, chopped onions, green chilies and roasted spices.",
      "Make tetul pani: tamarind water with roasted cumin, chili powder, salt and coriander.",
      "Crack each shell, fill with the pea mixture and spoon in tetul pani.",
      "Serve the {M} immediately while crisp."
    ],
    bn: [
      "সুজি, সামান্য ময়দা, লবণ ও হালকা গরম পানি দিয়ে শক্ত খামির তৈরি করে ঢেকে ৩০ মিনিট রাখুন।",
      "ছোট পাতলা পুরি বেলে ভেজা কাপড়ে ঢেকে রাখুন।",
      "গরম তেলে আলতো চেপে ফুলে সোনালি হওয়া পর্যন্ত ডুবো ভেজে তুলুন।",
      "মটর লবণ দিয়ে নরম হওয়া পর্যন্ত সেদ্ধ করে হালকা ঘুঁটে নিন।",
      "সেদ্ধ আলুর টুকরা, কাটা পেঁয়াজ, কাঁচা মরিচ ও ভাজা মসলা দিয়ে মেশান।",
      "তেঁতুল পানি তৈরি করুন: তেঁতুল পানিতে ভাজা জিরা, মরিচ গুঁড়া, লবণ ও ধনে পাতা।",
      "প্রতিটি খোলা ভেঙে মটরের পুর ভরে তেঁতুল পানি ঢালুন।",
      "মচমচে থাকতে {MB} সাথে সাথে পরিবেশন করুন।"
    ]
  },
};
