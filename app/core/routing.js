export default class Routing {
    constructor() {
        this.routes = [];
        this.addOnClickEvent();
    }

    addRoute(route) {
        this.routes.push(route);
    }

    retrieveRoutes() {
        return this.routes;
    }

    addOnClickEvent() {
        document.addEventListener('click', this.routing);
    }

    routing = (e) => {
        let targetElement = e.target;
        let sendParams = {};
        let matchedRoute;
        let renderView;
        if (targetElement.tagName === 'A') {
            e.preventDefault();
            let uri = new URL(targetElement.href).pathname       
            let routeLength = this.routes.length;
            for (let routeCounter = 0; routeCounter < routeLength; routeCounter++) {
                let route = Object.keys(this.routes[routeCounter])[0];
                let parameters = /{.[a-zA-Z0-9-_]+}/g.exec(route);
    
                let processedRoute = new RegExp('^'+route.replace( /{.[a-zA-Z0-9-_]+}/g, "[a-zA-Z0-9-]+")+'$');
                let routeMatches = processedRoute.exec(uri);

                if (routeMatches) {
                    let nonVariableRoute = route.substring(0, route.indexOf('{'));
                    if (nonVariableRoute) {
                        uri = uri.replace(nonVariableRoute, '').split('/');
                        for (let paramCounter = 0; paramCounter < parameters.length; parameters++) {
                            sendParams[parameters[paramCounter]] = uri[paramCounter];
                        }
                    }
    
                    matchedRoute = targetElement.href;
                    renderView = `/app/src/views/${this.routes[routeCounter][route]}`;
                    break;
                } else {
                    matchedRoute = '/error/404';
                }
            }
        }
    
        if (matchedRoute) {
            history.pushState(sendParams, '', matchedRoute);
            return import(renderView)
            .then((module) => {
                module.render()
            })
            .catch(e => {
                console.log(e);
            });
        }
    }
}