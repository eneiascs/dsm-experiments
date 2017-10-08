FROM ubuntu:16.04
RUN echo "deb http://archive.ubuntu.com/ubuntu/ xenial multiverse" >> /etc/apt/sources.list
RUN apt-get update
RUN apt-get install -yy virtualbox vagrant vim
RUN apt-get install wget
RUN wget http://download.virtualbox.org/virtualbox/5.0.40/Oracle_VM_VirtualBox_Extension_Pack-5.0.40-115130.vbox-extpack
RUN VBoxManage extpack install --replace Oracle_VM_VirtualBox_Extension_Pack-5.0.40-115130.vbox-extpack  --accept-license=715c7246dc0f779ceab39446812362b2f9bf64a55ed5d3a905f053cfab36da9e 

