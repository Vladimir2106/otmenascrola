

/* начало плавная прокрутка */
const yakor=document.querySelectorAll('a[href*="#"]')
for (let i of yakor){
    i.addEventListener('click', function(event){
       event.preventDefault();
        const n=i.getAttribute('href')
        document.querySelector(''+ n ).scrollIntoView({
            behavior:"smooth",
            block:"start"
        })
    })
}
/* конец плавная прокрутка */

const body=document.body;

function otmena(){
    let pos=window.scrollY;
    body.classList.add('otmenascrol');
    /*начало скрипт для отмены скрола посередине сайта что б не пригал */
    
    console.log(pos);
    body.dataset.position=pos;
    body.style.top=-pos+'px';
/*конец скрипт для отмены скрола посередине сайта что б не пригал */
}


function vkl(){
     /*начало скрипт для поновления скрола посередине сайта что б не пригал */
    let pos=parseInt(body.dataset.position,10) /*перевели в число значение в дата атрибуте */
    console.log(pos);
    body.style.top='auto';
    body.classList.remove('otmenascrol');
    window.scroll({top:pos,left:0});
    body.removeAttribute('pos');
    /*конец скрипт для поновления скрола посередине сайта что б не пригал*/
}




/* начало кнопка телега */
function vidgyk(){
    const v4=document.querySelector('[data-vid1]')
    const v5=document.querySelector('.box811')
    const v6=document.querySelector('.pulse')
    const v7=document.querySelector('.box9')
    const v8=document.querySelector('.dws')

    v6.addEventListener('click', function(){
        v5.style.display="flex";
        v7.style.display="flex";
        v8.style.display="none";
        otmena();
        console.log(v6)
    })
    v4.addEventListener('click', function(){
        v5.style.display="none";
        v7.style.display="none";
        v8.style.display="flex";
        vkl();
        
    })
}
vidgyk();
/* конец кнопка телега */

