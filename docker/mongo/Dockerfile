FROM mongo
COPY run.sh /opt/
COPY init.js /opt/
ENTRYPOINT ["docker-entrypoint.sh"]
EXPOSE 27017
CMD ["/opt/run.sh"]
