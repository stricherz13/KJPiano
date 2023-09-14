// Localization data
const translations = {
    en: {
        name: "Becky Lee",
        headline: "Pianist and Educator",
        about: "About",
        resume: "Resume",
        lesson: "Book a lesson",
        payment: "Online payment",
        contact: "Contact",

    },
    ko: {
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
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n-key');
        element.textContent = translations[lang][key];
    });
}

// Function to determine the user's browser language
function getUserBrowserLanguage() {
    const userLanguage = navigator.language || navigator.userLanguage; // Get the user's browser language
    const language = userLanguage.slice(0,2); // Get the first two characters of the language (e.g., "en" for "en-US"
    // You may want to add logic here to map browser language codes to your available translations
    console.log(language);
    return language;
}


// You can also provide a way for the user to switch languages, e.g., by adding language buttons with event listeners.
// For example, to switch to English:
document.getElementById('switchToEnglish').addEventListener('click', () => switchLanguage('en'));

// And to switch to Korean:
document.getElementById('switchToKorean').addEventListener('click', () => switchLanguage('ko'));
