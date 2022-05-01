# Volúmenes

## Volúmenes Host

### Crear un volumen host

```
docker run -d -v <ruta de la carpeta host>:<ruta de la carpeta contenedor> -v <ruta de la carpeta host>:<ruta de la carpeta contenedor> <nombre de la imagen>
```

### Para crear un volumen host usando PowerShell

```
docker run -d --name servermongo -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=12345 -v ${PWD}\datamongo:/data/db mongo:3.6
```

### Para crear un volumen host usando terminales tipo Linux

```
docker run -d --name servermongo -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=12345 -v $(pwd)\\datamongo:/data/db mongo:3.6
```

### Ejemplo de volumen host con NGINX

```
docker run -d --name server08 -p 9600:80 -v ${PWD}\nginx:/usr/share/nginx/html nginx:alpine
```
