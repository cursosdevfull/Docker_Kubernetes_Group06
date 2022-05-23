FROM centos:7

RUN yum update -y && \
    yum install nginx

COPY web /usr/share/nginx/html

ADD https://ecosistemas.ovacen.com/wp-content/uploads/2018/01/bosque.jpg /usr/share/nginx/html/assets/images/bosque.jpg

CMD ["nginx", "-g", "daemon off;"]