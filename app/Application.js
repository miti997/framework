import Loader from '/app/core/Loader.js'

export default class Application {
    constructor() {
        window.firstRender = true
        new Loader();
        this.loadMiddleware();
    }
    
    async loadMiddleware() {
        load.middleware('RoutingMiddleware');
    }
}