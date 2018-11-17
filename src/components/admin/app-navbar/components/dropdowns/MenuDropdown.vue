<template>
  <div class="message-dropdown col-xs-2">
    <span id="menu-item">
        <router-link v-if="link" :to="{ name : link }">
        <span
            class="sidebar-menu-item-icon vuestic-icon"
            :class="logo"></span>
        <span class="ellipsis">{{ name }}</span>
      </router-link>

        <span v-if="!link">
            <span
                class="sidebar-menu-item-icon vuestic-icon"
                :class="logo"></span>
            <span>{{ name }}</span>
            <i class="expand-icon fa fa-angle-down"></i>
        </span>

    </span>

    <vuestic-dropdown v-model="isOpen" position="bottom">
      <a v-for="(option, id) in options"
         :key="id"
         class="dropdown-item"
      >
      <router-link :to="{ name : option.link }">
        <span class="ellipsis">{{ option.name }}</span>
      </router-link>
      </a>
    </vuestic-dropdown>
  </div>
</template>

<script>
export default {
  name: 'menu-dropdown',
  data () {
    return {
      isOpen: false,
    }
  },
  props: {
    name: { type: String },
    logo: { type: String },
    options: {
      type: Array,
      default: () => []
    },
    link: {
      type: String,
      default: () => ''
    }
  },
}
</script>

<style lang="scss">
@import '../../../../../vuestic-theme/vuestic-sass/resources/resources';

.message-dropdown {
  @include flex-center();
  cursor: pointer;
  margin-right: 20px;

  #menu-item {
      color: $brand-primary;
  }

  .vuestic-icon {
      margin-right: 8px;
  }

  .expand-icon {
      margin-left: 5px;
      font-weight: bold;
  }
}
</style>
