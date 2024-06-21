<template>
	<button class="hero__trailer-circle">
		<IconReload fill="#FFFFFF" :class="reloadClass" @click="getNewFilm" />
	</button>
</template>

<script lang="ts" setup>
const storeFilm = useFilmsStore()
const reloadClass = ref('')

const getNewFilm = async () => {
	reloadClass.value = 'rotate'
	try {
		await storeFilm.getRandom()
	} catch (error) {
		console.log(error)
	} finally {
		reloadClass.value = ''
	}
}
</script>

<style></style>
