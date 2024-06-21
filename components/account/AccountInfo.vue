<template>
	<div class="profile">
		<div class="profile__wrapper">
			<span class="profile__icon">{{ getInitials(userStore.user) }}</span>
			<div class="profile__wrapper-title">
				<span class="profile__small">Имя Фамилия</span>
				<h3 class="profile__title">
					{{ `${userStore.user.name} ${userStore.user.surname}` }}
				</h3>
			</div>
		</div>
		<div class="profile__wrapper">
			<span class="profile__icon"
				><IconEmail fill="#fff" height="18px" width="22px"
			/></span>
			<div class="profile__wrapper-title">
				<span class="profile__small">Электронная почта</span>
				<h3 class="profile__title">
					{{ userStore.user.email }}
				</h3>
			</div>
		</div>

		<button class="profile__btn" @click="userStore.logout">
			Выйти из аккаунта
		</button>
	</div>
</template>

<script lang="ts" setup>
const userStore = useUserStore()
</script>

<style scoped lang="scss">
.profile {
	display: flex;
	flex-direction: column;

	&__btn {
		border: none;
		border-radius: 28px;
		padding: 16px 48px;
		max-width: max-content;
		background: rgb(106, 93, 193);
		color: rgb(255, 255, 255);
		font-size: 18px;
		font-weight: 700;
		line-height: 24px;
		cursor: pointer;
	}

	&__icon {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.5);
		color: rgb(255, 255, 255);
		font-size: 24px;
		font-weight: 700;
		line-height: 32px;
	}

	&__wrapper {
		margin-bottom: 40px;
		display: flex;
		gap: 16px;

		&:nth-last-child(2) {
			margin-bottom: 64px;
		}
	}
	&__small {
		display: block;
		color: rgb(255, 255, 255);
		font-size: 18px;
		font-weight: 400;
		line-height: 24px;
	}
	&__title {
		color: rgb(255, 255, 255);
		font-size: 24px;
		font-weight: 700;
		line-height: 32px;
	}
}
</style>
