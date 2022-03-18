var basicStyle = `
html, body {
  color: #dcdcdc !important;
  background-image: none !important;
  background-color: #292929 !important;
}

html::before, body::before {
  background-image: none !important;
}

html *:not(input) {color: #dcdcdc !important}
html * {background-color: rgb(41, 41, 41, 0.90) !important}

html *, html *[id], html *[class] {
  box-shadow: none !important;
  text-shadow: none !important;
  border-radius: unset !important;
  border-color: #555555 !important;
  outline-color: #555555 !important;
}

img, img[src] {
  z-index: 1;
  filter: brightness(0.85) !important;
  background-color: initial !important;
}

video, video[src] {
  z-index: 1;
  background-color: transparent !important;
}

input:not([type='button']):not([type='submit']) {
  color: #dcdcdc !important;
  background-image: none !important;
  background-color: #333333 !important;
}

textarea, textarea[class], input[type='text'], input[type='text'][class] {
  color: #dcdcdc !important;
  background-color: #555555 !important;
}

svg:not([fill]) {fill: #7d7d7d !important}
li, select {background-image: none !important}
input[type='text'], input[type='search'] {text-indent: 10px}
a {background-color: rgba(255, 255, 255, 0.01) !important}
html cite, html cite *, html cite *[class] {color: #029833 !important}
svg[fill], button, input[type='button'], input[type='submit'] {opacity: 0.85 !important}

:before {color: #dcdcdc !important}
:link:not(cite), :link *:not(cite) {color: #8db2e5 !important}
:visited, :visited *, :visited *[class] {color: rgb(211, 138, 138) !important}
      
`



function checkTabUrl(url) {
    const hostName = url.replace(/.+\/\/|www.|\..+/g, '');
    switch (hostName) {
        case "youtube" :
            return {"url": "/asset/custom-dark-mode/youtube.css", "name": "youtube"};
        case "google" :
            return {"url": "/asset/custom-dark-mode/google.css", "name": "google"};
        case "facebook" :
            return {"url": "/asset/custom-dark-mode/facebook.css", "name": "facebook"};
        case "he-il" :
            return {"url": "/asset/custom-dark-mode/facebook.css", "name": "facebook"};
        case "accounts" :
            return {"url": "/asset/custom-dark-mode/accounts.css", "name": "accounts"};
        case "amazon" :
            return {"url": "/asset/custom-dark-mode/amazon.css", "name": "amazon"};
        case "bing" :
            return {"url": "/asset/custom-dark-mode/bing.css", "name": "bing"};
        case "docs" :
            return {"url": "/asset/custom-dark-mode/docs.css", "name": "docs"};
        case "drive" :
            return {"url": "/asset/custom-dark-mode/drive.css", "name": "drive"};
        case "dropbox" :
            return {"url": "/asset/custom-dark-mode/dropbox.css", "name": "dropbox"};
        case "duckduckgo" :
            return {"url": "/asset/custom-dark-mode/duckduckgo.css", "name": "duckduckgo"};
        case "ebay" :
            return {"url": "/asset/custom-dark-mode/ebay.css", "name": "ebay"};
        case "github" :
            return {"url": "/asset/custom-dark-mode/github.css", "name": "github"};
        case "gmail" :
            return {"url": "/asset/custom-dark-mode/gmail.css", "name": "gmail"};
        case "mail" :
            return {"url": "/asset/custom-dark-mode/gmail.css", "name": "gmail"};
        case "instagram" :
            return {"url": "/asset/custom-dark-mode/instagram.css", "name": "instagram"};
        case "maps" :
            return {"url": "/asset/custom-dark-mode/maps.css", "name": "maps"};
        case "myaccount" :
            return {"url": "/asset/custom-dark-mode/myaccount.css", "name": "myaccount"};
        case "play" :
            return {"url": "/asset/custom-dark-mode/play.css", "name": "play"};
        case "reddit" :
            return {"url": "/asset/custom-dark-mode/reddit.css", "name": "reddit"};
        case "sites" :
            return {"url": "/asset/custom-dark-mode/sites.css", "name": "sites"};
        case "stackoverflow" :
            return {"url": "/asset/custom-dark-mode/stackoverflow.css", "name": "stackoverflow"};
        case "support" :
            return {"url": "/asset/custom-dark-mode/support.css", "name": "support"};
        case "telegram" :
            return {"url": "/asset/custom-dark-mode/telegram.css", "name": "telegram"};
        case "translate" :
            return {"url": "/asset/custom-dark-mode/translate.css", "name": "translate"};
        case "tumblr" :
            return {"url": "/asset/custom-dark-mode/tumblr.css", "name": "tumblr"};
        case "twitch" :
            return {"url": "/asset/custom-dark-mode/twitch.css", "name": "twitch"};
        case "twitter" :
            return {"url": "/asset/custom-dark-mode/twitter.css", "name": "twitter"};
        case "w3schools" :
            return {"url": "/asset/custom-dark-mode/w3schools.css", "name": "w3schools"};
        case "whatsapp" :
            return {"url": "/asset/custom-dark-mode/whatsapp.css", "name": "whatsapp"};
        case "wikipedia" :
            return {"url": "/asset/custom-dark-mode/wikipedia.css", "name": "wikipedia"};
        case "yahoo" :
            return {"url": "/asset/custom-dark-mode/yahoo.css", "name": "yahoo"};
        case "search" :
            return {"url": "/asset/custom-dark-mode/yahoo.css", "name": "yahoo"};
        case "yandex" :
            return {"url": "/asset/custom-dark-mode/yandex.css", "name": "yandex"};
        default :
            return {"url": basicStyle, "name": "default"};
    }
}

