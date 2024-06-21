<template>
	<AuthForm
		:fieldsets="formScheme"
		button-name="Создать аккаунт"
		:validationSchema="validationSchema"
		:formErrors="formErrors"
		:legend="'Регистрация'"
		@submitForm="submitForm"
	/>
</template>

<script lang="ts" setup>
const formErrors = ref<string[] | null>(null)
const validationSchema = useValidation([
	'email',
	'name',
	'surname',
	'password',
	'passwordConfirm',
])
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
		name: 'name',
		as: 'input',
		type: 'text',
		placeholder: 'Имя',
		icon: 'IconUser',
		label: '',
	},
	{
		name: 'surname',
		as: 'input',
		type: 'text',
		placeholder: 'Фамилия',
		icon: 'IconUser',
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
	{
		name: 'passwordConfirm',
		as: 'input',
		type: 'password',
		placeholder: 'Подтвердите пароль',
		icon: 'IconPassword',
		label: '',
	},
]
const userStore = useUserStore()
const emit = defineEmits(['success'])
const submitForm = async (body: User) => {
	const result = await userStore.createUser(body)
	if (result !== true && result !== undefined) {
		formErrors.value = [result]
	} else {
		formErrors.value = null
		emit('success', 'AuthSuccess')
	}
}
</script>

<style></style>
