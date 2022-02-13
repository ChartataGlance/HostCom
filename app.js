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
