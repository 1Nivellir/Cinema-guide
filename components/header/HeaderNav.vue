<template>
	<div class="header__nav">
		<NuxtLink
			v-for="{ name, to } in menuItems"
			:key="name"
			:to="to"
			class="header__link"
			:class="{ 'header__link--active': $route.path === to }"
		>
			{{ name }}
		</NuxtLink>
	</div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.header {
	&__nav {
		display: flex;
		gap: 20px;
	}

	&__link {
		text-decoration: none;
		color: var(--c-white);
		font-size: 24px;
		font-weight: 400;
		line-height: 32px;

		&--active {
			border-bottom: 2px solid rgb(220, 93, 252);
		}
	}
}
</style>
