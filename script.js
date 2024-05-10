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

function adjustTextSize() {
    var selectedSize = document.getElementById('text-size-select').value;

    // Store selected font size in local storage
    localStorage.setItem('fontSize', selectedSize);

    // Set new font size
    updateFontSize(selectedSize);
}

function updateFontSize(size) {
    var newSize;

    switch (size) {
        case 'small':
            newSize = 10;
            break;
        case 'medium':
            newSize = 16;
            break;
        case 'large':
            newSize = 22;
            break;
        default:
            newSize = 14; // Default to medium size
            break;
    }

    // Set new font size
    document.body.style.fontSize = newSize + 'px';
}


// Add event listener to select element
document.getElementById('text-size-select').addEventListener('change', adjustTextSize);

