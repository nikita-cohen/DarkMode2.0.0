function checkTabUrl(url) {
    const hostName = url.replace(/.+\/\/|www.|\..+/g, '');
    switch (hostName) {
        case "youtube" :
            return {"url" : "/asset/custom-dark-mode/youtube.css", "name" : "youtube"};
        case "google" :
            return {"url" : "/asset/custom-dark-mode/google.css", "name" : "google"};
        case "facebook" :
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
            return {"url" : "/asset/custom-dark-mode/defaultLook.css", "name" : "default"};
    }
}

function checkIfDarkModeOn() {
    chrome.storage.local.get('dark_mode', function (result) {
        if (result.dark_mode) {
            if (result.dark_mode === "on") {
                const choosenStyle = checkTabUrl(window.location.href);
                toggle(choosenStyle.url, choosenStyle.name);
                chrome.runtime.sendMessage({type : "icon", newIconPath : "../asset/night-icon.png"})
            }
        }
    })
}

function toggle(style, url) {
    if (url !== "youtube" && url !== "facebook" && url !== "amazon" && url !== "maps" && url !== "default") {
        let o = document.querySelectorAll('#nightifyOne')
        let q = document.querySelectorAll('#nightify')
        if (q.length && o.length) {
            o[0].parentNode.removeChild(o[0])
            q[0].parentNode.removeChild(q[0])
            return false
        }
    } else {
        let q = document.querySelectorAll('#nightify')
        if (q.length) {
            q[0].parentNode.removeChild(q[0])
            return false
        }
    }

    if (url !== "youtube" && url !== "facebook" && url !== "amazon" && url !== "maps" && url !== "default") {
        let styleD = document.createElement('link');
        styleD.setAttribute('rel', 'stylesheet');
        styleD.setAttribute('id', 'nightifyOne');
        styleD.setAttribute('href', chrome.runtime.getURL('/asset/custom-dark-mode/dark.css'));
        document.head.appendChild(styleD)
    }

    let link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('id', 'nightify');
    link.setAttribute('href', chrome.runtime.getURL(style));
    document.head.appendChild(link);
    return true
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.type === "dark") {
        toggle(request.style.url, request.style.name)
    }
    return true;
})

checkIfDarkModeOn()
