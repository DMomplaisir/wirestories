# The Atlantic Wire Stories Tool

A small Node.js application accepting wire stories, and creates entries in our MongoDB database. 




## How to run! 
Install
- Docker
- Docker Compose
To run, simply 
```docker-compose up -d```

---

An article will be 
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
