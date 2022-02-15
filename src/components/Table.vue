<!-- kilde: undervisning med Alejandro V. Rojas-->
<template>
<section class="table-header">
<h1 class="table-header__title">Awesome table</h1>
</section>
	<table >
		<thead>
			<tr>
				<td><button @click="sortBy('id')">ID</button></td>
				<td><button class="button__table" @click="sortBy('first_name')">First name</button></td>
				<td><button class="button__table" @click="sortBy('last_name')">Last name</button></td>
			</tr>
		</thead>

		<tbody>
			<tr v-for="row in naturalSort" :key="row.id" >
				<td v-for="value in row" :key="value.id">{{ value }}</td>
			</tr>
		</tbody>
	</table>
	
</template>

<script>
const mockData = `[{"id":1,"first_name":"Vevay","last_name":"Bartunek"},
{"id":2,"first_name":"Stephenie","last_name":"Fessby"},
{"id":3,"first_name":"Gunther","last_name":"McGavigan"},
{"id":4,"first_name":"Anny","last_name":"Lukehurst"},
{"id":5,"first_name":"Brittan","last_name":"Sowerbutts"},
{"id":6,"first_name":"Selia","last_name":"Wallbutton"},
{"id":7,"first_name":"Ancell","last_name":"Pottes"},
{"id":8,"first_name":"Leroi","last_name":"Sperski"},
{"id":9,"first_name":"Alphard","last_name":"Hanner"},
{"id":10,"first_name":"Kattie","last_name":"McNeilly"}]`;


export default {
		data() {
			return {
				sort: {
					key: 'id',
					order: 'asc',
				},
				content: JSON.parse(mockData),
			};
		},

		created() {
			const query = this.$route.query;

			if (query.sort) {
				this.sort.key = query.sort;
			}

			if (query.order) {
				this.sort.order = query.order;
			}
		},

		computed: {
			alphabeticalSort() {
				const key = this.sort.key;
				const orderValue = this.sort.order === 'asc' ? 1 : -1;

				function compareFunction(a, b) {
					
					if (a[key] > b[key]) {
						return 1;
					} else if (a[key] < b[key]) {
						return -1;
					} else {
						return 0
					}
				}

				return this.content.sort((a, b) => compareFunction(a, b) * orderValue);
			},

			naturalSort() {
				const key = this.sort.key;
				const orderValue = this.sort.order === 'asc' ? 1 : -1;

				function compareFunction(a, b) {
					a = a[key].toString();
					b = b[key].toString();

					return a.localeCompare(b, undefined, { numeric: true });
				}

				return this.content.sort((a, b) => compareFunction(a, b) * orderValue);
			},
		},

		methods: {
			sortBy(key) {
				this.sort.key = key;
				this.$router.push({ query: { ...this.$route.query, sort: this.sort.key } })
			},

			toggleSortOrder() {
				this.sort.order = this.sort.order === 'asc' ? 'desc' : 'asc';
				this.$router.push({ query: { ...this.$route.query, order: this.sort.order } })
			},
		},
	};
</script>

<style>

.table-header {
	display: flex;
		flex-flow: column nowrap;
		font-family: var(--font-family);
      margin: 0 auto;
      max-width: 600px;
      width: 100%;
   }
	table {
		width: 60vw;
		height: 60vh;
		border-collapse: collapse;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		margin-top: 30px;
		margin-left: 260px;
		
	}

	.table-header__title {
		font-size: 1em;
		border-bottom: solid 4px darkcyan;
		text-align: center;
		font-family: Verdana, Geneva, Tahoma, sans-serif
	}

	button {
		background: #da552f;
      border: solid 1px #da552f;
      color: white;
      padding: 10px 50px;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 0.2em;
	}

.button__table {
	padding: 10px 30px;
   }
	table thead {
		font-weight: bold;
	}

	table tr {
		border: 2px solid darkcyan;
	}

	table td {
		padding: 0.4em;
		color: azure;
	}

	table button:hover {
		color: darkcyan;
	}

	@media screen and (max-width: 675px) {
        table {
            margin-left: 100px;
        }
    }
</style>

