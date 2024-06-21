<template>
	<div class="success">
		<h2 class="success__title">Регистрация завершена</h2>
		<p class="success__text">Используйте вашу электронную почту для входа</p>
		<button class="success__btn" type="button" @click.prevent="goToLogin">
			Войти
		</button>
	</div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['goToLogin'])
const goToLogin = () => {
	emit('goToLogin', true)
}
</script>

<style scoped lang="scss">
.success {
	display: grid;
	grid-template-columns: 1fr;
	row-gap: 24px;

	&__title {
		color: rgb(0, 0, 0);
		text-align: center;
		font-size: 24px;
		font-weight: 700;
		line-height: 32px;
	}

	&__text {
		color: rgb(0, 0, 0);
		text-align: center;
		font-size: 18px;
		font-weight: 400;
		line-height: 24px;
	}

	&__btn {
		cursor: pointer;
		border: none;
		border-radius: 28px;
		padding: 16px 42px;
		background: rgb(106, 93, 193);
		color: rgb(255, 255, 255);
		font-size: 18px;
		font-weight: 700;
		line-height: 24px;
	}
}
</style>
