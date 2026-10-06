const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

function submitQuote(e){
  e.preventDefault();
  document.getElementById('form-note').textContent='Thank you! Your enquiry form is ready. Add your WhatsApp/email details to make submissions live.';
}
function showWhatsApp(){
  alert('WhatsApp number will be connected here when you provide the mobile number.');
}
