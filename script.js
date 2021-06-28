let togglePopUp = document.querySelector('.register')
let toggleSignIn = document.querySelector('.sign-btn')
let mainContent = document.querySelector('.togle')
let sectionContent = document.querySelector('.section-toggle')
let closeBtn = document.querySelector('.close-btn')
let closeBtn2 = document.querySelector('.close-btn2')



togglePopUp.addEventListener('click',()=>{
    mainContent.classList.toggle('active');

    
})

closeBtn.addEventListener('click',()=>{
    mainContent.classList.toggle('active');

})

toggleSignIn.addEventListener('click',()=>{
    sectionContent.classList.toggle('active');

    
})
closeBtn2.addEventListener('click',()=>{
    sectionContent.classList.toggle('active');

})


