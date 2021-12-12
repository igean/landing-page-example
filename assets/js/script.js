if (window.matchMedia('(max-width: 800px)').matches) {
    const menu_switch = document.getElementById('menu-switch');
    const menu_switch_button = document.querySelector('#menu-switch-button i');
    const menu = document.getElementById('menu');

    menu_switch.addEventListener('change', function () {
        if (this.checked) {
            menu.style.display = 'flex';
            menu_switch_button.classList.add('fa-times')
            menu_switch_button.classList.remove('fa-bars')
        } else {
            menu.style.display = 'none'
            menu_switch_button.classList.add('fa-bars')
            menu_switch_button.classList.remove('fa-times')
        }
    })


    Array.from(document.getElementsByClassName('menu-item')).forEach(item => {
        item.addEventListener('click', function () {
            menu.style.display = 'none'
            menu_switch_button.classList.add('fa-bars')
            menu_switch_button.classList.remove('fa-times')
            menu_switch.checked = false
        })
    });
}