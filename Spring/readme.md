# myApp Spring

This gets all data 
```GET localhost:8080/demo/all ```

This adds one user to the data
```POST localhost:8080/demo/add```

in terminal
```
$ curl localhost:8080/demo/add -d name=First -d email=email@email.com
```
The reply should be: Saved


```
$ curl 'localhost:8080/demo/all'
```
The reply should be: [{"id":1,"name":"First","email":"email@email.com"}]














* [Accessing Data with JPA](https://spring.io/guides/gs/accessing-data-jpa/)
* [Accessing data with MySQL](https://spring.io/guides/gs/accessing-data-mysql/)

