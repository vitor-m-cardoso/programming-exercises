# Anotando comandos docker

## Crie um container para manter um servidor httpd:2.4.54 Apache e vincule sua porta interna com a porta 4545 da sua máquina local
<!-- docker run -d --name meu-site -p 4545:80 -v "<CAMINHO DO DIRETÓRIO ONDE ESTÁ SEU HTML>:/usr/local/apache2/htdocs" httpd:2.4.54 -->

## Obtenha o id do container httpd:2.4.54
<!-- docker ps -->

## Obtenha o Mounts através da propriedade Source que deve mostrar o volume desse container no Docker Host
<!-- docker inspect <ID_DO_CONTAINER> | jq -r '.[0].Mounts' -->

## Agora pare o container httpd:2.4.54
<!-- docker stop <ID_DO_CONTAINER> -->

## Exclua o seu container
<!-- docker rm <ID_DO_CONTAINER> -->

## Obtenha o IMAGE ID do servidor
<!-- docker image ls -->

## Depois de obter o IMAGE ID, exclua a imagem
<!-- docker rmi <ID_DA_IMAGEM> -->
