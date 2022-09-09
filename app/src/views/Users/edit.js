import View from "/app/src/views/View.js";

export const render = (view = new View()) => {
    const content = `
        <div> Hello users edit</div>
    `;
    view.renderContent(content);
}
