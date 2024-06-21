<template>
	<button class="hero__trailer-circle" @click="putLike(film.id)">
		<IconLike fill="#fff" v-if="!isFilmInFavorites" />
		<IconPutLike v-else />
	</button>
</template>

<script lang="ts" setup>
const showLike = ref(false)
const filmStore = useFilmsStore()
const userStore = useUserStore()
defineProps<{
	film: Film
}>()
const putLike = async (id: number) => {
	if (!userStore.isAuth) {
		userStore.showIsModal = true
		return
	}
	if (isFilmInFavorites.value) {
		await filmStore.deleteLike(id.toString())
		return
	}
	const like = await filmStore.putLike(id.toString())
	if (like) {
		showLike.value = !showLike.value
	}
}

const isFilmInFavorites = computed(() => {
	const currentFilm = filmStore.oneFilm
	return userStore.favorites.some((favorite) => favorite.id === currentFilm.id)
})
</script>

<style></style>
