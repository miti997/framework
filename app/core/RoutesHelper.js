export default class RoutesHelper {
    constructor() {
        this.routes = {}
    }

    addRoute(url, viewToRender) {
        this.routes[url] = viewToRender;
        return this;
    }

    finish() {
        return  this.routes
    }
}