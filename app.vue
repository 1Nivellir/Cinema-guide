<script lang="ts" setup>
const userStore = useUserStore()
await useAsyncData(
	'user',
	() => (userStore.getFavorites(), userStore.getProfile())
)
</script>

<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<style lang="scss"></style>
