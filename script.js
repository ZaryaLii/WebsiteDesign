let text = document.getElementById('text');
let moon = document.getElementById('moon');
let cloud1 = document.getElementById('cloud1');
let cloud2 = document.getElementById('cloud2');
let cloud3 = document.getElementById('cloud3');
let fish = document.getElementById('fish');

window.addEventListener('scroll',() => {
    let value = window.scrollY;

    text.style.marginTop = value * 1.5 + 'px';
    moon.style.left = value * -0.5 + 'px';
    cloud4.style.top = value * -0.2 + 'px';
    cloud3.style.left = value * 0.2 + 'px';
    cloud2.style.left = value * -1 + 'px';
    // cloud1.style.left = value * 0.5 + 'px';
    fish.style.left = value * -1 + 'px';
});