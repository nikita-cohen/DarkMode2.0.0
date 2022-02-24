const style = `
html[temporarily-dark-style] {
  filter: none !important;
  width: 100vw !important;
  height: 100vh !important;
  overflow: hidden !important;
  background: #292929 !important;
  -webkit-filter: none !important;
}

html[temporarily-dark-style] * {
  display: none !important;
}

html {
  background-color: #222 !important;
}

body {
  filter: invert(100%);
  -ms-filter: invert(100%);
  -webkit-filter: invert(100%);
  text-rendering: optimizeSpeed;
  image-rendering: optimizeSpeed;
  background-color: #FFF !important;
  -webkit-font-smoothing: antialiased;
  -webkit-image-rendering: optimizeSpeed;
}

input, textarea, select {
  color: purple;
}

img, video, iframe, canvas, svg, embed[type='application/x-shockwave-flash'], object[type='application/x-shockwave-flash'], *[style*='url('] {
  filter: invert(100%) !important;
  -ms-filter: invert(100%) !important;
  -webkit-filter: invert(100%) !important;
}
`

function checkIfDarkModeOn(){
    chrome.storage.local.get('dark_mode' , function (result) {
        if (result.dark_mode) {
            if (result.dark_mode === "on") {
                toggle();
            }
        }
    })
}

function toggle() {
    let q = document.querySelectorAll('#nightify')
    if(q.length) {
        q[0].parentNode.removeChild(q[0])
        return false
    }
    let h = document.getElementsByTagName('head')[0],
        s = document.createElement('style');
    s.setAttribute('type', 'text/css');
    s.setAttribute('id', 'nightify');
    s.innerHTML = style;
    h.appendChild(s);
    return true
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === "dark") {
        toggle()
    }
    return true;
})

checkIfDarkModeOn()
