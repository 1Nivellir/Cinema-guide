<template>
	<li class="genres__item">
		<NuxtLink :to="`/genres/${genres}`" class="genres__link"></NuxtLink>
		<img
			:src="`/cinema/img/genres/${genres}.jpg`"
			alt=""
			class="genres__img"
			v-if="genres"
		/>
		<div class="genres__content">
			<h2 class="genres__subtitle">{{ translateGenre(genres) }}</h2>
		</div>
	</li>
</template>

<script lang="ts" setup>
defineProps<{
	genres: string
}>()
</script>

<style scoped lang="scss">
.genres {
	&__item {
		position: relative;
		box-shadow: 0px 0px 80px 0px rgba(255, 255, 255, 0.33);
		background: rgb(10, 10, 11);
		display: flex;
		overflow: hidden;
		flex-direction: column;
		width: 100%;
		border-radius: 24px;
	}

	&__link {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
	}

	&__img {
		max-height: 220px;
		display: block;
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	&__content {
		align-self: flex-end;
		width: 100%;
		padding: 22px 0 30px;
	}

	&__subtitle {
		text-align: center;
		color: rgb(255, 255, 255);
		font-size: 24px;
		font-weight: 700;
		line-height: 32px;
	}
}
</style>
