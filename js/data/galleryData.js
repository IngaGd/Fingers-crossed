/* Eiliskumas pagal img siuo atveju. Jei galerijoje yra daugiau nuotrauku, taciau
jos ne visos vienu metu rodomos, pasirinkti min, max kieki ir pagal koki eiliskuma 
jas publishint. */

const galleryData = {
    size: {
        min: 3,
        max: 6,
    },
    rendering: {
        strategy: 'img',
        order: 'acd',
    },
    content: [
        {
            published: true,
            img: './img/home/img1.jpg',
            alt: 'Two hands image 1',
            service: 'SERVICE',
            description: 'DESCRIPTION',
        },
        {
            published: true,
            img: './img/home/img2.jpg',
            alt: 'Two hands image 2',
            service: 'SERVICE',
            description: 'DESCRIPTION',
        },
        {
            published: true,
            img: './img/home/img3.jpg',
            alt: 'Two hands image 3',
            service: 'SERVICE',
            description: 'DESCRIPTION',
        },
    ],
};

export { galleryData };
