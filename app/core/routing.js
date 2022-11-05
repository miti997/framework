const ViewFactory = await load.core('ViewFactory');

export default class Routing {
    constructor() {
        this.routes = [];
        this.sendParams = {};
        this.matchedRoute;
        this.renderView;
        this.viewToRender;
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
        document.addEventListener('click', (e) => {
            let targetElement = e.target;
       
            if (targetElement.tagName === 'A') {
                e.preventDefault();
                this.uri = new URL(targetElement.href).pathname       
                this.loadTemplates()
            }
        });
    }

    addOnLoadEvent() {
        window.onload = () => {
            this.uri = new URL(window.location.href).pathname;
            this.loadTemplates();
        }
    }

    loadTemplates() {
        this.routesItterator();
        if (this.renderView) {
            let BuildView = new ViewFactory()
            BuildView.renderTemplate(this.viewToRender);
            history.pushState(this.sendParams, '', this.uri);
        } else {
            let BuildError = new ViewFactory()
            BuildError.renderError('Error404')
            history.pushState('', '', '/404');
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

                this.renderView = true;
                this.viewToRender = this.routes[routeCounter][route]
                break;
            } else {
                this.renderView = false;                
            }
        }
    }
}