export default class Application {
    addContent() {
        document.body = document.createElement("body");
        document.body.innerHTML = /*html*/`
        <ul>
            <li><a href="/" data-link>Home</a></li>
            <li><a href="/contact" data-link>Contact</a></li>
            <li><a href="/users" data-link>Users</a></li>
            <li><a href="/users/add" data-link>Add user</a></li>
            <li><a href="/users/edit/2" data-link>Edit User 2</a></li>
            <li><a href="/users/set_data/3/3" data-link>User set data</a></li>
        </ul>
        <div id="content"></div>
        `;
    }

    async loadMiddleware() {
        load.middleware('RoutingMiddleware');
    }
}