# kubdocker
Kubernetes with docker app.



`docker build .`

`docker build -t <dockerid>/<apname>:latest .`

`docker run <dockerid>/<projectname>`

`docker run redis` run redis in different shell 

`docker-compose up`

`docker-compose up --build`

`docker compose up -d` launch multiple containers

`docker compose up down` stop

`docker run -d redis`

`docker run -it <repo>/<projectname> sh` to go inside container shell

`docker system prune` delete all not working containers

`docker logs <containerid>`

`docker stop <containterid>`

`docker kill <containterid>`