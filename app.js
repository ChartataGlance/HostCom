const tabitems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
function selectItem(e){
   removeBorder();
   this.classList.add('tab-border')
   const tabContentItem = document.querySelector(`#${this.id}-content`)
   tabContentItem.classList.add('show');
}
function removeBorder(){
   tabitems.forEach( item => item.classList.remove('tab-border'))
   tabContentItems.forEach(item => item.classList.remove('show'))
}

tabitems.forEach(item=> item.addEventListener('click',selectItem));

const navSlide = () => {


   const burger = document.querySelector('.burger')
   const nav = document.querySelector('.nav-links')
   const navLinks = document.querySelectorAll('.nav-links li')
   const contentHide = document.querySelector('.content')
   
   burger.addEventListener('click' , () => {
      nav.classList.toggle('nav-active')
      contentHide.classList.toggle('dimm')
      navLinks.forEach((link,index) =>{
         if(link.style.animation){
            link.style.animation = '';
         } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/5}s`;
           
   
         }
      })
      burger.classList.toggle('toggle');
      
   })
   
   }
   
   navSlide();