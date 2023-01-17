const View = await load.view();

export default class PageHome extends View {
    async content() {
        return `
            <div> Hello home </div>
        `
    }
}
