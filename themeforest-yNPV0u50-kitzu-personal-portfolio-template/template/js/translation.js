// Localization data
const translations = {
    en: {
        name: "Becky Lee",
        headline: "Pianist and Educator"
    },
    ko: {
        name: "이경진",
        headline: "피아니스트 및 교육자"
    }
};

// Function to switch the language
function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n-key');
        element.textContent = translations[lang][key];
    });
}

// Function to get the browser language
function getBrowserLanguage() {
    const language = navigator.language || navigator.userLanguage;
    return language.split('-')[0];
    console.log(language.split('-')[0]);
}