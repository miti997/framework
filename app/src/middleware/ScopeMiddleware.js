const Middleware = await load.core('Middleware');

export default class ScopeMiddleware extends Middleware {
    build() {
        window.scope = 'default';
        this.loadSpinner();
    }

    loadSpinner() {
        load.components(`${scope}/${scope}-spinner`);
        $$.append($.createElement(`${scope}-spinner`));
    }
}
