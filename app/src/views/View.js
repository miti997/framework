export default class View {
    render(params) {
        $.querySelector('main').innerHTML = this.content(...params);
    }
}