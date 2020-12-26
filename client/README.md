```bash

docker build -f Dockerfile.dev . #docker run file Dockerfile.dev
docker run <dockerid>
docker run -p 3000:3000 <dockerid> # to expose port
docker build -f Dockerfile.dev . # rebuild the image
docker run -p 3000:3000 -v $(pwd):/app <containerid> # will complain for react-scripts not found
docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app <containerid> # hot reload 797afc01228b
docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app 797afc01228b # hot reload 797afc01228b
docker-compose up #run docker-compose.yml file
docker run <dockerid> npm run test #run npm run test inside container but it's not interactive
docker run -it <dockerid> npm run test #interactive
docker ps
docker exec -it <dockerid> npm run test #interactive with hot reload
docker exec -it <dockerid> sh # to shel => npm test => pick "a"

```