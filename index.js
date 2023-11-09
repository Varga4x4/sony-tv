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
        Object.entries(attrObj).forEach(([key, value]) => newElement[key] = value)
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

    HOME_MENU_BUTTONS_ARRAY.forEach(({ id, innerText }) => {
        createElement("button", {
            id: id,
            className: "home-options",
            innerText: innerText
        }, mainElement)
    })
}
//

(() => {
    renderHomeMenu()
})();