const View = await load.view();

export default class DefaultLoadingSpinner extends View {
    async content() {
        this.addComponent('loading-spinner')
        return/*html*/`
            <loading-spinner></loading-spinner>
        `
    }
}
