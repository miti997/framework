const View = await load.view();

export default class PageHome extends View {
    async content() {
        //code for testing purposes. remove comments to simulate long load time

        // return new Promise((resolve) => {
        //     setTimeout(() => {
        //         resolve("delayed function");
        //     }, 5000);
        // });

        load.components('todo-item')
        return/*html*/`
            <div>Hello world</div>
            <todo-item checked>
                Todo 1
                <div slot="description">ceva</div>
            </todo-item>
            <todo-item>Todo 2</todo-item>
            <todo-item>Todo 3</todo-item>
        `
    }
}
