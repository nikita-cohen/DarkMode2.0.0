const basicStyle = `/*
  Parts of this code is inspired from the following:
  [1] https://userstyles.org/styles/134548/nightmod-black-global-colour-edit
*/

html, body {
  background-color: rgba(20, 20, 20, 0.95) !important;
}

html *:not(.ytp-progress-list):not(._4tsk):not(img):not(._3oh-):not(._3i_m):not(._29_7):not(.uiPopover):not([data-uri]):not(input):not(form):not(textarea):not(iframe):not(embed):not([role="button"]):not(button):not(select):not(.jewelCount):not(.vjs-text-track-display):not(.mw-headline-link):not(._53j5):not(.textLayer):not(.jw-reset):not(.mtm):not(.ytp-play-progress):not(tm)>*:not(.ytp-progress-list):not(._15gf):not(img):not(._3oh-):not(._3i_m):not(._29_7):not(.uiPopover):not([data-uri]):not(input):not(form):not(textarea):not(iframe):not(embed):not(button):not(select):not(.jewelCount):not([role="button"]):not(.vjs-text-track-display):not(.mw-headline-link):not(._53j5):not(.textLayer):not(.jw-reset):not(.mtm):not(.ytp-play-progress):not(tm) {
  text-shadow: none !important;
  color: rgb(250, 250, 250) !important;
  background-color: rgba(5, 5, 5, .65) !important;
  border-color: rgba(255, 255, 255, 0.15) !important;
}

html *:not(#outerContainer) ._3zvs>* {
  background: #FFF !important;
}

html iframe>* {
  background-color: transparent !important;
}

form, textarea, input, button, select {
  background-color: rgb(25, 25, 25) !important;
  color: #FFF !important;
  border-color: rgb(75, 75, 75) !important;
  border: 1px solid #000;
}

button:empty, select:empty {
  opacity: 0.3 !important;
}

input:hover, button:hover, select:hover {
  background-color: #000 !important;
  color: gray !important;
}

html * ul {
  list-style-image: none;
}

html * input, html * textarea {
  background: #FFF !important;
  color: #000 !important;
}

#notificationsCountValue, #mercurymessagesCountValue, #requestsCountValue {
  background-color: rgb(247, 247, 171) !important;
}

._4xi2.east a.jewelButton ._2n_9 {
  background-position: 0 -312px !important;
}

._1z4y a.jewelButton ._2n_9 {
  background-position: 0 -363px !important;
}

._3nzl a.jewelButton ._2n_9 {
  background-position: 0 -214px !important;
}

html ._400_._3htz {
  background: transparent !important;
}

html *:not(#outerContainer) a {
  color: rgb(247, 247, 171) !important;
}

html *:not(#outerContainer) a:visited {
  color: rgb(246, 246, 215) !important;
}

html *:not(#outerContainer) a[style="border-bottom: 1px solid red;"] {
  border-color: rgb(247, 247, 171) !important;
}

h1, h2, h3, h4, h5, html h1>*, html h2>*, html h3>*, html h4>*, html h5>* {
  color: rgb(133, 182, 126) !important;
}

#facebook * ._28xr, #facebook * ._5ine, #facebook .lfloat._ohe * {
  background-color: transparent !important;
}

._6gb._6gf {
  background: #FFF !important;
}

.fbNubFlyoutInner {
  border: 1px solid #FFF !important;
}

html *>#fbCoverImageContainer *, html *>* .actions {
  background: transparent !important;
}

html *>a>._2n_9 {
  color: #FFF !important;
}

html *>button.active *:before {
  color: rgba(247, 247, 171, 0.80) !important;
}

html *>#vol-bar-inner {
  background-color: rgb(247, 247, 171) !important;
}

#bar-inner, html #bar-outer>#position {
  background-color: rgb(247, 247, 171) !important;
  border-color: #FFF !important;
}

html *:not(#outerContainer) .ytp-volume-slider-handle::before, html *:not(#outerContainer) .ytp-scrubber-container, html *>.ytp-load-progress {
  color: #000 !important;
  background-color: rgb(247, 247, 171) !important;
}

html *:not(#outerContainer) .ytp-hover-progress {
  background: #FFF !important;
  opacity: 0.3;
}

html *:not(#outerContainer) .annotation {
  background: transparent !important;
}

html *>.ytp-play-progress, html *>.ytp-play-progress.ytp-swatch-background-color, .ytp-gradient-bottom, .ytp-gradient-bottom>* {
  display: none !important;
}

window #main-window, window .browserContainer {
  background: rgb(65, 65, 65) !important;
}

@-moz-document url-prefix(about:blank) {
  * {
    background: rgb(20, 20, 20) !important;
  }
}

html *:not(#outerContainer) a:hover {
  color: rgb(249, 249, 208) !important;
  border-bottom: 1px white dashed !important;
}

@-moz-document url(about:blank), url(about:newtab) {
  * {
    background: none #000 !important;
    color: #999 !important;
    border: none !important;
  }
  html, body, window, page, dialog, wizard, prefwindow, #newtab-window, #newtab-scrollbox {
    background: none #000 !important;
    color: #999 !important;
    border: none !important;
    -moz-appearance: none !important;
  }
  #newtab-scrollbox, #newtab-margin-undo-container, #newtab-margin-top, #newtab-search-container, #newtab-search-logo, #newtab-intro-what {
    display: none !important;
  }
}
`

function checkTabUrl(url) {
    const hostName = url.replace(/.+\/\/|www.|\..+/g, '');
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
            return {"url" : basicStyle, "name" : "default"};
    }
}

function checkIfDarkModeOn() {
    chrome.storage.local.get('dark_mode', async function (result) {
        if (result.dark_mode) {
            if (result.dark_mode === "on") {
                const choosenStyle = checkTabUrl(window.location.href);
                await toggle(choosenStyle.url, choosenStyle.name);
                chrome.runtime.sendMessage({type : "icon", newIconPath : "../asset/night-icon.png"})
            }
        }
    })
}

async function getInnerHtmlOfCssDocument(style) {
    try {
        const res = await fetch(chrome.runtime.getURL(style));
        const text = await res.text();
        return text;
    }
    catch(e) {
        console.log('fail fetch with error', e.message);
        throw new Error(`Error in fetch: ${e.message}`);
    }
}

async function toggle(style, url) {
    try {
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
            const innerHtml = await getInnerHtmlOfCssDocument('/asset/custom-dark-mode/dark.css');
            let styleElement = document.createElement('style');
            styleElement.innerHTML = innerHtml;
            styleElement.id = 'nightifyOne';
            styleElement.type = "text/css";
            document.head.appendChild(styleElement);
        }

        if (url !== "default") {
            const innerHtml = await getInnerHtmlOfCssDocument(style);
            let styleElement = document.createElement('style');
            styleElement.innerHTML = innerHtml;
            styleElement.setAttribute('id', 'nightify');
            styleElement.setAttribute('type', "text/css");
            document.head.appendChild(styleElement);
        } else {
            let styleElement = document.createElement('style');
            styleElement.innerHTML = style;
            styleElement.setAttribute('id', 'nightify');
            styleElement.setAttribute('type', "text/css");
            document.head.appendChild(styleElement);
        }

        return true
    }
    catch (e) {
        throw new Error(e.message);
    }
}

chrome.runtime.onMessage.addListener( function (request) {
    if (request.type === "dark" && !chrome.runtime.lastError) {
        toggle(request.style.url, request.style.name)
            .then(data => console.log(data))
            .catch(e => {
                console.error('Error in toggle: ', e.message);
            })
    }
    return true;
})

checkIfDarkModeOn();

