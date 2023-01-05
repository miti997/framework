export default class View {
    async render(content) {
        document.getElementById('content').innerHTML = content;
    }
}