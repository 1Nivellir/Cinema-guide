<template>
	<div>
		<button id="install-button" style="display: none">
			Установить приложение
		</button>
		<CommonHero :film="randomFilm" />
		<HomeContent />
	</div>
</template>

<script lang="ts" setup>
const filmStore = useFilmsStore()
const userStore = useUserStore()
provide('showBtn', true)
provide('showBtnCardOnCard', false)
provide('notShow', '')
definePageMeta({
	layout: 'main',
})
useHead({
	title: 'Главная',
})
await useAsyncData('filmsHome', () =>
	Promise.all([filmStore.getRandom(), filmStore.getTop10()])
)

onMounted(async () => {
	await Promise.all([userStore.getProfile(), userStore.getFavorites()])
})
const randomFilm = computed(() => useFilmsStore().oneFilm)
</script>
