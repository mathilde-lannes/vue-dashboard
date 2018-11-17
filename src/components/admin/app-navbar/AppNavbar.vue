<template>
  <vuestic-navbar>
    <span slot="logo">
      VUE DASHBOARD
    </span>

    <menu-dropdown
      v-for="(page, id) in pages"
      :key="id"
      :options="page.options"
      :name="page.name"
      :logo="page.logo"
      :link="page.link"
    ></menu-dropdown>

    <profile-dropdown slot="profile" class="col-xs-1 nav-item">
      <img src="http://www.synapse-developpement.fr/wp-content/uploads/2017/01/mathilde-lannes-e1541168117479.png"/>
    </profile-dropdown>
  </vuestic-navbar>

</template>

<script>
import VuesticIconVuestic from '../../../vuestic-theme/vuestic-components/vuestic-icon/VuesticIconVuestic'
import VuesticNavbar from '../../../vuestic-theme/vuestic-components/vuestic-navbar/VuesticNavbar'
import HeaderSelector from './components/HeaderSelector'

import ProfileDropdown from './components/dropdowns/ProfileDropdown'
import MenuDropdown from './components/dropdowns/MenuDropdown'
import SidebarLink from '../app-sidebar/components/SidebarLink'

export default {
  name: 'app-navbar',

  components: {
    VuesticIconVuestic,
    VuesticNavbar,
    HeaderSelector,
    ProfileDropdown,
    MenuDropdown,
    SidebarLink
  },
  data () {
    return {
      pages: [
        {
          name: this.$t('menu.tables'),
          logo: 'vuestic-icon-tables',
          link: 'tables',
          options: []
        },
        {
          name: this.$t('menu.statistics'),
          logo: 'vuestic-icon-statistics',
          options: [
            {
              name: this.$t('menu.charts'),
              link: 'charts'
            },
            {
              name: this.$t('menu.progressBars'),
              link: 'progress-bars'
            }
          ]
        },
        {
          name: this.$t('menu.forms'),
          logo: 'vuestic-icon-forms',
          options: [
            {
              name: this.$t('menu.formElements'),
              link: 'form-elements'
            },
            {
              name: this.$t('menu.formWizards'),
              link: 'form-wizards'
            },
            {
              name: this.$t('menu.mediumEditor'),
              link: 'medium-editor'
            }
          ]
        },
        {
          name: this.$t('menu.uiElements'),
          logo: 'vuestic-icon-ui-elements',
          options: [
            {
              name: this.$t('menu.typography'),
              link: 'typography'
            },
            {
              name: this.$t('menu.buttons'),
              link: 'buttons'
            },
            {
              name: this.$t('menu.collapse'),
              link: 'collapse'
            },
            {
              name: this.$t('menu.colorPickers'),
              link: 'color-pickers'
            },
            {
              name: this.$t('menu.notifications'),
              link: 'notifications'
            },
            {
              name: this.$t('menu.timelines'),
              link: 'timelines'
            },
            {
              name: this.$t('menu.spinners'),
              link: 'spinners'
            },
            {
              name: this.$t('menu.grid'),
              link: 'grid'
            },
            {
              name: this.$t('menu.modals'),
              link: 'modals'
            },
            {
              name: this.$t('menu.fileUpload'),
              link: 'file-upload'
            },
            {
              name: this.$t('menu.tags'),
              link: 'tags'
            },
            {
              name: this.$t('menu.treeView'),
              link: 'tree-view'
            },
            {
              name: this.$t('menu.cards'),
              link: 'cards'
            }
          ]
        }
      ]
    }
  }
}
</script>
