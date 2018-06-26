# A Domain-Specific Modeling Approach Supporting Technology-oriented Experiments #

## Description ##

We present a Web-based Tool implementing a Domain-Specific Modeling approach and a running infrastructure to support technology-oriented experiments.

## Objectives ##
The objectives are provide means to specify technology-oriented experiments in a high level of abstraction (using a DSL) and enable automated
execution and data analysis of such specification.

## Dependencies ##
To build the components, we use [Maven](https://maven.apache.org/), [JDK 8](http://www.oracle.com/technetwork/pt/java/javase/downloads/jdk8-downloads-2133151.html), and [Docker](https://www.docker.com/).
To run our tool, we rely on [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/).

## Components ##

The whole solution comprises a Web-based tool, a database, an execution infrastructure, and an analysis infrastructure. Each component runs in a Docker container. We have already created a pre-built image for each component. However, we also provide their source-code and their Dockerfiles, in case it is necessary to recreate the images.

### Web-based Tool ###

The Web-based tool comprises a DSL editor, execution and analysis scripts generators, and commands to execute, monitor execution, and analyze the results. We built, installed, and configured the tool in a Docker image named `eneiascs/dsm-framework`.

However, if it is necessary to recreate the image, the folder `docker/dsm-framework/` contains the Dockerfile and a script to create the image. 

The script `create_image.sh` first builds the `autoexp.war` file using the command `mvn clean install -P autoexp` inside the folder `br.unb.autoexp.web.build`. Then, the script copies the `autoexp.war` file and runs the command `docker build -t eneiascs/dsm-framework:1.0.0 .` to build the image. The image name and version may be changed, if necessary. 

The source-code of the tool is available in the following folders:

* __br.unb.autoexp:__ contains the grammar (`src/br/unb/autoexp/AutoExp.xtext`), code generators (`src/br/unb/autoexp/generator/`), and validators (`src/br/unb/autoexp/generator/`) created using [Xtext](https://www.eclipse.org/Xtext/). 
* __br.unb.autoexp.web:__ contans the supporting framework, which was implemented as a Web-based tool. We created the initial version using [DSLFORGE](https://dslforge.org/). Then, we extendend and customized it with new commands (`src/br/unb/autoexp/web/command/`) to run applications in the infrastructure and to analyze the results.
* __br.unb.autoexp.tests:__ contains generators and validators unit tests.
* __br.unb.autoexp.web.build:__ contains the configurations to build the war file. Use the command `mvn clean install -P autoexp` inside this folder to build the war file.
* __br.unb.autoexp.target:__ target project with the plugins required to generated the artifacts from the grammar.
* __br.unb.autoexp.web.target:__ target project with the plugins required to generated the Web-based application.
* __br.unb.autoexp.storage.mongodb.client:__ Web-services client to access the database.
* __br.unb.autoexp.thirdparty:__ used to create OSGI bundles from maven dependencies.
* __br.unb.autoexp.example:__  experimental plugin with a command to create an example of experiment specification.
* __br.unb.autoexp.template:__  experimentalnal plugin with a command to create an experiment specification from a Wizard Dialog.
* __br.unb.autoexp.ide, br.unb.autoexp.ui, br.unb.autoexp.ui.tests:__ used to create an Eclipse IDE plugin. They are not used in the Web-based tool.

### Execution Infrastructure ###

We use a [fork](https://github.com/eneiascs/dohko-job) of [Dohko](https://github.com/dohko-io/dohko-job) to run the applications.

We built it in a Docker image named `eneiascs/dohko-job`.

### Analysis Infrastructure ###
To analyze and present the results, we use [R](https://www.r-project.org/), [Sweave](https://stat.ethz.ch/R-manual/R-devel/library/utils/doc/Sweave.pdf), and [LaTeX](https://www.latex-project.org/). 
We create a Docker image with all the packages required to run the analysis script in the Docker image `eneiascs/dsm-r-base-api`.

The supporting framework uses an API to request this infrastructure to analyze the analysis script.

The source-code of this API is in the folder `br.unb.autoexp.r-base-api`.

The Dockerfile and the script to build this image are in `docker/dsm-storage-api`. 

### Database ###

We use [MongoDB](https://www.mongodb.com) as a database to store application data and execution results. 

We use the oficial Docker image `mongo`. In addition, we created an API to access the database in the Docker image `eneiascs/dsm-storage-api`.

The source-code of this API is in the folder `br.unb.autoexp.storage`.

The Dockerfile and the script to build this image are in `docker/dsm-r-base-api`. 

## Running ##

The file `docker-compose.yml` contains the configuration necessary to run all the Docker containers containing the components. This file also loads some environment variables defined in the file `.env`.

To run all the components, use the command `docker-compose up`.

If necessary, change `cpuset` and `mem_limit` according to your machine resources.

It is also possible to split the execution in several machines. In this case, create a `docker-compose.yml` for each service, and set the URLs accordingly.

## Using the Tool ##
After the tool is running, open the URL [http://localhost/autoexp/texteditor](http://localhost/autoexp/texteditor), or replace `localhost` with the IP address, if accessing from another machine.

The tool is an Eclipse RAP application. For this reason, it looks like the Eclipse IDE. 

### Creating a new Project ###

Click on `File`, `New` then `Project`.

Insert the project name, and then click on `Finish`.


### Creating a new Model ###

Right-click on the project folder, then select `New`, then `Model`.

Insert the model name with the extension `.exp`, then click on `Finish`.

### Editing the Model ###

Double-click the model file, then use the editor to create the model.

### Generating the scripts ###
Once the model is created, right-click on the model file, then click on `Generate`. The generated files are placed in the folder `src-gen`.


### Running applications ###
Right-click on the model file, then click on `Generate and Run`. This command generate the scripts and run them. First, the execution script is executed using Dohko. While running, the execution status is presented to the user. After the execution finishes, the analysis script is executed.

Each execution creates a folder inside the folder `executions`. The folder and the generated files are copied to this folder. The execution results are written to `data.json` file. The analysis script generates a pdf file with the analysis report with the same name as the model.

### Execution Status  ###

To re-open the execution status while the applications are running, right-click on the execution folder (subfolder of executions), then click on `Generate and Run`.


### Analyzing the results ###
The analysis script is automatically executed after execution finishes. However, if you want to re-run it, right-click on the execution folder (subfolder of executions), then click on `Run Analysis`.


