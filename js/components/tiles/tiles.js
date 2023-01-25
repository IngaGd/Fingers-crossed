import { IsValid } from '../is-valid/IsValid.js';

function tiles(selector, data) {
    //selector yra id, data - servicesData
    if (typeof selector !== 'string') {
        throw new Error('Selector should be string');
    }

    if (!Array.isArray(data) || data.length === 0) {
        throw new Error('Data should be not empty array of objects');
    }

    const servicesDOM = document.getElementById(selector);
    if (servicesDOM === null) {
        throw new Error(
            `Cannot find element with prowided selector ${selector}`
        );
    }

    let HTML = '';

    for (const item of data) {
        if (
            !IsValid.object(item) ||
            !IsValid.icon(item.icon) ||
            !IsValid.title(item.title) ||
            !IsValid.text(item.text)
        ) {
            continue;
        }

        HTML += `<div class="col-12 col-md-6 col-lg-3 service">
                            <div class="section-title">
                                ${item.icon}
                                <h5>${item.title}</h5>
                            </div>
                                <p class="description">${item.text}</p>
                            </div>`;
    }

    servicesDOM.innerHTML = HTML;
}

export { tiles };
