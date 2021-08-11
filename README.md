# Bibit Online Test - Back-end Node.js

## 1. Simple Database Querying
```
SELECT
	child.id,
	child."UserName" AS UserName,
	parent."UserName" AS ParentUserName
FROM
	"user" child
	LEFT JOIN "user" parent ON child."Parent" = parent.id;
```