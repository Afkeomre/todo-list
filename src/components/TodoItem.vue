<template>
	<li class="item">
		<span class="item__content">
			<input type="checkbox" v-model="todo.done">
			<span class="item__content-text" :class="todo.done ? 'done' : ''">{{ index + 1 }}. {{ todo.text }}</span>
		</span>
		<my-button @click="$emit('remove', todo.id)" class="item__btn">Delete</my-button>
	</li>
</template>

<script>
	export default {
		props: {
			todo: {
				type: Object,
				required: true
			},
			index: {
				type: Number
			}
		}
	}
</script>

<style scoped>
	.item {
		margin-bottom: 15px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		border: 2px solid  #358694;
		border-radius: 3px;
		padding: 10px 15px;
		background-color: #ffffff;
	}

	input[type="checkbox"] {
		margin-right: 8px;
	}
	.item__content-text {
		font-size: 22px;
	}
	.done {
		text-decoration: line-through;
	}
</style>