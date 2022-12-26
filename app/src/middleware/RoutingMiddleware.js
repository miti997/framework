const Middleware = await load.core('Middleware');
let ViewFactory = await load.core('ViewFactory');
const routes = await load.config('routes');

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
console.log('test');
        return this.loadView();
    }

    async loadView() {
        history.pushState({}, null, this.uri);

        let params = this.uri.replace('/'+this.matchedRoute+'/', '');
        let BuildView  = new ViewFactory();
        await BuildView.renderTemplate(this.matchedRoute);
        // console.log(this.uri);
        // console.log(this.matchedRoute);
        // console.log(this.uri.replace('/'+this.matchedRoute+'/', ''));
    }
}