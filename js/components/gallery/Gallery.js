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

        // PIRMAS ATRINKIMO BUDAS
        //const validData = [];
        //for (const item of this.data.content) {
        //    if (this.isValidGalleryItem(item)) {
        //        validData.push(item);
        //    }
        //}
        //this.data.content = validData;

        // ANTRAS ATRINKIMO BUDAS

        this.data.content = this.data.content.filter(
            this.isValidGalleryItem.bind(this)
        ); //naudoti vaikinius elementus is Gallery

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

    isValidGalleryItemImage(str) {
        if (str !== '') {
            return true;
        }
    }

    isValidGalleryItemImageAlt(str) {
        if (str !== '') {
            return true;
        }
    }

    isValidGalleryItemService(str) {
        if (str !== '') {
            return true;
        }
    }

    isValidGalleryItemDescription(str) {
        if (str !== '') {
            return true;
        }
    }

    // aprasyti isValidGalleryItemImage ir likusius metodus
    isValidGalleryItem(item) {
        if (
            item.published !== true ||
            !this.isValidGalleryItemImage(item.img) ||
            !this.isValidGalleryItemImageAlt(item.alt) ||
            !this.isValidGalleryItemService(item.service) ||
            !this.isValidGalleryItemDescription(item.description)
        ) {
            return false;
        }
        return true;
    }

    generateCard() {
        let cardHTML = '';
        for (const card of this.dataForRendering) {
            if (card.published !== true) {
                //prideti || !this.isGalleryCardValid(card)
                continue;
            }
            cardHTML += `<div class="card">
                    <div class="visual">
                        <img class="img" src="${card.img}" alt="${card.alt}">
                        <div class="hover-layer">
                            <p class=“service>${card.service}</p>
                            <p class=“description”>${card.description}</p>
                        </div>
                    </div>
                </div>`;
        }

        return cardHTML;
    }

    render() {
        let HTML = `<div class="content">${this.generateCard()} </div>`;

        this.DOM.innerHTML = HTML;
    }
}

export { Gallery };
