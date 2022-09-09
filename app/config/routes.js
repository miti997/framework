import Routing from "/app/core/routing.js";

let routing = new Routing();

routing.addRoute({'/users' : 'users/index.js'});
routing.addRoute({'/users/edit/{id}' : 'users/edit.js'});
