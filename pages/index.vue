<template>
	<div>
		<button id="install-button" style="display: none" class="install">
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

<style>
.install {
	position: fixed;
	bottom: 20px;
	right: 20px;
	left: 20px;
	padding: 10px 20px;
	border-radius: 10px;
	background: rgb(0, 95, 95);
	color: rgb(255, 255, 255);
	font-weight: 700;
	font-size: 16px;
	z-index: 1000;
}
</style>
