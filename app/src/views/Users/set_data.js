const View = await load.view();

export default class UsersSetData extends View {
    content(userId, valueToChange) {
        return `
            <div> Hello users ${userId} data ${valueToChange}</div>
        `
    }
}
