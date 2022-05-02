# Volúmenes

## Volúmenes Host

---

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
docker run -d --name server08 -p 9600:80 -v ${PWD}\nginx:/usr/share/sergio -v ${PWD}\config\default.conf:/etc/nginx/conf.d/default.conf nginx:alpine
docker run -d --name server08 -p 9600:80 -v ${PWD}\www:/usr/share/sergio -v ${PWD}\config\default.conf:/etc/nginx/conf.d/default.conf nginx:alpine
```

## Volúmenes nombrados

---

### Crear volúmenes

```
docker volume create vol_docker06_www
```

### Para inspeccionar un volumen

```
docker volume inspect vol_docker06_www
```

### Para crear un contenedor con un volumen nombrado

```
docker run -d --name <nombre contenedor> -v <nombre volumen nombrado>:<nombre de la carpeta host> <nombre de la imagen>
```

### Para listar volúmenes

```
docker volume ls
```

### Para listar volúmenes huérfanos

```
docker volume ls -f dangling=true
```

### Para eliminar volúmenes huérfanos

```
docker volume ls -f dangling=true -q | xargs docker volume rm
```

### Para eliminar un volumen

```
docker volume rm <nombre volumen>
```

## Volúmenes Anónimos

---

### Para crear un volumen anónimo

```
docker run -d --name <nombre contenedor> -v <carpeta en el contenedor> <nombre de la imagen>
```

### Para eliminar un volumen anónimo en el momento de eliminar un contenedor

```
docker rm -fv <nombre del contenedor>
```

_El contenedor debe estar vinculado al volumen anónimo_
