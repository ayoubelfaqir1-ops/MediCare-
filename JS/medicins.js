

/*-----------menuburger------------------*/

const menuButton = document.getElementById('menubutton');
const menulist = document.getElementById('menu');

menuButton.addEventListener('click',()=>{
    menulist.classList.toggle('hidden');
});


/*------------------search bar--------------*/
// 1️⃣ Get the input element from the HTML
  const searchInput = document.getElementById('search');

  // 2️⃣ Listen for when the user types in the input
  searchInput.addEventListener('input', () => {
    
    // 3️⃣ Save the text the user typed into localStorage
    localStorage.setItem('searchValue', searchInput.value);
    
    // 4️⃣ Show it in the console (just for testing)
    console.log(searchInput.value);
  });

  // 5️⃣ When the page loads, get the saved value
  const storedValue = localStorage.getItem('searchValue');

  // 6️⃣ If something was stored before, show it back in the input
  if (storedValue) {
    searchInput.value = storedValue;
  }