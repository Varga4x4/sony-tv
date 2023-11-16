const ELEMENT_IDS = {
    app: "app",
    subMenu: "sub-menu",
    internetContentsTab: "internet-contents-tab",
    digitalProgrammeListTab: "digital-programme-list-tab",
    digitalEpgTab: "digital-epg-tab",
    applicationsTab: "applications-tab",
    recordingsTab: "recordings-tab",
    mediaTab: "media-tab",
    settingsTab: "settings-tab",
    screenWrapper: "screen-wrapper",
    screenText: "screen"
}

// ELEMENTS
const appElement = document.getElementById(ELEMENT_IDS.app)
const mainElement = document.querySelector("main")
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

    const subMenuElement = createElement("div", {
        id: ELEMENT_IDS.subMenu,
        className: "options-wrapper2"
    }, mainElement)

    const elementHeight = "40.67px"
    const gapHeight = "20px"

    subMenuElement.style.top = `calc(${index + 1} * ${elementHeight} + ${index + 1} * ${gapHeight})`

    options.forEach(({ innerText, onclick }) => createElement("button", {
        className: "sub-options",
        innerText,
        onclick
    }, subMenuElement))
}

const renderNewScreen = () => {
    removeSubMenuElement()

    mainElement.remove()

    const screenWrapperElement = createElement("div", {
        id: ELEMENT_IDS.screenWrapper
    }, appElement)

    const screenText = createElement("p", {
        id: ELEMENT_IDS.screenText,
        innerText: "???"
    }, screenWrapperElement)
}

// DATA
const HOME_MENU_BUTTONS_ARRAY = [
    {
        id: ELEMENT_IDS.internetContentsTab,
        param2: "internetContents",
        innerText: "Internet Contents",
        options: [
            {
                innerText: "Amazon Prime Video",
                onclick: () => console.log("Amazon Prime Video")
            },
            {
                innerText: "Netflix",
                onclick: () => console.log("Netflix")
            },
            {
                innerText: "BBC iPlayer",
                onclick: () => console.log("BBC iPlayer")
            },
            {
                innerText: "YouTube",
                onclick: () => console.log("YouTube")
            },
        ]
    },
    {
        id: ELEMENT_IDS.digitalProgrammeListTab,
        innerText: "Digital Programme List",
        onclick: renderNewScreen
    },
    {
        id: ELEMENT_IDS.digitalEpgTab,
        innerText: "Digital EPG",
        onclick: renderNewScreen
    },
    {
        id: ELEMENT_IDS.applicationsTab,
        param2: "applications",
        innerText: "Applications",
        options: [
            {
                innerText: "Photo Sharing Plus",
                onclick: () => console.log("Photo Sharing Plus"),
            },
            {
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
                innerText: "Title List",
                onclick: () => console.log("Title List")
            },
            {
                innerText: "Timer List",
                onclick: () => console.log("Timer List"),
            },
            {
                innerText: "Error List",
                onclick: () => console.log("Error List"),
            },
            {
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
                innerText: "Photo",
                onclick: () => console.log("Photo"),
            },
            {
                innerText: "Music",
                onclick: () => console.log("Music"),
            },
            {
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
                innerText: "System Settings",
                onclick: () => console.log("System Settings"),
            },
            {
                innerText: "Customer Support",
                onclick: () => console.log("Customer Support"),
            },
        ]
    },
]
//

const renderHomeMenu = () => {
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