export default class Application {
    constructor() {
        window.firstRender = true
        this.loadMiddleware();
    }
    
    loadMiddleware() {
        load.middleware('ScopeMiddleware');
        load.middleware('RoutingMiddleware');
    }
}