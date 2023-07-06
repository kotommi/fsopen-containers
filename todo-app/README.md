# Dev environment
sudo docker compose -f docker-compose.dev.yml up

launches a dev environment at localhost:8080

hotreload and such should work

you need to build the front and back dev images first (dev.Dockerfile)

# Prod environment
sudo docker compose -f docker-compose.yml up

launches prod environment at localhost:8080

need to build front and back from the Dockerfiles first.