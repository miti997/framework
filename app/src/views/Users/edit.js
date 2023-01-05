const View = await load.view();

export default class UsersEdit extends View {
    content(id) {
        return `
            <div> Hello edit user ${id}</div>
        `
    }
}
