import {$} from "@core/Dom";

export class Excel {
    constructor(selector, options) {
        this.$el = $(selector);
        this.components = options.components || []
    }
    
    getRoot() {
        const $root = $.create('div', 'excel')
        this.components = this.components.map(Component => {
            const $el = $.create('div', Component.className)
            const newComponent = new Component($el)
            $el.html(newComponent.toHTML())
            $root.append($el)
            return newComponent
        })
        return $root;
    }
    render() {
        this.$el.append(this.getRoot())
        this.components.forEach(Component => {
            Component.init()
        })
    }
}
