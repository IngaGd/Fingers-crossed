import { IsValid } from '../is-valid/IsValid.js';

class Gallery {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;

        // sukodinti sita:
        this.size = {
            min: 3,
            max: 6,
        };

        this.rendering = {
            strategy: 'img',
            order: 'acd',
        };

        this.dataForRendering = [];

        this.init();
    }

    init() {
        if (!this.isValidSelector() || !this.isValidData) {
            return false;
        }

        this.filterDataForRendering();
        this.render();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string' || this.selector === '') {
            return false;
        }

        this.DOM = document.querySelector(this.selector);
        return !!this.DOM; // !! - pavyko, ar nepavyko rasti
    }

    isValidData() {
        // tikrinam, ar objektas is galleryData atejo validus
        if (!IsValid.object(this.data)) {
            return false;
        }

        // validuojam this.data.size ...
        //overidinam default reiksmas:
        const { size } = this.data; //destrukturizuojam
        if (IsValid.object(size)) {
            const { min, max } = size; //destrukturizuojam vel
            if (IsValid.positiveInteger(min)) {
                this.size.min = min;
            }
            if (IsValid.positiveInteger(max)) {
                this.size.max = max;
            }
        }

        // validuojam this.data.rendering ...
        const { rendering } = this.data; //destrukturizuojam
        if (IsValid.object(rendering)) {
            const { strategy, order } = rendering; //destrukturizuojam vel
            if (IsValid.nonEmptyString(strategy)) {
                this.rendering.strategy = strategy;
            }
            if (IsValid.nonEmptyString(order)) {
                this.rendering.order = order;
            }
        }

        // validuojam this.data.content ...
        if (!IsValid.nonEmptyArray(this.data.content)) {
            return false;
        }

        return true;
    }

    filterDataForRendering() {
        const { max } = this.size;
        const { strategy, order } = this.rendering;

        switch (strategy) {
            case 'img':
                this.dataForRendering = this.filterDataByImg(order);
                break;
            default:
                this.dataForRendering = this.data.content;
                break;
        }

        this.dataForRendering = this.dataForRendering.slice(0, max);
    }

    filterDataByImg(order) {
        const dataCopy = [...this.data.content];
        dataCopy.sort((a, b) =>
            a.img > b.img ? 1 : a.title === b.title ? 0 : -1
        );
        return order === 'acd' ? dataCopy : dataCopy.reverse();
    }

    render() {
        let HTML = '';

        console.log(this.dataForRendering);

        this.DOM.innerHTML = HTML;
    }
}

export { Gallery };
