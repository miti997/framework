export default class ViewFactory {
    constructor(path, params) {
        this.createView(path, params);
    }

    async createView(path, params) {
        let template = await load.template(path);
        template.render(this.loading());
        template.render(await template.content(...params));
    }

    loading() {
        return/*html*/`
            <style>
                .spinner-wrapper {
                    --spinner-start-color: #0f37d9;
                    --spinner-end-color: #05b5b5;
                    --spinner-backgroud-color: #dde1ed;
                    background-color: var(--spinner-backgroud-color);
                    top: 0;
                    left: 0;
                    position: absolute;
                    box-sizing:border-box;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 100vh;
                    text-align: center;
                    font-size: 2rem;
                }
                .spinner {
                    position: absolute;
                    width: 10rem;
                    height: 10rem;
                    border: 10px solid transparent;
                    box-shadow: 1px 8px 2px var(--spinner-start-color);  
                    border-radius: 50%;
                    animation: rotate 1.5s linear infinite 
                }
                @keyframes rotate {
                    50% {
                        transform: rotate(180deg);
                        box-shadow: 1px 8px 2px var(--spinner-end-color);
                    }
                    100% {
                        transform: rotate(360deg);
                        box-shadow: 1px 8px 2px var(--spinner-start-color);
                    }
                }
            </style>
            <div class="spinner-wrapper">
                <div class="spinner"></div>
                <div>Loading...</div>
            </div>
        `
    }
}