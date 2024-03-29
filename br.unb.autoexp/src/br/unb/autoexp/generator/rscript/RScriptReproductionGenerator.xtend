package br.unb.autoexp.generator.rscript

import br.unb.autoexp.autoExp.Experiment
import br.unb.autoexp.autoExp.ResearchHypothesis
import br.unb.autoexp.autoExp.ScaleType
import br.unb.autoexp.generator.ExperimentalDesignGenerator
import java.util.List
import javax.inject.Inject

class RScriptReproductionGenerator {
	@Inject extension ExperimentalDesignGenerator

	def compileReproduction(Experiment experiment) {
		'''
				
			library(jsonlite)
			library(ggplot2)
			pdf(onefile = FALSE)
			
			names<-c("treatment","object","execution","dependentVariable" ,"min","mean","max")
			df<-data.frame(replicate(4,character(0)), replicate(3,numeric(0)))
			names(df)<-names
			
			originalDataFile<-"original_data.R"
			if (file.exists(originalDataFile)) {
			  source(originalDataFile)
			  if(exists('getOriginalData',  mode='function')){
			    df<-rbind(df,getOriginalData()) 
			  }
			  
			} 
			 
			json_data = fromJSON("data.json")
			
					
			expectedRuns = «experiment.experimentalDesign.runs»
			«FOR variable : (experiment.researchHypotheses as List<ResearchHypothesis>).map[formula.depVariable].removeDuplicates»
				json_data$«variable.name.convert»[json_data$executionStatus!='FINISHED']=NA
				«FOR treatment:experiment.treatmentsInUse»				
					«FOR object:treatment.experimentalObjects»
						if (length(json_data$«variable.name.convert»[json_data$treatment == '«treatment.name»' & json_data$object == '«object.name»' & !is.na(json_data$«variable.name.convert»)])!=expectedRuns){
							json_data$«variable.name.convert»[json_data$treatment == '«treatment.name»' & json_data$object == '«object.name»']=NA
						}
					«ENDFOR» 
				«ENDFOR»
			«ENDFOR»
				
			«FOR variable : (experiment.researchHypotheses as List<ResearchHypothesis>).map[formula.depVariable].removeDuplicates»
				«FOR treatment:experiment.treatmentsInUse»				
					«FOR object:treatment.experimentalObjects»
						df2<-data.frame("«treatment.description»","«IF object.value===null»«object.description»«ELSE»«object.value»«ENDIF»","Reproduction","«variable.name.convert»",min(json_data$«variable.name.convert»[json_data$treatment == '«treatment.name»' & json_data$object == '«object.name»']),mean(json_data$«variable.name.convert»[json_data$treatment == '«treatment.name»' & json_data$object == '«object.name»']),max(json_data$«variable.name.convert»[json_data$treatment == '«treatment.name»' & json_data$object == '«object.name»']))
						names(df2)<-names
						df<-data.frame(rbind(df,df2))
					«ENDFOR» 
				«ENDFOR»
			«ENDFOR»
			df$execution<-as.factor(df$execution)			
						
			data_summary <- function(data, varname, groupnames){
				require(plyr)
				summary_func <- function(x, col){
				c(mean = mean(x[[col]], na.rm=TRUE),
				      sd = sd(x[[col]], na.rm=TRUE))
			 }
			data_sum<-ddply(data, groupnames, .fun=summary_func,
					                  varname)
				data_sum <- rename(data_sum, c("mean" = varname))
				return(data_sum)
			}
			breaks_continuous <- function(data, steps){
					  diff<-max(data)-min(data) 
					  step_size<-diff/steps
					  step<-min(data)
					  breaks<-c(step)
					  for (i in 1:steps){
					    step<-step+step_size
					    breaks<-c(breaks,step)
					  }
					  return(breaks)
			}  
			breaks_log <- function(data, steps){
					  diff<-max(data)/min(data) 
					  base<-diff^(1/steps)
					  exp<-log(min(data),base)
					  breaks<-c(round(base^exp))
					  for (i in 1:steps){
					    exp<-exp+1
					    breaks<-c(breaks,round(base^exp))
					  }
					  return(breaks)
			}
			write.table(df,"result.dat",row.names =FALSE)
			
				
			«IF !experiment.objectsScaleType.equals(ScaleType.NOMINAL)»				
				df$object<-as.numeric(as.character(df$object))
			«ENDIF»
			
			«FOR variable:(experiment.researchHypotheses as List<ResearchHypothesis>).map[formula.depVariable].removeDuplicates»
			for (exec in levels(df$execution)){
				DF<-subset(df,execution==exec & dependentVariable=='«variable.name.convert»' & !is.na(mean))
				if(nrow(DF)>0){
					«IF experiment.objectsScaleType.equals(ScaleType.NOMINAL)»
						DF$object <- factor(DF$object, levels=c(«FOR object:experiment.experimentalObjects SEPARATOR ","»"«object.description»"«ENDFOR»))
					«ENDIF»
					print(ggplot(DF, aes(x=object, y=mean, group=treatment, color=treatment)) + 
					geom_errorbar(aes(ymin=min, ymax=max), width=.1, linetype=3) +
					geom_line() + geom_point()+
					scale_color_brewer(palette="Paired") +
					theme_bw() +
					«IF experiment.objectsScaleType.equals(ScaleType.NOMINAL)»
					scale_x_discrete(name = "«experiment.objectsDescription»")+
					«ENDIF»
					«IF experiment.objectsScaleType.equals(ScaleType.ABSOLUTE)»
					scale_x_continuous(name = "«experiment.objectsDescription»", breaks_continuous(data=DF$object,steps=10))+
					«ENDIF»
					«IF experiment.objectsScaleType.equals(ScaleType.LOGARITHMIC)»
					scale_x_log10(name = "«experiment.objectsDescription»(log scale)", breaks_log(data=DF$object,steps=10))+
					«ENDIF»
					«IF variable.scaleType.equals(ScaleType.NOMINAL)»
					scale_y_discrete(name = "«variable.description» «IF variable.unit!==null»(«variable.unit»)«ENDIF»")+
					«ENDIF»
					«IF variable.scaleType.equals(ScaleType.ABSOLUTE)»
					scale_y_continuous(name = "«variable.description» «IF variable.unit!==null»(«variable.unit»)«ENDIF»")+
					«ENDIF»
					«IF variable.scaleType.equals(ScaleType.LOGARITHMIC)»
					scale_y_log10(name = "«variable.description» «IF variable.unit!==null»(«variable.unit»)«ENDIF»(log scale)")+
					«ENDIF»			  
					ggtitle(paste("«variable.description» (",exec,")", sep = "")) + 
					theme(legend.title = element_blank()))
				}	
			}
			«ENDFOR»
			
			
			«FOR treatment:experiment.treatmentsInUse»
				«FOR variable:(experiment.researchHypotheses as List<ResearchHypothesis>).map[formula.depVariable].removeDuplicates»
				DF<-subset(df,treatment=='«treatment.description»' & dependentVariable=='«variable.name.convert»' & !is.na(mean))	
				if(nrow(DF)>0){
					«IF experiment.objectsScaleType.equals(ScaleType.NOMINAL)»
						DF$object <- factor(DF$object, levels=c(«FOR i:1..experiment.experimentalObjects.size SEPARATOR ","»"«experiment.experimentalObjects.get(i-1).description»"«ENDFOR»))
					«ENDIF»
					ggplot(DF, aes(x=object, y=mean, group=execution, color=execution)) + 
					geom_errorbar(aes(ymin=min, ymax=max), width=.1, linetype=3) +
					geom_line() + geom_point()+
					scale_color_brewer(palette="Paired") +
					theme_bw() +
					«IF experiment.objectsScaleType.equals(ScaleType.NOMINAL)»
					scale_x_discrete(name = "«experiment.objectsDescription»")+
					«ENDIF»
					«IF experiment.objectsScaleType.equals(ScaleType.ABSOLUTE)»
					scale_x_continuous(name = "«experiment.objectsDescription»", breaks_continuous(data=DF$object,steps=10))+
					«ENDIF»
					«IF experiment.objectsScaleType.equals(ScaleType.LOGARITHMIC)»
					scale_x_log10(name = "«experiment.objectsDescription»(log scale)", breaks_log(data=DF$object,steps=10))+
					«ENDIF»
					«IF variable.scaleType.equals(ScaleType.NOMINAL)»
					scale_y_discrete(name = "«variable.description» «IF variable.unit!==null»(«variable.unit»)«ENDIF»")+
					«ENDIF»
					«IF variable.scaleType.equals(ScaleType.ABSOLUTE)»
					scale_y_continuous(name = "«variable.description» «IF variable.unit!==null»(«variable.unit»)«ENDIF»")+
					«ENDIF»
					«IF variable.scaleType.equals(ScaleType.LOGARITHMIC)»
					scale_y_log10(name = "«variable.description» «IF variable.unit!==null»(«variable.unit»)«ENDIF»(log scale)")+
					«ENDIF»			  
					ggtitle("«variable.description» for «treatment.description»") + 
					theme(legend.title = element_blank())
				}	
				«ENDFOR»	
			«ENDFOR»
			df$dependentVariable<-as.factor(df$dependentVariable)
			df$treatment<-as.factor(df$treatment)
			df$object<-as.factor(df$object)
			
			names.comparison<-c("dependentVariable","treatment","object","original","reproduction","difference")
			df.comparison<-data.frame(replicate(3,character(0)), replicate(3,numeric(0)))
			names(df.comparison)<-names.comparison
			for (dependentVariable in levels(df$dependentVariable)){
				for (treatment in levels(df$treatment)){
				    for (object in levels(df$object)){
						     
				    	original<-df[df$execution=="Original" & df$dependentVariable==dependentVariable & df$treatment==treatment & df$object==object,]
						if (nrow(original)==0){
							original.mean<-NA
						}else{
						    original.mean<-original$mean
						}
						    reproduction<-df[df$execution=="Reproduction" & df$dependentVariable==dependentVariable & df$treatment==treatment & df$object==object,]
						if (nrow(reproduction)==0){
						    reproduction.mean<-NA
						}else{
						    reproduction.mean<-reproduction$mean
						}
						df2<-data.frame(dependentVariable,treatment,object,original.mean,reproduction.mean,100*(reproduction.mean-original.mean)/original.mean)
						names(df2)<-names.comparison
						df.comparison<-data.frame(rbind(df.comparison,df2))
				   }  
				 }
			}
			write.table(df.comparison,"result-comparison.dat",row.names =FALSE)  	
			'''
			
			
	}
	
	def convert(String depVariable) {
		switch (depVariable) {
			case "cpuConsumption": "cpu"
			case "memoryConsumption": "memory"
			default: depVariable
		}
	}
}
