// Write your JavaScipt code below this line. 
const maintitle = document.getElementById("main-title")
maintitle.textContent = "Welcome to the World of Cats"

const description = document.getElementById('description')
description.textContent = "Find your Purrfect Companion"

const cat1Button = document.getElementById('cat-1-button')
cat1Button.addEventListener('click', () => {
    const cat = document.getElementById('cat-1')
    cat.remove()
    alert('Congrats on adopting your new Whiskers!')
})

const cat2Button = document.getElementById('cat-2-button')
cat1Button.addEventListener('click', () => {
    const cat = document.getElementById('cat-2')
    cat.remove()
    alert('Congrats on adopting your new Daisy!')

})
