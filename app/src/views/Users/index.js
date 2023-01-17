const View = await load.view();

export default class UsersIndex extends View {
    async content() {
        return `
            <div> Hello users index</div>
        `
    }
}