export default class View {
    async render(content) {
        $.querySelector('main').innerHTML = content;
    }
}