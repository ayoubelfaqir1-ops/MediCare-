/*-----------menuburger------------------*/

const menuButton = document.getElementById('menubutton');
const menulist = document.getElementById('menu');

menuButton.addEventListener('click',()=>{
    menulist.classList.toggle('hidden');
});


const medicin_choisi = document.getElementById('medicins_input');
const medicin_liste = document.getElementById('medicins_liste');
let clicked = false;
medicin_choisi.addEventListener('click',()=>{
    if (clicked) {
        medicin_liste.classList.add('hidden');
        clicked = false;
        return ;
    }
    medicin_liste.classList.remove('hidden');
    clicked = true;

})
