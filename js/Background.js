chrome.tabs.query({}, function(tabs) {
    tabs.forEach(tb => {
        const isMatch = !(tb.url.match("https://chrome.google.com") || tb.url.match('chrome://')|| tb.url.match("chrome-error://chromewebdata/") || tb.url.match("error://chromewebdata/") || tb.url.match("view-source:") || tb.url.match("file:///") || !tb.url.match("http://") && !tb.url.match("https://"))
        if (isMatch) {
            chrome.scripting.executeScript({target: {tabId: tb.id}, files: ['js/ContentScript.js']});
        }
    });
});

chrome.storage.local.get('dark_mode' , (result) => {
    if (result.dark_mode === "on") {
        chrome.tabs.query({}, function (tabs) {
            tabs.forEach(tab => {
                chrome.action.setIcon({tabId : tab.id, path : '../asset/night-icon.png'}, () => {
                });
            })
        })
    }

    if (result.dark_mode === "off") {
        chrome.tabs.query({}, function (tabs) {
            tabs.forEach(tab => {
                chrome.action.setIcon({tabId : tab.id, path : '../asset/day-icon.png'}, () => {
                });
            })
        })
    }
})

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === "change_icon") {
        chrome.tabs.query({}, function (tabs) {
            tabs.forEach(tab => {
                if (tab.active ){
                    chrome.action.setIcon({tabId : tab.id, path : '../asset/night-icon.png'}, () => {
                    });
                }
            })
        })
    }
    return true;
});

chrome.storage.onChanged.addListener(function (changes, namespace) {
    for (let [key, {oldValue, newValue}] of Object.entries(changes)) {
        if (key === 'dark_mode') {
            if (newValue === "on") {
                chrome.tabs.query({}, function (tabs) {
                    tabs.forEach(tab => {
                        chrome.action.setIcon({tabId : tab.id, path : '../asset/night-icon.png'}, () => {
                        });
                    })
                })
            } else {
                chrome.tabs.query({}, function (tabs) {
                    tabs.forEach(tab => {
                        chrome.action.setIcon({tabId : tab.id, path : '../asset/day-icon.png'}, () => {
                        });
                    })
                })
            }
        }
    }
})
