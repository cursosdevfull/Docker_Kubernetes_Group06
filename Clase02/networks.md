# Redes

### Para crear una red bridge

```
docker network create <nombre red> -d bridge
```

### Para conectar un contenedor que ya está ejecutando a una red

```
docker network connect myred01 server01
```
