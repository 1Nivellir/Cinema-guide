<template>
	<header class="header">
		<div class="container header__container">
			<NuxtLink to="/" class="header__logo">
				<img src="/img/logo.png" alt="Логотип" />
			</NuxtLink>
			<HeaderNav />
			<HeaderSearch />
			<HeaderLogin v-if="!userStore.isAuth" />
			<HeaderAccount v-else />
		</div>
	</header>
</template>

<script lang="ts" setup>
const userStore = useUserStore()
</script>

<style scoped lang="scss">
.header {
	background: rgba(10, 11, 11, 0.9);
	max-height: 96px;
	padding: 16px 0;

	&__container {
		display: flex;
		gap: 20px;
		justify-content: space-between;
		align-items: center;
	}

	&__logo {
		flex-shrink: 0;
	}
}
</style>
