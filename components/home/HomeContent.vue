<template>
	<div class="container" v-if="showMenu">
		<h2 class="content__subtitle">Топ 10 фильмов</h2>
		<FilmsList :list="filmsTop10" />
	</div>
	<ClientOnly>
		<SwiperMenu :films="filmsTop10" v-if="!showMenu" />
	</ClientOnly>
</template>

<script lang="ts" setup>
const showMenu = ref(false)
const filmsTop10 = computed(() => useFilmsStore().listFilms)

const checkScreen = () => {
	if (window.innerWidth > 1023) {
		showMenu.value = true
	} else {
		showMenu.value = false
	}
}
onMounted(() => {
	window.addEventListener('resize', checkScreen)
	checkScreen()
})
</script>

<style scoped lang="scss">
.content {
	&__subtitle {
		margin-bottom: 64px;
		color: rgb(255, 255, 255);
		font-size: 40px;
		font-weight: 700;
		line-height: 48px;
	}
}
</style>
