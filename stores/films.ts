import { defineStore } from 'pinia'

export const useFilmsStore = defineStore('films', () => {
	const listFilms = ref<Film[]>([])
	const errors = ref<any>()
	const oneFilm = ref({} as Film)

	async function getTop10() {
		try {
			const response = await useCustomFetch(apiGetTop10)
			const res: Res | any = response
			if (res) {
				listFilms.value = res
			}
		} catch (error) {
			errors.value = error
		}
	}

	async function getFilm(id: number) {
		try {
			const response = await useCustomFetch(`${apiGetFilm}/${id}`)
			const res: Res | any = response
			if (res) {
				oneFilm.value = res
				return res
			}
		} catch (error) {
			errors.value = error
		}
	}

	async function putLike(id: string) {
		const userStore = useUserStore()
		try {
			const response = await useCustomFetch(apiFavorites, {
				method: 'POST',
				body: { id: id },
			})
			const res: Res | any = response
			if (res) {
				await userStore.getFavorites()
				return true
			}
		} catch (error) {
			errors.value = error
		}
	}

	async function getGenres() {
		try {
			const response = await useCustomFetch(apiGenres)
			const res: Res | any = response
			if (res) {
				return res
			}
		} catch (error) {
			errors.value = error
		}
	}

	async function getOneGenre(slug: string, count: number, page: number) {
		try {
			const response = await useCustomFetch(
				`${apiGetFilm}?genre=${slug}&count=${count}&page=${page}`
			)
			const res: Res | any = response
			if (res) {
				return res
			}
		} catch (error) {
			errors.value = error
		}
	}
	async function deleteLike(id: string) {
		const userStore = useUserStore()
		try {
			const response = await useCustomFetch(`${apiFavorites}/${id}`, {
				method: 'DELETE',
			})
			const res: Res | any = response
			if (res) {
				await userStore.getFavorites()
			}
		} catch (error) {
			errors.value = error
		}
	}

	async function searchFilms(name: string) {
		try {
			const response = await useCustomFetch(
				`${apiGetFilm}?title=${name}&count=5`
			)
			const res: Res | any = response
			return res
		} catch (error) {
			errors.value = error
		}
	}
	async function getRandom() {
		try {
			const response = await useCustomFetch(apiGetRandom)
			const res: Res | any = response
			oneFilm.value = res
			return res
		} catch (error) {
			errors.value = error
		}
	}

	return {
		listFilms,
		getTop10,
		getRandom,
		getFilm,
		putLike,
		deleteLike,
		oneFilm,
		getGenres,
		searchFilms,
		getOneGenre,
	}
})
