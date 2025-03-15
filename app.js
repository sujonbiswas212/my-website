const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', ()=>{
     navToggle.classList.toggle('active');
     navLinks.classList.toggle('active');
})

document.querySelectorAll('.nav-links li').forEach(link =>{
     link.addEventListener('click', ()=>{
          navToggle.classList.remove('active')
         navLinks.classList.remove('active')
          
     })
})
