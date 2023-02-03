import View from "/app/src/views/View.js"

export default class UsersEdit extends View {
    content(id) {
        return/*html*/`
            <div> Hello edit user ${id}</div>
        `
    }
}
