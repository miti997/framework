let Middleware = await load.core('Middleware');
let Routing = await load.core('Routing');

export default class RoutingMiddleware extends Middleware {
    build() {
        Routing = new Routing();
        Routing.addRoute({'/users' : 'users/index'});
        Routing.addRoute({'/users/edit/{id}' : 'users/edit'});
        Routing.addRoute({'/users/add' : 'users/add'});
    }
}