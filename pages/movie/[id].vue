<template>
	<div>
		<CommonHero :film="film" />
		<FilmsDescr :film="film" />
	</div>
</template>

<script lang="ts" setup>
provide('showBtn', false)
const route = useRoute()
const filmStore = useFilmsStore()
definePageMeta({
	layout: 'main',
})
const idFilms = ref(0)
if (typeof route.params.id === 'string') {
	idFilms.value = parseInt(route.params.id)
} else if (Array.isArray(route.params.id)) {
	idFilms.value = parseInt(route.params.id[0])
}
await useAsyncData('films', () => filmStore.getFilm(idFilms.value))
const film = computed(() => filmStore.oneFilm)
useHead({
	title: film.value.originalTitle,
})
</script>

<style></style>
