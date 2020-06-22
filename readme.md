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

to enter mysql 
```
docker exec -it <your db container name> mysql -u user -p
```
Login user
- username: user
- Password: password

Login root
- username: root
- Password: root

<br>

-- to enter bash in Docker container --
```
docker exec -it <your docker container name> bash 
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
Login:
* username: user
* Password: password

## Run Spring

REST: 
- This gets all data ```GET localhost:8080/user/all ```

- This adds one user to the data ```POST localhost:8080/user/add```

# run and test
* ## terminal
to run in terminal
```
$ ❯ curl -i --user user:password http://localhost:8080/user/add -d name=John -d email=email@email.com -d password=password -d role=admin
```
The reply should be: Saved

```
$ curl -i --user user:password http://localhost:8080/user/all
```
The reply should be: [{"id":5,"name":"John","username":"email@email.com","password":"password","enabled":true,"lastLogin":null,"role":"admin"}]

* ## Swagger 
```
http://localhost:8080/swagger-ui.html
```

* ## Postman
```
https://documenter.getpostman.com/view/1080136/SVmsX1VC?version=latest
```
<br>
<br>

#  OpenUi5


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
