const card2 = document.querySelector('.card2');
const video2 = document.querySelector('.video2');

const card = document.querySelector('.card');
const video = document.querySelector('.video');


card2.addEventListener('mouseover', () => {
    video2.play();
});

card2.addEventListener('mouseleave', () => {
    video2.pause();
});

card.addEventListener('mouseover', () => {
    video.play();
});

card.addEventListener('mouseleave', () => {
    video.pause();
});


