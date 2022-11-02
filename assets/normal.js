ScrollReveal().reveal('.tecno', {delay:300, interval: 100, scale: 0.1, rotate: {
    x: 45,
    y: 80,
    z: 20
}});
ScrollReveal().reveal('.procces-idea', {reset: true, interval: 200,distance: '100px'});
var theme = 6;
const style = document.documentElement.style
function left() {
    switch (theme){
        case 1:
            pstecno();
        break;
        case 2:
            htmltecno();
        break;
        case 3:
            csstecno();
        break;
        case 4:
            jstecno();
        break;
        case 5:
            reactecno();
        break;
        case 6:
            matecno();
        break;
        case 7:
            svgtecno();
        break;
        case 8:
            gitecno();
        break;
        case 9:
            githubtecno();
        break;
        case 10:
            vbtecno();
        break;
        case 11:
            mysqltecno();
        break;
        case 12:
            aitecno();
        break;
    }
}
function right() {
switch (theme){
    case 1:
        csstecno();
    break;
    case 2:
        jstecno();
    break;
    case 3:
        reactecno();
    break;
    case 4:
        matecno();
    break;
    case 5:
        svgtecno();
    break;
    case 6:
        gitecno();
    break;
    case 7:
        githubtecno();
    break;
    case 8:
        vbtecno();
    break;
    case 9:
        mysqltecno();
    break;
    case 10:
        aitecno();
    break;
    case 11:
        pstecno();
    break;
    case 12:
        htmltecno();
    break;
}
}
const htmltecno = () => {
    document.getElementById('theme').textContent="Tema HTML";
    style.setProperty('--bg-purple', '#b41');
    style.setProperty('--bg-svg', '#f11');
    style.setProperty('--svg-procces', 'white');
    style.setProperty('--bg-white', '#fff');
    style.setProperty('--bg-black', '#000');
    style.setProperty('--bg-footer', '#222');
    style.setProperty('--bg-footer2', '#f41');
    style.setProperty('--bg-h3', '#f41');
    style.setProperty('--bg-opacityP', 'rgb(177,65,17,0.6)');
    document.getElementById('theme').style.color='#eee';
    document.getElementById('h2-title').style.color='#b41';
    document.getElementById('svgdevuwu').style.color='#000';
    document.getElementById('svgdevuwu2').style.color='#000';
    theme = 1;
}
const csstecno = () => {
    document.getElementById('theme').textContent="Tema CSS";
    style.setProperty('--bg-purple', '#09d');
    style.setProperty('--bg-svg', '#23F');
    style.setProperty('--svg-procces', 'black');
    style.setProperty('--bg-white', '#fff');
    style.setProperty('--bg-black', '#000');
    style.setProperty('--bg-footer', '#222');
    style.setProperty('--bg-footer2', '#0af');
    style.setProperty('--bg-h3', '#0cf');
    style.setProperty('--bg-opacityP', 'rgb(0,150,230,0.6)');
    document.getElementById('theme').style.color='#fff';
    document.getElementById('h2-title').style.color='#09d';
    document.getElementById('svgdevuwu').style.color='#000';
    document.getElementById('svgdevuwu2').style.color='#000';
    theme = 2;
}
const jstecno = () => {
    document.getElementById('theme').textContent="Tema JS";
    style.setProperty('--bg-purple', '#dc2');
    style.setProperty('--bg-svg', '#444');
    style.setProperty('--svg-procces', 'black');
    style.setProperty('--bg-white', '#000');
    style.setProperty('--bg-black', '#fff');
    style.setProperty('--bg-footer', '#000');
    style.setProperty('--bg-footer2', '#fd2');
    style.setProperty('--bg-h3', '#fff');
    style.setProperty('--bg-opacityP', 'rgb(247,223,31,0.6)');
    document.getElementById('theme').style.color='#000';
    document.getElementById('h2-title').style.color='#dc2';
    document.getElementById('svgdevuwu').style.color='#000';
    document.getElementById('svgdevuwu2').style.color='#000';
    theme = 3;
}
const reactecno = () => {
    document.getElementById('theme').textContent="Tema REACT";
    style.setProperty('--bg-purple', '#333');
    style.setProperty('--bg-svg', '#6cf');
    style.setProperty('--svg-procces', 'lightblue');
    style.setProperty('--bg-white', '#fff');
    style.setProperty('--bg-black', '#000');
    style.setProperty('--bg-footer', '#111');
    style.setProperty('--bg-footer2', '#6cf');
    style.setProperty('--bg-h3', '#6cf');
    style.setProperty('--bg-opacityP', 'rgb(50,50,50,0.6)');
    document.getElementById('theme').style.color='#6cf';
    document.getElementById('h2-title').style.color='#333';
    document.getElementById('svgdevuwu').style.color='#000';
    document.getElementById('svgdevuwu2').style.color='#000';
    theme = 4;
}
const matecno = () => {
    document.getElementById('theme').textContent="Tema MATE";
    style.setProperty('--bg-purple', 'linear-gradient(45deg, #fab 30%, #d77 30%, #d77 90%, #fab 90%)');
    style.setProperty('--bg-svg', '#d77');
    style.setProperty('--svg-procces', '#fab');
    style.setProperty('--bg-white', '#fff');
    style.setProperty('--bg-black', '#000');
    style.setProperty('--bg-footer', '#444');
    style.setProperty('--bg-footer2', '#fff');
    style.setProperty('--bg-h3', '#fcd');
    style.setProperty('--bg-opacityP', 'rgb(235,112,119,0.6)');
    document.getElementById('theme').style.color='#fff';
    document.getElementById('h2-title').style.color='#fff';
    document.getElementById('svgdevuwu').style.color='#fff';
    document.getElementById('svgdevuwu2').style.color='#fff';
    theme = 5;
}
const svgtecno = () => {
    document.getElementById('theme').textContent="Tema SVG";
    style.setProperty('--bg-purple', '#71d');
    style.setProperty('--bg-svg', '#53F');
    style.setProperty('--svg-procces', 'lightblue');
    style.setProperty('--bg-white', '#fff');
    style.setProperty('--bg-black', '#000');
    style.setProperty('--bg-footer', '#222');
    style.setProperty('--bg-footer2', '#fff');
    style.setProperty('--bg-h3', '#fcd');
    style.setProperty('--bg-opacityP', 'rgb(119,17,221,0.6)');
    document.getElementById('theme').style.color='#ddd';
    document.getElementById('h2-title').style.color='#71d';
    document.getElementById('svgdevuwu').style.color='#000';
    document.getElementById('svgdevuwu2').style.color='#000';
    theme = 6;
}
const gitecno = () => {
    document.getElementById('theme').textContent="Tema GIT";
    style.setProperty('--bg-purple', '#d53');
    style.setProperty('--bg-svg', '#000');
    style.setProperty('--svg-procces', 'black');
    style.setProperty('--bg-white', '#fff');
    style.setProperty('--bg-black', '#000');
    style.setProperty('--bg-footer', '#000');
    style.setProperty('--bg-footer2', '#fff');
    style.setProperty('--bg-h3', '#fff');
    style.setProperty('--bg-opacityP', 'rgb(240,80,50,0.6)');
    document.getElementById('theme').style.color='#000';
    document.getElementById('h2-title').style.color='#d53';
    document.getElementById('svgdevuwu').style.color='#000';
    document.getElementById('svgdevuwu2').style.color='#000';
    theme = 7;
}
const githubtecno = () => {
    document.getElementById('theme').textContent="Tema GITHUB";
    style.setProperty('--bg-purple', '#000');
    style.setProperty('--bg-svg', '#ccc');
    style.setProperty('--svg-procces', 'white');
    style.setProperty('--bg-white', '#ccc');
    style.setProperty('--bg-black', '#000');
    style.setProperty('--bg-footer', '#ccc');
    style.setProperty('--bg-footer2', '#111');
    style.setProperty('--bg-h3', '#fff');
    style.setProperty('--bg-opacityP', 'rgb(17,17,17,0.6)');
    document.getElementById('theme').style.color='#fff';
    document.getElementById('h2-title').style.color='#ddd';
    document.getElementById('svgdevuwu').style.color='#fff';
    document.getElementById('svgdevuwu2').style.color='#fff';
    theme = 8;
}
const mysqltecno = () => {
    document.getElementById('theme').textContent="Tema MySQL";
    style.setProperty('--bg-purple', '#069');
    style.setProperty('--bg-svg', '#c93');
    style.setProperty('--svg-procces', '#c93');
    style.setProperty('--bg-white', '#fff');
    style.setProperty('--bg-black', '#000');
    style.setProperty('--bg-footer', '#222');
    style.setProperty('--bg-footer2', '#c93');
    style.setProperty('--bg-h3', '#c93');
    style.setProperty('--bg-opacityP', 'rgb(206,139,44,0.6)');
    document.getElementById('theme').style.color='#09d';
    document.getElementById('h2-title').style.color='#069';
    document.getElementById('svgdevuwu').style.color='#000';
    document.getElementById('svgdevuwu2').style.color='#000';
    theme = 10;
}
const vbtecno = () => {
    document.getElementById('theme').textContent="Tema VB.NET";
    style.setProperty('--bg-purple', '#54b');
    style.setProperty('--bg-svg', '#ddd');
    style.setProperty('--svg-procces', '#fff');
    style.setProperty('--bg-white', '#fff');
    style.setProperty('--bg-black', '#000');
    style.setProperty('--bg-footer', '#76c');
    style.setProperty('--bg-footer2', '#fff');
    style.setProperty('--bg-h3', '#fff');
    style.setProperty('--bg-opacityP', 'rgb(80,70,175,0.6)');
    document.getElementById('theme').style.color='#ddd';
    document.getElementById('h2-title').style.color='#54b';
    document.getElementById('svgdevuwu').style.color='#000';
    document.getElementById('svgdevuwu2').style.color='#000';
    theme = 9;
}
const aitecno = () => {
    document.getElementById('theme').textContent="Tema AI";
    style.setProperty('--bg-purple', '#210');
    style.setProperty('--bg-svg', '#f80');
    style.setProperty('--svg-procces', '#f80');
    style.setProperty('--bg-white', '#f80');
    style.setProperty('--bg-black', '#000');
    style.setProperty('--bg-footer', '#111');
    style.setProperty('--bg-footer2', '#f80');
    style.setProperty('--bg-h3', '#f80');
    style.setProperty('--bg-opacityP', 'rgb(38,24,0,0.6)');
    document.getElementById('theme').style.color='#f80';
    document.getElementById('h2-title').style.color='#fff';
    document.getElementById('svgdevuwu').style.color='#fff';
    document.getElementById('svgdevuwu2').style.color='#fff';
    theme = 11;
}
const pstecno = () => {
    document.getElementById('theme').textContent="Tema Adobe PS";
    style.setProperty('--bg-purple', '#012');
    style.setProperty('--bg-svg', '#0ae');
    style.setProperty('--svg-procces', '#0ae');
    style.setProperty('--bg-white', '#0ae');
    style.setProperty('--bg-black', '#000');
    style.setProperty('--bg-footer', '#111');
    style.setProperty('--bg-footer2', '#0ae');
    style.setProperty('--bg-h3', '#0ae');
    style.setProperty('--bg-opacityP', 'rgb(0,15,22,0.6)');
    document.getElementById('theme').style.color='#0ae';
    document.getElementById('h2-title').style.color='#fff';
    document.getElementById('svgdevuwu').style.color='#fff';
    document.getElementById('svgdevuwu2').style.color='#fff';
    theme = 12;
}