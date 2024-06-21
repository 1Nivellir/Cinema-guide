<template>
	<div class="hero__info">
		<span class="hero__rating" v-if="film.tmdbRating">{{
			getRating(film.tmdbRating)
		}}</span>
		<span class="hero__release">{{ film.releaseYear }}</span>

		<span class="hero__release">{{ film.genres[0] }}</span>
		<span class="hero__release">{{ getTime(film.runtime) }}</span>
	</div>
</template>

<script lang="ts" setup>
interface Props {
	film: Film
	fontSizeRating?: string
	paddingRating?: string
	widthStar?: string
	heightStar?: string
	lineHeightRating?: string
}
const props = withDefaults(defineProps<Props>(), {
	fontSizeRating: '18px',
	paddingRating: '5px 12px',
	widthStar: '15px',
	heightStar: '15px',
	lineHeightRating: '24px',
})
const colorRating = computed(() => {
	const currentcolor = props.film.tmdbRating
	return getRatingColor(currentcolor)
})
function getRatingColor(rating: number) {
	if (rating >= 7 && rating <= 7.99) {
		return 'rgb(48, 142, 33)'
	}
	if (rating >= 8 && rating <= 10) {
		return 'rgb(165, 148, 0)'
	}
	if (rating <= 6.99) {
		return 'rgb(119, 119, 119)'
	}
}
</script>

<style scoped lang="scss">
.hero {
	&__info {
		display: flex;
		gap: 16px;
		align-items: center;
	}

	&__rating {
		border-radius: 16px;
		padding: v-bind(paddingRating);
		background: v-bind(colorRating);
		color: rgb(255, 255, 255);
		font-size: v-bind(fontSizeRating);
		font-weight: 700;
		line-height: v-bind(lineHeightRating);

		&::before {
			content: '';
			display: inline-block;
			width: v-bind(widthStar);
			height: v-bind(heightStar);
			background-image: url('/svg/star.svg');
			background-size: contain;
			background-repeat: no-repeat;
			background-position: center;
			margin-right: 8px;
		}
	}

	&__release {
		color: rgba(255, 255, 255, 0.7);
		font-size: clamp(14px, 1.5vw, 18px);
		font-weight: 400;
		line-height: clamp(20px, 1.5vw, 24px);
	}
}
</style>
