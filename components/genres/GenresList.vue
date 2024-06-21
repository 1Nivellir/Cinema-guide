<template>
	<ul class="genres__list">
		<GenresItem v-for="item in data" :key="item" :genres="item" />
	</ul>
</template>

<script lang="ts" setup>
const filmStore = useFilmsStore()
const data = await filmStore.getGenres()
</script>

<style scoped lang="scss">
.genres {
	&__list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		column-gap: 40px;
		row-gap: 64px;

		@media screen and (max-width: 1024px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media screen and (max-width: 576px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}
}
</style>
