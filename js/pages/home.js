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
const gallery = new Gallery('#gallery_block', galleryData);
console.log(gallery);
/* Gallery end */
