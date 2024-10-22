export default defineNuxtPlugin(() => {
	let deferredPrompt: any

	window.addEventListener('beforeinstallprompt', (e) => {
		// Предотвращаем автоматическое всплывание
		console.log('beforeinstallprompt')
		e.preventDefault()
		// Сохраняем событие для использования позже
		deferredPrompt = e

		// Показываем кастомную кнопку установки (можно через ref или store)
		const installButton = document.getElementById('install-button')
		if (installButton) {
			installButton.style.display = 'block'
		}

		// Обработка клика по кнопке
		if (installButton) {
			installButton.addEventListener('click', () => {
				// Показываем всплывающее окно
				deferredPrompt.prompt()

				// Ждем, пока пользователь выберет "Установить" или "Отменить"
				deferredPrompt.userChoice.then((choiceResult: any) => {
					if (choiceResult.outcome === 'accepted') {
						console.log('User accepted the install prompt')
					} else {
						console.log('User dismissed the install prompt')
					}
					deferredPrompt = null
				})
			})
		}
	})
})
