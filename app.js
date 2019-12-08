const bannerBtn = document.querySelector('.banner-btn');
const banner = document.querySelector('.banner');
const formContainer = document.querySelector('.form-container');
const container = document.querySelector('.container');
const xBtn = document.querySelector('.x-btn');

bannerBtn.addEventListener('click', () => {
    banner.style.display = 'none';
    formContainer.style.cssText = 'opacity: 1; visibility: visible';
    container.style.background = '#cc683c';
})

xBtn.addEventListener('click', () => {
    banner.style.display = 'flex';
    formContainer.style.cssText = 'opacity: 0; visibility: hidden';
    container.style.cssText = 'background: linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .7)) , url(images/bg1.jpeg) center no-repeat; background-size: cover';
})