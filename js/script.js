const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const containerImages = document.querySelector('.main-img');
const containerThumb = document.querySelector('.slider-img');

for (let i = 0; i < items.length; i++) {
    let image;
    
    image = `<div class="miniatura">
                    <img src="${items[i]}" alt="">
                    <div class="description">
                        <h2 class="title">${title[i]}</h2>
                        <p class="text">${text[i]}</p>
                    </div>
                </div>`;
    containerImages.innerHTML += image;
    let thumb;

    thumb = `<div class="thumbnail">
                    <img src="${items[i]}" alt="">
                </div>`;
    containerThumb.innerHTML += thumb;
}

const firstLastImage = document.querySelectorAll('.main-img .miniatura');
const firstLastThumbnail = document.querySelectorAll('.slider-img .thumbnail');

firstLastImage[0].classList.add('first', 'active');
firstLastImage[items.length - 1].classList.add('last');
firstLastThumbnail[0].classList.add('first', 'activethumb');
firstLastThumbnail[items.length - 1].classList.add('last');


const arrowDown = document.querySelector('.slider-img .arrow-down');
const arrowUp = document.querySelector('.slider-img .arrow-up');

// freccia in su
arrowUp.addEventListener('click', function () {
    const imageActive = document.querySelector('.main-img .active');
    const thumbnailActive = document.querySelector('.slider-img .activethumb');

    let classes = imageActive.classList;
    let first = false;

    for (let i = 0; i < classes.length; i++) {
        const element = classes[i];
         
        if (element === 'first') {
            first = true;
        }

    }

    let classesThumbnail = thumbnailActive.classList;
    let firstThumbnail = false;

    for (let i = 0; i < classesThumbnail.length; i++) {
        const elementThumbnail = classesThumbnail[i];
        

        if (elementThumbnail === 'first') {
            firstThumbnail = true;
        }

    }

    if (first === false) {
        imageActive.classList.remove('active');

        const imageNext = imageActive.previousElementSibling;
        imageNext.classList.add('active');
    }

    if (firstThumbnail === false) {
        thumbnailActive.classList.remove('activethumb');

        const thumbNext = thumbnailActive.previousElementSibling;
        thumbNext.classList.add('activethumb');
    }

})

// freccia giu
arrowDown.addEventListener('click', function () {

    const imageActive = document.querySelector('.main-img .active');
    const thumbActive = document.querySelector('.slider-img .activethumb');

    let classes = imageActive.classList;
    let last = false;

    for (let i = 0; i < classes.length; i++) {
        const element = classes[i];

        if (element === 'last') {
            last = true;
        }
    }

    if (last === false) {
        imageActive.classList.remove('active');
        thumbActive.classList.remove('activethumb');

        const imageNext = imageActive.nextElementSibling;
        const thumbnailNext = thumbActive.nextElementSibling;
        imageNext.classList.add('active');
        thumbnailNext.classList.add('activethumb');
    }
})