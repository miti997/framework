export default class ErrorFactory {
    constructor(errorName, message) {
        this.loadError(errorName, message);
    }

    async loadError(errorName, message) {
        let errorToRender = await load.error(errorName, message);
        return document.querySelector('main').innerHTML = errorToRender;
    }
}