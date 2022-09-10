export default class ViewFactory {
    constructor (viewToBuild) {
        this.build(viewToBuild);
    }

    build(viewToBuild) {
        console.log(viewToBuild);
        return import(viewToBuild).then(({default: View}) => {
            let view = new View();
            console.log(view)
            document.getElementById('content').innerHTML = view.render();
        }).catch(e => {
            console.log(e);
        });
    }
}