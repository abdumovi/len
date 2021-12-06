let inputs = document.querySelectorAll('.input');
let span1 = document.querySelector('.span1');
let span2 = document.querySelector('.span2');
let span3 = document.querySelector('.span3');
let in1;
inputs[0].addEventListener('keydown',function(e){
  in1 = e.target.value;
  span1.style.width = `${in1.length}%`;
});
let in2;
inputs[1].addEventListener('keydown',function(e){
  in2 = e.target.value;
  span2.style.width = `${in2.length * 2}%`;
});
let in3;
inputs[2].addEventListener('keydown',function(e){
  in3 = e.target.value;
  span3.style.width = `${in3.length / 10}%`;
});

