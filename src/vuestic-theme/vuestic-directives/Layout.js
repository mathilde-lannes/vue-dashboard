export default {

  bind: function (el, binding) {
    let navbar = el.querySelector('.vuestic-navbar')

    const mobileWidth = 415

    el.resizeWindow = (evt) => {
      setTimeout(function () {
        let openedDropdown = navbar.querySelector('.show')
        let selector = navbar.querySelector('.header-selector')
        if (openedDropdown && document.documentElement.clientWidth < mobileWidth &&
          !evt.target.classList.contains('header-selector')) {
          selector.classList.remove('i-menu-expanded')
          selector.classList.add('i-menu-collapsed')
        }
        if (evt.target.classList.contains('header-selector')) {
          selector.classList.toggle('i-menu-expanded')
          selector.classList.toggle('i-menu-collapsed')
        }
      }, 0)
    }

    navbar.addEventListener('click', el.resizeWindow)
  },
  unbind: (el) => {
    el.removeEventListener('click', el.resizeWindow)
  }
}
