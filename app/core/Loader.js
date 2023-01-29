import ErrorFactory from './ErrorFactory.js'

export default class Loader {
    constructor (root) {
        this.ROOT = root;
        window.load = this;
    }

    async load(path) {
        let imported = await import(this.ROOT + path);
        return imported.default;        
    }

    async application() {
        return await this.load('/app/Application.js');
    }

    async middleware(path) {
        try {
            let middleware = await this.load('/app/src/middleware/' + path + '.js');
            return new middleware();
        } catch (error) {
            return new ErrorFactory('Error', error.message);
        }
    }

    async config(path) {
        try {
            let routes = await this.load('/app/config/' + path + '.js');
            return routes;
        } catch (error) {
            return new ErrorFactory('Error', error.message);
        }
    }
    
    async core(path) {
        try {
            return await this.load('/app/core/' + path + '.js');
        } catch (error) {
            return new ErrorFactory('Error', error.message);
        }
    }

    async view() {
        try {
            return await this.load('/app/src/views/View.js');
        } catch (error) {
            return new ErrorFactory('Error', error.message);
        }
    }

    async component() {
        try {
            return await this.load('/app/src/components/Component.js');
        } catch (error) {
            return new ErrorFactory('Error', error.message);
        }
    }

    async template(path) {
        try {
            let template = await this.load('/app/src/views/' + path + '.js');
            return new template();
        } catch (error) {
            return new ErrorFactory('Error', error.message);
        }
    }

    async error(path, message) {
        let error = await this.load('/app/src/errors/' + path + '.js');
        return new error().render(message);
    }
}