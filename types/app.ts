interface Res {
	[key: string]: any
}

interface User {
	name?: string
	surname?: string
	email: string
	password?: string
}

interface Film {
	trailerYouTubeId: string
	keywords: string[]
	backdropUrl: string
	production: string
	language: string
	tmdbRating: number
	title: string
	cast: string[]
	revenue: string
	posterUrl: string
	plot: string
	genres: string[]
	id: number
	budget: string
	languages: string[]
	releaseDate: string
	director: string
	awardsSummary: string
	runtime: number
	trailerUrl: string
	releaseYear: number
	countriesOfOrigin: string[]
	originalTitle: string
	searchL: string
	homepage: string
	status: string
}
