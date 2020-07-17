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

Stops containers and removes containers created by up
```
docker-compose down --volumes
```
<br>
<br>

# Mysql

access mysql container (myapp_mysql) in docker
```
docker exec -it myapp_mysql mysql -u user -p
```
Login user
- username: user
- Password: password

### OR 
Login root
- username: root
- Password: root

<br>

mysql:
* 0.0.0.0:8081
* 127.0.0.1:8081

phpmyAdmin:
 * http://localhost:8082 
 * 127.0.0.1:8082

<br>
<br>

# Spring

navigate to Spring folder
```
cd Spring
```

install & run
```
mvn install && mvn spring-boot:run
```

Admin user
 - username: user
 - Password: password

REST: 
- This gets all data ```GET localhost:8080/user/all ```
- This adds one user to the data ```POST localhost:8080/user/add```

create user:
```
$ ❯ curl -i --user user:password http://localhost:8080/user/add -d name=John -d email=email@email.com -d password=password -d role=admin
```
The reply should be: Saved

```
$ curl -i --user user:password http://localhost:8080/user/all
```
The reply should be: [{"id":5,"name":"John","username":"email@email.com","password":"password","enabled":true,"lastLogin":null,"role":"admin"}]

 ## Swagger
```
http://localhost:8080/swagger-ui.html
```

<br>
<br>

#  OpenUi5 // todo

file directory: 
```
cd openui5
```


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
