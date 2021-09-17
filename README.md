# m9cad

## Usage

TBD

## Development

```bash
yarn install
docker build -t m9cad:latest .
# ARM TODO: investigate buildx for cross-paltform builds
# docker build -f Dockerfile-arm -t m9cad:latest . 

docker-compose down -v  # only if you installed new dependencies
docker-compose up
```

## Packaging

TBD
