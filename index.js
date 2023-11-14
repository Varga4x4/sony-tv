const ELEMENT_IDS = {
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
    recordingsTabWrapper: "recordings-wrapper-element",
    titleList: "title-list",
    timerList: "timer-list",
    errorList: "error-list",
    manualTimerRec: "manual-timer-rec",
    mediaTab: "media-tab",
    mediaTabWrapper: "media-wrapper-element",
    photo: "photo",
    music: "music",
    video: "video",
    settingsTab: "settings-tab",
    settingsTabWrapper: "settings-wrapper-element",
    systemSettings: "system-settings",
    customerSupport: "customer-support",
}

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

    // Presh, is that correct? Throws me this: Uncaught TypeError: Cannot read properties of undefined (reading 'remove')
    // element = document.getElementById(ELEMENT_IDS.subMenuWrapper)?.element.remove()
    //
}
//

const renderInternetContents = () => {
    removeSubMenuWrapperElement()
    handleOptionsElementOnClick("internetContents")

    const subMenuWrapperElement = createElement("div", {
        id: ELEMENT_IDS.subMenuWrapper
    }, appElement)

    const internetContentsWrapperElement = createElement("div", {
        id: ELEMENT_IDS.internetContentsWrapper,
        className: "options-wrapper"
    }, subMenuWrapperElement)

    INTERNET_CONTENS_BUTTONS_ARRAY.forEach(({ id, innerText, onclick }) => createElement("button", {
        id,
        className: "sub-options",
        innerText,
        onclick
    }, internetContentsWrapperElement))
}

const renderDigitalProgrammeList = () => {
    removeSubMenuWrapperElement()
    handleOptionsElementOnClick("digitalProgrammeList")
    console.log("Digital Programme List")
}

const renderDigitalEpg = () => {
    removeSubMenuWrapperElement()
    handleOptionsElementOnClick("digitalEpg")
    console.log("Digital EPG")
}

const renderApplications = () => {
    removeSubMenuWrapperElement()
    handleOptionsElementOnClick("applications")

    const subMenuWrapperElement = createElement("div", {
        id: ELEMENT_IDS.subMenuWrapper
    }, appElement)

    const applicationsWrapperElement = createElement("div", {
        id: ELEMENT_IDS.applicationsTabWrapper,
        className: "options-wrapper"
    }, subMenuWrapperElement)

    APPLICATIONS_BUTTONS_ARRAY.forEach(({ id, innerText, onclick }) => createElement("button", {
        id,
        className: "sub-options",
        innerText,
        onclick
    }, applicationsWrapperElement))
}

const renderRecordings = () => {
    removeSubMenuWrapperElement()
    handleOptionsElementOnClick("recordings")

    const subMenuWrapperElement = createElement("div", {
        id: ELEMENT_IDS.subMenuWrapper
    }, appElement)

    const recordingsWrapperElement = createElement("div", {
        id: ELEMENT_IDS.recordingsTabWrapper,
        className: "options-wrapper"
    }, subMenuWrapperElement)

    RECORDINGS_BUTTONS_ARRAY.forEach(({ id, innerText, onclick }) => createElement("button", {
        id,
        className: "sub-options",
        innerText,
        onclick
    }, recordingsWrapperElement))
}

const renderMedia = () => {
    removeSubMenuWrapperElement()
    handleOptionsElementOnClick("media")

    const subMenuWrapperElement = createElement("div", {
        id: ELEMENT_IDS.subMenuWrapper
    }, appElement)

    const mediaWrapperElement = createElement("div", {
        id: ELEMENT_IDS.mediaTabWrapper,
        className: "options-wrapper"
    }, subMenuWrapperElement)

    MEDIA_BUTTONS_ARRAY.forEach(({ id, innerText, onclick }) => createElement("button", {
        id,
        className: "sub-options",
        innerText,
        onclick
    }, mediaWrapperElement))
}

const renderSettings = () => {
    removeSubMenuWrapperElement()
    handleOptionsElementOnClick("settings")

    const subMenuWrapperElement = createElement("div", {
        id: ELEMENT_IDS.subMenuWrapper
    }, appElement)

    const settingsWrapperElement = createElement("div", {
        id: ELEMENT_IDS.settingsTabWrapper,
        className: "options-wrapper"
    }, subMenuWrapperElement)

    SETTINGS_BUTTON_ARRAY.forEach(({ id, innerText, onclick }) => createElement("button", {
        id,
        className: "sub-options",
        innerText,
        onclick
    }, settingsWrapperElement))
}

// DATA
const HOME_MENU_BUTTONS_ARRAY = [
    {
        id: ELEMENT_IDS.internetContentsTab,
        innerText: "Internet Contents",
        onclick: renderInternetContents
    },
    {
        id: ELEMENT_IDS.digitalProgrammeListTab,
        innerText: "Digital Programme List",
        onclick: renderDigitalProgrammeList
    },
    {
        id: ELEMENT_IDS.digitalEpgTab,
        innerText: "Digital EPG",
        onclick: renderDigitalEpg
    },
    {
        id: ELEMENT_IDS.applicationsTab,
        innerText: "Applications",
        onclick: renderApplications
    },
    {
        id: ELEMENT_IDS.recordingsTab,
        innerText: "Recordings",
        onclick: renderRecordings
    },
    {
        id: ELEMENT_IDS.mediaTab,
        innerText: "Media",
        onclick: renderMedia
    },
    {
        id: ELEMENT_IDS.settingsTab,
        innerText: "Settings",
        onclick: renderSettings
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

const RECORDINGS_BUTTONS_ARRAY = [
    {
        id: ELEMENT_IDS.titleList,
        innerText: "Title List",
        onclick: () => console.log("Title List")
    },
    {
        id: ELEMENT_IDS.timerList,
        innerText: "Timer List",
        onclick: () => console.log("Timer List"),
    },
    {
        id: ELEMENT_IDS.errorList,
        innerText: "Error List",
        onclick: () => console.log("Error List"),
    },
    {
        id: ELEMENT_IDS.manualTimerRec,
        innerText: "Manual Timer REC",
        onclick: () => console.log("Manual Timer REC"),
    },
]

const MEDIA_BUTTONS_ARRAY = [
    {
        id: ELEMENT_IDS.photo,
        innerText: "Photo",
        onclick: () => console.log("Photo"),
    },
    {
        id: ELEMENT_IDS.music,
        innerText: "Music",
        onclick: () => console.log("Music"),
    },
    {
        id: ELEMENT_IDS.video,
        innerText: "Video",
        onclick: () => console.log("Video")
    },
]

const SETTINGS_BUTTON_ARRAY = [
    {
        id: ELEMENT_IDS.systemSettings,
        innerText: "System Settings",
        onclick: () => console.log("System Settings"),
    },
    {
        id: ELEMENT_IDS.customerSupport,
        innerText: "Customer Support",
        onclick: () => console.log("Customer Support"),
    },
]
//

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

(() => {
    renderHomeMenu()
})();