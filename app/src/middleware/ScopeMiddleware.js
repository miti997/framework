const Middleware = await load.core('Middleware');

export default class ScopeMiddleware extends Middleware {
    build() {
        window.scope = 'default';
        this.loadSpinner();
    }

    loadSpinner() {
        load.component(`${scope}/${scope}-spinner`);
        document.body.append(document.createElement(`${scope}-spinner`));
    }
}
