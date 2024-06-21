<template>
	<div class="hero__buttons">
		<CommonTrailer :film="film" />
		<div class="hero__wrapper">
			<NuxtLink
				v-if="showBtn"
				class="hero__trailer hero__trailer-info"
				:to="`/movie/${film.id}`"
				>О фильме</NuxtLink
			>
			<CommonLike :film="film" />
			<CommonReload v-if="showBtn" />
		</div>
	</div>
</template>

<script lang="ts" setup>
defineProps<{
	film: Film
}>()

const showBtn = inject('showBtn')
</script>

<style scoped lang="scss">
.hero {
	&__buttons {
		display: flex;
		gap: 16px;

		@media screen and (max-width: 576px) {
			flex-wrap: wrap;
		}
	}

	&__wrapper {
		display: flex;
		gap: 16px;

		@media screen and (max-width: 576px) {
			justify-content: space-between;
			width: 100%;
		}
	}

	&__trailer {
		border-radius: 28px;
		background: rgb(106, 93, 193);
		padding: 16px 48px;
		border: none;
		color: rgb(255, 255, 255);
		font-size: 18px;
		font-weight: 700;
		line-height: 24px;
		cursor: pointer;

		&-1 {
			width: 100%;
		}

		&-info {
			text-decoration: none;
			cursor: pointer;
			background: rgb(56, 58, 60);
		}
		&-circle {
			cursor: pointer;
			border-radius: 50%;
			border: none;
			padding: 16px 18px;
			background: rgb(56, 58, 60);
		}
	}
}
</style>
