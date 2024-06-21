<template>
	<ClientOnly>
		<HeaderDesktop v-if="isShowHeader" />
		<HeaderMobile v-else />
	</ClientOnly>
</template>

<script lang="ts" setup>
const isShowHeader = ref(true)
const checkHeaderScreen = () => {
	if (window.innerWidth < 1024) {
		isShowHeader.value = false
	} else {
		isShowHeader.value = true
	}
}

onMounted(() => {
	window.addEventListener('resize', checkHeaderScreen)
	checkHeaderScreen()
})
</script>

<style scoped lang="scss"></style>
