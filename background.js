chrome.runtime.onStartup.addListener(() => {
    chrome.storage.local.clear(() => {
        if (chrome.runtime.lastError) {
            console.error("LocalStorage cleaning ERROR: ", chrome.runtime.lastError);
        } else {
            console.log("Extensions local storage was cleared!");
        }
    });
});
