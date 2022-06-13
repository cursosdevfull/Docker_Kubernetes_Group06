# Cluster Autoscaler

### Descargar el manifiesto del cluster autoscaler

```
curl -o cluster-autoscaler-autodiscover.yaml https://raw.githubusercontent.com/kubernetes/autoscaler/master/cluster-autoscaler/cloudprovider/aws/examples/cluster-autoscaler-autodiscover.yaml
```

### Aplicar el manifiesto

```
kubectl apply -f cluster-autoscaler-autodiscover.yaml
```
