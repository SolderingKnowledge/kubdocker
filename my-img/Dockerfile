# docker base image such as install nodejs or required software
FROM alpine
# download and install dependencies such as "npm install"
RUN apk add --update redis
# tell container what to do, it could also run "npm start"
CMD ["redis-server"]