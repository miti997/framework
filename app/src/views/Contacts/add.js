const View = await load.view();

export default class ContactAdd extends View {
    async content() {
        return `
            <div> Hello contacts add</div>
        `
    }
}
