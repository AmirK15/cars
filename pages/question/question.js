let accordion = document.querySelectorAll('.questions__accordion')

accordion.forEach(function (accordion) {
    accordion.children[2].addEventListener('click', function () {
        accordion.classList.toggle('questions__accordion_active')
    })
})