<template>
	<Swiper
		:slides-per-view="countSlider"
		:loop="true"
		spaceBetween="40"
		class="swiper__wrapper"
	>
		<SwiperSlide
			v-for="(film, index) in films"
			:key="film.id"
			class="swiper__slide"
		>
			<FilmsCard :item="film" :index="index + 1" :showBtn="false" />
		</SwiperSlide>
	</Swiper>
</template>

<script lang="ts" setup>
const countSlider = ref(0)

const checkScreen = () => {
	if (window.innerWidth < 1024) {
		countSlider.value = 3.5
	}
	if (window.innerWidth < 768) {
		countSlider.value = 2.5
	}
	if (window.innerWidth < 540) {
		countSlider.value = 1.5
	}
}
onMounted(() => {
	window.addEventListener('resize', checkScreen)
	checkScreen()
})
defineProps<{
	films: Film[]
}>()
</script>

<style scoped lang="scss">
.swiper__slide {
	border-radius: 50px;
	height: 100%;
}
.swiper__wrapper {
	padding: 32px 0 32px 20px;
}
</style>
