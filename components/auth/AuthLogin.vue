<template>
	<AuthForm
		:fieldsets="formScheme"
		button-name="Войти"
		:validationSchema="validationSchema"
		:formErrors="formErrors"
		@submitForm="submitForm"
	/>
</template>

<script lang="ts" setup>
const formErrors = ref<string[] | null>(null)
const validationSchema = useValidation(['email', 'password'])
const formScheme = [
	{
		name: 'email',
		as: 'input',
		type: 'email',
		placeholder: 'sample@domain.ru',
		icon: 'IconEmail',
		label: '',
	},
	{
		name: 'password',
		as: 'input',
		type: 'password',
		placeholder: 'Пароль',
		icon: 'IconPassword',
		label: '',
	},
]
const userStore = useUserStore()
const submitForm = async (body: User) => {
	delete body.surname
	delete body.name
	const login = await userStore.loginUser(body)
	if (login !== true && login !== undefined) {
		formErrors.value = [login]
	} else {
		formErrors.value = null
	}
}
</script>

<style></style>
