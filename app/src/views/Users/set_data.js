import View from "/app/src/views/View.js";

export default class UsersSetData extends View {
    content(userId, valueToChange) {
        return/*html*/`
            <div> Hello users ${userId} data ${valueToChange}</div>
        `
    }
};
