# Docker Compose

### Para ejecutar un docker compose

```
docker compose up
```

### Para ejecutar un docker compose sin estar vinculados a algún contenedor

```
docker compose up -d
```

### Para listar los contenedores

```
docker compose ps
```

### Para detener el docker compose

```
docker compose down
```

### Para ejecutar uno o más servicios

```
docker compose up -d <nombre servicio> <nombre otro servicio>...
```

### Para reconstruir las imágenes

```
docker compose up -d --build
```
