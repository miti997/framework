const View = await load.view();

export default class UserAdd extends View {
    async content() {
        return `
            <div> Hello users add</div>
        `
    }
}
