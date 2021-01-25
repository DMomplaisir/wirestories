## BASIC SCHEMA 
```json
    id: alphanumeric || Required
	slug: string (no spaces)
	title: string
	dek: string
	published_date: datetime
	canonical_url: string (.html) (check if it’s exist)
	word_count: number
	tags: string
	embeds: null,
	lead_art: object
		id: number
		type: enum 
	authors: array of objects
		id: number
        slug: string
```