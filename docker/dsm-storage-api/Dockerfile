FROM openjdk:8-jdk
EXPOSE 8080
ADD dsm-storage.jar /opt/dsm-storage.jar 
COPY init.js /opt/ 
COPY entrypoint.sh /opt/
RUN sh -c 'touch /dsm-storage.jar'  
RUN apt-get update && apt-get install -y mongodb
ENTRYPOINT ["/opt/entrypoint.sh"]  
