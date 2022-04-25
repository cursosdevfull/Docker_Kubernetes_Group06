# Contenedores

### Para un crear un contenedor

```
docker create --name <nombre contenedor> <nombre de imagen>:<tag>
```

### Para ejecutar un contenedor

```
docker start <nombre contenedor | id del contenedor>
```

### Para detener un contenedor

```
docker stop <nombre contenedor | id del contenedor>
```

### Para listar contenedores ejecutándose

```
docker ps
```

### Para listar contenedores ejecutándose o no

```
docker ps -a
```

### Para eliminar un contenedor detenido

```
docker rm <nombre contenedor | id del contenedor>
```

### Para eliminar un contenedor no detenido

```
docker rm -f <nombre contenedor | id del contenedor>
```
