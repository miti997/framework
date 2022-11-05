export default class Loader {
    constructor (root) {
        this.ROOT = root;
    }

    async load(path) {
        try {
            let imported = await import(this.ROOT + path);
            return imported.default
        } catch (error) {
            console.log(error)
        }   
        
    }

    async application() {
        return await this.load('/app/Application.js');
    }

    async middleware(path) {
        let middleware = await this.load('/app/src/middleware/' + path + '.js');
        return new middleware();
    }

    async core(path) {
        return await this.load('/app/core/' + path + '.js');
    }

    async view() {
        return await this.load('/app/src/views/View.js');
       
    }

    async template(path) {
        let template = await this.load('/app/src/views/' + path + '.js');
        return new template().render();
    }

    async error(path) {
        let error = await this.load('/app/src/errors/' + path + '.js');
        return new error().render();
    }
}