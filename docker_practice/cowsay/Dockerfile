FROM debian

MAINTAINER Kazunori Matsushima <matsushima@example.com>
RUN apt-get update && apt-get install -y cowsay fortune 
COPY entrypoint.sh /

ENTRYPOINT ["/entrypoint.sh"]
