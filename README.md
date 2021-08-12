# Bibit Online Test - Node.js

## 1. Database Query

I'm used `LEFT JOIN` to get Parent on table user. But need to set alias (Child, Parent) when joining table. It's make get data from same table but like query on 2 table.

#### SQL

```
SELECT
	child.id,
	child."UserName" AS UserName,
	parent."UserName" AS ParentUserName
FROM
	"user" child
	LEFT JOIN "user" parent ON child."Parent" = parent.id;
```

#### Result

```
| id | username | parentusername |
|----|----------|----------------|
|  1 | Ali      | Budi           |
|  2 | Budi     |                |
|  3 | Cecep    | Ali            |
```

## 2. ExpressJS App

In this App have 3 endpoint: 
1. `GET /movie?title=xxx&page=1` to get movie list from omdb api
2. `GET /movie/:id` to get movie detail
3. `GET /log` to see the log endpoint called

I'm used `postgres` because it's free on Heroku platform. So I can publish the app to public. But if you dont have `postgres` you can change the `SQL_TYPE` variable on .env to `mysql`.
To collect the log I'm used global middleware because it will log all routes.
To call omdb api I'm used `axios` because the library is popular as http client.
I have complete the unit test using `jest` with some test case.
And I have prepare the Postman Documentation so you will more easier to test my work.

#### Setup Environment
```
export ENV=development
export PORT=3000
export DEBUG=log:*

export OMDB_API_KEY=faf7e5bb

export SQL_TYPE=postgres
export SQL_HOST=127.0.0.1
export SQL_PORT=5432
export SQL_USERNAME=postgres
export SQL_PASSWORD=secret
export SQL_DATABASE=demo
```

#### Source Environment
```
source .env
```

#### Build App
```
npm run build
```

#### Test App
```
npm test
```

#### Start App
```
npm start
```

#### Result
```
Server running on port 3000
```

#### Public URL
```
https://bibit-online-test.herokuapp.com
```

#### Postman Documentation
```
https://documenter.getpostman.com/view/3187497/Tzz5tydM
```

## 3. Refactor Code

The result of `findFirstStringInBracket` it will return text inside bracket. And I see the code is so long. So I write the new code with `Regex`. It's make the code more concise, efficient and readable like what you want just with 1 line code.

#### Test
```
node refactor.js
```

#### Result
```
Application Programming Interface
```

### 

## 4. Anagram

First I will prepare 2 variable `keys` for collect anagram key and `results` for collect word. Then I will loop the words and split the word by latter to sorting the word by latter. The sorted latter I will collect as anagram key. Then I will collect the word to variable `results` base on anagram key index.

#### Test
```
node anagram.js
```

#### Result
```
[
  [ 'kita', 'atik', 'tika' ],
  [ 'aku', 'kua' ],
  [ 'kia' ],
  [ 'makan' ]
]
```