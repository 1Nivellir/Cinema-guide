<template>
	<div class="container film">
		<h1 class="film__title">О фильме</h1>
		<div class="film__content">
			<p class="film__info">
				Язык оригинала.............................
				{{ getCountry(film.language) }}
			</p>
			<p class="film__info">
				Бюджет...........................................
				{{ getBudget(film.budget) || 'Неизвестно' }}
			</p>
			<p class="film__info">
				Выручка..........................................
				{{ getBudget(film.revenue) || 'Неизвестно' }}
			</p>
			<p class="film__info">
				Режиссёр........................................
				{{ film.director || 'Неизвестно' }}
			</p>
			<p class="film__info">
				Продакшен.....................................
				{{ film.production || 'Неизвестно' }}
			</p>
			<p class="film__info">
				Награды..........................................
				{{ film.awardsSummary || 'Неизвестно' }}
			</p>
		</div>
	</div>
</template>

<script lang="ts" setup>
defineProps<{
	film: Film
}>()
</script>

<style scoped lang="scss">
.film {
	&__content {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	&__title {
		margin-bottom: 64px;
		color: rgb(255, 255, 255);
		font-size: 40px;
		font-weight: 700;
		line-height: 48px;

		@media screen and (max-width: 768px) {
			margin-bottom: 32px;
		}
	}

	&__info {
		color: rgb(255, 255, 255);
		font-size: 18px;
		font-weight: 400;
		line-height: 24px;
	}
}
</style>
