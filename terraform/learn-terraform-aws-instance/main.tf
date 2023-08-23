terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region = "ap-northeast-1"
}

resource "aws_instance" "app_server" {
  ami           = "ami-0a6128af4a22cbdf2"
  instance_type = "t2.micro"
  vpc_security_group_ids = ["sg-05929e18718e83ef8"]
  subnet_id = "subnet-023e6ac789806a264"

  tags = {
    Name = "ExampleAppServerInstance"
  }
}


