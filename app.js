import RountingMiddleware from '/app/src/middleware/RoutingMiddleware.js';
import '/app/config/routes.js';
import '/app/core/ViewFactory.js';
import '/app/src/components/Component.js';

window.$ = document;
window.$$ = document.body;
window.firstRender = true;

new RountingMiddleware().build();
