
## This will setup MySQL & PHPMyAdmin.
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