export default class View {
    async renderContent(content) {
        document.getElementById('content').innerHTML = content;
    }
}