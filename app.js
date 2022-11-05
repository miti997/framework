
// import Application;
import Loader from "./app/config/Loader.js";
// import Application from "/js/framework/app/Application.js";

window.load = new Loader('/js/framework');

let Application = await load.application();
// console.log(Application);
Application = new Application();
Application.loadMiddleware();
Application.addContent();
