const burger = document.querySelector('.header_burger'),
        menu= document.getElementById('menu_list');



burger.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    console.log('clik')
})