<template>
  <vuestic-tree-root>

    <vuestic-tree-category label="Electronics">
      <vuestic-tree-node>Cellphones</vuestic-tree-node>
      <vuestic-tree-node>Camera Body Kits</vuestic-tree-node>
      <vuestic-tree-node>External HDDs</vuestic-tree-node>
    </vuestic-tree-category>

    <vuestic-tree-category isOpen label="Products">

      <vuestic-tree-category label="GitHub repos">
        <vuestic-tree-node v-for="repo in repos" :key="repo.id">
          {{ repo.name }}
        </vuestic-tree-node>
      </vuestic-tree-category>

      <vuestic-tree-node>Monitors</vuestic-tree-node>
      <vuestic-tree-node>Keyboards</vuestic-tree-node>

    </vuestic-tree-category>

    <vuestic-tree-category label="Apparel">
      <vuestic-tree-node>Jackets</vuestic-tree-node>
      <vuestic-tree-node>Pants</vuestic-tree-node>
      <vuestic-tree-node>Skirts</vuestic-tree-node>
    </vuestic-tree-category>

  </vuestic-tree-root>
</template>

<script>
import to from 'await-to-js'
import { fetchReposFromUser } from '../../../services/api/userService'

export default {
  name: 'tree-view-basic-preview',
  data () {
    return {
      repos: [],
    }
  },
  methods: {
    async fetchRepos () {
      let err, repos;
      [ err, repos ] = await to(fetchReposFromUser('mathilde-lannes'))
      // TODO display error notification if there's an error
      if (err) return
      this.repos = repos.data
    }
  },
  mounted: function () {
    this.fetchRepos()
  }
}
</script>
