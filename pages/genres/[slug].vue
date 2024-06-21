<template>
	<div class="container">
		<GenresPage />
	</div>
</template>

<script lang="ts" setup>
definePageMeta({
	layout: 'main',
})
const route = useRoute()
const genre = ref('')
onMounted(() => {
	genre.value = translateGenre(route.params.slug.toString())
	useHead({
		title: genre.value,
	})
})
provide('showBtnCardOnCard', false)
provide('notShow', 'card__notShowIndex')
</script>

<style></style>
