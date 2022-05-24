const red = document.querySelector('#red');
const yellow = document.querySelector('#yellow');
const green = document.querySelector('#green');

function changeLights(){
    setTimeout(() => {
        greenLight()
    }, 0);
    setTimeout(() => {
        yellowLight()
    }, 20000);
    setTimeout(() => {
        redLight()
    }, 23000);
}

function redLight(){
    red.classList.add('active')
    setTimeout(() => {
        red.classList.remove('active')
    }, 20000);
}
function yellowLight(){
    yellow.classList.add('active')
    setTimeout(() => {
        yellow.classList.remove('active')
    }, 3000);
}
function greenLight(){
    green.classList.add('active')
    setTimeout(() => {
        green.classList.remove('active')
    }, 20000);
}
changeLights();
setInterval(changeLights, 43000)
