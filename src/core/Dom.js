class Dom {
    constructor(selector) {
        typeof selector === "string"?
            this.$el = document.querySelector(selector)
            :this.$el = selector
    }

    html(html = "") {
        // getter
        if (!html) {
            return this.$el.innerHTML
        }
        // setter
        this.$el.innerHTML = html
        return this
    }

    clear() {
        this.$el.innerHTML = ""
        return this
    }

    on(targetType, callback) {
        this.$el.addEventListener(targetType, callback);
    }

    off(targetType, callback) {
        this.$el.removeEventListener(targetType, callback)
    }

    append(node) {
        if (node instanceof Dom) {
            node = node.$el
        }
        this.$el.append(node)
        return this
    }
}

    function $(selector) {
        return new Dom(selector)
}

$.create = (tag, classes) => {
    const el = document.createElement(tag)
    el.classList.add(classes)
    return $(el);
}

export {$}
