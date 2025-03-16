document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded successfully!');
    
    const content = document.getElementById('content');

    // Helper function to add info to page
    const addInfoToPage = (label, value) => {
        const info = document.createElement('p');
        info.textContent = `${label}: ${value}`;
        content.appendChild(info);
    };

    // Basic navigator information
    addInfoToPage('User Agent', navigator.userAgent);
    addInfoToPage('Platform', navigator.platform);
    addInfoToPage('App Version', navigator.appVersion);
    addInfoToPage('Vendor', navigator.vendor);
    addInfoToPage('Language', navigator.language);
    addInfoToPage('Cookies Enabled', navigator.cookieEnabled);
    addInfoToPage('Online', navigator.onLine);
    addInfoToPage('Hardware Concurrency', navigator.hardwareConcurrency);
    addInfoToPage('Max Touch Points', navigator.maxTouchPoints);

    // Complex objects - these need special handling
    addInfoToPage('Geolocation Available', 'geolocation' in navigator);
    addInfoToPage('Media Capabilities Available', 'mediaCapabilities' in navigator);
    addInfoToPage('Permissions API Available', 'permissions' in navigator);
    addInfoToPage('Service Worker Available', 'serviceWorker' in navigator);
    addInfoToPage('Storage API Available', 'storage' in navigator);

    // Additional useful information
    addInfoToPage('Do Not Track', navigator.doNotTrack);
    addInfoToPage('PDF Viewer Enabled', navigator.pdfViewerEnabled);
    addInfoToPage('Web Driver', navigator.webdriver);
});
