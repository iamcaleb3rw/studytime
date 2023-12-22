let toggleBar = document.querySelector('.toggle-container')
let toggleWheel = document.querySelector('.wheel')
let title = document.querySelector('.title')
let container = document.querySelector('.container');

toggleBar.addEventListener('click', ()=>{
    toggleWheel.classList.toggle('transition')

    if(toggleWheel.classList.contains('transition')){
        container.classList.add('darkmode')
        title.classList.add('darkmode')
    }else{
        container.classList.remove('darkmode')
        title.classList.remove('darkmode')
    }
})