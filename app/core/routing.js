const routes = [
    {'/users' : 'users/index.js'},
    {'/users/edit/{id}' : 'users/edit.js'},
]

const routing = (e) => {
    let targetElement = e.target;
    let sendParams = {};
    let matchedRoute;
    let renderView;
    if (targetElement.tagName === 'A') {
        e.preventDefault();
        let uri = new URL(targetElement.href).pathname

        for (let routeCounter = 0; routeCounter < routes.length; routeCounter++) {
            let route = Object.keys(routes[routeCounter])[0];
            let parameters = /{.[a-zA-Z0-9-_]+}/g.exec(route);

            let processedRoute = new RegExp('^'+route.replace( /{.[a-zA-Z0-9-_]+}/g, "[a-zA-Z0-9-]+")+'$');
            let routeMatches = processedRoute.exec(uri);

            if (routeMatches) {
                let nonVariableRoute = route.substring(0, route.indexOf('{'));
                if (nonVariableRoute) {
                    uri = uri.replace(nonVariableRoute, '').split('/');
                    for (let paramCounter = 0; paramCounter < parameters.length; parameters++) {
                        sendParams[parameters[paramCounter]] = uri[paramCounter];
                    }
                }

                matchedRoute = targetElement.href;

                import(`/app/src/views/${routes[routeCounter][route]}`)
                    .then((module) => {
                        module.render()
                    })
                    .catch(e => {
                        console.log(e);
                    });
            } else {
                matchedRoute = '/error/404';
            }
        }
    }

    if (matchedRoute) {
        history.pushState(sendParams, '', matchedRoute);
    }

    // console.log(renderView);
}

document.addEventListener('click', routing);
