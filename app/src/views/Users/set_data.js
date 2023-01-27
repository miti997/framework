const View = await load.view();

export default class UsersSetData extends View {
    async content(userId, valueToChange) {
        return/*html*/`
            <div> Hello users ${userId} data ${valueToChange}</div>
        `
    }
}
