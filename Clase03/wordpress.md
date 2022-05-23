# WordPress

### Crear una red

```
docker network create red-wp -d bridge
```

### Crear volúmenes

```
docker volume create vol-mysql
docker volume create vol-wp
```

### Contenedor de MySQL

```
docker run -d --name mysql_server -e MYSQL_ROOT_PASSWORD=12345 -e MYSQL_DATABASE=wpdb -v vol-mysql:/var/lib/mysql --network red-wp mysql:8
```

### Contenedor de WordPress

```
docker run -d --name wordpress_server -e WORDPRESS_DB_HOST=mysql_server -e WORDPRESS_DB_USER=root -e WORDPRESS_DB_PASSWORD=12345 -e WORDPRESS_DB_NAME=wpdb -p 8000:80 -v vol-wp:/var/www/html --network red-wp wordpress
```
