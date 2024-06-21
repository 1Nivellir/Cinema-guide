<script lang="ts" setup>
interface Props {
	fill?: string
	width?: string
	height?: string
}
const props = withDefaults(defineProps<Props>(), {
	fill: '#B3A8FF',
	width: '24',
	height: '24',
})
</script>

<template>
	<svg
		:width="props.width"
		:height="$props.height"
		viewBox="0 0 20 18.5"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
	>
		<defs />
		<path
			id="Vector"
			d="M14.5 0C17.53 0 20 2.5 20 6C20 13 12.5 17 10 18.5C7.5 17 0 13 0 6C0 2.5 2.5 0 5.5 0C7.35 0 9 1 10 2C11 1 12.64 0 14.5 0Z"
			:fill="props.fill"
			fill-opacity="1.000000"
			fill-rule="nonzero"
		/>
	</svg>
</template>

<style></style>
