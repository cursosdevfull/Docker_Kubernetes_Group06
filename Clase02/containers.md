# Otros comandos para contenedores

### Para ejecutar un comando o programa instalado en el contenedor

```
docker exec -it <nombre contenedor> <nombre del comando/programa>
docker exec -it server_nginx sh
```

### Para vincular a un contenedor ejecutándose

```
docker attach <nombre contenedor>
```

### Para crear una imagen desde un contenedor

```
docker commit <nombre contenedor> <nombre de la imagen / tagname>
```

### Para revisar los logs de un contenedor

```
docker logs <nombre del contenedor>
docker logs --tail <cantidad de líneas> -f <nombre del contenedor>
```

### Para crear contenedores temporales

```
docker run --rm -d --name <nombre contenedor> -p <puerto host>:<puerto contenedor> <nombre de la imagen>
```

_Cuando se detiene el contenedor, automáticamente se elimina_
