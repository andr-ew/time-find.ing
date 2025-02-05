import PhotoSwipeLightbox from 'photoswipe/lightbox';

const lightbox = new PhotoSwipeLightbox({
    gallery: '#ps-gallery--home',
    children: 'a.artLink',
    pswpModule: () => import('photoswipe'),
});
lightbox.init();

console.log({ lightbox });
