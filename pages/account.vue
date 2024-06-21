<template>
	<div>
		<ClientOnly>
			<CommonAccount />
		</ClientOnly>
	</div>
</template>

<script lang="ts" setup>
provide('showBtnCardOnCard', true)
definePageMeta({
	layout: 'main',
})
useHead({
	title: 'Аккаунт',
})
</script>
<style scoped lang="scss"></style>
