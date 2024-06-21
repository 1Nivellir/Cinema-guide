<template>
	<div class="search__item">
		<NuxtLink
			:to="`/movie/${film.id}`"
			class="search__link"
			@click="goToPageFilm"
		></NuxtLink>
		<img :src="film.posterUrl" :alt="film.title" class="search__img" />
		<div class="search__content">
			<FilmsInfo
				:film="film"
				fontSizeRating="12px"
				widthStar="10px"
				heightStar="10px"
				paddingRating="3px 8px"
				lineHeightRating="16px"
			/>
			<h2 class="search__title">
				{{ film.originalTitle }}
			</h2>
		</div>
	</div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['click'])

const goToPageFilm = () => {
	emit('click')
}
defineProps<{
	film: Film
}>()
</script>

<style scoped lang="scss">
.search {
	&__item {
		position: relative;
		display: flex;
		gap: 15px;
		padding: 20px 8px 20px 8px;
	}
	&__title {
		color: rgb(255, 255, 255);
		font-size: 18px;
		font-weight: 700;
		line-height: 24px;
	}

	&__img {
		display: block;
		width: 40px;
		height: 52px;
		object-fit: cover;
	}

	&__link {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 15;
		border: transparent;
		border-radius: 6px;
		transition: border 0.3s ease-in-out;

		&:hover {
			border: 1px solid rgba(255, 255, 255, 0.5);
		}
	}

	&__content {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
}
</style>
