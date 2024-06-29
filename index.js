
//Form Submission
const form = document.querySelector('form');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const firstName = form.firstName.value;
//     const lastName = form.lastName.value;
//     const city = form.city.value;

//     console.log(firstName, lastName, city);
//     // api request -> send this to backend

// });



//Navbar
const menuBtn = document.querySelector('.menu-btn');
const menuDiv = document.querySelector('.menu-items');

menuBtn.addEventListener('click', (e) => { 
    menuDiv.classList.toggle('show-menu');
});


const closeBtn = document.querySelector('.close-menu');

closeBtn.addEventListener('click', (e) => {
    menuDiv.classList.remove('show-menu');
});