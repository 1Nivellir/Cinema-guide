<template>
	<div class="trailer">
		<div class="trailer__wrapper">
			<iframe
				:src="`https://www.youtube.com/embed/${film.trailerYouTubeId}?autoplay=1`"
				frameborder="0"
				width="100%"
				height="100%"
				allowfullscreen
				allow="autoplay; encrypted-media"
			></iframe>
			<span class="trailer__close" @click="$emit('close')"></span>
		</div>
	</div>
</template>

<script lang="ts" setup>
defineProps<{
	film: Film
}>()
</script>

<style scoped lang="scss">
.trailer {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(10, 11, 11, 0.4);

	&__wrapper {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100%;
		max-width: 960px;
		max-height: 540px;

		@media screen and (max-width: 768px) {
			max-width: 480px;
			max-height: 270px;
		}
	}

	&__close {
		cursor: pointer;
		display: inline-block;
		position: absolute;
		top: 0;
		right: -75px;
		width: 48px;
		height: 48px;
		background: #fff;
		border-radius: 50%;

		@media screen and (max-width: 768px) {
			right: 0;
			top: -75px;
		}

		&::before,
		&::after {
			content: '';
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 50%;
			height: 2px;
			background-color: black;
		}

		&::before {
			transform: translate(-50%, -50%) rotate(45deg);
		}

		&::after {
			transform: translate(-50%, -50%) rotate(-45deg);
		}
	}
}
</style>
