// Localization data
const translations = {
    en: {
        title: "Becky Lee Pianist",
        name: "Becky Lee",
        headline: "Pianist and Educator",
        about: "About",
        resume: "Resume",
        lesson: "Book a lesson",
        payment: "Online payment",
        contact: "Contact",
        aboutSelectionDescription: "Get to know me",
        aboutSelectionTitle: "About Me",
        aboutContentSubtitle: "Who am I?",
        aboutContentTitle: "I'm Becky Lee, a pianist and educator",
        aboutContentDescription1: "A graduate of Sunhwa Arts High School in Seoul, where she was taught by Mari        Kwon and Young-Bang Cho and received the Award for Excellence in        Performance, Lee holds a Bachelor of Music in Piano Performance from Yonsei         University. She studied there under the guidance of Keum-Bong Kim and      Jung-Hee Lee; she then pursued a Master of Music at University of Nevada Las Vegas (UNLV), studying with Timothy Hoft.",
        aboutContentDescription2: "Becky currently serves as a Program Chair and a Master Class Chair, in Saint Louis Area Music Teachers Association (SLAMTA), and a District Audition Chair in Missouri Music ‘Teachers Association (MMTA).",
        aboutContentDescription3: "Lee is also the owner of Donkey Music Lab, a private piano academy which provides lessons for students of any age or level. Because she began her own piano learning journey at age three, Lee is adept at teaching players at all stages, beginner to advanced. Students are sure to have an effective and enjoyable learning experience with Lee (who prefers to go by her first name, Becky). Every summer and winter, students have opportunities to present their skills at student recitals organized by Lee. They can also prepare with her for regional and national competitions each year.",
              




    },
    ko: {
        title: "이경진 피아니스트",
        name: "이경진",
        headline: "피아니스트 및 교육자",
        about: "대해서",
        resume: "이력서",
        lesson: "수업을 예약하다",
        payment: "온라인 결제",
        contact: "연락",

    }
};
// Set the initial language based on the user's browser language
const userLanguage = getUserBrowserLanguage();
switchLanguage(userLanguage);

// Function to switch the language
function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n-key]');
    if (lang === 'ko') {
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n-key');
            element.textContent = translations[lang][key];
        });
    } else {
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n-key');
            element.textContent = translations["en"][key];
        });
    }
}

// Function to determine the user's browser language
function getUserBrowserLanguage() {
    const userLanguage = navigator.language; // Get the user's browser language
    return userLanguage.slice(0, 2); // Get the first two characters of the language (e.g., "en" for "en-US"
}

document.getElementById('switchToEnglish').addEventListener('click', () => switchLanguage('en'));

document.getElementById('switchToKorean').addEventListener('click', () => switchLanguage('ko'));
