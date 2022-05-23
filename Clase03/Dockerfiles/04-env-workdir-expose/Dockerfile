FROM centos:7

RUN yum update httpd -y && \
    yum install httpd -y

COPY httpd.conf /etc/httpd/conf/httpd.conf

ENV PORT=5000

ENV HOST=0.0.0.0

WORKDIR /var/www/html

RUN echo "$PORT" > ./test.html

RUN echo "<h3>PORT: $HOST:$PORT</h3>" > ./test2.html

#EXPOSE 80

CMD ["httpd", "-DFOREGROUND"]

