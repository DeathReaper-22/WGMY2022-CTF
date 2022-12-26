FROM python:3.10-alpine
RUN addgroup -S wgmy && adduser -S wgmy -G wgmy
RUN apk add --no-cache socat
COPY flag.txt /flag.txt
COPY server.py /
RUN chmod +x server.py
USER wgmy
EXPOSE 30555
ENTRYPOINT ["socat", "TCP-LISTEN:30555,reuseaddr,fork", "EXEC:/server.py"]
