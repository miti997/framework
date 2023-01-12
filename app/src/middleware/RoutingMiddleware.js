const Middleware = await load.core('Middleware');
const routes = await load.config('routes');

export default class RoutingMiddleware extends Middleware {
    build() {
        this.uri = window.location.pathname;
        this.params = [];
        this.goOverRoutes(false);
        this.onClickEvent();
        window.addEventListener('popstate', () => {
            console.log('here')
            this.uri = window.location.pathname;
            this.goOverRoutes(false);
        });
    }

    onClickEvent() {
        document.addEventListener('click', (e) => {
            let targetElement = e.target;

            if (targetElement.tagName === 'A' && targetElement.hasAttribute('data-link')) {
                e.preventDefault();
                this.uri = new URL(targetElement.href).pathname;
                this.goOverRoutes();
            }
        });
    }

    goOverRoutes(pushState = true) {
        const uris = Object.keys(routes);
        let routesLength = uris.length

        for (let i = 0; i < routesLength; i++) {
            let urlToMatch = uris[i].replace(/\{\*\}/g, '[\\w\\_\\-]+');
            urlToMatch = new RegExp('^' + urlToMatch+'$');
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

    async loadView(pushState) {
        let view = await load.template(this.matchedView);
        await view.render(view.content(...this.params));
        if (pushState) history.pushState({}, null, this.uri);  
    }
}