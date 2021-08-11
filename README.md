# Bibit Online Test - Node.js

## 1. Database Query

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