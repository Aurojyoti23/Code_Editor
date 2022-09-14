const c1 = document.querySelector('.c1 textarea');
const c2 = document.querySelector('.c2 textarea');
const c3 = document.querySelector('.c3 textarea');
const result = document.querySelector('#result');


function run() {
    localStorage.setItem('c1', c1.value)
    localStorage.setItem('c2', c2.value)
    localStorage.setItem('c3', c3.value)
    result.contentDocument.body.innerHTML = `<style>${localStorage.c2}</style>` + c1.value;
    result.contentWindow.eval(localStorage.c3)
}


c1.onkeyup = ()=> run()
c2.onkeyup = ()=> run()
c3.onkeyup = ()=> run()

c1.value = localStorage.c1;
c2.value = localStorage.c2;
c3.value = localStorage.c3;