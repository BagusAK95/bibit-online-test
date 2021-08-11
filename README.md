# Bibit Online Test - Back-end Node.js

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

## 3. Refactor Code

#### Test

```
node refactor/refactor.js
```

#### Result

```
Application Programming Interface
```

### 

## 4. Anagram

#### Test

```
node anagram/anagram.js
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