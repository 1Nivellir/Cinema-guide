<template>
	<div class="container">
		<div class="account">
			<h2 class="account__title">Мой аккаунт</h2>
			<AccountNav @switchComponent="showComponent = $event" />
			<AccountInfo v-if="showComponent === 'Profile'" />
		</div>
	</div>
	<AccountFavorite v-if="showComponent === 'Favorite'" />
</template>

<script lang="ts" setup>
const showComponent = ref('Profile')
</script>

<style scoped lang="scss">
.account {
	display: flex;
	flex-direction: column;
	gap: 64px;

	&__title {
		color: rgb(255, 255, 255);
		font-size: clamp(24px, 5vw, 48px);
		font-weight: 700;
		line-height: clamp(32px, 5vw, 56px);
	}
}
</style>
