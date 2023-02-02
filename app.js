import Application from '/app/Application.js'
import Loader from '/app/core/Loader.js'

window.$ = document
window.$$ = document.body

new Loader();
new Application();
