<template>
	<div>
		<CommonHero :film="randomFilm" />
		<HomeContent />
	</div>
</template>

<script lang="ts" setup>
const filmStore = useFilmsStore()
provide('showBtn', true)
provide('showBtnCardOnCard', false)
provide('notShow', '')
definePageMeta({
	layout: 'main',
})
useHead({
	title: 'Главная',
})
await useAsyncData('films', () => (filmStore.getRandom(), filmStore.getTop10()))
const randomFilm = computed(() => useFilmsStore().oneFilm)
</script>

<style></style>
