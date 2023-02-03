export default class View {
    components = [];
    render(params) {
        $.querySelector('main').innerHTML = this.content(...params);
    }
    
    addComponent(componentName) {
       this.components.push(componentName);
    }
}