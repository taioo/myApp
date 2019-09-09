# myApp 

## Docker

### Setup
```
docker-compose up -d
```
### To Tear Down
```
docker-compose down --volumes
```
### Mysql

```
docker exec -it <your db docker container name > mysql -uroot -p
```

### Enter bash in Docker container
```
docker exec -it <your docker container name> bash 
```



#### mysql 
0.0.0.0:8081 </br>
127.0.0.1:8081
#### phpmyAdmin
 http://localhost:8082 </br>
 127.0.0.1:8082


# <spring>

## Spring

This gets all data 
```GET localhost:8080/user/all ```

This adds one user to the data
```POST localhost:8080/user/add```

in terminal
```
$ curl localhost:8080/user/add -d name=First -d email=email@email.com
```
The reply should be: Saved


```
$ curl 'localhost:8080/user/all'
```
The reply should be: [{"id":1,"name":"First","email":"email@email.com"}]



## Swagger 
```
http://localhost:8080/swagger-ui.html
```

