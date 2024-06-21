<template>
	<header class="header">
		<div class="container header__container">
			<transition name="search" mode="out-in">
				<div class="header__search-wrapper" v-if="showSearch">
					<HeaderSearch @closeInput="toggleSearch" />
				</div>
			</transition>
			<NuxtLink to="/" class="header__logo">
				<img src="/img/logo.png" alt="Логотип" />
			</NuxtLink>
			<div class="header__wrapper">
				<NuxtLink to="/genres">
					<img src="/svg/genres-mobile.svg" alt="Жанры" />
				</NuxtLink>
				<button class="header__search-custom" @click="toggleSearch">
					<img src="/svg/search.svg" alt="Поиск" />
				</button>
				<NuxtLink to="/account" v-if="userStore.isAuth">
					<IconUser fill="#FFFFFF" height="21px" />
				</NuxtLink>
				<button
					class="header__search-custom"
					v-else
					@click="userStore.openAndCloseModal"
				>
					<Icon name="mdi:login" color="white" size="28" />
				</button>
				<AuthModal />
			</div>
		</div>
	</header>
</template>

<script lang="ts" setup>
const showSearch = ref(false)

const toggleSearch = () => {
	showSearch.value = !showSearch.value
}
const userStore = useUserStore()
</script>

<style>
.search-enter-active,
.search-leave-active {
	transition: all 0.4s;
}
.search-enter-from {
	transform: translateY(-150%);
}
.search-leave-to {
	transform: translateY(-150%);
}
</style>

<style scoped lang="scss">
.header {
	background: rgba(10, 11, 11, 0.9);
	max-height: 56px;
	padding: 16px 0;

	&__search-wrapper {
		position: absolute;
		top: -13px;
		left: 0;
		padding: 0 20px;
		width: 100%;
		z-index: 10;
	}

	&__container {
		position: relative;
		display: flex;
		gap: 20px;
		justify-content: space-between;
		align-items: center;
	}

	&__wrapper {
		align-items: center;
		display: flex;
		gap: 22px;
	}

	&__search-custom {
		padding: 0;
		background: transparent;
		border: none;
		cursor: pointer;
	}
}
</style>
