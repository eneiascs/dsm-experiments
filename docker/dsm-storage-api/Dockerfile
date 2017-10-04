FROM openjdk:8-jdk
EXPOSE 8080
ADD dsm-storage.jar dsm-storage.jar  
RUN sh -c 'touch /dsm-storage.jar'  
ENTRYPOINT ["java", "-Dspring.data.mongodb.uri=mongodb://dsm-storage-mongo:27017/experiments","-Djava.security.egd=file:/dev/./urandom","-jar","/dsm-storage.jar"]  

