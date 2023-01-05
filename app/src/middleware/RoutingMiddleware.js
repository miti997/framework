const Middleware = await load.core('Middleware');
const routes = await load.config('routes');

export default class RoutingMiddleware extends Middleware {
    build() {
        this.uri = window.location.pathname;
        this.params = [];
        this.goOverRoutes();
        this.onClickEvent();
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
    goOverRoutes() {
        const uris = Object.keys(routes);
        let routesLength = uris.length
        this.matchedRoute = this.uri;
        this.matchedView = this.uri;
        for (let i = 0; i < routesLength; i++) {
            let urlToMatch = uris[i].replace(/\{\*\}/g, '[\\w\\_\\-]+');
            urlToMatch = new RegExp('^' + urlToMatch+'$');
            if (urlToMatch.test(this.uri)) {
                this.matchedRoute = uris[i];
                this.matchedView = routes[uris[i]];
                break
            }
        }

        this.extractParams();
        return this.loadView();
    }

    extractParams() {
        let regex = new RegExp('\{.*}');
        let params = this.uri.replace(this.matchedRoute.replace(regex, ''), '');
        if (params !== '') {
            this.params = params.split('/');
        }
    }

    async loadView() {
        history.pushState({}, null, this.uri);  
        let view = await load.template(this.matchedView);
        await view.render(view.content(...this.params));
    }
}