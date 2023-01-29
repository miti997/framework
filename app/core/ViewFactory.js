export default class ViewFactory {
    build(path, params = []) {
        if (firstRender) {
            load.component(`${scope}/${scope}-header`);
            load.component(`${scope}/${scope}-footer`);
            document.body.append(document.createElement(`${scope}-header`));
            document.body.append(document.createElement(`main`));
            document.body.append(document.createElement(`${scope}-footer`));
        }
        this.createView(path, params);
    }

    async createView(path, params) {
        let template = await load.template(path);
        template.render(await template.content(...params));
    }
}