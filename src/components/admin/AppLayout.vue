<template>
  <vuestic-layout v-layout>
    <app-navbar :isOpen="opened" @toggle-menu="toggleSidebar"/>
    <main slot="content" id="content" class="content" role="main">
      <vuestic-pre-loader v-show="isLoading" class="pre-loader"></vuestic-pre-loader>
      <router-view></router-view>
    </main>
    <span slot="footer">©2018. Made by&nbsp;<a href="https://github.com/mathilde-lannes" target="_blank">Mathilde Lannes </a></span>
  </vuestic-layout>
</template>

<script>

import VuesticLayout from '../../vuestic-theme/vuestic-components/vuestic-layout/VuesticLayout'
import AppNavbar from './app-navbar/AppNavbar'
import Layout from 'vuestic-theme/vuestic-directives/Layout'
import { mapGetters } from 'vuex'

export default {
  name: 'app-layout',

  components: {
    VuesticLayout,
    AppNavbar,
  },
  directives: {
    layout: Layout,
  },
  data () {
    return {
      opened: true
    }
  },
  methods: {
    toggleSidebar (opened) {
      this.opened = opened
    }
  },
  computed: {
    ...mapGetters([
      'isLoading'
    ])
  }
}
</script>
