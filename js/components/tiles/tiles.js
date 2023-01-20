function tiles(selector, data) {
    if (typeof selector !== 'string') {
        throw new Error('Selector should be string');
    }

    if (!Array.isArray(data) || data.length === 0) {
        throw new Error('Data should be array object');
    }

    const servicesDOM = document.getElementById(selector);
    if (servicesDOM === null) {
        throw new Error('Cannot find element with prowided selector ${ddd}');
    }

    let HTML = '';

    // is duomenu atsifiltruoti tik objektus
    data = data
        .filter((item) => typeof item === 'object')
        .filter((item) => item !== null)
        .filter((item) => !Array.isArray(item));

    for (let item of data) {
        console.log(item);
        HTML += `<div class="col-12 col-md-6 col-lg-3 service">
                                <img class="img" src="./img/logo/Fingers_crossed_logopos_icon.jpg" alt="Nail care image">
                                <h5>${item.title}</h5>
                                <p class="descriptio">${item.text}</p>
                            </div>`;
    }

    servicesDOM.innerHTML = HTML;
}

export { tiles };
