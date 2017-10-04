FROM r-base
ADD install.R install.R  
RUN 	apt-get update \
	&& apt-get install -y texlive texlive-latex-extra \
	&& /install.R
CMD ["R"]


