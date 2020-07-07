# myApp 


# Setup
to define and start containers
```
docker-compose up -d
```
check containers status
```
docker container ls
```

to stop
```
docker-compose down --volumes
```
<br>
<br>

# Mysql

to enter database (myapp_db_1) in docker
```
docker exec -it myapp_db_1 mysql -u user -p
```
Login user
- username: user
- Password: password

### OR 

Login root
- username: root
- Password: root

<br>

-- to enter bash in Docker container --
```
docker exec -it myapp_db_1 bash 
```



mysql:
* 0.0.0.0:8081
* 127.0.0.1:8081

phpmyAdmin:
 * http://localhost:8082 
 * 127.0.0.1:8082

<br>
<br>

# Spring
spring admin login:
* username: user
* Password: password

## Run Spring
to run
```
mvn install && mvn spring-boot:run
```

REST: 
- This gets all data ```GET localhost:8080/user/all ```

- This adds one user to the data ```POST localhost:8080/user/add```

 ## REST in terminal:

create user:
```
$ ❯ curl -i --user user:password http://localhost:8080/user/add -d name=John -d email=email@email.com -d password=password -d role=admin
```
The reply should be: Saved

```
$ curl -i --user user:password http://localhost:8080/user/all
```
The reply should be: [{"id":5,"name":"John","username":"email@email.com","password":"password","enabled":true,"lastLogin":null,"role":"admin"}]

* ## Swagger: 
```
http://localhost:8080/swagger-ui.html
```

<br>
<br>

#  OpenUi5 // todo



file directory: ```myApp/Spring/src/main/openui5```


Install all dependencies
```
yarn
```

Start a local server and run the application (http://localhost:8080/index.html)
```
ui5 serve -o index.html
```
</br>

more info
```
https://github.com/SAP/openui5-sample-app
```
