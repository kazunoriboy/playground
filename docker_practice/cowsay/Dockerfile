FROM debian

LABEL maintainer="matsushima@exaple.com"
RUN apt-get update && apt-get install -y cowsay fortune 
COPY entrypoint.sh /

ENTRYPOINT ["/entrypoint.sh"]
