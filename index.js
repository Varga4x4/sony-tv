const HOME_MENU_BUTTONS_ARRAY = [
    {
        id: "internetcontents-tab",
        innerText: "Internet Contents",
        onclick: () => renderInternetContents()
    },
    {
        id: "digital-programme-list-tab",
        innerText: "Digital Programme List",
        onclick: () => renderDigitalProgrammeList()
    },
    {
        id: "digital-epg-tab",
        innerText: "Digital EPG"
    },
    {
        id: "applications-tab",
        innerText: "Applications"
    },
    {
        id: "recordings-tab",
        innerText: "Recordings"
    },
    {
        id: "media-tab",
        innerText: "Media"
    },
    {
        id: "settings-tab",
        innerText: "Settings"
    },
]

const INTERNET_CONTENS_BUTTONS_ARRAY = [
    {
        id: "amazon-prime-video",
        innerText: "Amazon Prime Video",
        onclick: () => console.log("Amazon Prime Video")
    },
    {
        id: "netflix",
        innerText: "Netflix",
        onclick: () => console.log("Netflix")
    },
    {
        id: "bbc-iplayer",
        innerText: "BBC iPlayer",
        onclick: () => console.log("BBC iPlayer")
    },
    {
        id: "youtube",
        innerText: "YouTube",
        onclick: () => console.log("YouTube")
    },
]

// ELEMENT_IDS
ELEMENT_IDS = {
    app: "app",
    wrapper: "wrapper",
    internetContentsWrapper: "internet-contents-wrapper-element",
    internetContentsTab: "internetcontents-tab",
    programmeListTab: "digital-programme-list-tab",
    digitalEpgTab: "digital-epg-tab",
    applicationsTab: "applications-tab",
    recordingsTab: "recordings-tab",
    mediaTab: "media-tab",
    settingsTab: "settings-tab",
}
//

// ELEMENTS
const appElement = document.getElementById(ELEMENT_IDS.app)
const wrapperElement = document.getElementById(ELEMENT_IDS.wrapper)
//


// HELPERS
const createElement = (tagType, attrObj, parentElement) => {
    if (!tagType) {
        throw new Error("Error 2");
    }

    const newElement = document.createElement(tagType)

    if (attrObj) {
        Object.entries(attrObj).forEach(([key, value]) => newElement[key] = value)
    }

    if (parentElement) {
        parentElement.append(newElement)
    }

    return newElement
}

const createGlobalWrapper = () => {
    createElement("div", {
        id: ELEMENT_IDS.wrapper
    }, appElement)
}

const handleOptionsElementOnClick = (tabName) => {
    const allTabIds = Object.entries(ELEMENT_IDS)
        .filter(entry => entry[0].endsWith('Tab'))
        .map(entry => entry[1])
    const tabNameTabButtonIdValue = ELEMENT_IDS[`${tabName}Tab`]

    allTabIds.forEach((tabId) => {
        document.getElementById(tabId).disabled = tabId === tabNameTabButtonIdValue
    })
}
//

// RENDER_HOME_MENU
const renderHomeMenu = () => {
    const mainElement = createElement("main", undefined, appElement)

    createElement("p", {
        innerText: "HOME"
    }, mainElement)

    HOME_MENU_BUTTONS_ARRAY.forEach(({ id, innerText, onclick }) => {
        createElement("button", {
            id,
            className: "home-options",
            innerText,
            onclick
        }, mainElement)
    })
}
//

// RENDER_INTERNET_CONTENTS
const renderInternetContents = () => {
    // createGlobalWrapper()
    handleOptionsElementOnClick("internetContents")
    const wrapperElement = createElement("div", {
        id: ELEMENT_IDS.wrapper
    }, appElement)

    const internetContentsWrapperElement = createElement("div", {
        id: ELEMENT_IDS.internetContentsWrapper
    }, wrapper)

    INTERNET_CONTENS_BUTTONS_ARRAY.forEach(({ id, innerText, onclick }) => {
        createElement("button", {
            id,
            className: "sub-options",
            innerText,
            onclick
        }, internetContentsWrapperElement)
    })
    console.log(wrapperElement)
}
//

// RENDER_DIGITAL_PROGRAMME_LIST
const renderDigitalProgrammeList = () => {
    console.log(wrapperElement)
    handleOptionsElementOnClick("programmeList")
    console.log("Digital Programme List")
}
//

(() => {
    renderHomeMenu()
})();