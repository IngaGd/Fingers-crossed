function services(data) {
    const servicesDOM = document.getElementById('services_block');

    let HTML = '';
    for (let i = 0; i < 4; i++) {
        HTML += `<div class="col-12 col-md-6 col-lg-3 service">
                                <img class="img" src="./img/logo/Fingers_crossed_logopos_icon.jpg" alt="Nail care image">
                                <h5>Nail care</h5>
                                <p class="description">Risus auctor ligula tempus and dolor vitae neque feugiat ligula suscipit and risus mauri</p>
                            </div>`;
    }

    servicesDOM.innerHTML = HTML;
}

export { services };
