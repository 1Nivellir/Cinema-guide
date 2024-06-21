<template>
	<NuxtLink to="/account" class="header__account">
		{{ userStore.user.surname }}
	</NuxtLink>
</template>

<script lang="ts" setup>
const userStore = useUserStore()
</script>

<style scoped lang="scss">
.header__account {
	text-decoration: none;
	color: var(--c-white);
	font-size: 24px;
	font-weight: 400;
	line-height: 32px;
	border-bottom: 2px solid rgb(220, 93, 252);
}
</style>
