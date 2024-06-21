export function getInitials(user: User) {
	const { name, surname } = user
	if (name && surname) {
		return name[0] + surname[0].toUpperCase()
	}
}

export function getTime(runtime: number | undefined): string {
	if (!runtime) {
		return ''
	}
	const hours = Math.floor(runtime / 60)
	const minutes = runtime % 60

	return `${hours} ч ${minutes} мин`
}

export function getCountry(countryCode: string): string {
	const countryCodes: { [key: string]: string } = {
		us: 'Соединенные Штаты',
		gb: 'Соединенное Королевство',
		de: 'Германия',
		fr: 'Франция',
		it: 'Италия',
		es: 'Испания',
		jp: 'Япония',
		cn: 'Китай',
		in: 'Индия',
		br: 'Бразилия',
		ca: 'Канада',
		au: 'Австралия',
		ru: 'Россия',
		mx: 'Мексика',
	}
	const lowerCaseCode = countryCode.toLowerCase()
	return lowerCaseCode in countryCodes
		? countryCodes[lowerCaseCode]
		: 'Неизвестная страна'
}

export function getBudget(budget: string | undefined): string {
	if (!budget) {
		return ''
	}
	const number = Number(budget)
	const formatter = new Intl.NumberFormat('ru-RU', {
		style: 'currency',
		currency: 'RUB',
	})
	return formatter.format(number)
}

export function getRating(rating: number | undefined): number | null {
	if (!rating) {
		return null
	}
	return parseFloat(rating.toFixed(1))
}

export function translateGenre(genre: any) {
	const genres: { [key: string]: string } = {
		history: 'Исторические',
		horror: 'Ужасы',
		scifi: 'Научная фантастика',
		'stand-up': 'Стенда́п-коме́дия',
		fantasy: 'Фэнтези',
		drama: 'Драма',
		mystery: 'Мистика',
		family: 'Семейное',
		comedy: 'Комедии',
		romance: 'Романтика',
		crime: 'Криминал',
		music: 'Музыкальные',
		'tv-movie': 'Телевизионные',
		documentary: 'Документальные',
		action: 'Боевики',
		thriller: 'Триллер',
		western: 'Вестерн',
		animation: 'Мультфильмы',
		war: 'Военные',
		adventure: 'Приключения',
	}

	return genres[genre] || genre
}
