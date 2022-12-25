let Middleware = await load.core('Middleware');
let routes = await load.config('routes');

export default class RoutingMiddleware extends Middleware {
    build() {
        this.uri = window.location.pathname;
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
        for (let i = 0; i < routesLength; i++) {
            let urlToMatch = uris[i].replace(/\{\*\}/g, '[\\w\\_\\-]+');
            urlToMatch = new RegExp('^' + urlToMatch+'$');
            if (urlToMatch.test(this.uri)) {
                this.matchedRoute = routes[uris[i]];
                break
            }
        }

        return this.loadView();
    }

    loadView() {
        console.log(this.uri);
        console.log(this.matchedRoute);
        console.log(this.uri.replace('/'+this.matchedRoute+'/', ''));
    }
}