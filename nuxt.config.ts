// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	css: ['~/assets/scss/main.scss'],
	modules: [
		'nuxt-icon',
		[
			'nuxt-swiper',
			{
				swiper: {
					prefix: 'Swiper',
					styleLang: 'css | scss',
					modules: ['navigation', 'pagination'], // all modules are imported by default
				},
			},
		],
		[
			'@pinia/nuxt',
			{
				autoImports: ['defineStore', 'storeToRefs'],
			},
		],
		[
			'@vee-validate/nuxt',
			{
				// disable or enable auto imports
				autoImports: true,
				classes: true,
				classNames: {
					valid: 'is-valid',
					invalid: 'is-invalid',
				},
				// Use different names for components
				componentNames: {
					Form: 'VeeForm',
					Field: 'VeeField',
					FieldArray: 'VeeFieldArray',
					ErrorMessage: 'VeeErrorMessage',
				},
			},
		],
	],
	runtimeConfig: {
		public: {
			baseURL:
				process.env.NUXT_PUBLIC_BASE_URL || 'https://cinemaguide.skillbox.cc/',
		},
	},
})
