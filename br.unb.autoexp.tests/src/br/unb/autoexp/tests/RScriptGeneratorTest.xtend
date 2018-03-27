package br.unb.autoexp.tests

import br.unb.autoexp.tests.helper.AutoExpGeneratorTestHelper
import com.google.inject.Inject
import org.eclipse.xtext.testing.InjectWith
import org.eclipse.xtext.testing.XtextRunner
import org.junit.Test
import org.junit.runner.RunWith

@RunWith(XtextRunner)
@InjectWith(AutoExpInjectorProvider)
class RScriptGeneratorTest {
	@Inject extension AutoExpGeneratorTestHelper
	


	@Test
	def void testGeneratedRScript() {
		'''
			Experiment reanaSpl {
			
				Authors {author1 {fullName "Author1 Full Name" institution "University of Bras�lia" email "author1@unb.br"},author2 {fullName "Author2 Full Name" institution "University of Bras�lia" email "author2@unb.br"}}
			
			  description "Reliability Analysis of Software Product Lines" 
			 Abstract {
			     context "Model checking techniques have been applied to ensure software systems achieve desired quality levels and fulfill functional and non-functional requirements. However, applying these techniques to software product lines is a challenging task, given the exponential blowup of the number of products. Current product-line model checking techniques leverage symbolic model checking and variability information to optimize the analysis, but still face limitations that make them costly or even infeasible for some product lines." 
			     objective "The objectives of this paper are the following: a) present a method to efficiently analyze the reliability of software product lines, b) provide a tool that implements the proposed method, and c) report on an empirical study comparing the performance of reliability analysis strategies."
			     method "We present a feature-family-based strategy to analyze the reliability of software product lines. Our approach limits the effort needed to compute the reliability of a product line by employing a divide-and-conquer strategy. The feature-based analysis step divides the behavioral models into smaller units, which can be model checked more efficiently and facilitates the reuse of reliability computations for redundant behaviors. The familybased step performs the reliability computation for all configurations at once by evaluating reliability expressions in terms of a suitable variational data structure."
			     results "The empirical results show that our feature-family-based strategy significantly outperforms other state-of-the-art analysis strategies in terms of time and space, being the only one that could be scaled to a 2 20 -fold increase in the size of the configuration space."
			     conclusion "Our feature-family-based strategy leverages both featureand family-based strategies by taming the size of the models to be analyzed and by avoiding the products enumeration inherent to some state-of-the-art analysis methods."
			 } 
			 Keywords { "SPL", "Software Product Lines"}
			 Goals {goal1 {object "Object" technique "Technique" quality "Quality"  ptView "ptView" contextOf "contextOf"},goal2 "Goal 2"}
			 
			 Research Questions { question1 { description  "Research Question 1" goal goal1}, question2 { description "Question 2"}} 			     
			  Research Hypotheses {
			  	RH1 {time featureFamily = featureProduct},
			  	RH2 {memoryConsumption featureFamily = featureProduct}, 
			  	RH3 {cpuConsumption featureFamily = featureProduct}
			  	
			  }
			  Experimental Design {
			    type FACTORIAL
			  }  
			    Dependent Variables {
			      time { description "Analysis time" scaleType Absolute },
			      memoryConsumption { description "Memory Consumption" scaleType Absolute },
			       cpuConsumption { description "Cpu Consumption" scaleType Absolute }
			    }    
				 
				Factors { 
					strategy { description "Analysis Strategy" scaleType Nominal}
					} 
					
					Treatments { 
					  featureFamily description "Feature Family" factor strategy execution cpuinfo,
					  featureProduct description "Feature Product" factor strategy execution cpuinfo
					   	  		
				
				}
				Objects {description "SPL" scaleType Nominal { intercloud {description "Intercloud SPL"},lift {description "Lift SPL"}}} 	
				
				Executions { 
					cpuinfo { 
						command "cat /proc/cpuinfo"
					}
				}
				Analysis analysis {significance 0.01}	
									 
				Infrastructure {
					user {
						username "user" 
						
					}
				}
			}
		''' => [
			val rScript = '''
				\documentclass{article}
				\usepackage{authblk}
				\usepackage{float}
				\usepackage{multirow}
				\usepackage[utf8]{inputenc}
				\begin{document}
				\title{Reliability Analysis of Software Product Lines}
				\author{Author1 Full Name, Author2 Full Name}
				\maketitle
				
				\begin{abstract}
				\textbf{Context:} Model checking techniques have been applied to ensure software systems achieve desired quality levels and fulfill functional and non-functional requirements. However, applying these techniques to software product lines is a challenging task, given the exponential blowup of the number of products. Current product-line model checking techniques leverage symbolic model checking and variability information to optimize the analysis, but still face limitations that make them costly or even infeasible for some product lines.
				 
				\textbf{Objective:} The objectives of this paper are the following: a) present a method to efficiently analyze the reliability of software product lines, b) provide a tool that implements the proposed method, and c) report on an empirical study comparing the performance of reliability analysis strategies.
				 
				\textbf{Method:} We present a feature-family-based strategy to analyze the reliability of software product lines. Our approach limits the effort needed to compute the reliability of a product line by employing a divide-and-conquer strategy. The feature-based analysis step divides the behavioral models into smaller units, which can be model checked more efficiently and facilitates the reuse of reliability computations for redundant behaviors. The familybased step performs the reliability computation for all configurations at once by evaluating reliability expressions in terms of a suitable variational data structure.
				 
				\textbf{Results:} The empirical results show that our feature-family-based strategy significantly outperforms other state-of-the-art analysis strategies in terms of time and space, being the only one that could be scaled to a 2 20 -fold increase in the size of the configuration space.
				 
				\textbf{Conclusion:} Our feature-family-based strategy leverages both featureand family-based strategies by taming the size of the models to be analyzed and by avoiding the products enumeration inherent to some state-of-the-art analysis methods.
				\end{abstract}
				 
				
				%\keywords{SPL,Software Product Lines}
				
				<<setup, include=FALSE, echo=FALSE, warning=FALSE , message=FALSE >>=
				library(reproducer) # R package incl. software engineering data sets
				library(ggplot2) # R package to create high-quality graphics
				library(jsonlite)
				 
				alpha=0.01
				 
				json_data = fromJSON("data.json")
				
				json_data$objectOrder[json_data$object == 'intercloud'] = 1
				json_data$objectOrder[json_data$object == 'lift'] = 2
				
				json_data$treatmentDescription[json_data$treatment == 'featureFamily'] = 'Feature Family'
				json_data$treatmentDescription[json_data$treatment == 'featureProduct'] = 'Feature Product'
				json_data$objectLabel[json_data$object == 'intercloud'] = 'Intercloud SPL'
				json_data$objectLabel[json_data$object == 'lift'] = 'Lift SPL'
				
				expectedRuns = 1
				json_data$time[json_data$executionStatus!='FINISHED']=NA
				if (length(json_data$time[json_data$treatment == 'featureFamily' & json_data$object == 'intercloud' & !is.na(json_data$time)])!=expectedRuns){
					json_data$time[json_data$treatment == 'featureFamily' & json_data$object == 'intercloud']=NA
				}
				if (length(json_data$time[json_data$treatment == 'featureFamily' & json_data$object == 'lift' & !is.na(json_data$time)])!=expectedRuns){
					json_data$time[json_data$treatment == 'featureFamily' & json_data$object == 'lift']=NA
				}
				if (length(json_data$time[json_data$treatment == 'featureProduct' & json_data$object == 'intercloud' & !is.na(json_data$time)])!=expectedRuns){
					json_data$time[json_data$treatment == 'featureProduct' & json_data$object == 'intercloud']=NA
				}
				if (length(json_data$time[json_data$treatment == 'featureProduct' & json_data$object == 'lift' & !is.na(json_data$time)])!=expectedRuns){
					json_data$time[json_data$treatment == 'featureProduct' & json_data$object == 'lift']=NA
				}
				json_data$memory[json_data$executionStatus!='FINISHED']=NA
				if (length(json_data$memory[json_data$treatment == 'featureFamily' & json_data$object == 'intercloud' & !is.na(json_data$memory)])!=expectedRuns){
					json_data$memory[json_data$treatment == 'featureFamily' & json_data$object == 'intercloud']=NA
				}
				if (length(json_data$memory[json_data$treatment == 'featureFamily' & json_data$object == 'lift' & !is.na(json_data$memory)])!=expectedRuns){
					json_data$memory[json_data$treatment == 'featureFamily' & json_data$object == 'lift']=NA
				}
				if (length(json_data$memory[json_data$treatment == 'featureProduct' & json_data$object == 'intercloud' & !is.na(json_data$memory)])!=expectedRuns){
					json_data$memory[json_data$treatment == 'featureProduct' & json_data$object == 'intercloud']=NA
				}
				if (length(json_data$memory[json_data$treatment == 'featureProduct' & json_data$object == 'lift' & !is.na(json_data$memory)])!=expectedRuns){
					json_data$memory[json_data$treatment == 'featureProduct' & json_data$object == 'lift']=NA
				}
				json_data$cpu[json_data$executionStatus!='FINISHED']=NA
				if (length(json_data$cpu[json_data$treatment == 'featureFamily' & json_data$object == 'intercloud' & !is.na(json_data$cpu)])!=expectedRuns){
					json_data$cpu[json_data$treatment == 'featureFamily' & json_data$object == 'intercloud']=NA
				}
				if (length(json_data$cpu[json_data$treatment == 'featureFamily' & json_data$object == 'lift' & !is.na(json_data$cpu)])!=expectedRuns){
					json_data$cpu[json_data$treatment == 'featureFamily' & json_data$object == 'lift']=NA
				}
				if (length(json_data$cpu[json_data$treatment == 'featureProduct' & json_data$object == 'intercloud' & !is.na(json_data$cpu)])!=expectedRuns){
					json_data$cpu[json_data$treatment == 'featureProduct' & json_data$object == 'intercloud']=NA
				}
				if (length(json_data$cpu[json_data$treatment == 'featureProduct' & json_data$object == 'lift' & !is.na(json_data$cpu)])!=expectedRuns){
					json_data$cpu[json_data$treatment == 'featureProduct' & json_data$object == 'lift']=NA
				}
				
				json_data$treatment = as.factor(json_data$treatment)
				json_data$treatmentDescription = as.factor(json_data$treatmentDescription)
				json_data$object = as.factor(json_data$object)		
				json_data$objectLabel = as.factor(json_data$objectLabel)
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
				@
				\section{Description}
				Reliability Analysis of Software Product Lines
				
				\section{Goals}
				\begin{itemize}
				\item{goal1: 
				\textbf{Object:} Object. 
				\textbf{Technique:} Technique. 
				\textbf{Quality:} Quality. 
				\textbf{Point of View:} ptView. 
				\textbf{Context Of:} contextOf. 
				}
				
				\item{goal2: Goal 2}
				\end{itemize}
				
				\section{Research Questions}
				\begin{itemize}
				
				\item{Research Question 1 . Related to goal1}
				\item{Question 2 }
				
				\end{itemize}
				
				\section{Overview}
				
				
				<<overview_time, include=TRUE, echo=FALSE, warning=FALSE , message=FALSE >>=
				DF<-data_summary(subset(json_data,(object=='intercloud'|object=='lift')), varname="time", groupnames=c("treatmentDescription", "objectLabel", "objectOrder"))
				DF$objectLabel <- factor(DF$objectLabel, levels = DF$objectLabel[order(DF$objectOrder)])
						
						ggplot(DF, aes(x=objectLabel, y=time, group=treatmentDescription, color=treatmentDescription)) + 
						    geom_errorbar(aes(ymin=time-sd, ymax=time+sd), width=.1, linetype=3) +
						    geom_line() + geom_point()+
						   scale_color_brewer(palette="Paired") +
						   theme_bw() +
						  scale_x_discrete(name = "SPL")+
						  
						  scale_y_continuous(name = "Analysis time ")+
						  ggtitle("Analysis time Overview") + 
						  theme(legend.title = element_blank())	
						@
				<<overview_memory, include=TRUE, echo=FALSE, warning=FALSE , message=FALSE >>=
				DF<-data_summary(subset(json_data,(object=='intercloud'|object=='lift')), varname="memory", groupnames=c("treatmentDescription", "objectLabel", "objectOrder"))
				DF$objectLabel <- factor(DF$objectLabel, levels = DF$objectLabel[order(DF$objectOrder)])
						
						ggplot(DF, aes(x=objectLabel, y=memory, group=treatmentDescription, color=treatmentDescription)) + 
						    geom_errorbar(aes(ymin=memory-sd, ymax=memory+sd), width=.1, linetype=3) +
						    geom_line() + geom_point()+
						   scale_color_brewer(palette="Paired") +
						   theme_bw() +
						  scale_x_discrete(name = "SPL")+
						  
						  scale_y_continuous(name = "Memory Consumption ")+
						  ggtitle("Memory Consumption Overview") + 
						  theme(legend.title = element_blank())	
						@
				<<overview_cpu, include=TRUE, echo=FALSE, warning=FALSE , message=FALSE >>=
				DF<-data_summary(subset(json_data,(object=='intercloud'|object=='lift')), varname="cpu", groupnames=c("treatmentDescription", "objectLabel", "objectOrder"))
				DF$objectLabel <- factor(DF$objectLabel, levels = DF$objectLabel[order(DF$objectOrder)])
						
						ggplot(DF, aes(x=objectLabel, y=cpu, group=treatmentDescription, color=treatmentDescription)) + 
						    geom_errorbar(aes(ymin=cpu-sd, ymax=cpu+sd), width=.1, linetype=3) +
						    geom_line() + geom_point()+
						   scale_color_brewer(palette="Paired") +
						   theme_bw() +
						  scale_x_discrete(name = "SPL")+
						  
						  scale_y_continuous(name = "Cpu Consumption ")+
						  ggtitle("Cpu Consumption Overview") + 
						  theme(legend.title = element_blank())	
						@
				
				
				
				\subsection{Objects Overview}
				\subsubsection{Overview for Intercloud SPL}
				<<intercloud, include=TRUE, echo=FALSE, warning=FALSE , message=FALSE >>=
				DF=subset(json_data,(treatment=='featureFamily'|treatment=='featureProduct')& object=='intercloud')
				DF$treatmentDescription = ordered(DF$treatmentDescription, levels=levels(DF$treatmentDescription)[order(as.numeric(by(DF$time, DF$treatmentDescription, mean)))])   
				boxplot_intercloud_time = ggplot(DF, aes(x =treatmentDescription , y = time)) +
					geom_boxplot(fill = "#4271AE", colour = "#1F3552",alpha = 0.7,outlier.colour = "#1F3552", outlier.shape = 20)+
					theme_bw() +    
					scale_x_discrete(name = "Analysis Strategy")+
					ggtitle("Analysis time by Analysis Strategy for Intercloud SPL") + 
					ylab("Analysis time ")   
					boxplot_intercloud_time
					
				DF=subset(json_data,(treatment=='featureFamily'|treatment=='featureProduct')& object=='intercloud')
				DF$treatmentDescription = ordered(DF$treatmentDescription, levels=levels(DF$treatmentDescription)[order(as.numeric(by(DF$memory, DF$treatmentDescription, mean)))])   
				boxplot_intercloud_memory = ggplot(DF, aes(x =treatmentDescription , y = memory)) +
					geom_boxplot(fill = "#4271AE", colour = "#1F3552",alpha = 0.7,outlier.colour = "#1F3552", outlier.shape = 20)+
					theme_bw() +    
					scale_x_discrete(name = "Analysis Strategy")+
					ggtitle("Memory Consumption by Analysis Strategy for Intercloud SPL") + 
					ylab("Memory Consumption ")   
					boxplot_intercloud_memory
					
				DF=subset(json_data,(treatment=='featureFamily'|treatment=='featureProduct')& object=='intercloud')
				DF$treatmentDescription = ordered(DF$treatmentDescription, levels=levels(DF$treatmentDescription)[order(as.numeric(by(DF$cpu, DF$treatmentDescription, mean)))])   
				boxplot_intercloud_cpu = ggplot(DF, aes(x =treatmentDescription , y = cpu)) +
					geom_boxplot(fill = "#4271AE", colour = "#1F3552",alpha = 0.7,outlier.colour = "#1F3552", outlier.shape = 20)+
					theme_bw() +    
					scale_x_discrete(name = "Analysis Strategy")+
					ggtitle("Cpu Consumption by Analysis Strategy for Intercloud SPL") + 
					ylab("Cpu Consumption ")   
					boxplot_intercloud_cpu
					
				
				
				
				@	
				\subsubsection{Overview for Lift SPL}
				<<lift, include=TRUE, echo=FALSE, warning=FALSE , message=FALSE >>=
				DF=subset(json_data,(treatment=='featureFamily'|treatment=='featureProduct')& object=='lift')
				DF$treatmentDescription = ordered(DF$treatmentDescription, levels=levels(DF$treatmentDescription)[order(as.numeric(by(DF$time, DF$treatmentDescription, mean)))])   
				boxplot_lift_time = ggplot(DF, aes(x =treatmentDescription , y = time)) +
					geom_boxplot(fill = "#4271AE", colour = "#1F3552",alpha = 0.7,outlier.colour = "#1F3552", outlier.shape = 20)+
					theme_bw() +    
					scale_x_discrete(name = "Analysis Strategy")+
					ggtitle("Analysis time by Analysis Strategy for Lift SPL") + 
					ylab("Analysis time ")   
					boxplot_lift_time
					
				DF=subset(json_data,(treatment=='featureFamily'|treatment=='featureProduct')& object=='lift')
				DF$treatmentDescription = ordered(DF$treatmentDescription, levels=levels(DF$treatmentDescription)[order(as.numeric(by(DF$memory, DF$treatmentDescription, mean)))])   
				boxplot_lift_memory = ggplot(DF, aes(x =treatmentDescription , y = memory)) +
					geom_boxplot(fill = "#4271AE", colour = "#1F3552",alpha = 0.7,outlier.colour = "#1F3552", outlier.shape = 20)+
					theme_bw() +    
					scale_x_discrete(name = "Analysis Strategy")+
					ggtitle("Memory Consumption by Analysis Strategy for Lift SPL") + 
					ylab("Memory Consumption ")   
					boxplot_lift_memory
					
				DF=subset(json_data,(treatment=='featureFamily'|treatment=='featureProduct')& object=='lift')
				DF$treatmentDescription = ordered(DF$treatmentDescription, levels=levels(DF$treatmentDescription)[order(as.numeric(by(DF$cpu, DF$treatmentDescription, mean)))])   
				boxplot_lift_cpu = ggplot(DF, aes(x =treatmentDescription , y = cpu)) +
					geom_boxplot(fill = "#4271AE", colour = "#1F3552",alpha = 0.7,outlier.colour = "#1F3552", outlier.shape = 20)+
					theme_bw() +    
					scale_x_discrete(name = "Analysis Strategy")+
					ggtitle("Cpu Consumption by Analysis Strategy for Lift SPL") + 
					ylab("Cpu Consumption ")   
					boxplot_lift_cpu
					
				
				
				
				@	
				
				\section{Research Hypotheses}
				
				\subsection{RH1: }
				
				 <<RH1, include=TRUE, echo=FALSE, warning=FALSE , message=FALSE >>=
				 
				 result_RH1_objects=2
				 result_RH1_less=0
				 result_RH1_greater=0
				 result_RH1_featureFamily=0
				 result_RH1_featureProduct=0
				 result_RH1_none=0
				 result_RH1_inconclusive=0
				 @
				 
				 <<overview_RH1, include=TRUE, echo=FALSE, warning=FALSE , message=FALSE >>=
				 DF<-data_summary(subset(json_data,(object=='intercloud'|object=='lift') & (treatment=='featureFamily'|treatment=='featureProduct')), varname="time", groupnames=c("treatmentDescription", "objectLabel", "objectOrder"))
				 DF$objectLabel <- factor(DF$objectLabel, levels = DF$objectLabel[order(DF$objectOrder)])
				 		
				 		ggplot(DF, aes(x=objectLabel, y=time, group=treatmentDescription, color=treatmentDescription)) + 
				 		    geom_errorbar(aes(ymin=time-sd, ymax=time+sd), width=.1, linetype=3) +
				 		    geom_line() + geom_point()+
				 		   scale_color_brewer(palette="Paired") +
				 		   theme_bw() +
				 		  scale_x_discrete(name = "SPL")+
				 		  
				 		  scale_y_continuous(name = "Analysis time ")+
				 		  ggtitle("Analysis time Overview") + 
				 		  theme(legend.title = element_blank())	
				 		@
				 @
				 	
				
				\subsubsection{RH1.1: Object Intercloud SPL}
				
				 \textbf{Analysis time for Feature Family}
				 <<RH1_featureFamily_intercloud, include=TRUE, echo=FALSE, warning=FALSE , message=FALSE >>=
				 time_featureFamily_intercloud=subset(json_data,treatment=='featureFamily' & object=='intercloud' & !is.na(time))$time
				 print(paste("Sample size: ",length(time_featureFamily_intercloud)))					
				 summary(subset(json_data,treatment=='featureFamily' & object=='intercloud')$time)
				 
				 if(length(time_featureFamily_intercloud)==expectedRuns){		
				 	reproducer::boxplotAndDensityCurveOnHistogram(subset(json_data,treatment=='featureFamily' & object=='intercloud'), "time", min(subset(json_data,treatment=='featureFamily'& object=='intercloud')$time), max(subset(json_data,treatment=='featureFamily'& object=='intercloud')$time))
				 
				 	shap_featureFamily_intercloud=shapiro.test(subset(json_data,treatment=='featureFamily' & object=='intercloud')$time)
				 	print(shap_featureFamily_intercloud)
				 	if(shap_featureFamily_intercloud$p.value>alpha){
				 		print(paste("Shapiro test: Null Hypothesis (normality) not rejected. P-value:",shap_featureFamily_intercloud$p.value, sep = " "))
				 	}else{
				 		print(paste("Shapiro test: Null Hypothesis (normality) rejected. P-value:",shap_featureFamily_intercloud$p.value, sep = " "))
				 	}
				 }
				 @
				 \textbf{Analysis time for Feature Product}
				 <<RH1_featureProduct_intercloud, include=TRUE, echo=FALSE, warning=FALSE , message=FALSE >>=
				 time_featureProduct_intercloud=subset(json_data,treatment=='featureProduct' & object=='intercloud' & !is.na(time))$time
				 print(paste("Sample size: ",length(time_featureProduct_intercloud)))					
				 summary(subset(json_data,treatment=='featureProduct' & object=='intercloud')$time)
				 
				 if(length(time_featureProduct_intercloud)==expectedRuns){		
				 	reproducer::boxplotAndDensityCurveOnHistogram(subset(json_data,treatment=='featureProduct' & object=='intercloud'), "time", min(subset(json_data,treatment=='featureProduct'& object=='intercloud')$time), max(subset(json_data,treatment=='featureProduct'& object=='intercloud')$time))
				 
				 	shap_featureProduct_intercloud=shapiro.test(subset(json_data,treatment=='featureProduct' & object=='intercloud')$time)
				 	print(shap_featureProduct_intercloud)
				 	if(shap_featureProduct_intercloud$p.value>alpha){
				 		print(paste("Shapiro test: Null Hypothesis (normality) not rejected. P-value:",shap_featureProduct_intercloud$p.value, sep = " "))
				 	}else{
				 		print(paste("Shapiro test: Null Hypothesis (normality) rejected. P-value:",shap_featureProduct_intercloud$p.value, sep = " "))
				 	}
				 }
				 @
				  
				 \textbf{Comparison}
				  
				 <<RH1_intercloud, include=TRUE, echo=FALSE, warning=FALSE, message=FALSE >>=
				 DF=subset(json_data,(treatment=='featureFamily'|treatment=='featureProduct') & object=='intercloud')
				 DF$treatmentDescription = ordered(DF$treatmentDescription, levels=levels(DF$treatmentDescription)[order(as.numeric(by(DF$time, DF$treatmentDescription, mean)))])
				 boxplot_RH1_intercloud = ggplot(DF, aes(x =treatmentDescription , y = time)) +
				 	geom_boxplot(fill = "#4271AE", colour = "#1F3552",alpha = 0.7,outlier.colour = "#1F3552", outlier.shape = 20)+
				 	theme_bw() +    
				 	scale_x_discrete(name = "Analysis Strategy")+
				 	ggtitle("Analysis time by Analysis Strategy for Intercloud SPL") + 
				 	ylab("Analysis time ")			   
				 boxplot_RH1_intercloud
				 result_RH1_intercloud_tTest = FALSE
				 if(length(time_featureFamily_intercloud)==expectedRuns &length(time_featureProduct_intercloud)==expectedRuns){
				 	if(shap_featureFamily_intercloud$p.value>alpha&shap_featureProduct_intercloud$p.value>alpha){
				   
				 		print("Fisher's F-test to verify the homoskedasticity (homogeneity of variances)")
				 	
				 		fTest=var.test(subset(json_data,treatment=='featureFamily' & object=='intercloud')$time,subset(json_data,treatment=='featureProduct' & object=='intercloud')$time)
				 		print(fTest)
				 		  
				 		print(paste("Homogeneity of variances: ",fTest$p.value>alpha, ". P-value: ", fTest$p.value, sep = ""))
				 		  
				 		print("Assuming that the two samples are taken from populations that follow a Gaussian distribution (if we cannot assume that, we must solve this problem using the non-parametric test called Wilcoxon-Mann-Whitney test)") 
				 		tTest=t.test(subset(json_data,treatment=='featureFamily' & object=='intercloud')$time,subset(json_data,treatment=='featureProduct' & object=='intercloud')$time, var.equal=fTest$p.value>alpha, paired=FALSE)
				 		print(tTest)
				 		if(tTest$p.value>alpha){
				 			print(paste("T-test: Null Hypothesis not rejected. P-value:",tTest$p.value, sep = " "))
				 		
				 		}else{
				 	    	print(paste("T-test: Null Hypothesis rejected. P-value:",tTest$p.value, sep = " "))
				 	    	result_RH1_intercloud_tTest = TRUE
				 		}
				 	}
				 }
				 if (length(time_featureFamily_intercloud)!=expectedRuns & length(time_featureProduct_intercloud)!=expectedRuns){
				 	result_object_RH1_intercloud=4
				 	result_RH1_intercloud="None"
				 	result_RH1_none = result_RH1_none +1
				 }
				 if (length(time_featureFamily_intercloud)==expectedRuns & length(time_featureProduct_intercloud)!=expectedRuns){
				 	result_object_RH1_intercloud=2
				 	result_RH1_intercloud="Feature Family"
				 	result_RH1_featureFamily = result_RH1_featureFamily +1			
				 }
				 if (length(time_featureFamily_intercloud)!=expectedRuns & length(time_featureProduct_intercloud)==expectedRuns){
				 	result_object_RH1_intercloud=3
				 	result_RH1_intercloud="Feature Product"
				 	result_RH1_featureProduct = result_RH1_featureProduct +1			
				 				
				 }
				 if (length(time_featureFamily_intercloud)==expectedRuns & length(time_featureProduct_intercloud)==expectedRuns){
				 	result_RH1_intercloud_wTest = FALSE			
				 	wTest=wilcox.test(time~treatment,data=subset(json_data,(treatment=='featureFamily'|treatment=='featureProduct') & object=='intercloud')) 
				  
				 	print(wTest)
				  
				 	if(wTest$p.value>alpha){
				 		print(paste("Wilcoxon-Mann-Whitney test: Null Hypothesis not rejected. P-value:",wTest$p.value, sep = " "))
				 		result_RH1_intercloud_wTest = FALSE
				 	}else{
				 		print(paste("Wilcoxon-Mann-Whitney test: Null Hypothesis rejected. P-value:",wTest$p.value, sep = " "))
				 		result_RH1_intercloud_wTest = TRUE
				 	}
				 } 
				 if (length(time_featureFamily_intercloud)==expectedRuns & length(time_featureProduct_intercloud)==expectedRuns){
				 	print("")
				 	print("Means comparison")
				 	print(paste("Mean Analysis time for Feature Family: ",mean(subset(json_data,treatment=='featureFamily' & object=='intercloud')$time)))
				 	print(paste("Mean Analysis time for Feature Product: ",mean(subset(json_data,treatment=='featureProduct' & object=='intercloud')$time)))
				 	print(paste("Absolute difference: ",abs(mean(subset(json_data,treatment=='featureFamily' & object=='intercloud')$time)-mean(subset(json_data,treatment=='featureProduct' & object=='intercloud')$time))))
				 	if (result_RH1_intercloud_tTest | result_RH1_intercloud_wTest){
				 		if(mean(subset(json_data,treatment=='featureFamily' & object=='intercloud')$time)>mean(subset(json_data,treatment=='featureProduct' & object=='intercloud')$time)){
				 	  	result_RH1_intercloud="Feature Family \\textgreater{} Feature Product"
				 	  	result_object_RH1_intercloud=1
				 	  	result_RH1_greater=result_RH1_greater+1
				 		}else {
				 	  	result_RH1_intercloud="Feature Family \\textless{} Feature Product"
				 	  	result_object_RH1_intercloud=0
				 	  	result_RH1_less=result_RH1_less +1
				 		}	
				 	
				 	}else{
				   		result_object_RH1_intercloud=5
				   		result_RH1_intercloud="Inconclusive"
				   		result_RH1_inconclusive=result_RH1_inconclusive+1
				 	}
				 
				 	if(mean(subset(json_data,treatment=='featureFamily' & object=='intercloud')$time)>mean(subset(json_data,treatment=='featureProduct' & object=='intercloud')$time)){
				     	cat(paste("Analysis time for Feature Family is ",100*(abs(mean(subset(json_data,treatment=='featureProduct' & object=='intercloud')$time)-mean(subset(json_data,treatment=='featureFamily' & object=='intercloud')$time))/mean(subset(json_data,treatment=='featureProduct' & object=='intercloud')$time)),"% greater than \nAnalysis time for Feature Product"))
				 
				 	}else{
				 	    cat(paste("Analysis time for Feature Product is ",100*(abs(mean(subset(json_data,treatment=='featureProduct' & object=='intercloud')$time)-mean(subset(json_data,treatment=='featureFamily' & object=='intercloud')$time))/mean(subset(json_data,treatment=='featureFamily' & object=='intercloud')$time)),"% greater than \nAnalysis time for Feature Family"))
				 
				 	}
				 }	
				 @  
				
				
				\subsubsection{RH1.2: Object Lift SPL}
				
				 \textbf{Analysis time for Feature Family}
				 <<RH1_featureFamily_lift, include=TRUE, echo=FALSE, warning=FALSE , message=FALSE >>=
				 time_featureFamily_lift=subset(json_data,treatment=='featureFamily' & object=='lift' & !is.na(time))$time
				 print(paste("Sample size: ",length(time_featureFamily_lift)))					
				 summary(subset(json_data,treatment=='featureFamily' & object=='lift')$time)
				 
				 if(length(time_featureFamily_lift)==expectedRuns){		
				 	reproducer::boxplotAndDensityCurveOnHistogram(subset(json_data,treatment=='featureFamily' & object=='lift'), "time", min(subset(json_data,treatment=='featureFamily'& object=='lift')$time), max(subset(json_data,treatment=='featureFamily'& object=='lift')$time))
				 
				 	shap_featureFamily_lift=shapiro.test(subset(json_data,treatment=='featureFamily' & object=='lift')$time)
				 	print(shap_featureFamily_lift)
				 	if(shap_featureFamily_lift$p.value>alpha){
				 		print(paste("Shapiro test: Null Hypothesis (normality) not rejected. P-value:",shap_featureFamily_lift$p.value, sep = " "))
				 	}else{
				 		print(paste("Shapiro test: Null Hypothesis (normality) rejected. P-value:",shap_featureFamily_lift$p.value, sep = " "))
				 	}
				 }
				 @
				 \textbf{Analysis time for Feature Product}
				 <<RH1_featureProduct_lift, include=TRUE, echo=FALSE, warning=FALSE , message=FALSE >>=
				 time_featureProduct_lift=subset(json_data,treatment=='featureProduct' & object=='lift' & !is.na(time))$time
				 print(paste("Sample size: ",length(time_featureProduct_lift)))					
				 summary(subset(json_data,treatment=='featureProduct' & object=='lift')$time)
				 
				 if(length(time_featureProduct_lift)==expectedRuns){		
				 	reproducer::boxplotAndDensityCurveOnHistogram(subset(json_data,treatment=='featureProduct' & object=='lift'), "time", min(subset(json_data,treatment=='featureProduct'& object=='lift')$time), max(subset(json_data,treatment=='featureProduct'& object=='lift')$time))
				 
				 	shap_featureProduct_lift=shapiro.test(subset(json_data,treatment=='featureProduct' & object=='lift')$time)
				 	print(shap_featureProduct_lift)
				 	if(shap_featureProduct_lift$p.value>alpha){
				 		print(paste("Shapiro test: Null Hypothesis (normality) not rejected. P-value:",shap_featureProduct_lift$p.value, sep = " "))
				 	}else{
				 		print(paste("Shapiro test: Null Hypothesis (normality) rejected. P-value:",shap_featureProduct_lift$p.value, sep = " "))
				 	}
				 }
				 @
				  
				 \textbf{Comparison}
				  
				 <<RH1_lift, include=TRUE, echo=FALSE, warning=FALSE, message=FALSE >>=
				 DF=subset(json_data,(treatment=='featureFamily'|treatment=='featureProduct') & object=='lift')
				 DF$treatmentDescription = ordered(DF$treatmentDescription, levels=levels(DF$treatmentDescription)[order(as.numeric(by(DF$time, DF$treatmentDescription, mean)))])
				 boxplot_RH1_lift = ggplot(DF, aes(x =treatmentDescription , y = time)) +
				 	geom_boxplot(fill = "#4271AE", colour = "#1F3552",alpha = 0.7,outlier.colour = "#1F3552", outlier.shape = 20)+
				 	theme_bw() +    
				 	scale_x_discrete(name = "Analysis Strategy")+
				 	ggtitle("Analysis time by Analysis Strategy for Lift SPL") + 
				 	ylab("Analysis time ")			   
				 boxplot_RH1_lift
				 result_RH1_lift_tTest = FALSE
				 if(length(time_featureFamily_lift)==expectedRuns &length(time_featureProduct_lift)==expectedRuns){
				 	if(shap_featureFamily_lift$p.value>alpha&shap_featureProduct_lift$p.value>alpha){
				   
				 		print("Fisher's F-test to verify the homoskedasticity (homogeneity of variances)")
				 	
				 		fTest=var.test(subset(json_data,treatment=='featureFamily' & object=='lift')$time,subset(json_data,treatment=='featureProduct' & object=='lift')$time)
				 		print(fTest)
				 		  
				 		print(paste("Homogeneity of variances: ",fTest$p.value>alpha, ". P-value: ", fTest$p.value, sep = ""))
				 		  
				 		print("Assuming that the two samples are taken from populations that follow a Gaussian distribution (if we cannot assume that, we must solve this problem using the non-parametric test called Wilcoxon-Mann-Whitney test)") 
				 		tTest=t.test(subset(json_data,treatment=='featureFamily' & object=='lift')$time,subset(json_data,treatment=='featureProduct' & object=='lift')$time, var.equal=fTest$p.value>alpha, paired=FALSE)
				 		print(tTest)
				 		if(tTest$p.value>alpha){
				 			print(paste("T-test: Null Hypothesis not rejected. P-value:",tTest$p.value, sep = " "))
				 		
				 		}else{
				 	    	print(paste("T-test: Null Hypothesis rejected. P-value:",tTest$p.value, sep = " "))
				 	    	result_RH1_lift_tTest = TRUE
				 		}
				 	}
				 }
				 if (length(time_featureFamily_lift)!=expectedRuns & length(time_featureProduct_lift)!=expectedRuns){
				 	result_object_RH1_lift=4
				 	result_RH1_lift="None"
				 	result_RH1_none = result_RH1_none +1
				 }
				 if (length(time_featureFamily_lift)==expectedRuns & length(time_featureProduct_lift)!=expectedRuns){
				 	result_object_RH1_lift=2
				 	result_RH1_lift="Feature Family"
				 	result_RH1_featureFamily = result_RH1_featureFamily +1			
				 }
				 if (length(time_featureFamily_lift)!=expectedRuns & length(time_featureProduct_lift)==expectedRuns){
				 	result_object_RH1_lift=3
				 	result_RH1_lift="Feature Product"
				 	result_RH1_featureProduct = result_RH1_featureProduct +1			
				 				
				 }
				 if (length(time_featureFamily_lift)==expectedRuns & length(time_featureProduct_lift)==expectedRuns){
				 	result_RH1_lift_wTest = FALSE			
				 	wTest=wilcox.test(time~treatment,data=subset(json_data,(treatment=='featureFamily'|treatment=='featureProduct') & object=='lift')) 
				  
				 	print(wTest)
				  
				 	if(wTest$p.value>alpha){
				 		print(paste("Wilcoxon-Mann-Whitney test: Null Hypothesis not rejected. P-value:",wTest$p.value, sep = " "))
				 		result_RH1_lift_wTest = FALSE
				 	}else{
				 		print(paste("Wilcoxon-Mann-Whitney test: Null Hypothesis rejected. P-value:",wTest$p.value, sep = " "))
				 		result_RH1_lift_wTest = TRUE
				 	}
				 } 
				 if (length(time_featureFamily_lift)==expectedRuns & length(time_featureProduct_lift)==expectedRuns){
				 	print("")
				 	print("Means comparison")
				 	print(paste("Mean Analysis time for Feature Family: ",mean(subset(json_data,treatment=='featureFamily' & object=='lift')$time)))
				 	print(paste("Mean Analysis time for Feature Product: ",mean(subset(json_data,treatment=='featureProduct' & object=='lift')$time)))
				 	print(paste("Absolute difference: ",abs(mean(subset(json_data,treatment=='featureFamily' & object=='lift')$time)-mean(subset(json_data,treatment=='featureProduct' & object=='lift')$time))))
				 	if (result_RH1_lift_tTest | result_RH1_lift_wTest){
				 		if(mean(subset(json_data,treatment=='featureFamily' & object=='lift')$time)>mean(subset(json_data,treatment=='featureProduct' & object=='lift')$time)){
				 	  	result_RH1_lift="Feature Family \\textgreater{} Feature Product"
				 	  	result_object_RH1_lift=1
				 	  	result_RH1_greater=result_RH1_greater+1
				 		}else {
				 	  	result_RH1_lift="Feature Family \\textless{} Feature Product"
				 	  	result_object_RH1_lift=0
				 	  	result_RH1_less=result_RH1_less +1
				 		}	
				 	
				 	}else{
				   		result_object_RH1_lift=5
				   		result_RH1_lift="Inconclusive"
				   		result_RH1_inconclusive=result_RH1_inconclusive+1
				 	}
				 
				 	if(mean(subset(json_data,treatment=='featureFamily' & object=='lift')$time)>mean(subset(json_data,treatment=='featureProduct' & object=='lift')$time)){
				     	cat(paste("Analysis time for Feature Family is ",100*(abs(mean(subset(json_data,treatment=='featureProduct' & object=='lift')$time)-mean(subset(json_data,treatment=='featureFamily' & object=='lift')$time))/mean(subset(json_data,treatment=='featureProduct' & object=='lift')$time)),"% greater than \nAnalysis time for Feature Product"))
				 
				 	}else{
				 	    cat(paste("Analysis time for Feature Product is ",100*(abs(mean(subset(json_data,treatment=='featureProduct' & object=='lift')$time)-mean(subset(json_data,treatment=='featureFamily' & object=='lift')$time))/mean(subset(json_data,treatment=='featureFamily' & object=='lift')$time)),"% greater than \nAnalysis time for Feature Family"))
				 
				 	}
				 }	
				 @  
				
				
				 
					<<echo=FALSE, echo=FALSE, warning=FALSE , message=FALSE >>=
					RH1_result=list(hypothesis="RH1",results=c(result_RH1_less/result_RH1_objects,result_RH1_greater/result_RH1_objects,result_RH1_featureFamily/result_RH1_objects,result_RH1_featureProduct/result_RH1_objects,result_RH1_none/result_RH1_objects,result_RH1_inconclusive/result_RH1_objects),objectResults =list( list(object='intercloud',result=result_object_RH1_intercloud), list(object='lift',result=result_object_RH1_lift) ))	
					@
					
					\subsubsection{RH1 Results: Analysis time Feature Family = Feature Product}
					
					
					\begin{table}[H]
					\centering
					\caption{RH1 Results per Object}
					\begin{tabular}{ll}
					\textbf{Intercloud SPL} & \Sexpr{result_RH1_intercloud} \\
					\textbf{Lift SPL} & \Sexpr{result_RH1_lift} \\
					\end{tabular}
					\end{table}
				
					\begin{table}[H]
					\centering
					\caption{RH1 Results Summary}
					\begin{tabular}{ll}
					\textbf{Feature Family \textless{} Feature Product:}& \Sexpr{100*result_RH1_less/result_RH1_objects}\% \\
					\textbf{Feature Family \textgreater{} Feature Product:}& \Sexpr{100*result_RH1_greater/result_RH1_objects}\%\\
					\textbf{Feature Family:}& \Sexpr{100*result_RH1_featureFamily/result_RH1_objects}\%\\
					\textbf{Feature Product:}& \Sexpr{100*result_RH1_featureProduct/result_RH1_objects}\%\\
					\textbf{None:}& \Sexpr{100*result_RH1_none/result_RH1_objects}\%\\
					\textbf{Inconclusive:}& \Sexpr{100*result_RH1_inconclusive/result_RH1_objects}\%
							
					
					\end{tabular}
					\end{table}
					
					
					
				
				
					
						
				
				
				\subsection{RH2: }
				
				 <<RH2, include=TRUE, echo=FALSE, warning=FALSE , message=FALSE >>=
				 
				 result_RH2_objects=2
				 result_RH2_less=0
				 result_RH2_greater=0
				 result_RH2_featureFamily=0
				 result_RH2_featureProduct=0
				 result_RH2_none=0
				 result_RH2_inconclusive=0
				 @
				 
				 <<overview_RH2, include=TRUE, echo=FALSE, warning=FALSE , message=FALSE >>=
				 DF<-data_summary(subset(json_data,(object=='intercloud'|object=='lift') & (treatment=='featureFamily'|treatment=='featureProduct')), varname="memory", groupnames=c("treatmentDescription", "objectLabel", "objectOrder"))
				 DF$objectLabel <- factor(DF$objectLabel, levels = DF$objectLabel[order(DF$objectOrder)])
				 		
				 		ggplot(DF, aes(x=objectLabel, y=memory, group=treatmentDescription, color=treatmentDescription)) + 
				 		    geom_errorbar(aes(ymin=memory-sd, ymax=memory+sd), width=.1, linetype=3) +
				 		    geom_line() + geom_point()+
				 		   scale_color_brewer(palette="Paired") +
				 		   theme_bw() +
				 		  scale_x_discrete(name = "SPL")+
				 		  
				 		  scale_y_continuous(name = "Memory Consumption ")+
				 		  ggtitle("Memory Consumption Overview") + 
				 		  theme(legend.title = element_blank())	
				 		@
				 @
				 	
				
				\subsubsection{RH2.1: Object Intercloud SPL}
				
				 \textbf{Memory Consumption for Feature Family}
				 <<RH2_featureFamily_intercloud, include=TRUE, echo=FALSE, warning=FALSE , message=FALSE >>=
				 memory_featureFamily_intercloud=subset(json_data,treatment=='featureFamily' & object=='intercloud' & !is.na(memory))$memory
				 print(paste("Sample size: ",length(memory_featureFamily_intercloud)))					
				 summary(subset(json_data,treatment=='featureFamily' & object=='intercloud')$memory)
				 
				 if(length(memory_featureFamily_intercloud)==expectedRuns){		
				 	reproducer::boxplotAndDensityCurveOnHistogram(subset(json_data,treatment=='featureFamily' & object=='intercloud'), "memory", min(subset(json_data,treatment=='featureFamily'& object=='intercloud')$memory), max(subset(json_data,treatment=='featureFamily'& object=='intercloud')$memory))
				 
				 	shap_featureFamily_intercloud=shapiro.test(subset(json_data,treatment=='featureFamily' & object=='intercloud')$memory)
				 	print(shap_featureFamily_intercloud)
				 	if(shap_featureFamily_intercloud$p.value>alpha){
				 		print(paste("Shapiro test: Null Hypothesis (normality) not rejected. P-value:",shap_featureFamily_intercloud$p.value, sep = " "))
				 	}else{
				 		print(paste("Shapiro test: Null Hypothesis (normality) rejected. P-value:",shap_featureFamily_intercloud$p.value, sep = " "))
				 	}
				 }
				 @
				 \textbf{Memory Consumption for Feature Product}
				 <<RH2_featureProduct_intercloud, include=TRUE, echo=FALSE, warning=FALSE , message=FALSE >>=
				 memory_featureProduct_intercloud=subset(json_data,treatment=='featureProduct' & object=='intercloud' & !is.na(memory))$memory
				 print(paste("Sample size: ",length(memory_featureProduct_intercloud)))					
				 summary(subset(json_data,treatment=='featureProduct' & object=='intercloud')$memory)
				 
				 if(length(memory_featureProduct_intercloud)==expectedRuns){		
				 	reproducer::boxplotAndDensityCurveOnHistogram(subset(json_data,treatment=='featureProduct' & object=='intercloud'), "memory", min(subset(json_data,treatment=='featureProduct'& object=='intercloud')$memory), max(subset(json_data,treatment=='featureProduct'& object=='intercloud')$memory))
				 
				 	shap_featureProduct_intercloud=shapiro.test(subset(json_data,treatment=='featureProduct' & object=='intercloud')$memory)
				 	print(shap_featureProduct_intercloud)
				 	if(shap_featureProduct_intercloud$p.value>alpha){
				 		print(paste("Shapiro test: Null Hypothesis (normality) not rejected. P-value:",shap_featureProduct_intercloud$p.value, sep = " "))
				 	}else{
				 		print(paste("Shapiro test: Null Hypothesis (normality) rejected. P-value:",shap_featureProduct_intercloud$p.value, sep = " "))
				 	}
				 }
				 @
				  
				 \textbf{Comparison}
				  
				 <<RH2_intercloud, include=TRUE, echo=FALSE, warning=FALSE, message=FALSE >>=
				 DF=subset(json_data,(treatment=='featureFamily'|treatment=='featureProduct') & object=='intercloud')
				 DF$treatmentDescription = ordered(DF$treatmentDescription, levels=levels(DF$treatmentDescription)[order(as.numeric(by(DF$memory, DF$treatmentDescription, mean)))])
				 boxplot_RH2_intercloud = ggplot(DF, aes(x =treatmentDescription , y = memory)) +
				 	geom_boxplot(fill = "#4271AE", colour = "#1F3552",alpha = 0.7,outlier.colour = "#1F3552", outlier.shape = 20)+
				 	theme_bw() +    
				 	scale_x_discrete(name = "Analysis Strategy")+
				 	ggtitle("Memory Consumption by Analysis Strategy for Intercloud SPL") + 
				 	ylab("Memory Consumption ")			   
				 boxplot_RH2_intercloud
				 result_RH2_intercloud_tTest = FALSE
				 if(length(memory_featureFamily_intercloud)==expectedRuns &length(memory_featureProduct_intercloud)==expectedRuns){
				 	if(shap_featureFamily_intercloud$p.value>alpha&shap_featureProduct_intercloud$p.value>alpha){
				   
				 		print("Fisher's F-test to verify the homoskedasticity (homogeneity of variances)")
				 	
				 		fTest=var.test(subset(json_data,treatment=='featureFamily' & object=='intercloud')$memory,subset(json_data,treatment=='featureProduct' & object=='intercloud')$memory)
				 		print(fTest)
				 		  
				 		print(paste("Homogeneity of variances: ",fTest$p.value>alpha, ". P-value: ", fTest$p.value, sep = ""))
				 		  
				 		print("Assuming that the two samples are taken from populations that follow a Gaussian distribution (if we cannot assume that, we must solve this problem using the non-parametric test called Wilcoxon-Mann-Whitney test)") 
				 		tTest=t.test(subset(json_data,treatment=='featureFamily' & object=='intercloud')$memory,subset(json_data,treatment=='featureProduct' & object=='intercloud')$memory, var.equal=fTest$p.value>alpha, paired=FALSE)
				 		print(tTest)
				 		if(tTest$p.value>alpha){
				 			print(paste("T-test: Null Hypothesis not rejected. P-value:",tTest$p.value, sep = " "))
				 		
				 		}else{
				 	    	print(paste("T-test: Null Hypothesis rejected. P-value:",tTest$p.value, sep = " "))
				 	    	result_RH2_intercloud_tTest = TRUE
				 		}
				 	}
				 }
				 if (length(memory_featureFamily_intercloud)!=expectedRuns & length(memory_featureProduct_intercloud)!=expectedRuns){
				 	result_object_RH2_intercloud=4
				 	result_RH2_intercloud="None"
				 	result_RH2_none = result_RH2_none +1
				 }
				 if (length(memory_featureFamily_intercloud)==expectedRuns & length(memory_featureProduct_intercloud)!=expectedRuns){
				 	result_object_RH2_intercloud=2
				 	result_RH2_intercloud="Feature Family"
				 	result_RH2_featureFamily = result_RH2_featureFamily +1			
				 }
				 if (length(memory_featureFamily_intercloud)!=expectedRuns & length(memory_featureProduct_intercloud)==expectedRuns){
				 	result_object_RH2_intercloud=3
				 	result_RH2_intercloud="Feature Product"
				 	result_RH2_featureProduct = result_RH2_featureProduct +1			
				 				
				 }
				 if (length(memory_featureFamily_intercloud)==expectedRuns & length(memory_featureProduct_intercloud)==expectedRuns){
				 	result_RH2_intercloud_wTest = FALSE			
				 	wTest=wilcox.test(memory~treatment,data=subset(json_data,(treatment=='featureFamily'|treatment=='featureProduct') & object=='intercloud')) 
				  
				 	print(wTest)
				  
				 	if(wTest$p.value>alpha){
				 		print(paste("Wilcoxon-Mann-Whitney test: Null Hypothesis not rejected. P-value:",wTest$p.value, sep = " "))
				 		result_RH2_intercloud_wTest = FALSE
				 	}else{
				 		print(paste("Wilcoxon-Mann-Whitney test: Null Hypothesis rejected. P-value:",wTest$p.value, sep = " "))
				 		result_RH2_intercloud_wTest = TRUE
				 	}
				 } 
				 if (length(memory_featureFamily_intercloud)==expectedRuns & length(memory_featureProduct_intercloud)==expectedRuns){
				 	print("")
				 	print("Means comparison")
				 	print(paste("Mean Memory Consumption for Feature Family: ",mean(subset(json_data,treatment=='featureFamily' & object=='intercloud')$memory)))
				 	print(paste("Mean Memory Consumption for Feature Product: ",mean(subset(json_data,treatment=='featureProduct' & object=='intercloud')$memory)))
				 	print(paste("Absolute difference: ",abs(mean(subset(json_data,treatment=='featureFamily' & object=='intercloud')$memory)-mean(subset(json_data,treatment=='featureProduct' & object=='intercloud')$memory))))
				 	if (result_RH2_intercloud_tTest | result_RH2_intercloud_wTest){
				 		if(mean(subset(json_data,treatment=='featureFamily' & object=='intercloud')$memory)>mean(subset(json_data,treatment=='featureProduct' & object=='intercloud')$memory)){
				 	  	result_RH2_intercloud="Feature Family \\textgreater{} Feature Product"
				 	  	result_object_RH2_intercloud=1
				 	  	result_RH2_greater=result_RH2_greater+1
				 		}else {
				 	  	result_RH2_intercloud="Feature Family \\textless{} Feature Product"
				 	  	result_object_RH2_intercloud=0
				 	  	result_RH2_less=result_RH2_less +1
				 		}	
				 	
				 	}else{
				   		result_object_RH2_intercloud=5
				   		result_RH2_intercloud="Inconclusive"
				   		result_RH2_inconclusive=result_RH2_inconclusive+1
				 	}
				 
				 	if(mean(subset(json_data,treatment=='featureFamily' & object=='intercloud')$memory)>mean(subset(json_data,treatment=='featureProduct' & object=='intercloud')$memory)){
				     	cat(paste("Memory Consumption for Feature Family is ",100*(abs(mean(subset(json_data,treatment=='featureProduct' & object=='intercloud')$memory)-mean(subset(json_data,treatment=='featureFamily' & object=='intercloud')$memory))/mean(subset(json_data,treatment=='featureProduct' & object=='intercloud')$memory)),"% greater than \nMemory Consumption for Feature Product"))
				 
				 	}else{
				 	    cat(paste("Memory Consumption for Feature Product is ",100*(abs(mean(subset(json_data,treatment=='featureProduct' & object=='intercloud')$memory)-mean(subset(json_data,treatment=='featureFamily' & object=='intercloud')$memory))/mean(subset(json_data,treatment=='featureFamily' & object=='intercloud')$memory)),"% greater than \nMemory Consumption for Feature Family"))
				 
				 	}
				 }	
				 @  
				
				
				\subsubsection{RH2.2: Object Lift SPL}
				
				 \textbf{Memory Consumption for Feature Family}
				 <<RH2_featureFamily_lift, include=TRUE, echo=FALSE, warning=FALSE , message=FALSE >>=
				 memory_featureFamily_lift=subset(json_data,treatment=='featureFamily' & object=='lift' & !is.na(memory))$memory
				 print(paste("Sample size: ",length(memory_featureFamily_lift)))					
				 summary(subset(json_data,treatment=='featureFamily' & object=='lift')$memory)
				 
				 if(length(memory_featureFamily_lift)==expectedRuns){		
				 	reproducer::boxplotAndDensityCurveOnHistogram(subset(json_data,treatment=='featureFamily' & object=='lift'), "memory", min(subset(json_data,treatment=='featureFamily'& object=='lift')$memory), max(subset(json_data,treatment=='featureFamily'& object=='lift')$memory))
				 
				 	shap_featureFamily_lift=shapiro.test(subset(json_data,treatment=='featureFamily' & object=='lift')$memory)
				 	print(shap_featureFamily_lift)
				 	if(shap_featureFamily_lift$p.value>alpha){
				 		print(paste("Shapiro test: Null Hypothesis (normality) not rejected. P-value:",shap_featureFamily_lift$p.value, sep = " "))
				 	}else{
				 		print(paste("Shapiro test: Null Hypothesis (normality) rejected. P-value:",shap_featureFamily_lift$p.value, sep = " "))
				 	}
				 }
				 @
				 \textbf{Memory Consumption for Feature Product}
				 <<RH2_featureProduct_lift, include=TRUE, echo=FALSE, warning=FALSE , message=FALSE >>=
				 memory_featureProduct_lift=subset(json_data,treatment=='featureProduct' & object=='lift' & !is.na(memory))$memory
				 print(paste("Sample size: ",length(memory_featureProduct_lift)))					
				 summary(subset(json_data,treatment=='featureProduct' & object=='lift')$memory)
				 
				 if(length(memory_featureProduct_lift)==expectedRuns){		
				 	reproducer::boxplotAndDensityCurveOnHistogram(subset(json_data,treatment=='featureProduct' & object=='lift'), "memory", min(subset(json_data,treatment=='featureProduct'& object=='lift')$memory), max(subset(json_data,treatment=='featureProduct'& object=='lift')$memory))
				 
				 	shap_featureProduct_lift=shapiro.test(subset(json_data,treatment=='featureProduct' & object=='lift')$memory)
				 	print(shap_featureProduct_lift)
				 	if(shap_featureProduct_lift$p.value>alpha){
				 		print(paste("Shapiro test: Null Hypothesis (normality) not rejected. P-value:",shap_featureProduct_lift$p.value, sep = " "))
				 	}else{
				 		print(paste("Shapiro test: Null Hypothesis (normality) rejected. P-value:",shap_featureProduct_lift$p.value, sep = " "))
				 	}
				 }
				 @
				  
				 \textbf{Comparison}
				  
				 <<RH2_lift, include=TRUE, echo=FALSE, warning=FALSE, message=FALSE >>=
				 DF=subset(json_data,(treatment=='featureFamily'|treatment=='featureProduct') & object=='lift')
				 DF$treatmentDescription = ordered(DF$treatmentDescription, levels=levels(DF$treatmentDescription)[order(as.numeric(by(DF$memory, DF$treatmentDescription, mean)))])
				 boxplot_RH2_lift = ggplot(DF, aes(x =treatmentDescription , y = memory)) +
				 	geom_boxplot(fill = "#4271AE", colour = "#1F3552",alpha = 0.7,outlier.colour = "#1F3552", outlier.shape = 20)+
				 	theme_bw() +    
				 	scale_x_discrete(name = "Analysis Strategy")+
				 	ggtitle("Memory Consumption by Analysis Strategy for Lift SPL") + 
				 	ylab("Memory Consumption ")			   
				 boxplot_RH2_lift
				 result_RH2_lift_tTest = FALSE
				 if(length(memory_featureFamily_lift)==expectedRuns &length(memory_featureProduct_lift)==expectedRuns){
				 	if(shap_featureFamily_lift$p.value>alpha&shap_featureProduct_lift$p.value>alpha){
				   
				 		print("Fisher's F-test to verify the homoskedasticity (homogeneity of variances)")
				 	
				 		fTest=var.test(subset(json_data,treatment=='featureFamily' & object=='lift')$memory,subset(json_data,treatment=='featureProduct' & object=='lift')$memory)
				 		print(fTest)
				 		  
				 		print(paste("Homogeneity of variances: ",fTest$p.value>alpha, ". P-value: ", fTest$p.value, sep = ""))
				 		  
				 		print("Assuming that the two samples are taken from populations that follow a Gaussian distribution (if we cannot assume that, we must solve this problem using the non-parametric test called Wilcoxon-Mann-Whitney test)") 
				 		tTest=t.test(subset(json_data,treatment=='featureFamily' & object=='lift')$memory,subset(json_data,treatment=='featureProduct' & object=='lift')$memory, var.equal=fTest$p.value>alpha, paired=FALSE)
				 		print(tTest)
				 		if(tTest$p.value>alpha){
				 			print(paste("T-test: Null Hypothesis not rejected. P-value:",tTest$p.value, sep = " "))
				 		
				 		}else{
				 	    	print(paste("T-test: Null Hypothesis rejected. P-value:",tTest$p.value, sep = " "))
				 	    	result_RH2_lift_tTest = TRUE
				 		}
				 	}
				 }
				 if (length(memory_featureFamily_lift)!=expectedRuns & length(memory_featureProduct_lift)!=expectedRuns){
				 	result_object_RH2_lift=4
				 	result_RH2_lift="None"
				 	result_RH2_none = result_RH2_none +1
				 }
				 if (length(memory_featureFamily_lift)==expectedRuns & length(memory_featureProduct_lift)!=expectedRuns){
				 	result_object_RH2_lift=2
				 	result_RH2_lift="Feature Family"
				 	result_RH2_featureFamily = result_RH2_featureFamily +1			
				 }
				 if (length(memory_featureFamily_lift)!=expectedRuns & length(memory_featureProduct_lift)==expectedRuns){
				 	result_object_RH2_lift=3
				 	result_RH2_lift="Feature Product"
				 	result_RH2_featureProduct = result_RH2_featureProduct +1			
				 				
				 }
				 if (length(memory_featureFamily_lift)==expectedRuns & length(memory_featureProduct_lift)==expectedRuns){
				 	result_RH2_lift_wTest = FALSE			
				 	wTest=wilcox.test(memory~treatment,data=subset(json_data,(treatment=='featureFamily'|treatment=='featureProduct') & object=='lift')) 
				  
				 	print(wTest)
				  
				 	if(wTest$p.value>alpha){
				 		print(paste("Wilcoxon-Mann-Whitney test: Null Hypothesis not rejected. P-value:",wTest$p.value, sep = " "))
				 		result_RH2_lift_wTest = FALSE
				 	}else{
				 		print(paste("Wilcoxon-Mann-Whitney test: Null Hypothesis rejected. P-value:",wTest$p.value, sep = " "))
				 		result_RH2_lift_wTest = TRUE
				 	}
				 } 
				 if (length(memory_featureFamily_lift)==expectedRuns & length(memory_featureProduct_lift)==expectedRuns){
				 	print("")
				 	print("Means comparison")
				 	print(paste("Mean Memory Consumption for Feature Family: ",mean(subset(json_data,treatment=='featureFamily' & object=='lift')$memory)))
				 	print(paste("Mean Memory Consumption for Feature Product: ",mean(subset(json_data,treatment=='featureProduct' & object=='lift')$memory)))
				 	print(paste("Absolute difference: ",abs(mean(subset(json_data,treatment=='featureFamily' & object=='lift')$memory)-mean(subset(json_data,treatment=='featureProduct' & object=='lift')$memory))))
				 	if (result_RH2_lift_tTest | result_RH2_lift_wTest){
				 		if(mean(subset(json_data,treatment=='featureFamily' & object=='lift')$memory)>mean(subset(json_data,treatment=='featureProduct' & object=='lift')$memory)){
				 	  	result_RH2_lift="Feature Family \\textgreater{} Feature Product"
				 	  	result_object_RH2_lift=1
				 	  	result_RH2_greater=result_RH2_greater+1
				 		}else {
				 	  	result_RH2_lift="Feature Family \\textless{} Feature Product"
				 	  	result_object_RH2_lift=0
				 	  	result_RH2_less=result_RH2_less +1
				 		}	
				 	
				 	}else{
				   		result_object_RH2_lift=5
				   		result_RH2_lift="Inconclusive"
				   		result_RH2_inconclusive=result_RH2_inconclusive+1
				 	}
				 
				 	if(mean(subset(json_data,treatment=='featureFamily' & object=='lift')$memory)>mean(subset(json_data,treatment=='featureProduct' & object=='lift')$memory)){
				     	cat(paste("Memory Consumption for Feature Family is ",100*(abs(mean(subset(json_data,treatment=='featureProduct' & object=='lift')$memory)-mean(subset(json_data,treatment=='featureFamily' & object=='lift')$memory))/mean(subset(json_data,treatment=='featureProduct' & object=='lift')$memory)),"% greater than \nMemory Consumption for Feature Product"))
				 
				 	}else{
				 	    cat(paste("Memory Consumption for Feature Product is ",100*(abs(mean(subset(json_data,treatment=='featureProduct' & object=='lift')$memory)-mean(subset(json_data,treatment=='featureFamily' & object=='lift')$memory))/mean(subset(json_data,treatment=='featureFamily' & object=='lift')$memory)),"% greater than \nMemory Consumption for Feature Family"))
				 
				 	}
				 }	
				 @  
				
				
				 
					<<echo=FALSE, echo=FALSE, warning=FALSE , message=FALSE >>=
					RH2_result=list(hypothesis="RH2",results=c(result_RH2_less/result_RH2_objects,result_RH2_greater/result_RH2_objects,result_RH2_featureFamily/result_RH2_objects,result_RH2_featureProduct/result_RH2_objects,result_RH2_none/result_RH2_objects,result_RH2_inconclusive/result_RH2_objects),objectResults =list( list(object='intercloud',result=result_object_RH2_intercloud), list(object='lift',result=result_object_RH2_lift) ))	
					@
					
					\subsubsection{RH2 Results: Memory Consumption Feature Family = Feature Product}
					
					
					\begin{table}[H]
					\centering
					\caption{RH2 Results per Object}
					\begin{tabular}{ll}
					\textbf{Intercloud SPL} & \Sexpr{result_RH2_intercloud} \\
					\textbf{Lift SPL} & \Sexpr{result_RH2_lift} \\
					\end{tabular}
					\end{table}
				
					\begin{table}[H]
					\centering
					\caption{RH2 Results Summary}
					\begin{tabular}{ll}
					\textbf{Feature Family \textless{} Feature Product:}& \Sexpr{100*result_RH2_less/result_RH2_objects}\% \\
					\textbf{Feature Family \textgreater{} Feature Product:}& \Sexpr{100*result_RH2_greater/result_RH2_objects}\%\\
					\textbf{Feature Family:}& \Sexpr{100*result_RH2_featureFamily/result_RH2_objects}\%\\
					\textbf{Feature Product:}& \Sexpr{100*result_RH2_featureProduct/result_RH2_objects}\%\\
					\textbf{None:}& \Sexpr{100*result_RH2_none/result_RH2_objects}\%\\
					\textbf{Inconclusive:}& \Sexpr{100*result_RH2_inconclusive/result_RH2_objects}\%
							
					
					\end{tabular}
					\end{table}
					
					
					
				
				
					
						
				
				
				\subsection{RH3: }
				
				 <<RH3, include=TRUE, echo=FALSE, warning=FALSE , message=FALSE >>=
				 
				 result_RH3_objects=2
				 result_RH3_less=0
				 result_RH3_greater=0
				 result_RH3_featureFamily=0
				 result_RH3_featureProduct=0
				 result_RH3_none=0
				 result_RH3_inconclusive=0
				 @
				 
				 <<overview_RH3, include=TRUE, echo=FALSE, warning=FALSE , message=FALSE >>=
				 DF<-data_summary(subset(json_data,(object=='intercloud'|object=='lift') & (treatment=='featureFamily'|treatment=='featureProduct')), varname="cpu", groupnames=c("treatmentDescription", "objectLabel", "objectOrder"))
				 DF$objectLabel <- factor(DF$objectLabel, levels = DF$objectLabel[order(DF$objectOrder)])
				 		
				 		ggplot(DF, aes(x=objectLabel, y=cpu, group=treatmentDescription, color=treatmentDescription)) + 
				 		    geom_errorbar(aes(ymin=cpu-sd, ymax=cpu+sd), width=.1, linetype=3) +
				 		    geom_line() + geom_point()+
				 		   scale_color_brewer(palette="Paired") +
				 		   theme_bw() +
				 		  scale_x_discrete(name = "SPL")+
				 		  
				 		  scale_y_continuous(name = "Cpu Consumption ")+
				 		  ggtitle("Cpu Consumption Overview") + 
				 		  theme(legend.title = element_blank())	
				 		@
				 @
				 	
				
				\subsubsection{RH3.1: Object Intercloud SPL}
				
				 \textbf{Cpu Consumption for Feature Family}
				 <<RH3_featureFamily_intercloud, include=TRUE, echo=FALSE, warning=FALSE , message=FALSE >>=
				 cpu_featureFamily_intercloud=subset(json_data,treatment=='featureFamily' & object=='intercloud' & !is.na(cpu))$cpu
				 print(paste("Sample size: ",length(cpu_featureFamily_intercloud)))					
				 summary(subset(json_data,treatment=='featureFamily' & object=='intercloud')$cpu)
				 
				 if(length(cpu_featureFamily_intercloud)==expectedRuns){		
				 	reproducer::boxplotAndDensityCurveOnHistogram(subset(json_data,treatment=='featureFamily' & object=='intercloud'), "cpu", min(subset(json_data,treatment=='featureFamily'& object=='intercloud')$cpu), max(subset(json_data,treatment=='featureFamily'& object=='intercloud')$cpu))
				 
				 	shap_featureFamily_intercloud=shapiro.test(subset(json_data,treatment=='featureFamily' & object=='intercloud')$cpu)
				 	print(shap_featureFamily_intercloud)
				 	if(shap_featureFamily_intercloud$p.value>alpha){
				 		print(paste("Shapiro test: Null Hypothesis (normality) not rejected. P-value:",shap_featureFamily_intercloud$p.value, sep = " "))
				 	}else{
				 		print(paste("Shapiro test: Null Hypothesis (normality) rejected. P-value:",shap_featureFamily_intercloud$p.value, sep = " "))
				 	}
				 }
				 @
				 \textbf{Cpu Consumption for Feature Product}
				 <<RH3_featureProduct_intercloud, include=TRUE, echo=FALSE, warning=FALSE , message=FALSE >>=
				 cpu_featureProduct_intercloud=subset(json_data,treatment=='featureProduct' & object=='intercloud' & !is.na(cpu))$cpu
				 print(paste("Sample size: ",length(cpu_featureProduct_intercloud)))					
				 summary(subset(json_data,treatment=='featureProduct' & object=='intercloud')$cpu)
				 
				 if(length(cpu_featureProduct_intercloud)==expectedRuns){		
				 	reproducer::boxplotAndDensityCurveOnHistogram(subset(json_data,treatment=='featureProduct' & object=='intercloud'), "cpu", min(subset(json_data,treatment=='featureProduct'& object=='intercloud')$cpu), max(subset(json_data,treatment=='featureProduct'& object=='intercloud')$cpu))
				 
				 	shap_featureProduct_intercloud=shapiro.test(subset(json_data,treatment=='featureProduct' & object=='intercloud')$cpu)
				 	print(shap_featureProduct_intercloud)
				 	if(shap_featureProduct_intercloud$p.value>alpha){
				 		print(paste("Shapiro test: Null Hypothesis (normality) not rejected. P-value:",shap_featureProduct_intercloud$p.value, sep = " "))
				 	}else{
				 		print(paste("Shapiro test: Null Hypothesis (normality) rejected. P-value:",shap_featureProduct_intercloud$p.value, sep = " "))
				 	}
				 }
				 @
				  
				 \textbf{Comparison}
				  
				 <<RH3_intercloud, include=TRUE, echo=FALSE, warning=FALSE, message=FALSE >>=
				 DF=subset(json_data,(treatment=='featureFamily'|treatment=='featureProduct') & object=='intercloud')
				 DF$treatmentDescription = ordered(DF$treatmentDescription, levels=levels(DF$treatmentDescription)[order(as.numeric(by(DF$cpu, DF$treatmentDescription, mean)))])
				 boxplot_RH3_intercloud = ggplot(DF, aes(x =treatmentDescription , y = cpu)) +
				 	geom_boxplot(fill = "#4271AE", colour = "#1F3552",alpha = 0.7,outlier.colour = "#1F3552", outlier.shape = 20)+
				 	theme_bw() +    
				 	scale_x_discrete(name = "Analysis Strategy")+
				 	ggtitle("Cpu Consumption by Analysis Strategy for Intercloud SPL") + 
				 	ylab("Cpu Consumption ")			   
				 boxplot_RH3_intercloud
				 result_RH3_intercloud_tTest = FALSE
				 if(length(cpu_featureFamily_intercloud)==expectedRuns &length(cpu_featureProduct_intercloud)==expectedRuns){
				 	if(shap_featureFamily_intercloud$p.value>alpha&shap_featureProduct_intercloud$p.value>alpha){
				   
				 		print("Fisher's F-test to verify the homoskedasticity (homogeneity of variances)")
				 	
				 		fTest=var.test(subset(json_data,treatment=='featureFamily' & object=='intercloud')$cpu,subset(json_data,treatment=='featureProduct' & object=='intercloud')$cpu)
				 		print(fTest)
				 		  
				 		print(paste("Homogeneity of variances: ",fTest$p.value>alpha, ". P-value: ", fTest$p.value, sep = ""))
				 		  
				 		print("Assuming that the two samples are taken from populations that follow a Gaussian distribution (if we cannot assume that, we must solve this problem using the non-parametric test called Wilcoxon-Mann-Whitney test)") 
				 		tTest=t.test(subset(json_data,treatment=='featureFamily' & object=='intercloud')$cpu,subset(json_data,treatment=='featureProduct' & object=='intercloud')$cpu, var.equal=fTest$p.value>alpha, paired=FALSE)
				 		print(tTest)
				 		if(tTest$p.value>alpha){
				 			print(paste("T-test: Null Hypothesis not rejected. P-value:",tTest$p.value, sep = " "))
				 		
				 		}else{
				 	    	print(paste("T-test: Null Hypothesis rejected. P-value:",tTest$p.value, sep = " "))
				 	    	result_RH3_intercloud_tTest = TRUE
				 		}
				 	}
				 }
				 if (length(cpu_featureFamily_intercloud)!=expectedRuns & length(cpu_featureProduct_intercloud)!=expectedRuns){
				 	result_object_RH3_intercloud=4
				 	result_RH3_intercloud="None"
				 	result_RH3_none = result_RH3_none +1
				 }
				 if (length(cpu_featureFamily_intercloud)==expectedRuns & length(cpu_featureProduct_intercloud)!=expectedRuns){
				 	result_object_RH3_intercloud=2
				 	result_RH3_intercloud="Feature Family"
				 	result_RH3_featureFamily = result_RH3_featureFamily +1			
				 }
				 if (length(cpu_featureFamily_intercloud)!=expectedRuns & length(cpu_featureProduct_intercloud)==expectedRuns){
				 	result_object_RH3_intercloud=3
				 	result_RH3_intercloud="Feature Product"
				 	result_RH3_featureProduct = result_RH3_featureProduct +1			
				 				
				 }
				 if (length(cpu_featureFamily_intercloud)==expectedRuns & length(cpu_featureProduct_intercloud)==expectedRuns){
				 	result_RH3_intercloud_wTest = FALSE			
				 	wTest=wilcox.test(cpu~treatment,data=subset(json_data,(treatment=='featureFamily'|treatment=='featureProduct') & object=='intercloud')) 
				  
				 	print(wTest)
				  
				 	if(wTest$p.value>alpha){
				 		print(paste("Wilcoxon-Mann-Whitney test: Null Hypothesis not rejected. P-value:",wTest$p.value, sep = " "))
				 		result_RH3_intercloud_wTest = FALSE
				 	}else{
				 		print(paste("Wilcoxon-Mann-Whitney test: Null Hypothesis rejected. P-value:",wTest$p.value, sep = " "))
				 		result_RH3_intercloud_wTest = TRUE
				 	}
				 } 
				 if (length(cpu_featureFamily_intercloud)==expectedRuns & length(cpu_featureProduct_intercloud)==expectedRuns){
				 	print("")
				 	print("Means comparison")
				 	print(paste("Mean Cpu Consumption for Feature Family: ",mean(subset(json_data,treatment=='featureFamily' & object=='intercloud')$cpu)))
				 	print(paste("Mean Cpu Consumption for Feature Product: ",mean(subset(json_data,treatment=='featureProduct' & object=='intercloud')$cpu)))
				 	print(paste("Absolute difference: ",abs(mean(subset(json_data,treatment=='featureFamily' & object=='intercloud')$cpu)-mean(subset(json_data,treatment=='featureProduct' & object=='intercloud')$cpu))))
				 	if (result_RH3_intercloud_tTest | result_RH3_intercloud_wTest){
				 		if(mean(subset(json_data,treatment=='featureFamily' & object=='intercloud')$cpu)>mean(subset(json_data,treatment=='featureProduct' & object=='intercloud')$cpu)){
				 	  	result_RH3_intercloud="Feature Family \\textgreater{} Feature Product"
				 	  	result_object_RH3_intercloud=1
				 	  	result_RH3_greater=result_RH3_greater+1
				 		}else {
				 	  	result_RH3_intercloud="Feature Family \\textless{} Feature Product"
				 	  	result_object_RH3_intercloud=0
				 	  	result_RH3_less=result_RH3_less +1
				 		}	
				 	
				 	}else{
				   		result_object_RH3_intercloud=5
				   		result_RH3_intercloud="Inconclusive"
				   		result_RH3_inconclusive=result_RH3_inconclusive+1
				 	}
				 
				 	if(mean(subset(json_data,treatment=='featureFamily' & object=='intercloud')$cpu)>mean(subset(json_data,treatment=='featureProduct' & object=='intercloud')$cpu)){
				     	cat(paste("Cpu Consumption for Feature Family is ",100*(abs(mean(subset(json_data,treatment=='featureProduct' & object=='intercloud')$cpu)-mean(subset(json_data,treatment=='featureFamily' & object=='intercloud')$cpu))/mean(subset(json_data,treatment=='featureProduct' & object=='intercloud')$cpu)),"% greater than \nCpu Consumption for Feature Product"))
				 
				 	}else{
				 	    cat(paste("Cpu Consumption for Feature Product is ",100*(abs(mean(subset(json_data,treatment=='featureProduct' & object=='intercloud')$cpu)-mean(subset(json_data,treatment=='featureFamily' & object=='intercloud')$cpu))/mean(subset(json_data,treatment=='featureFamily' & object=='intercloud')$cpu)),"% greater than \nCpu Consumption for Feature Family"))
				 
				 	}
				 }	
				 @  
				
				
				\subsubsection{RH3.2: Object Lift SPL}
				
				 \textbf{Cpu Consumption for Feature Family}
				 <<RH3_featureFamily_lift, include=TRUE, echo=FALSE, warning=FALSE , message=FALSE >>=
				 cpu_featureFamily_lift=subset(json_data,treatment=='featureFamily' & object=='lift' & !is.na(cpu))$cpu
				 print(paste("Sample size: ",length(cpu_featureFamily_lift)))					
				 summary(subset(json_data,treatment=='featureFamily' & object=='lift')$cpu)
				 
				 if(length(cpu_featureFamily_lift)==expectedRuns){		
				 	reproducer::boxplotAndDensityCurveOnHistogram(subset(json_data,treatment=='featureFamily' & object=='lift'), "cpu", min(subset(json_data,treatment=='featureFamily'& object=='lift')$cpu), max(subset(json_data,treatment=='featureFamily'& object=='lift')$cpu))
				 
				 	shap_featureFamily_lift=shapiro.test(subset(json_data,treatment=='featureFamily' & object=='lift')$cpu)
				 	print(shap_featureFamily_lift)
				 	if(shap_featureFamily_lift$p.value>alpha){
				 		print(paste("Shapiro test: Null Hypothesis (normality) not rejected. P-value:",shap_featureFamily_lift$p.value, sep = " "))
				 	}else{
				 		print(paste("Shapiro test: Null Hypothesis (normality) rejected. P-value:",shap_featureFamily_lift$p.value, sep = " "))
				 	}
				 }
				 @
				 \textbf{Cpu Consumption for Feature Product}
				 <<RH3_featureProduct_lift, include=TRUE, echo=FALSE, warning=FALSE , message=FALSE >>=
				 cpu_featureProduct_lift=subset(json_data,treatment=='featureProduct' & object=='lift' & !is.na(cpu))$cpu
				 print(paste("Sample size: ",length(cpu_featureProduct_lift)))					
				 summary(subset(json_data,treatment=='featureProduct' & object=='lift')$cpu)
				 
				 if(length(cpu_featureProduct_lift)==expectedRuns){		
				 	reproducer::boxplotAndDensityCurveOnHistogram(subset(json_data,treatment=='featureProduct' & object=='lift'), "cpu", min(subset(json_data,treatment=='featureProduct'& object=='lift')$cpu), max(subset(json_data,treatment=='featureProduct'& object=='lift')$cpu))
				 
				 	shap_featureProduct_lift=shapiro.test(subset(json_data,treatment=='featureProduct' & object=='lift')$cpu)
				 	print(shap_featureProduct_lift)
				 	if(shap_featureProduct_lift$p.value>alpha){
				 		print(paste("Shapiro test: Null Hypothesis (normality) not rejected. P-value:",shap_featureProduct_lift$p.value, sep = " "))
				 	}else{
				 		print(paste("Shapiro test: Null Hypothesis (normality) rejected. P-value:",shap_featureProduct_lift$p.value, sep = " "))
				 	}
				 }
				 @
				  
				 \textbf{Comparison}
				  
				 <<RH3_lift, include=TRUE, echo=FALSE, warning=FALSE, message=FALSE >>=
				 DF=subset(json_data,(treatment=='featureFamily'|treatment=='featureProduct') & object=='lift')
				 DF$treatmentDescription = ordered(DF$treatmentDescription, levels=levels(DF$treatmentDescription)[order(as.numeric(by(DF$cpu, DF$treatmentDescription, mean)))])
				 boxplot_RH3_lift = ggplot(DF, aes(x =treatmentDescription , y = cpu)) +
				 	geom_boxplot(fill = "#4271AE", colour = "#1F3552",alpha = 0.7,outlier.colour = "#1F3552", outlier.shape = 20)+
				 	theme_bw() +    
				 	scale_x_discrete(name = "Analysis Strategy")+
				 	ggtitle("Cpu Consumption by Analysis Strategy for Lift SPL") + 
				 	ylab("Cpu Consumption ")			   
				 boxplot_RH3_lift
				 result_RH3_lift_tTest = FALSE
				 if(length(cpu_featureFamily_lift)==expectedRuns &length(cpu_featureProduct_lift)==expectedRuns){
				 	if(shap_featureFamily_lift$p.value>alpha&shap_featureProduct_lift$p.value>alpha){
				   
				 		print("Fisher's F-test to verify the homoskedasticity (homogeneity of variances)")
				 	
				 		fTest=var.test(subset(json_data,treatment=='featureFamily' & object=='lift')$cpu,subset(json_data,treatment=='featureProduct' & object=='lift')$cpu)
				 		print(fTest)
				 		  
				 		print(paste("Homogeneity of variances: ",fTest$p.value>alpha, ". P-value: ", fTest$p.value, sep = ""))
				 		  
				 		print("Assuming that the two samples are taken from populations that follow a Gaussian distribution (if we cannot assume that, we must solve this problem using the non-parametric test called Wilcoxon-Mann-Whitney test)") 
				 		tTest=t.test(subset(json_data,treatment=='featureFamily' & object=='lift')$cpu,subset(json_data,treatment=='featureProduct' & object=='lift')$cpu, var.equal=fTest$p.value>alpha, paired=FALSE)
				 		print(tTest)
				 		if(tTest$p.value>alpha){
				 			print(paste("T-test: Null Hypothesis not rejected. P-value:",tTest$p.value, sep = " "))
				 		
				 		}else{
				 	    	print(paste("T-test: Null Hypothesis rejected. P-value:",tTest$p.value, sep = " "))
				 	    	result_RH3_lift_tTest = TRUE
				 		}
				 	}
				 }
				 if (length(cpu_featureFamily_lift)!=expectedRuns & length(cpu_featureProduct_lift)!=expectedRuns){
				 	result_object_RH3_lift=4
				 	result_RH3_lift="None"
				 	result_RH3_none = result_RH3_none +1
				 }
				 if (length(cpu_featureFamily_lift)==expectedRuns & length(cpu_featureProduct_lift)!=expectedRuns){
				 	result_object_RH3_lift=2
				 	result_RH3_lift="Feature Family"
				 	result_RH3_featureFamily = result_RH3_featureFamily +1			
				 }
				 if (length(cpu_featureFamily_lift)!=expectedRuns & length(cpu_featureProduct_lift)==expectedRuns){
				 	result_object_RH3_lift=3
				 	result_RH3_lift="Feature Product"
				 	result_RH3_featureProduct = result_RH3_featureProduct +1			
				 				
				 }
				 if (length(cpu_featureFamily_lift)==expectedRuns & length(cpu_featureProduct_lift)==expectedRuns){
				 	result_RH3_lift_wTest = FALSE			
				 	wTest=wilcox.test(cpu~treatment,data=subset(json_data,(treatment=='featureFamily'|treatment=='featureProduct') & object=='lift')) 
				  
				 	print(wTest)
				  
				 	if(wTest$p.value>alpha){
				 		print(paste("Wilcoxon-Mann-Whitney test: Null Hypothesis not rejected. P-value:",wTest$p.value, sep = " "))
				 		result_RH3_lift_wTest = FALSE
				 	}else{
				 		print(paste("Wilcoxon-Mann-Whitney test: Null Hypothesis rejected. P-value:",wTest$p.value, sep = " "))
				 		result_RH3_lift_wTest = TRUE
				 	}
				 } 
				 if (length(cpu_featureFamily_lift)==expectedRuns & length(cpu_featureProduct_lift)==expectedRuns){
				 	print("")
				 	print("Means comparison")
				 	print(paste("Mean Cpu Consumption for Feature Family: ",mean(subset(json_data,treatment=='featureFamily' & object=='lift')$cpu)))
				 	print(paste("Mean Cpu Consumption for Feature Product: ",mean(subset(json_data,treatment=='featureProduct' & object=='lift')$cpu)))
				 	print(paste("Absolute difference: ",abs(mean(subset(json_data,treatment=='featureFamily' & object=='lift')$cpu)-mean(subset(json_data,treatment=='featureProduct' & object=='lift')$cpu))))
				 	if (result_RH3_lift_tTest | result_RH3_lift_wTest){
				 		if(mean(subset(json_data,treatment=='featureFamily' & object=='lift')$cpu)>mean(subset(json_data,treatment=='featureProduct' & object=='lift')$cpu)){
				 	  	result_RH3_lift="Feature Family \\textgreater{} Feature Product"
				 	  	result_object_RH3_lift=1
				 	  	result_RH3_greater=result_RH3_greater+1
				 		}else {
				 	  	result_RH3_lift="Feature Family \\textless{} Feature Product"
				 	  	result_object_RH3_lift=0
				 	  	result_RH3_less=result_RH3_less +1
				 		}	
				 	
				 	}else{
				   		result_object_RH3_lift=5
				   		result_RH3_lift="Inconclusive"
				   		result_RH3_inconclusive=result_RH3_inconclusive+1
				 	}
				 
				 	if(mean(subset(json_data,treatment=='featureFamily' & object=='lift')$cpu)>mean(subset(json_data,treatment=='featureProduct' & object=='lift')$cpu)){
				     	cat(paste("Cpu Consumption for Feature Family is ",100*(abs(mean(subset(json_data,treatment=='featureProduct' & object=='lift')$cpu)-mean(subset(json_data,treatment=='featureFamily' & object=='lift')$cpu))/mean(subset(json_data,treatment=='featureProduct' & object=='lift')$cpu)),"% greater than \nCpu Consumption for Feature Product"))
				 
				 	}else{
				 	    cat(paste("Cpu Consumption for Feature Product is ",100*(abs(mean(subset(json_data,treatment=='featureProduct' & object=='lift')$cpu)-mean(subset(json_data,treatment=='featureFamily' & object=='lift')$cpu))/mean(subset(json_data,treatment=='featureFamily' & object=='lift')$cpu)),"% greater than \nCpu Consumption for Feature Family"))
				 
				 	}
				 }	
				 @  
				
				
				 
					<<echo=FALSE, echo=FALSE, warning=FALSE , message=FALSE >>=
					RH3_result=list(hypothesis="RH3",results=c(result_RH3_less/result_RH3_objects,result_RH3_greater/result_RH3_objects,result_RH3_featureFamily/result_RH3_objects,result_RH3_featureProduct/result_RH3_objects,result_RH3_none/result_RH3_objects,result_RH3_inconclusive/result_RH3_objects),objectResults =list( list(object='intercloud',result=result_object_RH3_intercloud), list(object='lift',result=result_object_RH3_lift) ))	
					@
					
					\subsubsection{RH3 Results: Cpu Consumption Feature Family = Feature Product}
					
					
					\begin{table}[H]
					\centering
					\caption{RH3 Results per Object}
					\begin{tabular}{ll}
					\textbf{Intercloud SPL} & \Sexpr{result_RH3_intercloud} \\
					\textbf{Lift SPL} & \Sexpr{result_RH3_lift} \\
					\end{tabular}
					\end{table}
				
					\begin{table}[H]
					\centering
					\caption{RH3 Results Summary}
					\begin{tabular}{ll}
					\textbf{Feature Family \textless{} Feature Product:}& \Sexpr{100*result_RH3_less/result_RH3_objects}\% \\
					\textbf{Feature Family \textgreater{} Feature Product:}& \Sexpr{100*result_RH3_greater/result_RH3_objects}\%\\
					\textbf{Feature Family:}& \Sexpr{100*result_RH3_featureFamily/result_RH3_objects}\%\\
					\textbf{Feature Product:}& \Sexpr{100*result_RH3_featureProduct/result_RH3_objects}\%\\
					\textbf{None:}& \Sexpr{100*result_RH3_none/result_RH3_objects}\%\\
					\textbf{Inconclusive:}& \Sexpr{100*result_RH3_inconclusive/result_RH3_objects}\%
							
					
					\end{tabular}
					\end{table}
					
					
					
				
				
					
						
				
				
				\section{Result Summary}
				\subsection{Research Hypotheses}
				
					<<echo=FALSE, echo=FALSE, warning=FALSE , message=FALSE >>=
					RH1_result=list(hypothesis="RH1",results=c(result_RH1_less/result_RH1_objects,result_RH1_greater/result_RH1_objects,result_RH1_featureFamily/result_RH1_objects,result_RH1_featureProduct/result_RH1_objects,result_RH1_none/result_RH1_objects,result_RH1_inconclusive/result_RH1_objects),objectResults =list( list(object='intercloud',result=result_object_RH1_intercloud), list(object='lift',result=result_object_RH1_lift) ))	
					@
					
					\subsubsection{RH1 Results: Analysis time Feature Family = Feature Product}
					
					
					\begin{table}[H]
					\centering
					\caption{RH1 Results per Object}
					\begin{tabular}{ll}
					\textbf{Intercloud SPL} & \Sexpr{result_RH1_intercloud} \\
					\textbf{Lift SPL} & \Sexpr{result_RH1_lift} \\
					\end{tabular}
					\end{table}
				
					\begin{table}[H]
					\centering
					\caption{RH1 Results Summary}
					\begin{tabular}{ll}
					\textbf{Feature Family \textless{} Feature Product:}& \Sexpr{100*result_RH1_less/result_RH1_objects}\% \\
					\textbf{Feature Family \textgreater{} Feature Product:}& \Sexpr{100*result_RH1_greater/result_RH1_objects}\%\\
					\textbf{Feature Family:}& \Sexpr{100*result_RH1_featureFamily/result_RH1_objects}\%\\
					\textbf{Feature Product:}& \Sexpr{100*result_RH1_featureProduct/result_RH1_objects}\%\\
					\textbf{None:}& \Sexpr{100*result_RH1_none/result_RH1_objects}\%\\
					\textbf{Inconclusive:}& \Sexpr{100*result_RH1_inconclusive/result_RH1_objects}\%
							
					
					\end{tabular}
					\end{table}
					
					
					
					<<echo=FALSE, echo=FALSE, warning=FALSE , message=FALSE >>=
					RH2_result=list(hypothesis="RH2",results=c(result_RH2_less/result_RH2_objects,result_RH2_greater/result_RH2_objects,result_RH2_featureFamily/result_RH2_objects,result_RH2_featureProduct/result_RH2_objects,result_RH2_none/result_RH2_objects,result_RH2_inconclusive/result_RH2_objects),objectResults =list( list(object='intercloud',result=result_object_RH2_intercloud), list(object='lift',result=result_object_RH2_lift) ))	
					@
					
					\subsubsection{RH2 Results: Memory Consumption Feature Family = Feature Product}
					
					
					\begin{table}[H]
					\centering
					\caption{RH2 Results per Object}
					\begin{tabular}{ll}
					\textbf{Intercloud SPL} & \Sexpr{result_RH2_intercloud} \\
					\textbf{Lift SPL} & \Sexpr{result_RH2_lift} \\
					\end{tabular}
					\end{table}
				
					\begin{table}[H]
					\centering
					\caption{RH2 Results Summary}
					\begin{tabular}{ll}
					\textbf{Feature Family \textless{} Feature Product:}& \Sexpr{100*result_RH2_less/result_RH2_objects}\% \\
					\textbf{Feature Family \textgreater{} Feature Product:}& \Sexpr{100*result_RH2_greater/result_RH2_objects}\%\\
					\textbf{Feature Family:}& \Sexpr{100*result_RH2_featureFamily/result_RH2_objects}\%\\
					\textbf{Feature Product:}& \Sexpr{100*result_RH2_featureProduct/result_RH2_objects}\%\\
					\textbf{None:}& \Sexpr{100*result_RH2_none/result_RH2_objects}\%\\
					\textbf{Inconclusive:}& \Sexpr{100*result_RH2_inconclusive/result_RH2_objects}\%
							
					
					\end{tabular}
					\end{table}
					
					
					
					<<echo=FALSE, echo=FALSE, warning=FALSE , message=FALSE >>=
					RH3_result=list(hypothesis="RH3",results=c(result_RH3_less/result_RH3_objects,result_RH3_greater/result_RH3_objects,result_RH3_featureFamily/result_RH3_objects,result_RH3_featureProduct/result_RH3_objects,result_RH3_none/result_RH3_objects,result_RH3_inconclusive/result_RH3_objects),objectResults =list( list(object='intercloud',result=result_object_RH3_intercloud), list(object='lift',result=result_object_RH3_lift) ))	
					@
					
					\subsubsection{RH3 Results: Cpu Consumption Feature Family = Feature Product}
					
					
					\begin{table}[H]
					\centering
					\caption{RH3 Results per Object}
					\begin{tabular}{ll}
					\textbf{Intercloud SPL} & \Sexpr{result_RH3_intercloud} \\
					\textbf{Lift SPL} & \Sexpr{result_RH3_lift} \\
					\end{tabular}
					\end{table}
				
					\begin{table}[H]
					\centering
					\caption{RH3 Results Summary}
					\begin{tabular}{ll}
					\textbf{Feature Family \textless{} Feature Product:}& \Sexpr{100*result_RH3_less/result_RH3_objects}\% \\
					\textbf{Feature Family \textgreater{} Feature Product:}& \Sexpr{100*result_RH3_greater/result_RH3_objects}\%\\
					\textbf{Feature Family:}& \Sexpr{100*result_RH3_featureFamily/result_RH3_objects}\%\\
					\textbf{Feature Product:}& \Sexpr{100*result_RH3_featureProduct/result_RH3_objects}\%\\
					\textbf{None:}& \Sexpr{100*result_RH3_none/result_RH3_objects}\%\\
					\textbf{Inconclusive:}& \Sexpr{100*result_RH3_inconclusive/result_RH3_objects}\%
							
					
					\end{tabular}
					\end{table}
					
					
					
						
				
				<<echo=TRUE, echo=FALSE, warning=FALSE , message=FALSE >>=
				experimentResults=list(RH1_result,RH2_result,RH3_result)
				write(toJSON(experimentResults,pretty = TRUE, auto_unbox = TRUE), "experimentResults.json")
				
				@
					
				\clearpage
				\appendix
				\section{Session Information}
				<<echo=FALSE, warning=FALSE , message=FALSE >>=
				sessionInfo()
				@
				
				\end{document}
			'''
			assertCompilesToWithFileExtension(rScript,".Rnw")

		]
	}
}
