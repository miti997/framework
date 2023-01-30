export default class Component extends HTMLElement {
    constructor(shadowMode = 'open') {
        super()
        this.shadow = this.attachShadow({mode: shadowMode});
        this.generateTemplate()
        this.shadow.append(this.template.content.cloneNode(true));
    }

    generateTemplate() {
        this.template = $.createElement('template')
        this.template.innerHTML = /*html*/`
            <style>${this.shadowStyle()}</style>
            ${this.shadowContent()}
        `
    }
}