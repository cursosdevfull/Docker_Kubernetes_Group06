# Variables de entorno

### Para crear variables de entorno

```
docker run -d -e <nombre variable> = <valor>
```

### Crear un contenedor de mongo

```
docker run -d --name servermongo -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=12345 mongo:3.6
```
