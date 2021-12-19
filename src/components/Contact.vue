<template>
	<div class="contact-form">
		<input class="contact-form__input" type="text" placeholder="Name" v-model="form.name" />
		<input class="contact-form__input" type="email" placeholder="E-mail" v-model="form.email" />
		<input class="contact-form__input" type="textarea" placeholder="How can we help you?" v-model="form.message" />

		<button @click="submit_form">Submit</button>
		<button @click="reset_form">reset</button>
	</div>
</template>

<script>
export default {
		data() {
			return {
				form: {
					name: null,
					email: null,
					message: null,
				},
			};
		},

		methods: {
			submit_form() {
				alert(`Thank you, ${this.name}!`);
			},
			onReset() {
      this.name = "";
      this.email = "";
      this.message = "";
    },
		},
	};
</script>

<style>
.contact-form {
		display: flex;
		flex-flow: column nowrap;
	}

	.contact-form__input + .contact-form__input {
		margin-top: 0.5em;
	}

	.contact-form__input {
		border: 1px solid black;
	}
</style>