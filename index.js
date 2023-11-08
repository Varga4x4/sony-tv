const HOME_MENU_BUTTONS_ARRAY = [
    {
        id: "internet-contents",
        innerText: "Internet Contents"
    },
    {
        id: "digital-programme-list",
        innerText: "Digital Programme List"
    },
    {
        id: "digital-epg",
        innerText: "Digital EPG"
    },
    {
        id: "applications",
        innerText: "Applications"
    },
    {
        id: "recordings",
        innerText: "Recordings"
    },
    {
        id: "media",
        innerText: "Media"
    },
    {
        id: "settings",
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
        createElement("button", {
            id: option.id,
            className: "home-options",
            innerText: option.innerText
        }, mainElement)
    })
}
//

(() => {
    renderHomeMenu()
})();