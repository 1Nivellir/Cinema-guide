<template>
	<ul class="list">
		<FilmsCard
			v-for="(item, index) in list"
			:key="item.id"
			:item="item"
			:index="index + 1"
		/>
	</ul>
</template>

<script lang="ts" setup>
defineProps<{
	list: Film[]
}>()
</script>

<style scoped lang="scss">
.list {
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	column-gap: 40px;
	row-gap: 64px;

	@media (width < 1024px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (max-width: 576px) {
		grid-template-columns: repeat(1, 1fr);
	}
}
</style>
