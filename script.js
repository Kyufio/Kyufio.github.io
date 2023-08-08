Let sections=document querySelectorAll('section');

/*============= toggle icon navbar===============*/
let menuIcon =document,querySelector('#Menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('open'); 
};


/*============= scroll selection acitve linkr===============*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        Let top = window.scrollY;
        Let offset = sec.offsetTop - 150;
        Let height = sec.offsetHeight;
        Let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };s
    });
};
    /*================= sticky navbar ================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
    /*=============== remove toggle icon and navbar when click =====================*/
menuIcon.classList.remove('bx-x'); {
navbar.classList.remove('active');
};
/*=============== scroll reveal =====================*/
window.onscroll = () => {
    sections.forEach(sec =>{
        Let top =window.scrollY;
        Let offset = sec.offsetTop - 150;
        Let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        }
        // if what to use repeating animation scroll//
        else{
            sec.classList.remove('show-animate');
        }
    })
}

