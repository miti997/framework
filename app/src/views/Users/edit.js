const View = await load.view();

export default class UsersEdit extends View {
    render(id) {
        return `
            <div> Hello edit user ${id}</div>
        `
    }
}
