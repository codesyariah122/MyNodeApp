<template>
	<div class="col-12">
		<h1>List Book</h1>
		<div class="card">
			 <ul class="list-group list-group-flush">
			   <li v-for="(book, index) in books" class="list-group-item" :key="index">
			    	{{book.judul}}
			   </li>
			 </ul>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			books: []
		}
	},

	mounted() {
		fetch('http://localhost:5000/api/data')
		.then(res => res.json())
		.then( data => this.books = data.data)
	}
}

</script>