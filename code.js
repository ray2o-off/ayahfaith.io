document.addEventListener('DOMContentLoaded', function () {
  const btnGenAyah = document.getElementById('genAyah');
  const ayahCont = document.getElementById('Ayah');

  const ayahs = [

    {
      ar: "وَعَسَىٰٓ أَن تَكۡرَهُوا۟ شَيۡـٔٗا وَهُوَ خَيۡرٞ لَّكُمۡ",
      en: "But perhaps you hate a thing and it is good for you",
      raqm: "Quran 2:216"
    }
    ,
    {
      ar: "وَمَن يَعۡمَلۡ سُوٓءٗا أَوۡ يَظۡلِمۡ نَفۡسَهُۥ ثُمَّ يَسۡتَغۡفِرِ ٱللَّهَ يَجِدِ ٱللَّهَ غَفُورٗا رَّحِيمٗا",
      en: "And whoever does wrong or wrongs himself but then seeks forgiveness of Allah will find Allah Forgiving and Merciful",
      raqm: "Quran 4:110"
    }, 
{ ar: "إِنَّ ٱللَّهَ لَا يُضِيعُ أَجۡرَ ٱلۡمُحۡسِنِينَ", 
  en: "Indeed, Allah does not allow the reward of those who do good to be lost", 
  raqm: "Quran 9:120" 
},
  { ar: "فَمَن يَعۡمَلۡ مِثۡقَالَ ذَرَّةٍ خَيۡرٗا يَرَهُۥ", 
    en: "So whoever does an atom’s weight of good will see it", 
    raqm: "Quran 99:7" 
  },
  { ar: "وَمَن يَعۡمَلۡ سُوٓءٗا أَوۡ يَظۡلِمۡ نَفۡسَهُۥ ثُمَّ يَسۡتَغۡفِرِ ٱللَّهَ يَجِدِ ٱللَّهَ غَفُورٗا رَّحِيمٗا",
    en: "And whoever does wrong or wrongs himself but then seeks forgiveness of Allah will find Allah Forgiving and Merciful", 
    raqm: "Quran 4:110" },

  { ar: "وَٱلَّذِينَ جَـٰهَدُوا۟ فِينَا لَنَهۡدِيَنَّهُمۡ سُبُلَنَا",
    en: "And those who strive for Us – We will surely guide them to Our ways",
    raqm: "Quran 29:69" },

  { ar: "إِنَّ رَبِّي قَرِيبٞ مُّجِيبٞ", 
    en: "Indeed, my Lord is near and responsive", 
    raqm: "Quran 11:61" },

  { ar: "وَهُوَ مَعَكُمۡ أَيۡنَ مَا كُنتُمۡ",
    en: "And He is with you wherever you are",
    raqm: "Quran 57:4" },

  { ar: "وَمَنۡ أَعۡرَضَ عَن ذِكۡرِي فَإِنَّ لَهُۥ مَعِيشَةٗ ضَنكٗا",
    en: "And whoever turns away from My remembrance – indeed, he will have a depressed life",
    raqm: "Quran 20:124" },

  { ar: "وَمَن يَغۡفِرُ ٱلذُّنُوبَ إِلَّا ٱللَّهُ",
    en: "And who can forgive sins except Allah?",
    raqm: "Quran 3:135" },

  { ar: "إِنَّ ٱللَّهَ مَعَ ٱلصَّـٰبِرِينَ",
    en: "Indeed, Allah is with the patient",
    raqm: "Quran 2:153" },

  { ar: "وَمَن يَتَوَكَّلۡ عَلَى ٱللَّهِ فَهُوَ حَسۡبُهُ",
    en: "And whoever relies upon Allah – then He is sufficient for him",
    raqm: "Quran 65:3" },

  { ar: "لَا تَقۡنَطُوا۟ مِن رَّحۡمَةِ ٱللَّهِ",
    en: "Do not despair of the mercy of Allah",
    raqm: "Quran 39:53" },

  { ar: "إِنَّ مَعَ ٱلۡعُسۡرِ يُسۡرٗا",
    en: "Indeed, with hardship comes ease",
    raqm: "Quran 94:6" },

  { ar: "فَاذۡكُرُونِيٓ أَذۡكُرۡكُمۡ",
    en: "So remember Me; I will remember you",
    raqm: "Quran 2:152" 
  }
  ];

  btnGenAyah.addEventListener('click', function () {
    const randomAyah = ayahs[Math.floor(Math.random() * ayahs.length)];
    ayahCont.innerHTML = `
      <div style="font-size: 24px; margin-bottom: 10px; font-family: QFF;">${randomAyah.ar}</div>
      <div style="font-size: 18px; color: gray; margin-top: -10px;">(${randomAyah.en})</div>
      <div style="font-size: 18px; color: black; margin-top: 10px;">(${randomAyah.raqm})</div>
    `;
  });
});

genAyah.addEventListener('click', function(){
  genAyah.style.top = "90px";
})
