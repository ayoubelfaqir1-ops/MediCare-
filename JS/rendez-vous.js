/*-----------menuburger------------------*/

const menuButton = document.getElementById('menubutton');
const menulist = document.getElementById('menu');

menuButton.addEventListener('click',()=>{
    menulist.classList.toggle('hidden');
});
const name_input = document.getElementById('name');
const email_input = document.getElementById('email');
const telephone_input = document.getElementById('telephone');
const date_input = document.getElementById('date');
const time_input = document.getElementById('time');
const raison_input = document.getElementById('raison');
const submit_button = document.getElementById('submit');

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

submit_button.addEventListener('click',() =>{
    console.log('clicked')
    if (name_input.value == "" || email_input.value == "" || telephone_input.value == "" || date_input.value == "" || time_input.value == "") {
        alert('entrez tous les informations');
        return;
    }
})


