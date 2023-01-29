export default class Component extends HTMLElement {
    constructor() {
        super()
        this.shadow = this.attachShadow({mode: 'open'});
        this.generateTemplate()
        this.shadow.append(this.template.content.cloneNode(true));
    }

    generateTemplate() {
        this.template = document.createElement('template')
        this.template.innerHTML = /*html*/`
            <style>${this.shadowStyle()}</style>
            ${this.shadowContent()}
        `
    }
}