const View = await load.view();

export default class PageHome extends View {
    async content() {
        return/*html*/`
            <div> Hello home </div>
        `
    }
}
