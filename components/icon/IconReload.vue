<script lang="ts" setup>
interface Props {
	fill?: string
	width?: string
	height?: string
	class?: string
}
const props = withDefaults(defineProps<Props>(), {
	fill: 'currentColor',
	width: '24',
	height: '24',
})
</script>

<template>
	<svg
		:class="props.class"
		:width="props.width"
		:height="props.height"
		viewBox="0 0 20 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
	>
		<defs />
		<path
			id="Vector"
			d="M10 2C12.74 2 15.17 3.38 16.61 5.5L14 5.5L14 7.5L20 7.5L20 1.5L18 1.5L18 3.99C16.17 1.57 13.27 0 10 0C4.47 0 0 4.47 0 10L2 10C2 5.58 5.58 2 10 2ZM18 10C18 14.41 14.41 18 10 18C7.25 18 4.82 16.61 3.38 14.5L6 14.5L6 12.5L0 12.5L0 18.5L2 18.5L2 16C3.82 18.42 6.72 20 10 20C15.52 20 20 15.52 20 10L18 10Z"
			:fill="props.fill"
			fill-opacity="1.000000"
			fill-rule="nonzero"
		/>
	</svg>
</template>

<style lang="scss" scoped>
.rotate {
	animation: rotate360 5s linear infinite;
}
@keyframes rotate360 {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
</style>
