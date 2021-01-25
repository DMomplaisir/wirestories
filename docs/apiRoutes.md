# Dylan's REST API
Here are the following api routes available and how to use them. 

# Endpoints
* All articles : `GET /articles`
* Get a single article by id `GET /articles`
* Get a single article by canoncial link: `GET /articles`
* Create a new article: `POST /articles`


## Get all articles

Get all articles in a list. 

METHOD: `GET /articles`

### Success Response

**RESPONSE CODE**: `200 OK`

```json
    [
        {
            "id": "b73b8b0e-0240-42a9-874c-00445d51dd8a", 
            "slug": "tracee-ellis-ross-on-hollywood-girlfriends-netflix",  "title": "Tracee Ellis Ross Felt Lost in Hollywood. Then She Changed Course.",  "dek": "The <em>Black-ish </em>star and Emmy nominee figured she’d made it when she scored the lead role in the early-2000s sitcom <em>Girlfriends</em>. But it would be 14 more years before she hit her stride.", 
            "published_date": "2020-08-30T10:00:00Z", 
            "canonical_url": 
            "/culture/archive/2020/08/tracee-ellis-ross-on-hollywood-girlfriends-netflix/615754/",  "word_count": 2068, 
            "tags": "", 
            "embeds": null, 
            "lead_art": { 
                "id": "1526857",
                "type": "image_large" 
            }, 
            "authors":[ 
                { 
                "id": "7313", 
                "slug": "shirley-li", 
                }, 
                { 
                "id": "3453", 
                "slug": "lafrance-adrienne", 
                } 
            ] 
        }
        ...
    ]
```

## Get a single article by id

Get a single article. An id is an alphanumeric series of charcathers with no spaces, only dashes (not em dashes, haha)

METHOD: `GET /articles/id`

### Success Response
REQUEST BODY:
```json
{
"id": "b73b8b0e-0240-42a9-874c-00445d51dd8a"
}```

RESPONSE CODE: ```200 OK```

```json
{
    "article":

    {
        "id": "b73b8b0e-0240-42a9-874c-00445d51dd8a", 
            "slug": "tracee-ellis-ross-on-hollywood-girlfriends-netflix",  "title": "Tracee Ellis Ross Felt Lost in Hollywood. Then She Changed Course.",  "dek": "The <em>Black-ish </em>star and Emmy nominee figured she’d made it when she scored the lead role in the early-2000s sitcom <em>Girlfriends</em>. But it would be 14 more years before she hit her stride.", 
            "published_date": "2020-08-30T10:00:00Z", 
            "canonical_url": 
            "/culture/archive/2020/08/tracee-ellis-ross-on-hollywood-girlfriends-netflix/615754/",  "word_count": 2068, 
            "tags": "", 
            "embeds": null, 
            "lead_art": { 
                "id": "1526857",
                "type": "image_large" 
            }, 
            "authors":[ 
                { 
                "id": "7313", 
                "slug": "shirley-li", 
                }, 
                { 
                "id": "3453", 
                "slug": "lafrance-adrienne", 
                } 
            ] 
    }
}
```

## Get a single article by canonical link

Get a single article. An canoncial link contains .html at the end. 

METHOD: `GET /articles/canoncial_link`

### Success Response
REQUEST BODY:
```json
{
"canonical_link": "/culture/archive/2020/08/tracee-ellis-ross-on-hollywood-girlfriends-netflix/615754"
}```

RESPONSE CODE: ```200 OK```

```json
{
    "article":

    {
        "id": "b73b8b0e-0240-42a9-874c-00445d51dd8a", 
            "slug": "tracee-ellis-ross-on-hollywood-girlfriends-netflix",  "title": "Tracee Ellis Ross Felt Lost in Hollywood. Then She Changed Course.",  "dek": "The <em>Black-ish </em>star and Emmy nominee figured she’d made it when she scored the lead role in the early-2000s sitcom <em>Girlfriends</em>. But it would be 14 more years before she hit her stride.", 
            "published_date": "2020-08-30T10:00:00Z", 
            "canonical_url": 
            "/culture/archive/2020/08/tracee-ellis-ross-on-hollywood-girlfriends-netflix/615754/",  "word_count": 2068, 
            "tags": "", 
            "embeds": null, 
            "lead_art": { 
                "id": "1526857",
                "type": "image_large" 
            }, 
            "authors":[ 
                { 
                "id": "7313", 
                "slug": "shirley-li", 
                }, 
                { 
                "id": "3453", 
                "slug": "lafrance-adrienne", 
                } 
            ] 
    }
}
```

## Post a single article 

Get a single article. An canoncial link contains .html at the end. 

- Ensure your ID is unique, as you'll recieve a 409 conflict error otherwise.
- You may post an already existing ID if the canonical_link matches, it will be treated as an update.

METHOD: `GET /articles/canoncial_link`

### Success Response
REQUEST BODY:
```json
{
    "article": {
        "id": "b73b8b0e-0240-42a9-874c-00445d51dd8a", 
        "slug": "tracee-ellis-ross-on-hollywood-girlfriends-netflix",  "title": "Tracee Ellis Ross Felt Lost in Hollywood. Then She Changed Course.",  "dek": "The <em>Black-ish </em>star and Emmy nominee figured she’d made it when she scored the lead role in the early-2000s sitcom <em>Girlfriends</em>. But it would be 14 more years before she hit her stride.", 
        "published_date": "2020-08-30T10:00:00Z", 
        "canonical_url": 
        "/culture/archive/2020/08/tracee-ellis-ross-on-hollywood-girlfriends-netflix/615754/",  "word_count": 2068, 
        "tags": "", 
        "embeds": null, 
        "lead_art": { 
            "id": "1526857",
            "type": "image_large" 
        }, 
        "authors":[ 
            { 
            "id": "7313", 
            "slug": "shirley-li", 
            }, 
            { 
            "id": "3453", 
            "slug": "lafrance-adrienne", 
            }
            ]
    }
}

```

RESPONSE CODE: ```200 OK```

### Failure Response
REQUEST BODY:
```json
{
    "article": {
        "id": "b73b8b0e-0240-42a9-874c-00445d51dd8a", 
        "slug": "tracee-es-ross-on-hollywood-girlfriends-netflix",  "title": "Tracee Ellis Ross Felt Lost in Hollywood. Then She Changed Course.",  "dek": "The <em>Black-ish </em>star and Emmy nominee figured she’d made it when she scored the lead role in the early-2000s sitcom <em>Girlfriends</em>. But it would be 14 more years before she hit her stride.", 
        "published_date": "2020-08-30T10:00:00Z", 
        "canonical_url": 
        "/culture/archive/2020/08/tracee-ellis-ross-on-hollywood-girlfriends-netflix/615754/",  "word_count": 2068, 
        "tags": "", 
        "embeds": null, 
        "lead_art": { 
            "id": "1526857",
            "type": "image_large" 
        }, 
        "authors":[ 
            { 
            "id": "7313", 
            "slug": "shirley-li", 
            }, 
            { 
            "id": "3453", 
            "slug": "lafrance-adrienne", 
            }
            ]
    }
}

``` 
ID already exists, yet canonical id doesn't match.

RESPONSE CODE: ```409```