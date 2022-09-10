import Routing from "/app/core/Routing.js";
import Middleware from "/app/core/Middleware.js";

export default class RoutingMiddleware extends Middleware {
    build() {
        let routing = new Routing();
        routing.addRoute({'/users' : 'users/index.js'});
        routing.addRoute({'/users/edit/{id}' : 'users/edit.js'});
    }
}