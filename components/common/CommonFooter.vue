<template>
	<footer class="footer">
		<div class="container footer__container">
			<FooterContent />
			<FooterLink />
		</div>
	</footer>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.footer {
	margin-top: auto;
	padding-top: 40px;
	padding-bottom: 40px;

	&__container {
		display: flex;
		justify-content: space-between;
		align-items: center;

		@media screen and (max-width: 768px) {
			flex-direction: column;
			align-items: flex-start;
			row-gap: 32px;
		}
	}
}
</style>
