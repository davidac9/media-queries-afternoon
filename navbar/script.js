function clickHamburger() {
    const dropdown = document.getElementById('dropdown')
    if (dropdown.classList.contains('hide')) {
        dropdown.classList.remove('hide')
    } else {
        dropdown.classList.add('hide')
    }
}