import RoutingMiddleware from "/app/src/middleware/RoutingMiddleware.js";
export default class Application {
    addContent() {
        document.body = document.createElement("body");
        document.body.innerHTML = `
        <ul>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/users">Users</a></li>
            <li><a href="/users/add">Add user</a></li>
            <li><a href="/users/edit/2">Edit User 2</a></li>
        </ul>
        <div id="content"></div>
        `;
    }

    loadMiddleware() {
        new RoutingMiddleware();
    }
}