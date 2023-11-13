// ELEMENT_IDS
ELEMENT_IDS = {
    app: "app",
    subMenuWrapper: "sub-menu-wrapper",
    internetContentsWrapper: "internet-contents-wrapper-element",
    internetContentsTab: "internet-contents-tab",
    digitalProgrammeListTab: "digital-programme-list-tab",
    digitalEpgTab: "digital-epg-tab",
    applicationsTab: "applications-tab",
    applicationsTabWrapper: "applications-wrapper-element",
    photoSharingPlus: "photo-sharing-plus",
    photoFrameMode: "photo-frame-mode",
    recordingsTab: "recordings-tab",
    mediaTab: "media-tab",
    settingsTab: "settings-tab",
}
//

const HOME_MENU_BUTTONS_ARRAY = [
    {
        id: ELEMENT_IDS.internetContentsTab,
        innerText: "Internet Contents",
        onclick: () => renderInternetContents()
    },
    {
        id: ELEMENT_IDS.digitalProgrammeListTab,
        innerText: "Digital Programme List",
        onclick: () => renderDigitalProgrammeList()
    },
    {
        id: ELEMENT_IDS.digitalEpgTab,
        innerText: "Digital EPG",
        onclick: () => renderDigitalEpg()
    },
    {
        id: ELEMENT_IDS.applicationsTab,
        innerText: "Applications",
        onclick: () => renderApplications()
    },
    {
        id: ELEMENT_IDS.recordingsTab,
        innerText: "Recordings"
    },
    {
        id: ELEMENT_IDS.mediaTab,
        innerText: "Media"
    },
    {
        id: ELEMENT_IDS.settingsTab,
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

const APPLICATIONS_BUTTONS_ARRAY = [
    {
        id: ELEMENT_IDS.photoSharingPlus,
        innerText: "Photo Sharing Plus",
        onclick: () => console.log("Photo Sharing Plus"),
    },
    {
        id: ELEMENT_IDS.photoFrameMode,
        innerText: "Photo Frame Mode",
        onclick: () => console.log("Photo Frame Mode"),
    },
]

// ELEMENTS
const appElement = document.getElementById(ELEMENT_IDS.app)
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

const handleOptionsElementOnClick = (tabName) => {
    const allTabIds = Object.entries(ELEMENT_IDS)
        .filter(entry => entry[0].endsWith('Tab'))
        .map(entry => entry[1])
    const tabNameTabButtonIdValue = ELEMENT_IDS[`${tabName}Tab`]

    allTabIds.forEach((tabId) => document.getElementById(tabId).disabled = tabId === tabNameTabButtonIdValue)
}

const removeSubMenuWrapperElement = (element) => {
    element = document.getElementById(ELEMENT_IDS.subMenuWrapper)
    if (element) {
        element.remove()
    }
}
//

// RENDER_HOME_MENU
const renderHomeMenu = () => {
    const mainElement = createElement("main", undefined, appElement)

    createElement("p", {
        innerText: "HOME"
    }, mainElement)

    HOME_MENU_BUTTONS_ARRAY.forEach(({ id, innerText, onclick }) => createElement("button", {
        id,
        className: "home-options",
        innerText,
        onclick
    }, mainElement))
}
//

// RENDER_INTERNET_CONTENTS
const renderInternetContents = () => {
    removeSubMenuWrapperElement()
    handleOptionsElementOnClick("internetContents")

    const subMenuWrapperElement = createElement("div", {
        id: ELEMENT_IDS.subMenuWrapper
    }, appElement)

    const internetContentsWrapperElement = createElement("div", {
        id: ELEMENT_IDS.internetContentsWrapper
    }, subMenuWrapperElement)

    INTERNET_CONTENS_BUTTONS_ARRAY.forEach(({ id, innerText, onclick }) => createElement("button", {
        id,
        className: "sub-options",
        innerText,
        onclick
    }, internetContentsWrapperElement))
}
//

// RENDER_DIGITAL_PROGRAMME_LIST
const renderDigitalProgrammeList = () => {
    removeSubMenuWrapperElement()
    handleOptionsElementOnClick("digitalProgrammeList")
    console.log("Digital Programme List")
}
//

// RENDER_DIGITAL_EPG
const renderDigitalEpg = () => {
    removeSubMenuWrapperElement()
    handleOptionsElementOnClick("digitalEpg")
    console.log("Digital EPG")
}
//

// APPLICATIONS
const renderApplications = () => {
    removeSubMenuWrapperElement()
    handleOptionsElementOnClick("applications")

    const subMenuWrapperElement = createElement("div", {
        id: ELEMENT_IDS.subMenuWrapper
    }, appElement)

    const applicationsWrapperElement = createElement("div", {
        id: ELEMENT_IDS.applicationsTabWrapper
    }, subMenuWrapperElement)

    APPLICATIONS_BUTTONS_ARRAY.forEach(({ id, innerText, onclick }) => createElement("button", {
        id,
        className: "sub-options",
        innerText,
        onclick
    }, applicationsWrapperElement))
}
//

(() => {
    renderHomeMenu()
})();