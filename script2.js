const mneu = document.querySelector('.menu-text');
const tugma = document.querySelector('.mobile-btn');
const boss = document.querySelector('.day-night')
let icon = document.getElementById('element2');
let icon2 =  document.getElementById('element1')
let massive = document.querySelector('.massive').innerHTML;
let hash = document.querySelector('.main__hashtag')
let extra = document.querySelectorAll('.main__extra-info')
let extrbtn = document.querySelectorAll('.bi-three-dots-vertical')
let card2 = document.querySelector('.head-main')

// section hashtag
let arr = massive.split(" ")
const natija=[] 
let langname = ['Python', 'JavaScript', 'C++', 'C#', 'Bootstrap', 'CSS', 'HTML', 'React', 'Angular', 'Django', 'Figma', 'SASS', 'Php', 'MySQL', ]
for(const newArray of arr){
    for(const newName of langname){
        a = newArray.length
        if(newArray===newName){
            natija.push(newArray);  
        }   
    }            
}
let text='<ul>'
for(const newArray1 of natija){
    text+=`<li>#${newArray1}</h1>`;
}
text+='</ul>'
hash.innerHTML=text;

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
}

// scripting of menu
tugma.addEventListener('click', function salom(){
    mneu.classList.toggle('activation')
})

// section exrta block
for(let i=0; i<=extra.length; i++){
    extrbtn[i].addEventListener('click', function (){
        extra[i].classList.toggle('paydo')
    })
}