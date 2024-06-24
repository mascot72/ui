<template>

<div class="container">
	<div>TABLE LIST TOP</div>
	<div class="filter-zone">
		<div class="form-wrap">
			<div class="form-item">예제 1.</div>
			<div class="form-item" label="Name"><input type="text"></div>
			<div class="form-item" label="Pet"><select name="pets" class="pet-select"></select></div>
			<div class="form-item" label="password"><input type="password"></div>
      <div class="form-item"><button type="button">Click</button></div>
		</div>
  </div>
  <div>
    <!-- <VueGoodTable :columns="columns" :rows="rows" /> -->
    <vue-good-table
      :columns="columns"
      :rows="rows"
      :search-options="{
        enabled: true,
        trigger: 'enter',
        skipDiacritics: true,
        searchFn: mySearchFn,
        placeholder: 'Search this table',
        externalQuery: searchQuery
      }"
    >
    </vue-good-table>
  </div>
  </div>
  <div>
  <h1>Latest Vue Core Commits</h1>
  <template v-for="branch in branches">
    <input type="radio"
      :id="branch"
      :value="branch"
      name="branch"
      v-model="currentBranch">
    <label :for="branch">{{ branch }}</label>
  </template>
  <p>vuejs/vue@{{ currentBranch }}</p>
  <ul>
    <li v-for="{ html_url, sha, author, commit } in commits">
      <a :href="html_url" target="_blank" class="commit">{{ sha.slice(0, 7) }}</a>
      - <span class="message">{{ truncate(commit.message) }}</span><br>
      by <span class="author">
        <a :href="author.html_url" target="_blank">{{ commit.author.name }}</a>
      </span>
      at <span class="date">{{ formatDate(commit.author.date) }}</span>
    </li>
  </ul>
</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { VueGoodTable } from 'vue-good-table-next'
import 'vue-good-table-next/dist/vue-good-table-next.css'
const API_URL = `https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=`

export default defineComponent({
  name: 'MyComponent',
  components: {
    VueGoodTable
  },
  data() {
    return {
      branches: ['main', 'v2-compat'],
      currentBranch: 'main',
      commits: <unknown>null,
      columns: [
        {
          label: 'Name',
          field: 'name'
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number'
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'MMM do yy'
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage'
        }
      ],
      rows: [
        { id: 1, name: 'John', age: 20, createdAt: '2011-09-20', score: 0.03343 },
        { id: 2, name: 'Jane', age: 24, createdAt: '2011-10-31', score: 0.03343 },
        // { id: 3, name: 'Susan', age: 16, createdAt: '2011-10-30', score: 0.03343 },
        // { id: 4, name: 'Chris', age: 55, createdAt: '2011-10-11', score: 0.03343 },
        // { id: 5, name: 'Dan', age: 40, createdAt: '2011-10-21', score: 0.03343 },
        // { id: 6, name: 'John', age: 20, createdAt: '2011-10-31', score: 0.03343 }
      ]
    }
  },
  created() {
    this.fetchData()
  },
  mounted() {
    this.binding(1)
  },
  watch: {
    // re-fetch whenever currentBranch changes
    currentBranch: 'fetchData'
  },
  methods: {
    delay() {
      return new Promise<void>((res) => {
        setTimeout(() => {
          res()
        }, 1000)
      })
    },
    async fetchData() {
      const url = `${API_URL}${this.currentBranch}`
      this.commits = await (await fetch(url)).json()
    },
    binding(idNo: Number) {
      this.rows = this.rows.concat({ id: 3, name: 'Susan', age: 16, createdAt: '2011-10-30', score: 0.03343 })
      this.rows = this.rows.concat({ id: 4, name: 'Chris', age: 55, createdAt: '2011-10-11', score: 0.03343 })
      this.rows = this.rows.concat({ id: 5, name: 'Dan', age: 40, createdAt: '2011-10-21', score: 0.03343 })
      this.rows = this.rows.concat({ id: 6, name: 'John', age: 20, createdAt: '2011-10-31', score: 0.03343 })
    },
    truncate(v: string) {
      const newline = v.indexOf('\n')
      return newline > 0 ? v.slice(0, newline) : v
    },
    formatDate(v: string) {
      return v.replace(/T|Z/g, ' ')
    }
  }
})
</script>
<style>
a {
  text-decoration: none;
  color: #42b883;
}
li {
  line-height: 1.5em;
  margin-bottom: 20px;
}
.author,
.date {
  font-weight: bold;
}
</style>