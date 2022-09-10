import ViewFactory from "/app/core/ViewFactory.js";

export default class Routing {
    constructor() {
        this.routes = [];
        this.sendParams = {};
        this.matchedRoute;
        this.renderView;
        this.addOnClickEvent();
        this.addOnLoadEvent();
    }

    addRoute(route) {
        this.routes.push(route);
    }

    retrieveRoutes() {
        return this.routes;
    }

    addOnClickEvent() {
        document.addEventListener('click', (e) => this.onClickrouting(e));
    }

    addOnLoadEvent() {
        window.onload = () => this.onLoadRouting();
    }

    onLoadRouting() {
        this.uri = new URL(window.location.href).pathname;
        this.routesItterator();
    }

    onClickrouting(e) {
        let targetElement = e.target;
       
        if (targetElement.tagName === 'A') {
            e.preventDefault();
            this.uri = new URL(targetElement.href).pathname       
            this.routesItterator();
        }
    }

    routesItterator() {
        let routeLength = this.routes.length;
        for (let routeCounter = 0; routeCounter < routeLength; routeCounter++) {
            let route = Object.keys(this.routes[routeCounter])[0];
            let parameters = /{.[a-zA-Z0-9-_]+}/g.exec(route);

            let processedRoute = new RegExp('^'+route.replace( /{.[a-zA-Z0-9-_]+}/g, "[a-zA-Z0-9-]+")+'$');
            let routeMatches = processedRoute.exec(this.uri);

            if (routeMatches) {
                let nonVariableRoute = route.substring(0, route.indexOf('{'));
                if (nonVariableRoute) {
                    let uriParams = this.uri.replace(nonVariableRoute, '').split('/');
                    for (let paramCounter = 0; paramCounter < parameters.length; parameters++) {
                        this.sendParams[parameters[paramCounter]] = uriParams[paramCounter];
                    }
                }

                this.matchedRoute = this.uri;
                this.renderView = `/app/src/views/${this.routes[routeCounter][route]}`;
                break;
            } else {
                this.matchedRoute = '/error/404';
                this.renderView = `/app/src/errors/Error404.js`;
            }
        }

        if (this.matchedRoute) {
            history.pushState(this.sendParams, '', this.matchedRoute);
            new ViewFactory(this.renderView);
        }
    }
}