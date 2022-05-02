# MySQL

### Crear una red bridge

```
docker network create red-mysql -d bridge
```

### Para crear un contenedor de MySQL

```
docker run -d --name mysql_server -e MYSQL_ROOT_PASSWORD=12345 --network red-mysql mysql:8
```

### Para crear un contenedor de PhpMyAdmin

```
docker run -d --name phpmyadmin -e PMA_ARBITRARY=1 -p 7800:80 --network red-mysql phpmyadmin
```
