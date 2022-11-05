export default class ViewFactory {
    async renderTemplate(view) {
        let viewToRender = await load.template(view);
        return document.getElementById('content').innerHTML = viewToRender;
    }

    async renderError(error) {
        let errorToRender = await load.error(error);
        return document.getElementById('content').innerHTML = errorToRender;
    }
}