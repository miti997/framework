export default class ViewFactory {
    constructor(path, params) {
        this.createView(path, params);
    }

    async createView(path, params) {
        let template = await load.template(path);
        template.addComponent('loading-spinner');
        template.render(`<loading-spinner></loading-spinner>`);
        template.render(await template.content(...params));
    }
}