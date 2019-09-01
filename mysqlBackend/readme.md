
```
docker pull mysql/mysql-server
```

```
docker run --name=myDockerMysql -d mysql/mysql-server 
```

```
logs myDockerMysql
```
search for password:
"[Entrypoint] GENERATED ROOT PASSWORD: ###############"

</br>

to run mysql

```
docker exec -it myDockerMysql mysql -uroot -p
```

to remove password from root

```
ALTER USER 'root'@'localhost' IDENTIFIED BY '';
FLUSH PRIVILEGES;
```

show all user in mysql
```
select * from mysql.user;
```
show all users
```
SELECT User, Host FROM mysql.user;
```
</br>

enter bash in Docker container
```
docker exec -it myDockerMysql bash 
```
to  start | stop | restart  container 
```
docker stop myDockerMysql

docker start myDockerMysql

docker restart myDockerMysql
```
to remove myDockerMysql docker container
```
docker rm myDockerMysql
```
