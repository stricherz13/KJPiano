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
