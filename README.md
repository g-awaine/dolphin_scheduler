Dolphin Scheduler

Deployments can be found in:
  apache-dolphinscheduler-3.2.1-src/deploy

Deployments are:
  1) Docker-compose
  2) Kubernetes
  3) Terraform

To setup docker-compose deployment:
  # open terminal at root of this repo i.e the folder containing apache-dolphinscheduler-3.2.1-src
  $ sudo chown -R 1001:0 apache-dolphinscheduler-3.2.1-src/deploy/docker/volumes
  $ sudo chmod -R u+rwx,g+rwx,o-rwx

  cd apache-dolphinscheduler-3.2.1-src/deploy/docker
  # Initialize the database, use profile schema
  $ docker-compose --profile schema up -d
  
  # start all dolphinscheduler server, use profile all
  $ docker-compose --profile all up -d

To shut down docker-compose deployment:
  $ docker-compose down
  
