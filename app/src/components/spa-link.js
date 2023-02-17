import Component from '/app/src/components/Component.js'

customElements.define('spa-link', class SpaLink extends Component {
    constructor() {
        super('closed')
    }

    static get observedAttributes() {
        return ['to']
    }

    shadowContent() {
        return /*html*/`
            <a><slot></slot></a>
        `
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'to') {
            this.select('a').setAttribute('href', newValue)
        }
    }
})