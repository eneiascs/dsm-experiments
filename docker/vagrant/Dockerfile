FROM ubuntu:16.10
RUN echo "deb http://archive.ubuntu.com/ubuntu/ yakkety multiverse" >> /etc/apt/sources.list
RUN apt-get update
RUN apt-get install -yy virtualbox vagrant vim
RUN apt-get install wget
RUN apt-get install -y linux-headers-generic virtualbox-dkms
RUN apt-get install -y git
RUN wget http://download.virtualbox.org/virtualbox/5.1.28/Oracle_VM_VirtualBox_Extension_Pack-5.1.28-117968.vbox-extpack
RUN VBoxManage extpack install --replace Oracle_VM_VirtualBox_Extension_Pack-5.1.28-117968.vbox-extpack
RUN apt-get install -y build-essential
RUN ln -s /usr/bin/gcc /usr/bin/gcc-4.2
RUN apt-get install -y ruby2.3-dev
RUN gem install ffi -v '1.9.18'
RUN apt-get install -y  zlib1g-dev
RUN vagrant plugin install vagrant-docker-compose
RUN vagrant plugin install vagrant-vbguest
RUN vagrant plugin install vagrant-proxyconf
RUN vagrant plugin install vagrant-env
RUN vagrant plugin install vagrant-persistent-storage
RUN vagrant plugin install vagrant-cachier

