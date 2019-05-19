FROM abuzaud/stretch_web:latest

ADD config/apache /etc/apache2/sites-available
ADD config/apache /etc/apache2/sites-enabled

RUN mkdir -p /data/project
RUN chmod -R 775 /data/project
RUN useradd -G www-data vagrant
RUN chown -R vagrant /data/project
WORKDIR /data/project/

ARG DATABASE_URL=mysql://root:@db:3306/buzaud
ARG APP_ENV=dev
ARG CORS_ALLOW_ORIGIN=^https?://localhost(:[0-9]+)?$$
ARG APP_SECRET=54761b69a2a027506f799affc97d5f9b
ARG MAILER_URL=null://localhost

ENV DATABASE_URL=mysql://root:@db:3306/buzaud
ENV APP_ENV=dev
ENV CORS_ALLOW_ORIGIN=^https?://localhost(:[0-9]+)?$$
ENV APP_SECRET=54761b69a2a027506f799affc97d5f9b
ENV MAILER_URL=null://localhost

#RUN composer install
#RUN yarn

CMD apachectl -D FOREGROUND
