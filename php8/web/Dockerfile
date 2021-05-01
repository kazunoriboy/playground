FROM php:8.0-apache

  ARG node_ver=14.15.1
  ARG node_path=/usr/local/lib/nodejs
  ARG node_file_name=node-v${node_ver}-linux-x64
  ENV PATH ${node_path}/${node_file_name}/bin:$PATH
  RUN curl https://nodejs.org/dist/v${node_ver}/${node_file_name}.tar.xz > ${node_file_name}.tar.xz \
    && mkdir -p $node_path \
    && tar xJvf ${node_file_name}.tar.xz -C $node_path
  
  ARG composer_ver=2.0.8
  ADD https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/
  RUN chmod +x /usr/local/bin/install-php-extensions && sync \
    && install-php-extensions @composer-${composer_ver}
  
  RUN apt-get update \
    && apt-get install -y unzip \
    && apt-get install -y vim \
    && docker-php-ext-install bcmath \
    && apt-get install -y zlib1g-dev libpng-dev libjpeg62-turbo-dev \
    && docker-php-ext-configure gd --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd \
    && apt-get install -y libicu-dev \
    && docker-php-ext-install intl \
    && docker-php-ext-install pdo_mysql \
    && a2enmod rewrite