---
sidebar_position: 2
hide_table_of_contents: true
---

# Lab

## Cluster

We'll use a k3s cluster with three nodes (each with **4 vCPUs and 8GB RAM**) on Hetzner Cloud. 
Additionally, we've set up a CSI (Container Storage Interface) to automatically provision network-based persistent volumes.

<img alt="Cluster Nodes" src="/img/lab_nodes.png" class="card w-1200"/>

## Application

Our application consists of multiple services that communicate with each other and their respective databases.

To deploy these applications in your cluster, run the following commands:

Add the Coroot Helm Chart Repository:
```bash
helm repo add coroot https://coroot.github.io/helm-charts
helm repo update
```

Install the Application:
```bash
helm install odb coroot/oopsdb
```

In Coroot, the service map looks like this:

<img alt="Service Map" src="/img/lab_service_map.png" class="card w-1200"/>

The application consists of several services written in different languages and backed by multiple databases:

### Services:
- **Go apps**: `frontend`, `order`, `cart`, `catalog`
- **Python app**: `user`
- **Java app**: `recommendations`

### Databases & Caches:
- **PostgreSQL**: `odb-postgres` (Zalando Kubernetes operator)
- **MySQL**: `odb-mysql` (Bitnami Helm chart, replicated setup)
- **Redis**: `odb-redis` (Bitnami Helm chart)
- **Memcached**: `odb-memcached` (Bitnami Helm chart)
- **MongoDB**: `odb-mongodb` (Bitnami Helm chart, clustered setup)

Additionally, there's a service called `load-test`, which generates requests to the frontend service. 
The `frontend` service distributes these requests across other relevant services.

Under normal conditions, the load is ~40 requests/second, with a p99 latency of 200ms, and all requests are processed without errors.

<img alt="Load Test" src="/img/lab_load.png" class="card w-1200"/> 

Pretty boring, huh? Let's break something! 😈🔥



