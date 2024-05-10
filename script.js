// Function to handle language change
function changeLanguage(selectedLanguage) {
    // Store selected language in local storage
    localStorage.setItem("language", selectedLanguage);

    // Redirect to the same page to apply language change
    window.location.reload();
}

// Function to retrieve selected language from local storage
function getSelectedLanguage() {
    return localStorage.getItem("language");
}

// Function to initialize Google Translate plugin
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
    }, 'google_translate_element');
}

// Function to dynamically translate content based on selected language
function translateContent() {
    const selectedLanguage = getSelectedLanguage();

    // Check if Google Translate plugin is initialized
    if (typeof google !== 'undefined' && typeof google.translate !== 'undefined') {
        // Initialize Google Translate plugin
        new google.translate.TranslateElement({
            pageLanguage: 'en', // Set the default page language
            includedLanguages: selectedLanguage, // Set the selected language for translation
        }, 'google_translate_element');
    }
}


// Execute translation on page load
window.onload = function () {
    translateContent();
};
