const checkBox = document.getElementById('checkbox');
const container = document.getElementById('container');
const txt = document.getElementById('version-txt');

function checkIfDarkModeIsOn() {
    chrome.storage.local.get('dark_mode' , function (result) {
        if (result.dark_mode) {
            if (result.dark_mode === "on") {
                checkBox.checked = true;
                container.style.background = '#1B1B1B';
                txt.style.color = '#FFFFFF'
            } else {
                checkBox.checked = false;
                container.style.background = '#EFF7FF';
                txt.style.color = '#000000'
            }
        }
    })
}

function checkTabUrl(tab) {
    const hostName = tab.url.replace(/.+\/\/|www.|\..+/g, '');
    console.log(hostName)
    switch (hostName) {
        case "youtube" :
            return {"url" : "/asset/custom-dark-mode/youtube.css", "name" : "youtube"};
        case "google" :
            return {"url" : "/asset/custom-dark-mode/google.css", "name" : "google"};
        case "facebook" :
            return {"url" : "/asset/custom-dark-mode/facebook.css", "name" : "facebook"};
        case "he-il" :
            return {"url" : "/asset/custom-dark-mode/facebook.css", "name" : "facebook"};
        case "accounts" :
            return {"url" : "/asset/custom-dark-mode/accounts.css", "name" : "accounts"};
        case "amazon" :
            return {"url" : "/asset/custom-dark-mode/amazon.css", "name" : "amazon"};
        case "bing" :
            return {"url" : "/asset/custom-dark-mode/bing.css", "name" : "bing"};
        case "docs" :
            return {"url" : "/asset/custom-dark-mode/docs.css", "name" : "docs"};
        case "drive" :
            return {"url" : "/asset/custom-dark-mode/drive.css", "name" : "drive"};
        case "dropbox" :
            return {"url" : "/asset/custom-dark-mode/dropbox.css", "name" : "dropbox"};
        case "duckduckgo" :
            return {"url" : "/asset/custom-dark-mode/duckduckgo.css", "name" : "duckduckgo"};
        case "ebay" :
            return {"url" : "/asset/custom-dark-mode/ebay.css", "name" : "ebay"};
        case "github" :
            return {"url" : "/asset/custom-dark-mode/github.css", "name" : "github"};
        case "gmail" :
            return {"url" : "/asset/custom-dark-mode/gmail.css", "name" : "gmail"};
        case "mail" :
            return {"url" : "/asset/custom-dark-mode/gmail.css", "name" : "gmail"};
        case "instagram" :
            return {"url" : "/asset/custom-dark-mode/instagram.css", "name" : "instagram"};
        case "maps" :
            return {"url" : "/asset/custom-dark-mode/maps.css", "name" : "maps"};
        case "myaccount" :
            return {"url" : "/asset/custom-dark-mode/myaccount.css", "name" : "myaccount"};
        case "play" :
            return {"url" : "/asset/custom-dark-mode/play.css", "name" : "play"};
        case "reddit" :
            return {"url" : "/asset/custom-dark-mode/reddit.css", "name" : "reddit"};
        case "sites" :
            return {"url" : "/asset/custom-dark-mode/sites.css", "name" : "sites"};
        case "stackoverflow" :
            return {"url" : "/asset/custom-dark-mode/stackoverflow.css", "name" : "stackoverflow"};
        case "support" :
            return {"url" : "/asset/custom-dark-mode/support.css", "name" : "support"};
        case "telegram" :
            return {"url" : "/asset/custom-dark-mode/telegram.css", "name" : "telegram"};
        case "translate" :
            return {"url" : "/asset/custom-dark-mode/translate.css", "name" : "translate"};
        case "tumblr" :
            return {"url" : "/asset/custom-dark-mode/tumblr.css", "name" : "tumblr"};
        case "twitch" :
            return {"url" : "/asset/custom-dark-mode/twitch.css", "name" : "twitch"};
        case "twitter" :
            return {"url" : "/asset/custom-dark-mode/twitter.css", "name" : "twitter"};
        case "w3schools" :
            return {"url" : "/asset/custom-dark-mode/w3schools.css", "name" : "w3schools"};
        case "whatsapp" :
            return {"url" : "/asset/custom-dark-mode/whatsapp.css", "name" : "whatsapp"};
        case "wikipedia" :
            return {"url" : "/asset/custom-dark-mode/wikipedia.css", "name" : "wikipedia"};
        case "yahoo" :
            return {"url" : "/asset/custom-dark-mode/yahoo.css", "name" : "yahoo"};
        case "yandex" :
            return {"url" : "/asset/custom-dark-mode/yandex.css", "name" : "yandex"};
        default :
            console.log("deafultLook")
            return {"url" : "/asset/custom-dark-mode/defaultLook.css", "name" : "default"};
    }
}

function setOnChange() {
    checkBox.addEventListener('change', (event) => {
        if (event.target.checked) {
            chrome.storage.local.set({'dark_mode': 'on'})
            container.style.background = '#1B1B1B';
            txt.style.color = '#FFFFFF'
            chrome.tabs.query( {}, function (tabs) {
                tabs.forEach(tab => {
                    const newStyle = checkTabUrl(tab)
                        chrome.tabs.sendMessage(tab.id, {type: "dark", style : newStyle})
                        chrome.runtime.sendMessage({ type : "icon", newIconPath : "../asset/night-icon.png"})
                })
            })

        } else {
            chrome.storage.local.set({'dark_mode': 'off'})
            container.style.background = '#EFF7FF';
            txt.style.color = '#000000'
            chrome.tabs.query({}, function (tabs) {
                tabs.forEach(tab => {
                        const newStyle = checkTabUrl(tab)
                        chrome.tabs.sendMessage(tab.id, {type: "dark", style : newStyle})
                        chrome.runtime.sendMessage({type : "icon", newIconPath : "../asset/day-icon.png"})
                })
            })
        }
    })
}



function init() {
    checkIfDarkModeIsOn();
    setOnChange();
}

init();


