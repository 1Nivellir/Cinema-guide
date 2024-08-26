<template>
	<div class="footer__wrapper">
		<NuxtLink
			:to="link"
			v-for="{ icon, link } in footerItems"
			:key="link"
			target="_blank"
		>
			<img :src="`/cinema/svg/${icon}.svg`" :alt="link" />
		</NuxtLink>
	</div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.footer__wrapper {
	display: flex;
	gap: 24px;
}
</style>
