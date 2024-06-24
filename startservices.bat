@echo off

@REM REM Iniciar o ActiveMQ em segundo plano
@REM start "" .\apache-activemq-6.0.1\bin\activemq

REM Mudar para o diretório do servidor Angular e iniciar em segundo plano
cd .\edbWebView
start "" ng serve 

REM Iniciar o aplicativo Spring Boot em segundo plano
cd ./../edbBackEnd/server/
start "" .\mvnw spring-boot:run 
