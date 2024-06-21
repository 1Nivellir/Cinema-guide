<template>
	<ClientOnly>
		<div class="genres">
			<NuxtLink to="/genres" class="genres__link">{{ slugGenre }}</NuxtLink>
			<FilmsList :list="genreFilms" />

			<button class="genres__btn" @click.prevent="loadMore">
				Показать еще
			</button>
		</div>
	</ClientOnly>
</template>

<script lang="ts" setup>
const genreFilms = ref<Film[]>([])
const route = useRoute()
const slugGenre = ref('')
const filmsStore = useFilmsStore()
const page = ref(1)
const count = ref(10)
const loadMore = async () => {
	page.value += 1
	const moreFilms = await filmsStore.getOneGenre(
		route.params.slug.toString(),
		count.value,
		page.value
	)
	genreFilms.value = [...genreFilms.value, ...moreFilms]
}
onMounted(async () => {
	slugGenre.value = translateGenre(route.params.slug.toString())
	genreFilms.value = await filmsStore.getOneGenre(
		route.params.slug.toString(),
		count.value,
		page.value
	)
})
</script>

<style scoped lang="scss">
.genres {
	display: flex;
	flex-direction: column;
	row-gap: 64px;

	@media screen and (max-width: 1024px) {
		row-gap: 40px;
	}

	&__link {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: rgb(255, 255, 255);
		font-size: clamp(24px, 5vw, 48px);
		font-weight: 700;
		line-height: clamp(32px, 5vw, 56px);

		&::before {
			content: '';
			width: 13px;
			height: 21px;
			background-image: url('/svg/left-arrow.svg');
			background-position: center;
			background-size: contain;
			background-repeat: no-repeat;
			display: inline-block;
			margin-right: 16px;
		}
	}

	&__btn {
		cursor: pointer;
		border: none;
		border-radius: 28px;
		padding: 16px 42px;
		background: rgb(106, 93, 193);
		color: rgb(255, 255, 255);
		font-size: 18px;
		font-weight: 700;
		line-height: 24px;
		align-self: center;
		max-width: max-content;
	}
}
</style>
