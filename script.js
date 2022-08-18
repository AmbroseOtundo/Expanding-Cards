const panels = document.querySelectorAll('.panel')
panels.forEach((panel) => {
    // add event listener
    panel.addEventListener('click', () =>{
        // remove the active class from the other cards
        removeActiveClasses()
        panel.classList.add('active')
    })
})


function removeActiveClasses() {

    panels.forEach((panel) =>{
        panel.classList.remove('active')
    })
}
