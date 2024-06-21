<template>
	<section class="genres">
		<h1 class="genres__title">Жанры фильмов</h1>
		<GenresList />
	</section>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.genres {
	padding-top: 40px;
	display: flex;
	flex-direction: column;
	row-gap: 64px;

	@media screen and (max-width: 1024px) {
		row-gap: 40px;
	}

	&__title {
		color: rgb(255, 255, 255);
		font-size: clamp(24px, 5vw, 48px);
		font-weight: 700;
		line-height: clamp(32px, 5vw, 56px);
	}
}
</style>
