const navbar=document.getElementById('mobile-nav');
const menuhumbergur=document.getElementById('burger');
menuhumbergur.addEventListener('click',()=>{
    navbar.classList.toggle('hidden');
});