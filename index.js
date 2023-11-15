const ELEMENT_IDS = {
    app: "app",
    subMenu: "sub-menu",
    internetContentsTab: "internet-contents-tab",
    digitalProgrammeListTab: "digital-programme-list-tab",
    digitalEpgTab: "digital-epg-tab",
    applicationsTab: "applications-tab",
    photoSharingPlus: "photo-sharing-plus",
    photoFrameMode: "photo-frame-mode",
    recordingsTab: "recordings-tab",
    titleList: "title-list",
    timerList: "timer-list",
    errorList: "error-list",
    manualTimerRec: "manual-timer-rec",
    mediaTab: "media-tab",
    photo: "photo",
    music: "music",
    video: "video",
    settingsTab: "settings-tab",
    systemSettings: "system-settings",
    customerSupport: "customer-support",
}

// ELEMENTS
const appElement = document.getElementById(ELEMENT_IDS.app)
//

//GETTERS
const getMainElement = () => document.querySelector("main")
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
    const tabNameTabButtonIdValue = ELEMENT_IDS[`${tabName}Tab`]
    Object.entries(ELEMENT_IDS)
        .filter(entry => entry[0].endsWith('Tab'))
        .map(entry => entry[1])
        .forEach((tabId) => document.getElementById(tabId).disabled = tabId === tabNameTabButtonIdValue)
}

const removeSubMenuElement = () => document.getElementById(ELEMENT_IDS.subMenu)?.remove()
//

const renderSubMenu = (options, param2, index) => {
    removeSubMenuElement()
    handleOptionsElementOnClick(param2)

    const mainElement = getMainElement()

    const subMenuElement = createElement("div", {
        id: ELEMENT_IDS.subMenu,
        className: "options-wrapper2"
    }, mainElement)

    const elementHeight = "40.67px"
    const gapHeight = "20px"

    subMenuElement.style.top = `calc(${index + 1} * ${elementHeight} + ${index + 1} * ${gapHeight})`

    options.forEach(({ id, innerText, onclick }) => createElement("button", {
        id,
        className: "sub-options",
        innerText,
        onclick
    }, subMenuElement))
}


// TODO: make 1 function from the 2
const renderDigitalProgrammeList = () => {
    removeSubMenuElement()
    handleOptionsElementOnClick("digitalProgrammeList")
    console.log("Digital Programme List")
}

const renderDigitalEpg = () => {
    removeSubMenuElement()
    handleOptionsElementOnClick("digitalEpg")
    console.log("Digital EPG")
}

// DATA
const HOME_MENU_BUTTONS_ARRAY = [
    {
        id: ELEMENT_IDS.internetContentsTab,
        param2: "internetContents",
        innerText: "Internet Contents",
        options: [
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
        param2: "applications",
        innerText: "Applications",
        options: [
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
    },
    {
        id: ELEMENT_IDS.recordingsTab,
        param2: "recordings",
        innerText: "Recordings",
        options: [
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
    },
    {
        id: ELEMENT_IDS.mediaTab,
        param2: "media",
        innerText: "Media",
        options: [
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
    },
    {
        id: ELEMENT_IDS.settingsTab,
        param2: "settings",
        innerText: "Settings",
        options: [
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
    },
]
//

const renderHomeMenu = () => {
    const mainElement = createElement("main", undefined, appElement)

    createElement("p", {
        innerText: "HOME"
    }, mainElement)

    HOME_MENU_BUTTONS_ARRAY.forEach(({ id, innerText, options, param2, onclick }, index) => createElement("button", {
        id,
        className: "home-options",
        innerText,
        onclick: () => {

            if (onclick) {
                onclick()
            }

            if (options && param2) {
                renderSubMenu(options, param2, index)
            }

        }
    }, mainElement))
}

(() => {
    renderHomeMenu()
})();