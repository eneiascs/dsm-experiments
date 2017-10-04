FROM tomcat:8.5.21-jre8
EXPOSE 8080
COPY autoexp.war /usr/local/tomcat/webapps/autoexp.war  
COPY dohko-client/ /opt/dohko-client/
CMD ["catalina.sh", "run"]


