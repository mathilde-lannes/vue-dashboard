import store from 'vuex-store'

export default {
  inserted (el) {
    el.addEventListener('transitionend', function () {
      store.dispatch('isToggleWithoutAnimation', false)
    })
  },
}
