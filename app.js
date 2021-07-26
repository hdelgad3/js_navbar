const toggle = document.querySelector('.toggle');
const links = document.querySelector('.links');
const icon = document.querySelector('.toggle i');


toggle.addEventListener('click', ()=>{
    console.log(icon.classList);
    if(links.classList.contains('show-links')){
        links.classList.remove('show-links');

        icon.classList.remove('fas','fa-toggle-on');
        icon.classList.add('fas','fa-toggle-off');
    }
    else{
        links.classList.add('show-links');
        
        icon.classList.remove('fas','fa-toggle-off');
        icon.classList.add('fas','fa-toggle-on');
    }
})