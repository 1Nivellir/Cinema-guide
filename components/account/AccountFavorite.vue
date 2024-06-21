<template>
	<div class="container">
		<FilmsList :list="favoriteFilm" v-if="isShow" />
	</div>
	<SwiperMenu :films="favoriteFilm" v-if="!isShow" />
</template>

<script lang="ts" setup>
const isShow = ref(false)

const showMenu = () => {
	if (window.innerWidth > 1023) {
		isShow.value = true
	} else {
		isShow.value = false
	}
}
onMounted(() => {
	window.addEventListener('resize', showMenu)
	showMenu()
})
const favoriteFilm = computed(() => useUserStore().favorites)
</script>

<style scoped lang="scss"></style>
