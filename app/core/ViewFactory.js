export default class ViewFactory {
    constructor (viewToBuild) {
        this.build(viewToBuild);
    }

    build(viewToBuild) {
        return import(viewToBuild).then(({default: View}) => {
            let view = new View();
            document.getElementById('content').innerHTML = view.render();
        }).catch(e => {
            console.log(e);
        });
    }
}