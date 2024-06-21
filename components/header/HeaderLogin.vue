<template>
	<button class="login" @click="userStore.openAndCloseModal">Войти</button>
	<AuthModal />
</template>

<script lang="ts" setup>
const userStore = useUserStore()
</script>

<style lang="scss" scoped>
.login {
	border: none;
	cursor: pointer;
	background: none;
	padding: 0;
	text-decoration: none;
	color: var(--c-white);
	font-size: 24px;
	font-weight: 400;
	line-height: 32px;
}
</style>
