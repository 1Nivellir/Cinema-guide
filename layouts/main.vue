<template>
	<div class="home">
		<CommonHeader />
		<main class="main">
			<slot />
		</main>
		<CommonFooter />
	</div>
</template>

<script lang="ts" setup></script>

<style>
.main {
	padding-bottom: 120px;
}
</style>
