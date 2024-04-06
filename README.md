# Reacteur-P4-Marvel-back

## Presentation

**Marvel Backend** made in context of training at [@Le Reacteur](https://github.com/lereacteur) bootcamp.

- [x] **Node JS**
- [x] **Mongo DB**
- [x] **Express**
- [x] Frontend **React** [Github](https://github.com/LucileBch/Reacteur-P4-Marvel-front.git)

Front Hosted on [Netlify](https://reacteur-training-marvel.netlify.app/) \
Backend hosted on [NorthFlank](https://site--backend-marvel--mrqlhtl4f2zp.code.run/)

## Tech Stack

- Mongo DB
- Express
- Node JS

## Installation

1. Clone the repository :

```bash
git clone https://github.com/LucileBch/Reacteur-P4-Marvel-back.git
```

2. Install dependencies and run :

```bash
npm
npx nodemon
```

## API Reference

## Comics

#### Get all comics

```http
  GET /api/comics
```

| Query     | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `api_key` | `string` | **Required**. Your API key          |
| `skip`    | `string` | **No**. number of results to ignore |
| `search`  | `string` | **No**. search a character by name  |
| `limit`   | `string` | **No**. between 1 and 100           |

#### Get all comics linked to a character by Id

```http
  GET /api/comics/${characterId}
```

| Query     | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

| Parameter     | Type     | Description                        |
| :------------ | :------- | :--------------------------------- |
| `characterId` | `string` | **Required**. characterId to fetch |

#### Like a comic

```http
  POST /api/comic/like
```

| Query         | Type     | Description                |
| :------------ | :------- | :------------------------- |
| `api_key`     | `string` | **Required**. Your API key |
| `title`       | `string` | **Required**.              |
| `apiId`       | `string` | **Required**.              |
| `picture`     | `string` | **No**. Url                |
| `description` | `string` | **No**.                    |

#### Display all comics liked

```http
  GET /api/comics/like
```

| Query     | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Dislike a comic

```http
  DELETE /api/comics/dislike/${comic._id}
```

| Query     | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

| Parameter   | Type     | Description              |
| :---------- | :------- | :----------------------- |
| `comic._id` | `string` | **Required**. MongoDB id |

## Characters

#### Get all characters

```http
  GET /api/characters
```

| Query     | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `api_key` | `string` | **Required**. Your API key          |
| `skip`    | `string` | **No**. number of results to ignore |
| `search`  | `string` | **No**. search a character by name  |
| `limit`   | `string` | **No**. between 1 and 100           |

#### Like a character

```http
  POST /api/character/like
```

| Query         | Type     | Description                |
| :------------ | :------- | :------------------------- |
| `api_key`     | `string` | **Required**. Your API key |
| `name`        | `string` | **Required**.              |
| `apiId`       | `string` | **Required**.              |
| `picture`     | `string` | **No**. Url                |
| `description` | `string` | **No**.                    |

#### Display all characters liked

```http
  GET /api/characters/like
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Dislike a character

```http
  DELETE /api/characters/dislike/${character._id}
```

| Query     | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

| Parameter       | Type     | Description              |
| :-------------- | :------- | :----------------------- |
| `character._id` | `string` | **Required**. MongoDB id |

## User

#### SignUp

```http
  POST /api/user/signup
```

| Query      | Type     | Description                |
| :--------- | :------- | :------------------------- |
| `api_key`  | `string` | **Required**. Your API key |
| `email`    | `string` | **Required**.              |
| `username` | `string` | **Required**.              |
| `password` | `string` | **Required**.              |

#### Login

```http
  POST /api/user/login
```

| Query      | Type     | Description                |
| :--------- | :------- | :------------------------- |
| `api_key`  | `string` | **Required**. Your API key |
| `email`    | `string` | **Required**.              |
| `password` | `string` | **Required**.              |

## Thanks

Thanks to :

- [@Le Reacteur](https://github.com/lereacteur)
