console.log('running');

const canvas = document.getElementById('main');
const ctx = canvas.getContext('2d');
canvas.setAttribute('width', 850);
canvas.setAttribute('height', 500);


ctx.fillStyle = 'red';
ctx.fillRect(10,10,20,150);
ctx.fillStyle = 'blue';
ctx.fillRect(820,10,20,150);