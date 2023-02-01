## Docker Commands

```bash
docker images 
```

```bash
docker ps

docker ps -a
```

```bash
docker build --tag tag_name:tag_version .

docker build --tag angular/core-deep-dive:1.0.0 .
```

```bash
docker run --rm -ti -p docker_run_port:docker_port image_tag

docker run --rm -ti -p 4700:80 angular/core-deep-dive:1.0.0
```

```bash
docker-compose up

docker-compose down
```


Reference Tutorial: https://youtu.be/3NobJzI3_68
