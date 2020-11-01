
## Beecoin experience

Nettside for vår hjemmelagde honning fra Slemdal

### Docker

docker build . --tag beecoinimage

docker run -it --rm --publish 8080:80 --name beecoincontainer fabiansd/beecoinimage
