const rotate =document.querySelectorAll('.aylan')
const dele= document.querySelectorAll('.yoqol')
const mneu = document.querySelector('.menu-text');
const tugma = document.querySelector('.mobile-btn');
const menu2 = document.querySelector('.main-left')
const tugma2 = document.querySelector('.setting')
const boss = document.querySelector('.day-night')
let icon = document.getElementById('element2');
let icon2 =  document.getElementById('element1')
let card = document.querySelectorAll('.card')
let back = document.querySelector('.back')
let card2 = document.querySelector('.head-main')

// darkmode
icon.onclick = function(){
    document.body.classList.toggle('dark-theme')
    let icons = document.getElementById('element2').className;
    let icon3 = document.getElementById('element2');    
  
    if(icons == 'bi bi-moon-fill'){
        icon3.classList.add('bi-brightness-high-fill')
        icon3.classList.remove('bi-moon-fill')
        
    }
    else{
        icon3.classList.add('bi-moon-fill')
        icon3.classList.remove('bi-brightness-high-fill')
      
    }
    
    card2.classList.toggle('head-main__mode')
    
    for(let i=0; i<=card.length; i++){
        card[i].classList.toggle('card-mode')
    } 
}

// scripting of menu
tugma.addEventListener('click', function salom(){
    mneu.classList.toggle('activation')
})

// section of dropdown skills
tugma2.addEventListener('click', function salomq(){
    menu2.classList.toggle('activation2')
    back.addEventListener('click', function (){
        menu2.classList.remove('activation2')
    })
})

// section of dropdown
for (let i=0; i<=rotate.length; i++){
    rotate[i].addEventListener('click', function aylan(){
        this.classList.toggle('rot')
        dele[i].classList.toggle('yoqbol')
     })
}