<template>
	<div class="list-group" v-if="todos.length > 0">
		<div class="btns-group">
			<my-button @click="$emit('mark')">All done</my-button>
			<my-button @click="$emit('delete')">Delete all</my-button>
		</div>
		
		<ul class="list">
			<todo-item
				v-for="(todo, i) in todos"
				:todo="todo"
				:index="i"
				@remove="removeTodo"
			>
			</todo-item>
		</ul>
	</div>

	<div v-else>
		<h3 class="empty">The Todo list is empty. Add new todos!</h3>
	</div>
</template>

<script>
	import TodoItem from '@/components/TodoItem';

	export default {
		props: {
			todos: {
				type: Array,
			}
		},
		methods: {
			removeTodo(id) {
				this.$emit('remove', id);
			}
		},
		components: {
			TodoItem
		}
	}
</script>

<style scoped>
	.list-group {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}
	.list {
		width: 800px;
	}
	.empty {
		font-size: 28px;
	}
	.btns-group {
		display: flex;
		gap: 20px;
	}
</style>