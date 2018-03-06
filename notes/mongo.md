```js

查看数据库：show dbs
查看集合：show collections
使用数据库/新建数据库：use dbname
查找：find()
插入：insert({})
删除所有集合：db.dropDatabase()
删除集合中的所有数据：db.user.drop()
导入数据：mongoimport --db test【目标数据库】 --collection user【要导入的集合】 --drop【清空集合已存在的数据】 --file data.json【要导入的json数据】
条件查找：
大于：$gt——db.user.find({'age':{$gt:20}})



```