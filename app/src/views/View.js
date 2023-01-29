export default class View {
    async render(content) {
        document.querySelector('main').innerHTML = content;
    }

    addComponent(componentName) {
        import(`/app/src/components/${componentName}.js`);
    }
}