<!-- kilde: undervisning med Alejandro V. Rojas-->
<template>
	<form class="contact-form">
		<h1 class="contact-form__title">Contact Form</h1>
    <div class="separator"></div>
		<input class="contact-form__input" type="text" placeholder="Name" v-model="form.name" />
		<input class="contact-form__input" type="email" placeholder="E-mail" v-model="form.email" />
		<input class="contact-form__input-message" type="textarea" placeholder="Message" v-model="form.message" />

		<button @click="submit_form">Submit</button>
		<button @click="reset_form">reset</button>
	</form>
</template>

<script>
export default {
		data() {
			return {
				form: {
					name: null,
					email: null,
					message: null,
					resetForm: null,
				},
				
			};
		},

		methods: {
			submit_form() {
				alert(`Thank you, !`);
			},
			reset() {
      this.resetForm = null;
		},
	},
};
</script>

<style>
.contact-form {
		display: flex;
		flex-flow: column nowrap;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
      margin: 0 auto;
      max-width: 600px;
      width: 100%;
		
	}
	.contact-form__title {
		font-size: 1em;
		border-bottom: solid 4px darkcyan;
	}
	.contact-form .separator {
  border-bottom: solid 4px darkcyan;
  margin-bottom: 15px;
}

	.contact-form__input {
		margin-bottom: 0.5em;

	}


	.contact-form__input {
		border: 1px solid black;
		padding: 10px 10px;
		font-size: 0.7em;
	}

	.contact-form__input-message {
		border: 1px solid black;
		padding: 70px 10px;
		font-size: 0.6em;
	}

.contact-form button {
  background: #da552f;
  border: solid 1px #da552f;
  color: white;
  cursor: pointer;
  padding: 10px 50px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-top: 0.5em;
  font-size: 0.4em;
}
	
.contact-form button:hover {
  background: darkcyan;
  border: solid 1px darkcyan;
}
</style>