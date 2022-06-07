# PODS

### Crear un pod

```
kubectl run servernginx --image=nginx:alpine
```

### Acceder al puerto de un pod

```
kubectl port-forward servernginx 7000:80
```

### Listar pods

```
kubectl get pods
kubectl get po
```

### Información del pod

```
kubectl get po <nombre del pod> -o yaml
kubectl get po <nombre del pod> -o json
```

### Descripción del pod

```
kubectl describe po <nombre del pod>
```

### Obtener el log de un pod

```
kubectl logs <nombre del pod>
kubectl logs <nombre del pod> -c <nombre del contenedor>
```

### Para eliminar un pod

```
kubectl delete po <nombre del pod>
```

### Para ejecutar un manifiesto

```
kubectl apply -f <nombre del archivo manifiesto>
```

### Para eliminar un manifiesto

```
kubectl delete -f <nombre del archivo manifiesto>
```

### Para listar pods con sus etiquetas

```
kubectl get pod --show-labels
kubectl get pod --show-labels -l env=dev
```
