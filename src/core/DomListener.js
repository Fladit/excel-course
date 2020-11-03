import {capitalize} from "@core/utils";

export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error("No $root provided for DomListener")
        }
        this.$root = $root
        this.listeners = listeners
    }
    initListeners() {
        this.listeners.forEach(listener => {
            const methodName = getMethodName(listener)
            if (!this[methodName]) {
                throw Error(`Method ${methodName} in ${this.name || ""} 
                is not exist!`);
            }
            console.log(this[methodName])
            this.$root.on(listener, this[methodName].bind(this))
        })
    }
}

function getMethodName(methodName) {
    return "on" + capitalize(methodName)
}

