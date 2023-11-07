const HOME_MENU_BUTTONS_ARRAY = [
    {
        id: "internet-contents",
        className: "home-options",
        innerText: "Internet Contents"
    },
    {
        id: "digital-programme-list",
        className: "home-options",
        innerText: "Digital Programme List"
    },
    {
        id: "digital-epg",
        className: "home-options",
        innerText: "Digital EPG"
    },
    {
        id: "applications",
        className: "home-options",
        innerText: "Applications"
    },
    {
        id: "recordings",
        className: "home-options",
        innerText: "Recordings"
    },
    {
        id: "media",
        className: "home-options",
        innerText: "Media"
    },
    {
        id: "settings",
        className: "home-options",
        innerText: "Settings"
    },
]

const ELEMENT_IDS = {
    // HOME_MENU
    internetContents: "internet-contents",
    digitalProgrammeList: "digital-programme-list",
    digitalEpg: "digital-epg",
    applications: "applications",
    recordings: "recordings",
    media: "media",
    settings: "settings",
    //
}

// ELEMENTS
const appElement = document.getElementById("app")
//

// HELPERS
const createElement = (tagType, attrObj, parentElement) => {
    if (!tagType) {
        throw new Error("Error 2");
    }

    const newElement = document.createElement(tagType)

    if (attrObj) {
        Object.entries(attrObj).forEach((entry) => {
            newElement[entry[0]] = entry[1]
        })
    }

    if (parentElement) {
        parentElement.append(newElement)
    }

    return newElement
}
//

// RENDER_HOME_MENU
const renderHomeMenu = () => {
    const mainElement = createElement("main", undefined, appElement)

    createElement("p", {
        innerText: "HOME"
    }, mainElement)

    HOME_MENU_BUTTONS_ARRAY.forEach((option) => {
        const homeMenuOptionsButtonElement = createElement("button", {
            id: option.id,
            className: option.className,
            innerText: option.innerText
        }, mainElement)
    })
}
//

(() => {
    renderHomeMenu()
})();