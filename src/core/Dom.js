class Dom {
    constructor() {
    }
}

export function $() {
    return new Dom()
}

$.create = (tag, classes) => {
    const el = document.createElement(tag)
    el.classList.add(classes)
    return el;
}
