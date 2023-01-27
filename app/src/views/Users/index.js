const View = await load.view();

export default class UsersIndex extends View {
    async content() {
        return/*html*/`
            <div> Hello users index</div>
        `
    }
}