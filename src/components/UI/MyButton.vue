<template>
		<button class="btn"><slot></slot></button>
</template>

<script>
	export default {
		name: 'my-button'
	}
</script>

<style scoped>
	.btn {
		border-radius: 40px;
		background-color: #6fa9b3;
		padding: 10px 20px;
	}

	.btn:hover {
		box-shadow: 0px 0px 6px #358694;
		background-color: #358694;
	}

</style>