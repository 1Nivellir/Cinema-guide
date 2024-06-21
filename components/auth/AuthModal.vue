<template>
	<ClientOnly>
		<Teleport to="body">
			<div class="auth" v-if="userStore.showIsModal">
				<div class="auth__wrapper">
					<span class="auth__close" @click="userStore.openAndCloseModal"></span>
					<img src="/img/logo.png" alt="Логотип" />
					<AuthLogin v-if="component === 'AuthLogin'" />
					<LazyAuthRegistration
						v-if="component === 'AuthRegistration'"
						@success="success"
					/>
					<LazyAuthSuccess
						v-if="component === 'AuthSuccess'"
						@goToLogin="goToLogin"
					/>
					<button class="auth__switch" @click="switchComponent" v-if="showBtn">
						{{ textBtn }}
					</button>
				</div>
			</div>
		</Teleport>
	</ClientOnly>
</template>

<script lang="ts" setup>
const userStore = useUserStore()
const textBtn = ref('Регистрация')
const component = ref('AuthLogin')
const showBtn = ref(true)

const switchComponent = () => {
	if (textBtn.value === 'Регистрация') {
		textBtn.value = 'У меня есть пароль'
		component.value = 'AuthRegistration'
	} else {
		textBtn.value = 'Регистрация'
		component.value = 'AuthLogin'
	}
}

const success = () => {
	component.value = 'AuthSuccess'
	textBtn.value = 'Регистрация'
	showBtn.value = false
}
const goToLogin = (body: boolean) => {
	if (body) {
		component.value = 'AuthLogin'
		showBtn.value = true
	}
}
</script>

<style scoped lang="scss">
.auth {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.6);

	&__wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 40px;
		padding: 64px 40px;
		border-radius: 24px;
		background: rgb(255, 255, 255);
		z-index: 5;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		max-width: 420px;
		width: 100%;

		@media screen and (max-width: 1024px) {
			padding: 34px 20px;
			max-width: 360px;
			overflow-y: auto;
		}
	}

	&__switch {
		border: none;
		background: none;
		color: rgb(0, 0, 0);
		padding: 0;
		font-size: 18px;
		font-weight: 700;
		line-height: 24px;
		cursor: pointer;
	}

	&__close {
		cursor: pointer;
		display: inline-block;
		position: absolute;
		top: 0;
		right: -75px;
		width: 48px;
		height: 48px;
		background: #fff;
		border-radius: 50%;

		@media screen and (max-width: 1024px) {
			right: 0;
		}

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
}
</style>
