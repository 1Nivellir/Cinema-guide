<template>
	<div class="footer__content">
		<h2 class="footer__subtitle">LLC «Мультимедиа Визион»</h2>
		<div class="footer__wrapper">
			<span class="footer__img"></span>
			<span class="footer__copy">Все права защищены </span>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.footer {
	&__content {
		display: flex;
		align-items: center;
		gap: 14px;

		@media screen and (max-width: 768px) {
			gap: 8px;
			flex-direction: column;
			align-items: flex-start;
		}
	}

	&__wrapper {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	&__img {
		background: url('/svg/footer-c.svg') no-repeat;
		background-size: contain;
		width: 20px;
		height: 20px;
	}

	&__copy {
		color: rgba(255, 255, 255, 0.7);
		font-size: 18px;
		font-weight: 400;
		line-height: 24px;
	}
	&__subtitle {
		color: rgb(255, 255, 255);
		font-size: 18px;
		font-weight: 700;
		line-height: 24px;
	}
}
</style>
