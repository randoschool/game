const game = document.querySelector('body');
const char = document.querySelector('#char');

game.addEventListener('click', () => {
    if (!char.className.includes('jump')) {
        char.classList.add('jump');
        setTimeout(() => {
            char.classList.remove('jump')
        }, 500);
    }
});
