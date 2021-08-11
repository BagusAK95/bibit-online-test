# Bibit Online Test - Back-end Node.js

## 1. Database Query
```
SELECT
	child.id,
	child."UserName" AS UserName,
	parent."UserName" AS ParentUserName
FROM
	"user" child
	LEFT JOIN "user" parent ON child."Parent" = parent.id;
```

## 4. Anagram

### Run Code

```
node anagram/anagram.js
```