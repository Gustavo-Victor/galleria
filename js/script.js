const barsButton = window.document.querySelector('#bars-button');
const header = barsButton.parentNode;
const menuItem = window.document.querySelectorAll('.header-navbar ul li a');
console.log(menuItem)

barsButton.addEventListener('click', ()=>{
    header.classList.toggle('active');
    // console.log(header);
});

menuItem.forEach(li => {
    li.addEventListener('click', () => {
        console.log(`Clicou no item ${li.parentNode.innerHTML}`);

        for(let counter = 0; counter < menuItem.length; counter++){
            if(menuItem[counter].classList.contains('active')){
                menuItem[counter].classList.remove('active')
            }
            if(!li.classList.contains('active')){
                li.classList.add('active');
            }
        }
    });
});