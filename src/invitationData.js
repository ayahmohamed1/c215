/**
 * =========================================================================
 * ملف بيانات وتفاصيل دعوة الخطوبة (بيانات العروسين زين ومريم)
 * INVITATION CONFIGURATION FILE
 * =========================================================================
 * يمكنك تغيير أي صورة بكل سهولة إما:
 * 1) استبدال ملف الصورة مباشرة في مجلد public (مثل: couple.jpg أو children.png أو gallery2.jpg أو gallery3.jpg)
 * 2) أو تعديل المسار هنا في هذا الملف مباشرة.
 * =========================================================================
 */

export const INVITATION_DATA = {
  // =========================================================================
  // 📸 قسم الصور (جميع الصور موجودة في مجلد public ويمكن استبدالها وتغييرها بسهولة)
  // =========================================================================
  images: {
    // 1. صورة العروسين الرئيسية (الصورة 1 في معرض الصور)
    couple: "/images/couple.jpg",

    // 2. صور معرض الصور الإضافية
    gallery1: "/images/couple.jpg",

    // 3. صورة الأطفال في أسفل الدعوة
    children: "/children.png",

    // 4. صورة الظرف الملكي (شاشة البداية)
    envelope: "/envelope.png",

    // 5. صورة الستارة المخملية (أعلى البطاقة)
    curtain: "/curtain.png",

    // 6. صورة باقة الورد (أعلى اليمين)
    bouquet: "/bouquet.png",

    // 7. صورة الحمامة الطائرة
    dove: "/dove.png",
  },

  // ترويسة الغلاف والظرف
  envelopeHeader: "We're getting engaged",

  // الاسمان بالخط الإنجليزي المائل (مثل الصورة المرجعية تماماً)
  scriptNames: "Nourhan & Yousef",

  // ترويسة الدعوة
  headerTitleEn: "THE engagement OF OUR CHILDREN",
  headerTitleAr: "حفل خطوبة مبارك",

  // بيانات العريس
  groom: {
    name: "Yousef",
    nameAr: "يوسف",
    subtitle: "GROOM"
  },

  // بيانات العروس
  bride: {
    name: "Nourhan",
    nameAr: "نورهان",
    subtitle: "BRIDE"
  },

  // عبارة الدعوة الترحيبية بالإنجليزية
  welcomeMessage: "We would love to have you with us as we celebrate the beginning of our forever.",

  // معرض الصور (صورة واحدة)
  gallery: {
    title: "PHOTO GALLERY",
    photos: [
      { id: 1, src: "/images/couple.jpg", fallback: "/images/couple.jpg", alt: "صورة العروسين الملكية" },
    ],
    photoMainPortrait: "/images/couple.jpg",
  },

  // تفاصيل الموعد والوقت (العد التنازلي)
  schedule: {
    headingEn: "THE ENGAGEMENT PARTY WILL TAKE PLACE AT:",
    timeDisplay: "7:00 PM",
    dateDayName: "FRIDAY",
    dateDayNameAr: "الجمعة",
    dateDayNumber: "29",
    dateMonthYear: "JANUARY 2027",
    dateMonthYearAr: "يناير ٢٠٢٧",
    // تاريخ ووقت الحفل لحساب العد التنازلي: 29 يناير 2027 الساعة 7:00 مساءً
    targetDateTime: "2027-01-29T19:00:00"
  },

  // تفاصيل المكان وخريطة Google Maps
  location: {
    title: "LOCATION",
    venueName: "Crestal Hall",
    venueNameAr: "Crestal Hall",
    address: "",
    addressAr: "Crestal Hall",
    // رابط خريطة Google Maps المرسل من المستخدم
    googleMapsUrl: "https://maps.app.goo.gl/HPd2HLxxwj5UiLDf6?g_st=iw",
    // تضمين خريطة Google Maps
    mapEmbedIframe: "https://maps.google.com/maps?q=Crestal+Hall&t=&z=15&ie=UTF8&iwloc=&output=embed"
  },

  // دريس كود الحفل وألوان الملابس المقترحة
  dressCode: {
    title: "DRESS CODE",
    subtitle: "WE WOULD LOVE TO SEE YOU IN SHADES OF:",
    colors: [
      { id: 1, name: "Blue", nameAr: "أزرق", hex: "#24558A" },
      { id: 2, name: "Yellow", nameAr: "أصفر", hex: "#F2C94C" },
      { id: 3, name: "Red", nameAr: "أحمر", hex: "#C62828" },
      { id: 4, name: "Beige", nameAr: "بيج", hex: "#D8C3A5" },
    ]
  },

  // تأكيد الحضور ورسائل التهنئة للعروسين (RSVP)
  rsvp: {
    title: "RSVP",
    subtitle: "PLEASE CONFIRM YOUR ATTENDANCE",
    namePlaceholder: "Name",
    messagePlaceholder: "Leave a message for Nourhan & Yousef...",
    submitText: "SEND RSVP",
    successHeading: "THANK YOU!",
    successMessage: "Your message has been received with love for Nourhan & Yousef ❤️"
  },

  // مسار ملف الموسيقى الرومانسية
  audioTrack: "/song.mp3"
};

