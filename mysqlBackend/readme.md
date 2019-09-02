
## This will setup Wordpress, MySQL & PHPMyAdmin with a single command.

```
docker-compose up -d
```
## To Tear Down
```
docker-compose down --volumes
```
## mysql

```
docker exec -it <your db docker container name > mysql -uroot -p
```

## Enter bash in Docker container
```
docker exec -it <your docker container name> bash 
```
