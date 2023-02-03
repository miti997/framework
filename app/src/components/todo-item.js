/**
 * This function was created for testing purposes. It will probably be removed in the future
 * It contains, at the time of creation, all possible functions a component can have
 */

import Component from '/app/src/components/Component.js'

export default customElements.define('todo-item', class TodoItem extends Component {
    constructor() {
        super()
    }

    static get observedAttributes() {
        return ['checked']
    }

    shadowContent() {
        return /*html*/`
            <label>
                <input type="checkbox">
                <slot></slot>
                <slot name="description"><slot>
            </label>
        `;
    }

    shadowStyle() {
        return /*css*/`
            [name="description"] {
                color: blue
            }
        `
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'checked') {
            this.shadow.querySelector('[type="checkbox"]').setAttribute('checked', true)
        }
    }

    connectedCallback() {
    }

    disconnectedCallback() {
    }
})
