@echo off

REM Parar o ActiveMQ
taskkill /f /im activemq.exe

REM Parar o servidor Angular
taskkill /f /im node.exe

REM Parar o aplicativo Spring Boot
taskkill /f /im java.exe

REM Parar o script Python
taskkill /f /im python.exe