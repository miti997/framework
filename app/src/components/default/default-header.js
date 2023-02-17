import Component from '/app/src/components/Component.js';
import '/app/src/components/spa-link.js';

customElements.define('default-header', class DefaultHeader extends Component {
    constructor() {
        super()
    }

    shadowContent() {
        return /*html*/`
            <ul>
                <li><spa-link to="/">Home</spa-link></li>
                <li><spa-link to="/contact">Contact</spa-link></li>
                <li><spa-link to="/users">Users</spa-link></li>
                <li><spa-link to="/users/add">Add user</spa-link></li>
                <li><spa-link to="/users/edit/2">Edit User 2</spa-link></li>
                <li><spa-link to="/users/set_data/3/3">User set data</spa-link></li>
            </ul>
        `;
    }
});