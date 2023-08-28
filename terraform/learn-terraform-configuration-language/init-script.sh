#!/bin/bash
# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MLP-2.0

sudo yum update -y
sudo yum -y remove httpd
sudo yum -y remove httpd-tools
sudo yum install -y httpd24 php72 mysql57-server php72-mysqlnd
sudo service httpd start
chkconfig httpd on

usermod -a -G apache ec2-user
chown -R ec2-user:apache /var/www
chmod 2775 /var/www
find /var/www -type d -exec chmod 2775 {} \;
find /var/www -type f -exec chmod 0664 {} \;
cd /var/www/html
curl http://169.254.169.254/latest/meta-data/instance-id -o index.html
curl https://raw.githubusercontent.com/hashicorp/learn-terramino/master/index.php -O

