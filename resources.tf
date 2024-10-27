resource "aws_instance" "server" {
  ami           = "ami-06b21ccaeff8cd686"
  instance_type = "t2.micro"
  subnet_id = local.subnet_id
  vpc_security_group_ids = local.vpc_sg_ids
  associate_public_ip_address = true
  key_name = "rhkp1"
  tags = {
    Name = "rh1"
  }
  user_data = <<-EOF
              #!/bin/bash
              sudo yum update -y
              sudo yum install nginx -y
              sudo systemctl start nginx
              sudo systemctl enable nginx
              sudo yum install git -y
              git clone https://github.com/miraouo/RowdyHacks24.git
              sudo cp -r RowdyHacks24/* /usr/share/nginx/html/
              EOF
}

resource "aws_lb_target_group_attachment" "lb_tga" {
  target_group_arn = "arn:aws:elasticloadbalancing:us-east-1:242201272311:targetgroup/quiz/491fabefb848c6ca"
  target_id        = aws_instance.server.id
  port             = 80
  depends_on = [ aws_instance.server ]
}