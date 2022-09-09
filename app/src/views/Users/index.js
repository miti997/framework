import View from "/app/src/views/View.js";

export const render = (view = new View()) => {
    const content = `
        <div> Hello users index</div>
    `;
    view.renderContent(content);
}
