
const body=document.body;

function otmena(){
    let pos=window.scrollY;
    body.classList.add('otmenascrol');
    body.dataset.position=pos;
    body.style.top=-pos+'px';
}


function vkl(){
    let pos=parseInt(body.dataset.position,10);
    body.style.top='auto';
    body.classList.remove('otmenascrol');
    window.scroll({top:pos,left:0});
    body.removeAttribute('pos');
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

    })
    v4.addEventListener('click', function(){
        v5.style.display="none";
        v7.style.display="none";
        v8.style.display="flex";
        vkl();
    })
}
vidgyk();

