// IMPORT
import { tiles } from '../components/tiles/tiles.js';
import { servicesData } from '../data/servicesData.js';
import { Gallery } from '../components/gallery/Gallery.js';
import { galleryData } from '../data/galleryData.js';

// EXECUTION

/* Serives start */
tiles('services_block', servicesData);
/* Serives end */

/* Gallery start */
new Gallery('#gallery_block', galleryData);
//new Gallery kviecia clases Gallery konstrukroius ir jame aprasyta metoda
//this.init()
/* Gallery end */

document
    .querySelector('.dropdown > .link')
    .addEventListener('click', function () {
        const menu = this.nextElementSibling;
        menu.style.opacity = menu.style.opacity == 1 ? 0 : 1;
    });
