
// import Application;
import Loader from "./app/core/Loader.js";

new Loader('/js/framework');

let Application = await load.application();
Application = new Application();
Application.loadMiddleware();
Application.addContent();
