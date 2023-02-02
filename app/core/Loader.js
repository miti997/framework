import ErrorFactory from './ErrorFactory.js'

export default class Loader {
    constructor (root = '') {
        this.ROOT = root;
        window.load = this;
    }

    async load(path) {
        try {
            let imported = await import(this.ROOT + path);
            return imported.default;
        } catch (error) {
            return new ErrorFactory('Error', error.message);
        }   
    }

    async middleware(path) {
        let middleware = await this.load('/app/src/middleware/' + path + '.js');
        return new middleware();
    }

    config(path) {
        return this.load('/app/config/' + path + '.js');
    }
    
    async core(path) {
        return this.load('/app/core/' + path + '.js');
    }

    async view() {
        return this.load('/app/src/views/View.js');
    }

    async component() {
        return this.load(`/app/src/components/Component.js`);
    }

    async components(...paths) {
        let lengthPath = paths.length;
        for (let i = 0; i < lengthPath; i++) {
            this.load(`/app/src/components/${paths[0]}.js`);
        }
    }

    template(path) {
        let template =  this.load('/app/src/views/' + path + '.js');
        return template;
    }

    async error(path, message) {
        let error = await this.load('/app/src/errors/' + path + '.js');
        return new error().render(message);
    }
}