function checkIfDarkModeOn() {
    chrome.storage.local.get('dark_mode', async function (result) {
        if (result.dark_mode) {
            if (result.dark_mode === "on") {
                let chosenStyle = checkTabUrl(window.location.href);
                await toggle(chosenStyle.url, chosenStyle.name);
                chrome.runtime.sendMessage({type: "change_icon"});
            }
        }
    })
}

async function getInnerHtmlOfCssDocument(style) {
    const fetchData = await fetch(chrome.runtime.getURL(style));
    const text = await fetchData.text();
    return text;
}

function deleteStyle() {
    let o = document.querySelectorAll('#nightifyOne')
    let q = document.querySelectorAll('#nightify')
    if (q.length && o.length) {
        o[0].parentNode.removeChild(o[0])
        q[0].parentNode.removeChild(q[0])
    } else if (q.length && !o.length) {
        q[0].parentNode.removeChild(q[0])
    } else if (!q.length && o.length) {
        o[0].parentNode.removeChild(o[0])
    }
}

async function toggle(style, url) {
    try {
        if (url !== "youtube" && url !== "facebook" && url !== "amazon" && url !== "maps" && url !== "default"
            && url !== "mail" && url !== "instagram") {
            const innerHtml = await getInnerHtmlOfCssDocument('/asset/custom-dark-mode/dark.css');
            let styleElement = document.createElement('style');
            styleElement.innerHTML = innerHtml;
            styleElement.id = 'nightifyOne';
            styleElement.type = "text/css";
            document.head.insertAdjacentElement('beforeend', styleElement);
        }

        if (url !== "default") {
            const innerHtml = await getInnerHtmlOfCssDocument(style);
            let styleElement = document.createElement('style');
            styleElement.innerHTML = innerHtml;
            styleElement.setAttribute('id', 'nightify');
            styleElement.setAttribute('type', "text/css");
            document.head.insertAdjacentElement('beforeend', styleElement);
        } else {
            let styleElement = document.createElement('style');
            styleElement.innerHTML = style;
            styleElement.setAttribute('id', 'nightify');
            styleElement.setAttribute('type', "text/css");
            document.head.insertAdjacentElement('beforeend', styleElement);
        }

        return true
    } catch (e) {
        throw new Error(e.message);
    }
}


chrome.storage.onChanged.addListener(function (changes, namespace) {
    for (let [key, {oldValue, newValue}] of Object.entries(changes)) {
        if (key === 'dark_mode') {
            if (newValue === 'on') {
                let urlObj = checkTabUrl(window.location.href);
                toggle(urlObj.url, urlObj.name).then();
            } else if (newValue === 'off') {
                deleteStyle();
            }
        }
    }
})

checkIfDarkModeOn();

