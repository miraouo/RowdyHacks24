locals {
  subnet_id = "subnet-02b27026d30e0a21b"
  vpc_sg_ids = ["sg-01373f654250194d2", "sg-0ad329242fc6dac20"]
  region = "us-east-1"
  vpc_id = "vpc-076ac32d3f42ce783"
}

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
  region  = local.region
}
