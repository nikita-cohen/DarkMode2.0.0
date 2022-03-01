chrome.tabs.query({}, function(tabs) {
    tabs.forEach(tb => {
        const isMatch = !(tb.url.match("https://chrome.google.com") || tb.url.match('chrome://')|| tb.url.match("chrome-error://chromewebdata/") || tb.url.match("error://chromewebdata/") || tb.url.match("view-source:") || tb.url.match("file:///") || !tb.url.match("http://") && !tb.url.match("https://"))
        if (isMatch) {
            chrome.scripting.executeScript({target: {tabId: tb.id, allFrames: true}, files: ['js/ContentScript.js']});
        }
    });
});


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        chrome.tabs.query({}, function (tabs) {
            tabs.forEach(tab => {
                chrome.action.setIcon({path: request.newIconPath, tabId: tab.id}, () => {

                });
            })
        })

    });
