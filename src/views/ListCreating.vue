<template>
  <div class="todo-list">
		<div class="todo-list__content">
			<div class="todo-list__header">
				<h1 class="todo-list__title title">Todo list</h1>

				<router-link class="todo__link link" to="/">
					<span class="todo-list__link-arrow">
						<svg width="72px" height="50px" viewBox="-14.97 -14.97 179.68 179.68"  xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> </defs> <g id="Layer_2" data-name="Layer 2"> <g id="Layer_1-2" data-name="Layer 1"> <path d="M149.74,42c-2,2.78-4.75,3.6-7.66,3.88-8.24.8-16.53,1.25-24.73,2.37A193,193,0,0,1,90.81,49.5c-2.24,0-4.47.29-6.9.46-2.12,5.46.22,10.43.4,15.42-2.49,4.65-6.34,5.32-11,4C59.09,65.15,44.81,61,30.56,56.78c-6-1.79-12-3.65-18-5.64-3-1-5.86-2.29-8.73-3.56A6.19,6.19,0,0,1,0,41.46a6.16,6.16,0,0,1,3.76-6.09c15.19-8,30.35-16,45.42-24.16,5.53-3,10.86-6.35,16.15-9.76a8.21,8.21,0,0,1,8.89-.28,6.45,6.45,0,0,1,3.86,5.24c.54,4.22,1.36,8.41,2.11,12.94,2.22.38,4.14,1,6,1,10.86-.32,21.72-.86,32.58-1.25,7.13-.25,14.27-.71,21.39-.48,6.18.2,8.07,2.5,8.47,8.43C149,31.85,149.35,36.66,149.74,42ZM137.31,28a11.85,11.85,0,0,0-2.38-.5,32.23,32.23,0,0,0-4.28.24,351.68,351.68,0,0,1-48.77,2.41,30.61,30.61,0,0,1-5.95-.71c-5.62-1.22-6.46-2.25-7-7.93-.31-3,0-6.16-2.38-8.91-5.78,3.36-11.13,6.59-16.6,9.61-5.75,3.18-11.7,6-17.41,9.27-5.41,3.08-11.9,4.05-17.37,8.9,3.17,1.28,5.7,2.44,8.33,3.33,11.75,4,43.77,12.4,49.16,12.95.09-3.4.39-6.79.21-10.15-.2-3.77,2.7-6.27,6.38-6.7a30.17,30.17,0,0,1,3.42.09c5.14,0,10.3.29,15.41-.11,8.26-.65,16.46-2,24.72-2.57a78,78,0,0,0,14.06-2.58C138.33,32.39,138.87,30.35,137.31,28Z"></path> <path class="cls-1" d="M137.31,28c1.56,2.35,1,4.39-.49,6.64a78,78,0,0,1-14.06,2.58c-8.26.58-16.46,1.92-24.72,2.57-5.11.4-10.27.1-15.41.11a30.17,30.17,0,0,0-3.42-.09c-3.68.43-6.58,2.93-6.38,6.7.18,3.36-.12,6.75-.21,10.15-5.39-.55-37.41-9-49.16-12.95-2.63-.89-5.16-2.05-8.33-3.33,5.47-4.85,12-5.82,17.37-8.9,5.71-3.26,11.66-6.09,17.41-9.27,5.47-3,10.82-6.25,16.6-9.61,2.36,2.75,2.07,5.93,2.38,8.91.58,5.68,1.42,6.71,7,7.93a30.61,30.61,0,0,0,5.95.71,351.68,351.68,0,0,0,48.77-2.41,32.23,32.23,0,0,1,4.28-.24A11.85,11.85,0,0,1,137.31,28Z"></path> </g> </g> </g></svg>
					</span>
					<span>To main page</span>
				</router-link> 
			</div>

			<todo-form 
				@create="createTodo"
			>
			</todo-form>

			<todo-list 
				:todos="todos"
				@remove="removeTodo"
				@mark="markAll"
				@delete="deleteAll"
			>
			</todo-list>
		</div>
  </div>
</template>

<script>
	import TodoForm from '@/components/TodoForm';
	import TodoList from '@/components/TodoList';

	export default {
		data() {
			return {
				todos: []
			}
		},
		methods: {
			createTodo(todo) {
				this.todos.push(todo);
			},
			removeTodo(id) {
				this.todos = this.todos.filter(item => item.id !== id);
			},
			markAll() {
				this.todos.forEach(item => item.done = true);
			},
			deleteAll() {
				this.todos = [];
			}
		},
		components: {
			TodoForm, TodoList
		}
	}
</script>

<style>
	.todo-list {
		background: url('https://kalix.club/uploads/posts/2022-12/1671769477_kalix-club-p-fon-dlya-prezentatsii-karandashi-instagram-68.jpg');
		background-size: cover;
		background-position: center center;
		font-size: 20px;
	}

	.todo-list__header {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 20px;
	}

	.todo-list__content {
		padding: 20px;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 40px;
	}

	.todo-list__link-arrow {
		margin-bottom: -35px;
		margin-left: -10px;
	}
</style>
