const backButton = document.querySelector('#backToTop');

const header = document.querySelector('header');

const mobButton = document.querySelector('#menu');

const nav = document.querySelector('nav ul');

const menuItems = document.querySelectorAll('nav ul li a');

const modalButton = document.querySelector('.modal-button')

const modal = document.querySelector('.modal');

const modalCloseButton = document.querySelector('.close-button');


window.onscroll = function() {scrollFunction()};




const scrollFunction = () => {

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){


        backButton.style.display = 'block'
        header.classList.add('bg')
        // header.style.backgroundColor = 'white'
        // header.style.color = '#333'
    }
   else{
       backButton.style.display = 'none'
       header.classList.remove('bg')
    //    header.style.backgroundColor = 'blue'


   }
   
}

const goToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const mobMenu = () => {

    for (const link of menuItems){
        link.addEventListener('click', mobMenu)
    }

    if (nav.classList.contains('responsive')){
        nav.classList.remove('responsive')

    }
    else {
        nav.classList.add('responsive')
    }
}

const modalShow = () => {
    modal.classList.toggle('visible')
}



// const hideMenu = () => {
//     nav.classList.toggle('responsive');
// }

backButton.addEventListener('click', goToTop);
mobButton.addEventListener('click', mobMenu);
modalButton.addEventListener('click', modalShow)
modalCloseButton.addEventListener('click', modalShow)
// nav.addEventListener('click', hideMenu);
 

    