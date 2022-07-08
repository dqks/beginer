const overflowFuck = document.querySelector('.overflowFuck')
const image = document.querySelector('#image')
const button = document.querySelector('#goFuckButton')
const press = document.querySelector('.presshere')
const order = document.querySelector('.toorder')
const h1 = document.querySelector('h1')
const vk = document.querySelector('.vk')
const yt = document.querySelector('.youtube')
button.onclick = function() {
    console.log('пошел нахуй');
   overflowFuck.style.display = 'flex'
   image.style.display = 'none'
   press.style.display = 'none'
   order.style.display = 'none';
   h1.style.display = 'none';
   vk.style.display = 'none';
   yt.style.display = 'none';
};

var object = document.getElementById('image');
object.onclick=function(){
var x = Math.floor(Math.random()*400);
var y = Math.floor(Math.random()*700);
object.style.top = x + 'px';
object.style.left = y + 'px';
press.style.display = 'none';
};























const raper = {
    list: [
        {
            name: 'Dababy'
        },

        {
            name: 'Morgenstern'
        },

    ],
}

const vegetables = ['Cucumber', 'Tomatoe', 'Potato'];
vegetables[2] = 'Pineapple';
vegetables[1] = 'Apple';
vegetables[0] = 'Dolboeb';

const krim = ['Ukraina'];
krim[0] = "Nash";  

