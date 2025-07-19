
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // Check if the tab is fully loaded
    if (changeInfo.status === 'complete') {
        // Enable the icon only for Google homepage
        const isGoogleHomePage = /^https:\/\/www\.google\.(com|[a-z]{2})\/$/.test(tab.url);
        if (isGoogleHomePage ) {
            chrome.action.enable(tabId); // Enable icon
        } else {
            chrome.action.disable(tabId); // Disable icon
        }
    }
});