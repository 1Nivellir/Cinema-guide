// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	css: ['~/assets/scss/main.scss'],
	ssr: false,
	app: {
		head: {
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/cinema/favicon.ico' },
			],
		},
	},
	pwa: {
		manifest: {
			name: 'My PWA App',
			short_name: 'PWA',
			description: 'Моё первое PWA приложение на Nuxt 3',
			theme_color: '#ffffff',
			background_color: '#ffffff',
			display: 'standalone',
			start_url: '/', // Начальная страница приложения
			icons: [
				{
					src: '/icon-192x192.png', // Используем правильные .png иконки
					sizes: '192x192',
					type: 'image/png',
				},
				{
					src: '/icon-512x512.png', // Иконка 512x512 для установки PWA
					sizes: '512x512',
					type: 'image/png',
				},
			],
		},
		workbox: {
			// Настройка fallback для всех навигаций
			navigateFallback: '/', // Перенаправляем на главную, если путь не кэширован
			// Runtime кэширование
			runtimeCaching: [
				{
					urlPattern: '/', // Главная страница
					handler: 'NetworkFirst', // Попробовать загрузить из сети, если не удастся — из кэша
					options: {
						cacheName: 'pwa-cache',
						expiration: {
							maxAgeSeconds: 60 * 60 * 24 * 30, // Кэшировать на 30 дней
						},
					},
				},
				{
					urlPattern: /^https:\/\/cinema-guide-five\.vercel\.app\/.*/, // Все ресурсы с сайта
					handler: 'NetworkFirst', // Попытка сначала получить данные из сети
					options: {
						cacheName: 'pwa-cache',
					},
				},
			],
		},
	},
	modules: [
		'@vite-pwa/nuxt',
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
		token:
			process.env.NUXT_PUBLIC_TOKEN ||
			'4f17e1089c11a089af3c2caab8d96c86c4163b2a214474fef83edc358aaea6fc6803fb1f9f61fa8d1c1134e01ab2702faf955c17b63f8b87ecbecc55692bec1e54c508ed2cd1fa1c4405be540451855a878a8b38e54c05f54587f06e9183626a2103d21bb3e9f4c12f6d034805ae50853de6562ec275b8dd332f6e22229a2a80',
		public: {
			baseURL:
				process.env.NUXT_PUBLIC_BASE_URL || 'https://cinemaguide.skillbox.cc/',
		},
	},
})
