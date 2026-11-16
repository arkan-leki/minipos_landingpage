const RELEASES = "https://github.com/arkan-leki/minipos_landingpage/releases/download";

export const CONTACT = {
  phone: "0770 694 7874",
  whatsapp: "https://wa.me/9647706947874",
  email: "arkan.leki@gmail.com",
};

export const PRODUCTS = [
  {
    id: "minipos",
    name: "MiniPOS",
    version: "4.0.1",
    icon: "./minipos-icon.png",
    audience: "بۆ مارکێت و دوکانی بچووک",
    summary:
      "فرۆشتن، کڕین، کۆگا و قەرز لە یەک ئەپدا. بەبێ ئینتەرنێت کار دەکات و زانیارییەکانت لەسەر مۆبایلەکەت دەمێنێتەوە.",
    features: [
      "فرۆشتن و کڕین بە بارکۆد",
      "کۆگا، قەرز و خەرجی",
      "پسوولە بە پرینتەری بلوتوس 58 و 80 ملم",
      "کوردی، عەرەبی و ئینگلیزی",
      "ڕووکاری ڕووناک و تاریک",
    ],
    screens: ["03-pos", "04-checkout", "05-products", "06-add-product", "08-printer", "01-onboarding"].map(
      (name) => `./screens/minipos/${name}.jpg`
    ),
    // Play listing is in closed testing (public URL returns 404). Set playLive
    // to true once it is published, and the Google Play button appears.
    play: "https://play.google.com/store/apps/details?id=com.arkan.minipos",
    playLive: false,
    download: `${RELEASES}/minipos-v4.0.1/minipos-4.0.1-arm64.apk`,
    downloadAll: `${RELEASES}/minipos-v4.0.1/minipos-4.0.1-universal.apk`,
    sizeMb: 50,
  },
  {
    id: "kapitan",
    name: "Kapitan POS",
    version: "1.0.6",
    icon: "./kapitan-icon.png",
    audience: "بۆ خواردنی خێرا و کافێ",
    summary:
      "مینیو، داواکاری لەشوێن و گەیاندن و قەرز، پسوولە و ڕاپۆرت. بەبێ ئینتەرنێت کار دەکات.",
    features: [
      "مینیو بە پۆل",
      "داواکاری لەشوێن، گەیاندن و قەرز",
      "پسوولە بە پرینتەری بلوتوس",
      "ڕاپۆرت، خەرجی و کڕیاران",
      "ناوی دوکانەکەت لەسەر پسوولە",
    ],
    screens: ["01-pos", "02-menu-drawer", "03-about"].map(
      (name) => `./screens/kapitan/${name}.jpg`
    ),
    playLive: false,
    download: `${RELEASES}/kapitan-v1.0.6/kapitan-pos-1.0.6.apk`,
    downloadAll: null,
    sizeMb: 63,
  },
];
