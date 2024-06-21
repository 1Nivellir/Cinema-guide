<template>
	<button class="hero__trailer" @click="showTrailer = true">Трейлер</button>
	<ClientOnly>
		<Teleport to="body">
			<LazyFilmsTrailer
				:film="film"
				v-if="showTrailer"
				@close="showTrailer = false"
			/>
		</Teleport>
	</ClientOnly>
</template>

<script lang="ts" setup>
const showTrailer = ref(false)
defineProps<{
	film: Film
}>()
</script>

<style scoped lang="scss">
.hero__trailer {
	border-radius: 28px;
	background: rgb(106, 93, 193);
	padding: 16px 48px;
	border: none;
	color: rgb(255, 255, 255);
	font-size: 18px;
	font-weight: 700;
	line-height: 24px;
	cursor: pointer;

	@media screen and (max-width: 576px) {
		width: 100%;
	}
}
</style>
