


const submit = document.querySelector('.submit')
const result = document.querySelector('#numberSelected');
const hidenn = document.querySelector('#container');
console.log(hidenn)
window.onload = () => {
    let touches = document.querySelectorAll("span")
    for (let touche of touches) {
        touche.addEventListener("click", iclick)
    }
}

function iclick() {
    touche = this.innerText;

    result.textContent = touche;
    
}
submit.addEventListener('click', clik);


function clik() {
    if (hidenn.style.display === "none") {
        hidenn.style.display = "flex";
    } else if (result.textContent = touche) {

        hidenn.style.display = "flex";

    } else {
        hidenn.style.display = "none";
    }

}