//active::button
window.location.href = '#Inicio';

const btns = document.getElementsByClassName('btns');

function NAV_BTN(){
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click',function() {
            var current = document.getElementsByClassName("active");
            current[0].className = 
            current[0].className.replace("active","");
            this.className += " active";
        });   
    }
}
NAV_BTN();




///CARRUCEL

const items = document.querySelectorAll('.BoxC');
const btnNext = document.getElementById("btnext");
const btnLast = document.getElementById("btnlast");

let currentItem = 0;

function hiddenItem(){
    items.forEach(item => item.classList.remove('on'));
};
function showItem(){
    items[currentItem].classList.add('on')
};
function nextItem(){
    hiddenItem();
    if(currentItem === items.length -1){
        currentItem = 0;
    }else{
        currentItem++
    }
    showItem()
}
function lastItem(){
    hiddenItem();
    if(currentItem === 0){
        currentItem = items.length -1;
    }else{
        currentItem--
    }
    showItem()
   
}


btnLast.addEventListener('click',lastItem);
btnNext.addEventListener('click',nextItem);

/*Send Email*/

const btn = document.getElementById('btnSend_email');


document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.innerHTML = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_dyoyncm';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btn.innerHTML = 'Enviado';
        setTimeout(() => {
            btn.innerHTML = 'Enviar';
        }, 3000)
    }, (err) => {
      btn.innerHTML= 'Enviado';
      alert(JSON.stringify(err));
      setTimeout(() => {
        btn.innerHTML = 'Enviar';
    }, 2000)
    });
});
/*WINDOW LOAD*/
