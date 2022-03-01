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

function setOnChange() {
    checkBox.addEventListener('change', (event) => {
        if (event.target.checked) {
            chrome.storage.local.set({'dark_mode': 'on'})
            container.style.background = '#1B1B1B';
            txt.style.color = '#FFFFFF'
            chrome.tabs.query( {}, function (tabs) {
                tabs.forEach(tab => {
                        chrome.tabs.sendMessage(tab.id, {type: "dark"})
                    chrome.runtime.sendMessage({newIconPath : "../asset/night-icon.png"})
                })
            })

        } else {
            chrome.storage.local.set({'dark_mode': 'off'})
            container.style.background = '#EFF7FF';
            txt.style.color = '#000000'
            chrome.tabs.query({}, function (tabs) {
                tabs.forEach(tab => {
                        chrome.tabs.sendMessage(tab.id, {type: "dark"})
                    chrome.runtime.sendMessage({newIconPath : "../asset/day-icon.png"})
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


