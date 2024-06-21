<template>
	<div class="header__search-wrapper">
		<HeaderSearchItem v-for="film in films" :key="film.id" :film="film" />
	</div>
</template>

<script lang="ts" setup>
defineProps<{
	films: Film[]
}>()
</script>

<style scoped lang="scss">
.header__search-wrapper {
	padding: 0 8px;
	border-radius: 8px;
	background: rgb(57, 59, 60);
	display: flex;
	flex-direction: column;
	gap: 10px;
}
</style>
