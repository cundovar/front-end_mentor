const burgerButton = document.querySelectorAll('.burger-button ');
// const burgerButton1 = document.querySelector('.burger-button1');
// const burgerButton2 = document.querySelector('.burger-button2');

console.log(burgerButton)

const burgerLenght = burgerButton.length
// const returnbtn = document.querySelectorAll('[data-return]')
console.log(burgerLenght)

const nav = document.querySelector('.navigation');
console.log(nav)
burgerButton.addEventListener('click', showHideMenu);
function showHideMenu() {

    for (i = 0; i < burgerLenght; i++) {
        

                if (burgerButton[i].style.display === "none") {
                    nav.style.display = "flex";
                    //  nav.style.display = "none";
                    //  nav.style.display = "none";
                } else {
                    nav.style.display = "none";
                }

            }
        }
    




    // }
    // console.log(burgerButton1)
    // console.log(burgerButton2)
    // 
    // 
    // const nav = document.querySelector('.navigation');
    // const nav1 = document.querySelector('.navigation1');
    // const nav2 = document.querySelector('.navigation2');
    // console.log(nav);
    // console.log(nav1);
    // console.log(nav2);



    // burgerButton.addEventListener('mouseenter', showHideMenu);
    // burgerButton1.addEventListener('mouseenter', showHideMenu1);
    // burgerButton2.addEventListener('mouseenter', showHideMenu2);
    // burgerButton.addEventListener('mouseout',showHiden);
    // function showHiden(){
    // nav.style.display="none"
    // }
    // 
    // 
    // function showHideMenu() {
    // if (nav.style.display === "none") {
    // nav.style.display = "flex";
    // nav2.style.display = "none";
    // nav1.style.display = "none";
    // 
    // } else {
    // nav.style.display = "none";
    // 
    // }
    // 
    // }

    // function showHideMenu1() {
    // if (nav1.style.display === "none") {
    // nav1.style.display = "flex";
    // nav.style.display = "none";
    // nav2.style.display = "none";
    // 
    // 
    // } else {
    // nav1.style.display = "none";
    // 
    // }
    // 
    // }
    // 
    // function showHideMenu2() {
    // if (nav2.style.display === "none") {
    // nav2.style.display = "flex";
    // nav.style.display = "none";
    // nav1.style.display = "none";
    // 
    // } else {
    // nav2.style.display = "none";
    // 
    // }
    // 
    // 