<template>
  <div class="tree-view-advanced-preview">
    <div class="row mb-4">
      <div class="small-set col-sm-6 d-flex justify-content-center">
        <button class="btn btn-primary btn-micro"
                @click="$refs.treeView.expand()"
        >
          EXPAND ALL
        </button>
      </div>
      <div class="small-set col-sm-6 d-flex justify-content-center">
        <button class="btn btn-primary btn-micro"
                @click="$refs.treeView.collapse()"
        >
          COLLAPSE ALL
        </button>
      </div>
    </div>

    <vuestic-tree-root  ref="treeView">

    <vuestic-tree-category label="Frameworks">
      <vuestic-tree-node>Vue.js</vuestic-tree-node>
      <vuestic-tree-node>Angular 2+</vuestic-tree-node>
      <vuestic-tree-node>ReactJS</vuestic-tree-node>
    </vuestic-tree-category>

    <vuestic-tree-category isOpen label="My GitHub repos">

      <vuestic-tree-category
        v-for="repo in repos"
        :key="repo.id"
        :label="repo.name"
      >
        <vuestic-tree-node>
          {{ repo.description }}
        </vuestic-tree-node>

      </vuestic-tree-category>

    </vuestic-tree-category>

  </vuestic-tree-root>
  </div>
</template>

<script>
import to from 'await-to-js'
import { fetchReposFromUser } from '../../../services/api/userService'

export default {
  name: 'tree-view-advanced-preview',
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
