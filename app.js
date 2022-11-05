
// import Application;
import Loader from "./app/config/Loader.js";

window.load = new Loader('/js/framework');

let Application = await load.application();
Application = new Application();
Application.loadMiddleware();
Application.addContent();
