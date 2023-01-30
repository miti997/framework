export default class ViewFactory {
    build(path, params = []) {
        if (!firstRender) {
           this.addSpinner();
        } else {
           this.generateBody();
        }
        this.createView(path, params);
    }

    async createView(path, params) {
        let Template = await load.template(path);
        Template = new Template();
        Template.render(await Template.content(...params));
        $.querySelector(`${scope}-spinner`).remove();
    }

    addSpinner() {
        load.components(`${scope}/${scope}-spinner`);
        $$.append($.createElement(`${scope}-spinner`));
    }

    generateBody() {
        load.components(
            `${scope}/${scope}-header`,
            `${scope}/${scope}-footer`,
        );

        $$.append($.createElement(`${scope}-header`));
        $$.append($.createElement(`main`));
        $$.append($.createElement(`${scope}-footer`));
        firstRender = false;
    }
}