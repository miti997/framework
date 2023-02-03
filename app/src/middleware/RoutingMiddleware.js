import routes from '/app/config/routes.js';
import ViewFactory from '/app/core/ViewFactory.js';

export default class RoutingMiddleware {
    build() {
        window.scope = 'default';
        this.uri = window.location.pathname;
        this.params = [];
        this.ViewFactory = new ViewFactory();
        this.goOverRoutes(false);
        this.onClickEvent();
        this.addWindowPopstate()
    }
    
    addWindowPopstate() {
        window.addEventListener('popstate', () => {
            this.uri = window.location.pathname;
            this.goOverRoutes(false);
        });
    }

    onClickEvent() {
        $.addEventListener('click', (e) => {
            let target = e.composedPath()[0];
            if (target.tagName === 'A' && target.hasAttribute('data-link')) {
                e.preventDefault();
                this.uri = new URL(target.href).pathname;
                this.goOverRoutes();
            }
        });
    }

    goOverRoutes(pushState = true) {
        const uris = Object.keys(routes);
        let routesLength = uris.length

        for (let i = 0; i < routesLength; i++) {
            let urlToMatch = new RegExp('^' + uris[i].replace(/\{\*\}/g, '[\\w\\_\\-]+')+'$');
            if (urlToMatch.test(this.uri)) {
                this.matchedRoute = uris[i];
                this.matchedView = routes[uris[i]];
                this.extractParamsMatchedRoute();
                return this.loadView(pushState);
            }
        }

        this.extractParamsDefault();
        return this.loadView(pushState);
    }

    extractParamsDefault() {
        let uriArray = this.uri.split('/')
        if (uriArray.length >= 3) {
            this.matchedView = `${uriArray[1]}/${uriArray[2]}`;
        } else {
            this.matchedView = `${uriArray[1]}/index`
        }
        
        this.params = uriArray.splice(3);
    }

    extractParamsMatchedRoute() {
        let regex = new RegExp('\{.*}');
        let params = this.uri.replace(this.matchedRoute.replace(regex, ''), '');
        if (params !== '') {
            this.params = params.split('/');
        }
    }

    loadView(pushState) {
        this.ViewFactory.build(this.matchedView, this.params);
        if (pushState) history.pushState({}, null, this.uri);  
    }
}