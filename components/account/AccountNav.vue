<template>
	<div class="account__nav">
		<button
			type="button"
			class="account__btn"
			@click="switchComponent('Favorite')"
		>
			<IconLike fill="#fff" width="20px" height="18px" />
			{{ favorites }}
		</button>
		<button
			type="button"
			class="account__btn"
			@click="switchComponent('Profile')"
		>
			<IconUser fill="#fff" width="20px" height="18px" />
			{{ settings }}
		</button>
	</div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['switchComponent'])

const settings = ref('Настройка аккаунта')
const favorites = ref('Избранные фильмы')

const checkResize = () => {
	if (window.innerWidth > 768) {
		settings.value = 'Настройка аккаунта'
		favorites.value = 'Избранные фильмы'
	} else {
		settings.value = 'Настройки'
		favorites.value = 'Избранное'
	}
}
onMounted(() => {
	window.addEventListener('resize', checkResize)
	checkResize()
})
const switchComponent = (name: string) => {
	emit('switchComponent', name)
}
</script>

<style scoped lang="scss">
.account {
	&__nav {
		display: flex;
		gap: 60px;
		margin-bottom: 64px;

		@media screen and (max-width: 1024px) {
			margin-bottom: 40px;
		}
	}
	&__btn {
		display: flex;
		align-items: center;
		gap: 7px;
		border: none;
		cursor: pointer;
		background: none;
		padding: 0;
		color: rgb(255, 255, 255);
		font-size: 24px;
		font-weight: 400;
		line-height: 32px;
	}
}
</style>
