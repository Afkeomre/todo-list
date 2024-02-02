<template>
	<form class="form" @submit.prevent="addTodo">
		<div class="form__input-group">
			<input 
				ref="input"
				v-focus
				type="text" 
				id="todo" 
				name="todo"
				v-model="text"
			>
			<label for="todo">New todo</label>
		</div>
		<my-button class="form__btn" type="submit">Add to the list</my-button>
	</form>
</template>

<script>
	export default {
		data() {
			return {
				text: ''
			}
		},
		methods: {
			addTodo() {
				if (this.text.trim()) {
					const newTodo = {
						id: Date.now(),
						text: this.text,
						done: false
					}

					this.$emit('create', newTodo);
					this.text = '';
					this.$refs.input.focus();
				}
			}
		}
	}
</script>

<style scoped>
	input {
		min-width: 480px;
		min-height: 35px;
		border: 1px solid #358694;
		border-radius: 3px;
		background-color: #fff;
		padding: 5px 8px;
		margin-bottom: 4px;
	}

	input:focus {
		box-shadow: 0px 0px 6px 2px #358694;
	}

	label {
		font-size: 16px;
		padding-left: 5px;
	}

	.form {
		display: flex;
		align-items: flex-start;
		gap: 15px;
	}

	.form__input-group {
		display: flex;
		flex-direction: column;
	}
</style>