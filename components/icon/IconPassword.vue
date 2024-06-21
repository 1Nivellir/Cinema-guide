<script lang="ts" setup>
interface Props {
	fill?: string
	width?: string
	height?: string
}
const props = withDefaults(defineProps<Props>(), {
	fill: 'currentColor',
	width: '24',
	height: '24',
})
</script>

<template>
	<svg
		:width="props.width"
		:height="props.height"
		viewBox="0 0 22 12"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
	>
		<path
			id="Vector"
			d="M11.91 7C11.44 9.83 8.97 12 6 12C2.68 12 0 9.31 0 6C0 2.68 2.68 0 6 0C8.97 0 11.44 2.16 11.91 5L22 5L22 7L20 7L20 11L18 11L18 7L16 7L16 11L14 11L14 7L11.91 7ZM6 10C8.2 10 10 8.2 10 6C10 3.79 8.2 2 6 2C3.79 2 2 3.79 2 6C2 8.2 3.79 10 6 10Z"
			:fill="props.fill"
			fill-opacity="1.000000"
			fill-rule="nonzero"
		/>
	</svg>
</template>

<style></style>
