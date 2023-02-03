import View from "/app/src/views/View.js"
import "/app/src/components/todo-item.js"

export default class PageHome extends View {
    content() {
        //code for testing purposes. remove comments to simulate long load time

        // return new Promise((resolve) => {
        //     setTimeout(() => {
        //         resolve("delayed function");
        //     }, 5000);
        // });        
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
