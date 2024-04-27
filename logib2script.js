let login = document.getElementById('login');
let singup = document.getElementById('singup');
let shade = document.getElementById('switch');

login.addEventListener('click',function(){
    shade.classList.remove('toRight');
    shade.classList.add('toLeft');
});

singup.addEventListener('click',function(){
    shade.classList.remove('toLeft');
    shade.classList.add('toRight');
});