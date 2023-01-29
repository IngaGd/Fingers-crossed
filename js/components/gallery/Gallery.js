class Gallery {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = document.querySelector(selector);
    }
}

export { Gallery };
