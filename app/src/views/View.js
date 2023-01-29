export default class View {
    async render(content) {
        document.getElementById('content').innerHTML = content;
    }

    addComponent(componentName) {
        import(`/app/src/components/${componentName}.js`);
    }
}