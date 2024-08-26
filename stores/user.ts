import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
	const user = ref<User>({
		email: '',
		name: '',
		surname: '',
	})
	const favorites = ref<Film[]>([])
	const isAuth = ref(false)
	const showIsModal = ref(false)
	const errors = ref<any>()
	async function createUser(body: User) {
		try {
			const response = await useCustomFetch(apiCreate, {
				method: 'POST',
				body: body,
			})
			const res: Res | any = response
			if (res) {
				return true
			}
		} catch (error: any) {
			if (error.status === 409) {
				return 'Такой пользователь уже существует'
			} else {
				return 'Не предвиденная ошибка'
			}
		}
	}

	async function loginUser(body: User) {
		try {
			const response = await useCustomFetch(apiLogin, {
				method: 'POST',
				body: body,
			})
			const res: Res | any = response
			if (res) {
				await Promise.all([getProfile(), getFavorites()])
			}
			return true
		} catch (error: any) {
			if (error.status === 400) {
				return 'Не правильный логин или пароль'
			} else {
				return 'Не предвиденная ошибка'
			}
		}
	}

	async function getFavorites() {
		try {
			const response = await useCustomFetch(apiFavorites)
			const res: Res | any = response
			if (res) {
				favorites.value = res
			}
		} catch (error) {
			errors.value = error
		}
	}
	async function getProfile() {
		try {
			const response = await useCustomFetch(apiProfile)
			const res: Res | any = response
			if (res) {
				user.value = res
				isAuth.value = true
				showIsModal.value = false
			}
		} catch (error) {
			errors.value = error
		}
	}
	function openAndCloseModal() {
		showIsModal.value = !showIsModal.value
	}

	async function logout() {
		try {
			const response = await useCustomFetch(apiLogout)
			const res: Res | any = response
			if (res) {
				isAuth.value = false
				user.value = {} as User
				navigateTo('/')
			}
		} catch (error) {
			errors.value = error
		}
	}
	return {
		user,
		isAuth,
		showIsModal,
		openAndCloseModal,
		createUser,
		loginUser,
		getProfile,
		favorites,
		getFavorites,
		logout,
	}
})
