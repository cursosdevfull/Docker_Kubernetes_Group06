# Reaction ECommerce

### Crear una red

```
docker network create red-reaction -d bridge
```

### Crear volumen

```
docker volume create vol-mongo
```

### Contenedor de MongoDB

```
docker run -d --name mongo_server -v vol-mongo:/data/db -p 27017:27017 --network red-reaction mongo:3.6
```

### Contenedor de Reaction

```
docker run -d --name reaction_server -e ROOT_URL=http://localhost -e MONGO_URL=mongodb://mongo_server:27017/reaction -p 3000:3000 --network red-reaction reactioncommerce/reaction
```
