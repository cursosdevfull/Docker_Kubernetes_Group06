# Sonarqube

### Para instalar el servidor de Sonarqube

```
docker run -d --name sonarqube -p 9000:9000 -p 9092:9092 sonarqube:community
```

### Para ejecutar el sonar-scanner desde un contenedor

```
docker run --rm -e SONAR_HOST_URL=http://172.17.0.4:9000 -e SONAR_LOGIN="a74f29ebee706c0529995341b1d5a5ab24fdaa67" -v ${PWD}:/usr/src sonarsource/sonar-scanner-cli -D"sonar.projectKey=demodocker06"
```

## Alternativa usando una red bridge

### Crear la red

```
docker network create myrednew -d bridge --subnet 172.140.10.0/24 --gateway 172.140.10.20
```

### Para instalar el servidor de Sonarqube

```
docker run -d --name sonarqube -p 9000:9000 -p 9092:9092 --network myrednew sonarqube:community
```

### Para ejecutar el sonar-scanner desde un contenedor

```
docker run --rm -e SONAR_HOST_URL=http://sonarqube:9000 -e SONAR_LOGIN="a74f29ebee706c0529995341b1d5a5ab24fdaa67" -v ${PWD}:/usr/src --network myrednew sonarsource/sonar-scanner-cli -D"sonar.projectKey=demodocker06"
```
