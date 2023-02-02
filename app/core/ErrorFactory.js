export default class ErrorFactory {
    constructor(errorName, message) {
        window.errorThrown = true;
        this.loadError(errorName, message);
    }

    async loadError(errorName, message) {
        let errorToRender = await load.error(errorName, message);
        return $$.innerHTML = errorToRender;
    }
}