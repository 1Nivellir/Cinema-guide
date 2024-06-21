<template>
	<div class="hero">
		<div class="container hero__container">
			<div class="hero__wrapper">
				<FilmsInfo :film="film" />
				<div class="hero__content">
					<h1 class="hero__title">
						{{ film.originalTitle }}
					</h1>
					<p class="hero__descr">
						{{ film.plot }}
					</p>
				</div>
			</div>
			<HomeButtons :film="film" />
		</div>

		<div class="hero__wrapper-img">
			<img :src="film.backdropUrl" alt="" class="hero__img" />
		</div>
	</div>
</template>

<script lang="ts" setup>
defineProps<{
	film: Film
}>()
</script>

<style scoped lang="scss">
.hero {
	position: relative;
	padding-top: 40px;
	padding-bottom: 40px;
	min-height: 510px;

	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column-reverse;
		padding-top: 0;
	}

	&__container {
		@media screen and (max-width: 768px) {
			margin: 0;
		}
	}

	&__wrapper-img {
		z-index: -1;
		position: absolute;
		top: -88px;
		right: 0;
		max-width: 980px;
		width: 100%;

		@media screen and (max-width: 768px) {
			position: relative;
			top: 0;
			padding-bottom: 24px;
		}
	}

	&__img {
		height: 100%;
		width: 100%;
	}

	&__wrapper {
		display: flex;
		flex-direction: column;
		row-gap: 16px;
		max-width: 850px;
		margin-bottom: 60px;

		@media screen and (max-width: 1024px) {
			margin-bottom: 32px;
		}
	}

	&__title {
		margin-bottom: 24px;
		color: rgb(255, 255, 255);
		font-size: clamp(24px, 4vw, 48px);
		font-weight: 700;
		line-height: clamp(32px, 4vw, 56px);
	}

	&__descr {
		color: rgba(255, 255, 255, 0.7);
		font-size: clamp(18px, 4vw, 24px);
		font-weight: 400;
		line-height: clamp(24px, 4vw, 32px);
	}
}
</style>
