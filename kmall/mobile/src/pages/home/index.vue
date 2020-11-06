<template>
	<div class="Home">
		<p>home page</p>
		<p>sss</p>
		<p v-for="(todo, index) in this.$store.state.home.todos" :key="index">{{ todo.task }}</p>
	</div>
</template>

<script>
	export default {
		name: "Home",
	};
</script>

<style>

</style>