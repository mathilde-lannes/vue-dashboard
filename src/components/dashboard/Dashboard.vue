<template>
  <div class="dashboard">
    <div class="auth-wallpaper col-12">
      <div class="oblique"></div>
      <div class="auth-wallpaper__logo">
        <div class="title"> VUE DASHBOARD </div>
        <div class="desc"> build powerful dashboards in no time. </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'dashboard',

  methods: {
    launchEpicmaxToast () {
      this.showToast(`Let's work together!`, {
        icon: 'fa-star-o',
        position: 'top-right',
        duration: Infinity,
        action: {
          text: 'Hire us',
          href: 'http://epicmax.co/#/contact',
          class: 'vuestic-toasted-link'
        }
      })
    }
  }
}

</script>
<style lang="scss" scoped>
  .dashboard {
    height: calc(100vh - #{$top-nav-height});
    .auth-wallpaper {
      height: 100%;
      background-color: $vue-darkest-blue;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      &__logo {
        z-index: 2;
        width: 100%;
      }
      .auth-wallpaper__logo {
        text-align: center;
        .title {
          font-size: 64px;
          font-weight: bold;
          letter-spacing: 3px;
          color: $vue-blue;
        }
        .desc {
          font-size: 18px;
          color: $light-gray;
        }
      }
      .oblique {
        position: absolute;
        background-color: $auth-wallpaper-oblique-line;
        left: calc(50% - 15%/2);
        transform: rotate(15deg);
        width: 15%;
        height: 115vh;
      }
    }
  }

</style>
