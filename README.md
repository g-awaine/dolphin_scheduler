# Dolphin Scheduler

## Deployments Path
path: apache-dolphinscheduler-3.2.1-src/deploy

Deployments are:
  1) Docker-compose
  2) Kubernetes
  3) Terraform

## Docker-compose deployment:
### Setup
#### Open terminal at root of this repo i.e the folder containing apache-dolphinscheduler-3.2.1-src 
#### Change permissions of folders

```
sudo chown -R 1001:0 apache-dolphinscheduler-3.2.1-src/deploy/docker/volumes

sudo chmod -R u+rwx,g+rwx,o-rwx apache-dolphinscheduler-3.2.1-src/deploy/docker/volumes
```
#### Change directory to the docker deployment folder
```
cd apache-dolphinscheduler-3.2.1-src/deploy/docker
```
#### Initialize the database, use profile schema
```
docker-compose --profile schema up -d
```
#### Start all dolphinscheduler server, use profile all
```
docker-compose --profile all up -d
```
### Shutdown
```
docker-compose down
```  
