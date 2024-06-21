<template>
	<div class="card">
		<NuxtLink :to="`/movie/${item.id}`" class="card__link"></NuxtLink>
		<span class="card__number" v-if="!showBtn" :class="myInjectedValue || ''">{{
			index
		}}</span>
		<img
			:src="item.posterUrl"
			:alt="item.title"
			v-if="item.posterUrl"
			class="card__img"
			@error="imageError($event)"
		/>
		<img src="/img/error-img.png" :alt="item.title" v-else class="card__img" />
		<span
			class="card__delete"
			v-if="showBtn"
			@click="deleteLike(item.id.toString())"
		></span>
	</div>
</template>

<script lang="ts" setup>
const showBtn = inject('showBtnCardOnCard')
const myInjectedValue = inject('notShow', 'defaultIfNotProvided')
const useFilmStore = useFilmsStore()
defineProps<{
	item: Film
	index?: number
}>()

const imageError = (event: any) => {
	event.target.src = '/img/error-img.png'
}
const deleteLike = async (id: string) => {
	await useFilmStore.deleteLike(id)
}
</script>

<style scoped lang="scss">
.card {
	position: relative;
	border: 1px solid rgba(255, 255, 255, 0.25);
	border-radius: 50px;
	width: 100%;
	box-shadow: 0px 0px 80px 0px rgba(255, 255, 255, 0.33);

	&:hover {
		.card__delete {
			opacity: 1;
		}
	}

	&__notShowIndex {
		display: none;
	}

	&__link {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
	}

	&__delete {
		cursor: pointer;
		display: inline-block;
		position: absolute;
		top: -20px;
		right: -20px;
		z-index: 5;
		width: 48px;
		height: 48px;
		background: #fff;
		border-radius: 50%;
		opacity: 0;
		transition: opacity 0.3s ease-in-out;

		&::before,
		&::after {
			content: '';
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 50%;
			height: 2px;
			background-color: black;
		}

		&::before {
			transform: translate(-50%, -50%) rotate(45deg);
		}

		&::after {
			transform: translate(-50%, -50%) rotate(-45deg);
		}
	}

	&__number {
		position: absolute;
		top: -12px;
		left: -12px;
		border-radius: 50px;
		background: rgb(255, 255, 255);
		padding: 5px 23px;
		color: rgb(106, 93, 193);
		font-size: 24px;
		font-weight: 700;
		line-height: 32px;
	}

	&__img {
		border-radius: 50px;
		height: 336px;
		width: 100%;
	}
}
</style>
