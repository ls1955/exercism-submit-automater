const exercismTrackUrl = "https://exercism.org/tracks/"

chrome.action.onClicked.addListener(async (tab) => {
    if (tab.url.startsWith(exercismTrackUrl)) {
        await chrome.scripting.executeScript({
            files: ["button-clicker.js"],
            target: tab.id
        });
    }
});
