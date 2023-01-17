const View = await load.view();

export default class UsersEdit extends View {
    async content(id) {
        return `
            <div> Hello edit user ${id}</div>
        `
    }
}
