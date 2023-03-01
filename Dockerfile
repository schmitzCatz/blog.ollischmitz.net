FROM nginx

LABEL org.opencontainers.image.authors="mail@ollischmitz.net"
LABEL description="Docker Container to host blog.ollischmitz.net"

COPY src/_site /usr/share/nginx/html
