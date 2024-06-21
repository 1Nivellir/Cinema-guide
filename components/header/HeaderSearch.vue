<template>
	<div class="header__search">
		<label class="header__label">
			<input
				type="text"
				placeholder="Поиск"
				v-model="filmName"
				class="header__input"
				@input="getFilms"
			/>
			<button class="header__close" @click="closeInput">
				<Icon name="mdi:close-circle" color="white" size="28" />
			</button>
		</label>

		<HeaderSearchList
			:films="listFilms"
			class="header__search-list"
			@click="clearList"
		/>
	</div>
</template>

<script lang="ts" setup>
const filmsStore = useFilmsStore()
const filmName = ref('')
const listFilms = ref<Film[]>([])
const emit = defineEmits(['closeInput'])

const closeInput = () => {
	filmName.value = ''
	emit('closeInput', true)
}

const clearList = () => {
	listFilms.value = []
	filmName.value = ''
	emit('closeInput', true)
}
watch(filmName, () => {
	if (filmName.value.length === 0) clearList()
})
const getFilms = async () => {
	if (filmName.value.length === 0) return
	listFilms.value = await filmsStore.searchFilms(filmName.value)
}
</script>

<style scoped lang="scss">
.header {
	&__search {
		position: relative;
		max-width: 559px;
		width: 100%;
	}

	&__close {
		padding: 0;
		border: none;
		background: none;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 8px;
		cursor: pointer;
	}

	&__search-list {
		position: absolute;
		top: 120%;
		left: 0;
		width: 100%;
		z-index: 10;
	}

	&__label {
		position: relative;

		&::before {
			content: url('/svg/search.svg');
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			left: 12px;
		}
	}
	&__input {
		padding: 12px 12px 12px 48px;
		width: 100%;
		height: 48px;
		font-size: 18px;
		font-weight: 400;
		line-height: 24px;
		color: var(--c-white);
		border: none;
		border-radius: 8px;
		background: rgb(56, 58, 60);

		&:focus {
			outline: none;
		}

		&::placeholder {
			color: rgba(255, 255, 255, 0.5);
			font-size: 18px;
			font-weight: 400;
			line-height: 24px;
		}
	}
}
</style>
