export default class Application {
    constructor() {
        window.firstRender = true
        this.loadMiddleware();
    }
    
    async loadMiddleware() {
        load.middleware('ScopeMiddleware');
        load.middleware('RoutingMiddleware');
    }
}