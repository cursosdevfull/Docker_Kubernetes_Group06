# Imágenes

### Para listar imágenes

```
docker images
```

### Para listar imágenes usando grep

```
docker images | grep orders
```

### Para inspeccionar una imagen

```
docker image inspect <nombre de la imagen>:<nombre del tag>
```

### Para descargar imágenes

```
docker pull busybox
docker pull busybox:<tag>
```

### Para eliminar una imagen

```
docker rmi <nombre de la imagen>:<tag>
docker image rm <nombre de la imagen>:<tag>
```

### Para eliminar más de una imagen

```
docker rmi <nombre de la imagen>:<tag> <nombre de la imagen>:<tag> <nombre de la imagen>:<tag>
docker image rm <nombre de la imagen>:<tag> <nombre de la imagen>:<tag> <nombre de la imagen>:<tag>
```

### Para forzar la eliminación de una imagen vinculada a uno o más contenedores

```
docker rmi -f <nombre de la imagen>:<tag>
```

### Para listar imágenes huérfanas

```
docker images -f dangling=true
```

### Para listar los ids de las imágenes huérfanas

```
docker images -f dangling=true -q
```

### Para eliminar las imágenes huérfanas

```
docker images -f dangling=true -q | xargs docker rmi
```
