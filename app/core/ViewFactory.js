export default class ViewFactory {
    async build(path, params = []) {
        this.addSpinner();
        if (firstRender) {
           await this.generateBody();
           firstRender = false;
        }
        await this.createView(path, params);
        this.removeSpinner()
    }

    async createView(path, params) {
        let Template = await import(`/app/src/views/${path}.js`);
        Template = new Template.default().render(params);
    }

    removeSpinner() {
        $.querySelector(`${scope}-spinner`).remove();
    }

    async addSpinner() {
        await import(`/app/src/components/${scope}/${scope}-spinner.js`);
        $$.append($.createElement(`${scope}-spinner`));
    }

    async generateBody() {
        await import(`/app/src/components/${scope}/${scope}-header.js`);
        await import(`/app/src/components/${scope}/${scope}-footer.js`);
      
        $$.append($.createElement(`${scope}-header`));
        $$.append($.createElement(`main`));
        $$.append($.createElement(`${scope}-footer`));
        firstRender = false;
    }
}