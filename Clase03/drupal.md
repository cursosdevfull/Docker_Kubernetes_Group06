# WordPress

### Crear una red

```
docker network create red-drupal -d bridge
```

### Crear volúmenes

```
docker volume create vol-mysql
docker volume create vol-drupal
```

### Contenedor de MySQL

```
docker run -d --name mysql_server -e MYSQL_ROOT_PASSWORD=12345 -e MYSQL_DATABASE=drupal -v vol-mysql:/var/lib/mysql --network red-drupal mysql:8
```

### Contenedor de Drupal

```
docker run -d --name drupal_server -p 8080:80 -v vol-drupal:/var/www/html --network red-drupal drupal:8-apache
```
