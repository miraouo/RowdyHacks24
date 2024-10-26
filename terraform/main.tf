terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.73.0"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region  = "us-east-1"
}

resource "aws_instance" "server" {
  ami           = "ami-06b21ccaeff8cd686"
  instance_type = "t2.micro"
  subnet_id = "subnet-02b27026d30e0a21b"
  vpc_security_group_ids = ["sg-05ef82e3f5624ddb1", "sg-0ad329242fc6dac20"]
  associate_public_ip_address = true
  key_name = "rhkp1"
  tags = {
    Name = "rh1"
  }
}