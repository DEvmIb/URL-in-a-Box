function getContext() {
    return browser.extension.getViews({type: "popup"}).indexOf(window) > -1 ? "popup" :
        browser.extension.getViews({type: "sidebar"}).indexOf(window) > -1 ? "sidebar" :
            browser.extension.getViews({type: "tab"}).indexOf(window) > -1 ? "tab" : undefined;
}

async function load() {
    var res = await browser.storage.local.get();
    switch (getContext()) {
    case "popup":
        location.href = res.url || "https://wikipedia.org";
        break;
    case "sidebar":
        location.href = res.urlSidebar || "https://wikipedia.org";
        break;
    }
}

document.addEventListener("DOMContentLoaded", load);
