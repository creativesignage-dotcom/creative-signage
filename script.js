const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();

function submitQuote(e){
  e.preventDefault();
  const form=e.target;
  const name=form.name.value.trim();
  const business=form.business.value.trim();
  const phone=form.phone.value.trim();
  const service=form.service.value.trim();
  const message=form.message.value.trim();
  const text=`Hello Creative Signage, I would like a quotation.%0A%0AName: ${encodeURIComponent(name)}%0ABusiness: ${encodeURIComponent(business || 'Not provided')}%0AMobile: ${encodeURIComponent(phone || 'Not provided')}%0ASignage: ${encodeURIComponent(service || 'Not specified')}%0ARequirement: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/919025245336?text=${text}`,'_blank');
  document.getElementById('form-note').textContent='WhatsApp opened with your enquiry details.';
}
function showWhatsApp(){
  window.open('https://wa.me/919025245336?text=Hello%20Creative%20Signage%2C%20I%20would%20like%20a%20quotation.','_blank');
}
