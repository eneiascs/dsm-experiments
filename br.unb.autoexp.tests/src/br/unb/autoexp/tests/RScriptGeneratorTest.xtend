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
			
				Authors {author1 {fullName "Author1 Full Name" institution "University of Brasília" email "author1@unb.br"},author2 {fullName "Author2 Full Name" institution "University of Brasília" email "author2@unb.br"}}
			
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
				Objects { intercloud description "Intercloud SPL",lift description "Lift SPL"} 	
				}
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
				
				<<setup, include=FALSE>>=
				library(reproducer) # R package incl. software engineering data sets
				library(ggplot2) # R package to create high-quality graphics
				library(jsonlite)
				 
				alpha<-0.01
				 
				json_data <- fromJSON("data.json")
				@
				
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
				
				\section{Research Hypotheses}
				\subsection{Overview}
				
				<<overview, include=TRUE, echo=FALSE, warning=FALSE, message=FALSE, results='markup', cache=FALSE, tidy=TRUE, tidy.opts=list(blank=FALSE, width.cutoff=50), out.height="0.4\\textheight">>=
				
				time_featureFamily<-subset(json_data,treatment=='featureFamily')$time
				time_featureProduct<-subset(json_data,treatment=='featureProduct')$time
				boxplot_time <- ggplot(json_data, aes(x =treatment , y = time)) +
					geom_boxplot(fill = "#4271AE", colour = "#1F3552",alpha = 0.7,outlier.colour = "#1F3552", outlier.shape = 20)+
					theme_bw() +    
					scale_x_discrete(name = "Analysis Strategy",labels=c('Feature Family','Feature Product'))+
					ggtitle("Analysis time by Analysis Strategy")
					   
					boxplot_time
					
				memory_featureFamily<-subset(json_data,treatment=='featureFamily')$memory
				memory_featureProduct<-subset(json_data,treatment=='featureProduct')$memory
				boxplot_memory <- ggplot(json_data, aes(x =treatment , y = memory)) +
					geom_boxplot(fill = "#4271AE", colour = "#1F3552",alpha = 0.7,outlier.colour = "#1F3552", outlier.shape = 20)+
					theme_bw() +    
					scale_x_discrete(name = "Analysis Strategy",labels=c('Feature Family','Feature Product'))+
					ggtitle("Memory Consumption by Analysis Strategy")
					   
					boxplot_memory
					
				cpu_featureFamily<-subset(json_data,treatment=='featureFamily')$cpu
				cpu_featureProduct<-subset(json_data,treatment=='featureProduct')$cpu
				boxplot_cpu <- ggplot(json_data, aes(x =treatment , y = cpu)) +
					geom_boxplot(fill = "#4271AE", colour = "#1F3552",alpha = 0.7,outlier.colour = "#1F3552", outlier.shape = 20)+
					theme_bw() +    
					scale_x_discrete(name = "Analysis Strategy",labels=c('Feature Family','Feature Product'))+
					ggtitle("Cpu Consumption by Analysis Strategy")
					   
					boxplot_cpu
					
				@					
				 
				\subsection{Intercloud SPL}
				<<intercloud, include=TRUE,echo=FALSE, warning=FALSE, message=FALSE, results='markup',  cache=FALSE, tidy=TRUE, tidy.opts=list(blank=FALSE, width.cutoff=50), out.height="0.4\\textheight">>=
				boxplot_intercloud_time <- ggplot(json_data[json_data$object=='intercloud',], aes(x =treatment , y = time)) +
					geom_boxplot(fill = "#4271AE", colour = "#1F3552",alpha = 0.7,outlier.colour = "#1F3552", outlier.shape = 20)+
					theme_bw() +    
					scale_x_discrete(name = "Analysis Strategy",labels=c('Feature Family','Feature Product'))+
					ggtitle("Analysis time by Analysis Strategy for intercloud")
					   
					boxplot_intercloud_time
					
				boxplot_intercloud_memory <- ggplot(json_data[json_data$object=='intercloud',], aes(x =treatment , y = memory)) +
					geom_boxplot(fill = "#4271AE", colour = "#1F3552",alpha = 0.7,outlier.colour = "#1F3552", outlier.shape = 20)+
					theme_bw() +    
					scale_x_discrete(name = "Analysis Strategy",labels=c('Feature Family','Feature Product'))+
					ggtitle("Memory Consumption by Analysis Strategy for intercloud")
					   
					boxplot_intercloud_memory
					
				boxplot_intercloud_cpu <- ggplot(json_data[json_data$object=='intercloud',], aes(x =treatment , y = cpu)) +
					geom_boxplot(fill = "#4271AE", colour = "#1F3552",alpha = 0.7,outlier.colour = "#1F3552", outlier.shape = 20)+
					theme_bw() +    
					scale_x_discrete(name = "Analysis Strategy",labels=c('Feature Family','Feature Product'))+
					ggtitle("Cpu Consumption by Analysis Strategy for intercloud")
					   
					boxplot_intercloud_cpu
					
				
				
				
				@	
				\subsection{Lift SPL}
				<<lift, include=TRUE,echo=FALSE, warning=FALSE, message=FALSE, results='markup',  cache=FALSE, tidy=TRUE, tidy.opts=list(blank=FALSE, width.cutoff=50), out.height="0.4\\textheight">>=
				boxplot_lift_time <- ggplot(json_data[json_data$object=='lift',], aes(x =treatment , y = time)) +
					geom_boxplot(fill = "#4271AE", colour = "#1F3552",alpha = 0.7,outlier.colour = "#1F3552", outlier.shape = 20)+
					theme_bw() +    
					scale_x_discrete(name = "Analysis Strategy",labels=c('Feature Family','Feature Product'))+
					ggtitle("Analysis time by Analysis Strategy for lift")
					   
					boxplot_lift_time
					
				boxplot_lift_memory <- ggplot(json_data[json_data$object=='lift',], aes(x =treatment , y = memory)) +
					geom_boxplot(fill = "#4271AE", colour = "#1F3552",alpha = 0.7,outlier.colour = "#1F3552", outlier.shape = 20)+
					theme_bw() +    
					scale_x_discrete(name = "Analysis Strategy",labels=c('Feature Family','Feature Product'))+
					ggtitle("Memory Consumption by Analysis Strategy for lift")
					   
					boxplot_lift_memory
					
				boxplot_lift_cpu <- ggplot(json_data[json_data$object=='lift',], aes(x =treatment , y = cpu)) +
					geom_boxplot(fill = "#4271AE", colour = "#1F3552",alpha = 0.7,outlier.colour = "#1F3552", outlier.shape = 20)+
					theme_bw() +    
					scale_x_discrete(name = "Analysis Strategy",labels=c('Feature Family','Feature Product'))+
					ggtitle("Cpu Consumption by Analysis Strategy for lift")
					   
					boxplot_lift_cpu
					
				
				
				
				@	
				
				
				
				\subsection{RH1: }
				Research hypothesis RH1: Analysis time for Feature Family is equals than Analysis time for Feature Product.  
									
				\subsubsection{Analysis time for Feature Family}
				<<RH1_featureFamily, include=TRUE,echo=FALSE, warning=FALSE, message=FALSE, results='markup',  cache=FALSE, tidy=TRUE, tidy.opts=list(blank=FALSE, width.cutoff=50), out.height="0.4\\textheight">>=
				print(paste("Sample size: ",length(time_featureFamily)))					
				summary(time_featureFamily)
				reproducer::boxplotAndDensityCurveOnHistogram(subset(json_data,treatment=='featureFamily'), "time", min(subset(json_data,treatment=='featureFamily')$time), max(subset(json_data,treatment=='featureFamily')$time))
				
				shap_featureFamily<-shapiro.test(time_featureFamily)
				print(shap_featureFamily)
				if(shap_featureFamily$p.value>alpha){
					print(paste("Shapiro test: Null Hypothesis (normality) not rejected. P-value:",shap_featureFamily$p.value, sep = " "))
				}else{
					print(paste("Shapiro test: Null Hypothesis (normality) rejected. P-value:",shap_featureFamily$p.value, sep = " "))
				}
				@
				\subsubsection{Analysis time for Feature Product}
				<<RH1_featureProduct, include=TRUE,echo=FALSE, warning=FALSE, message=FALSE, results='markup',  cache=FALSE, tidy=TRUE, tidy.opts=list(blank=FALSE, width.cutoff=50), out.height="0.4\\textheight">>=
				print(paste("Sample size: ",length(time_featureProduct)))					
				summary(time_featureProduct)
				reproducer::boxplotAndDensityCurveOnHistogram(subset(json_data,treatment=='featureProduct'), "time", min(subset(json_data,treatment=='featureProduct')$time), max(subset(json_data,treatment=='featureProduct')$time))
				
				shap_featureProduct<-shapiro.test(time_featureProduct)
				print(shap_featureProduct)
				if(shap_featureProduct$p.value>alpha){
					print(paste("Shapiro test: Null Hypothesis (normality) not rejected. P-value:",shap_featureProduct$p.value, sep = " "))
				}else{
					print(paste("Shapiro test: Null Hypothesis (normality) rejected. P-value:",shap_featureProduct$p.value, sep = " "))
				}
				@
				
				 
				<<RH1, include=TRUE,echo=FALSE, warning=FALSE, message=FALSE, results='markup',  cache=FALSE, tidy=TRUE, tidy.opts=list(blank=FALSE, width.cutoff=50), out.height="0.4\\textheight">>=
				 
				boxplot_RH1 <- ggplot(json_data[json_data$treatment=='featureFamily'|json_data$treatment=='featureProduct',], aes(x =treatment , y = time)) +
					geom_boxplot(fill = "#4271AE", colour = "#1F3552",alpha = 0.7,outlier.colour = "#1F3552", outlier.shape = 20)+
					theme_bw() +    
					scale_x_discrete(name = "Analysis Strategy",labels=c("Feature Family","Feature Product"))+
					ggtitle("Analysis time by Analysis Strategy")
								   
				boxplot_RH1
				 
				if(shap_featureFamily$p.value>alpha&shap_featureProduct$p.value>alpha){
				  
					print("Fisher's F-test to verify the homoskedasticity (homogeneity of variances)")
					
					fTest<-var.test(time_featureFamily,time_featureProduct)
					print(fTest)
						  
					print(paste("Homogeneity of variances: ",fTest$p.value>alpha, ". P-value: ", fTest$p.value, sep = ""))
						  
					print("Assuming that the two samples are taken from populations that follow a Gaussian distribution (if we cannot assume that, we must solve this problem using the non-parametric test called Wilcoxon-Mann-Whitney test)") 
					tTest<-t.test(time_featureFamily,time_featureProduct, var.equal=fTest$p.value>alpha, paired=FALSE)
					print(tTest)
					
					if(tTest$p.value>alpha){
						print(paste("T-test: Null Hypothesis not rejected. P-value:",tTest$p.value, sep = " "))
					}else{
					    print(paste("T-test: Null Hypothesis rejected. P-value:",tTest$p.value, sep = " "))
					}
				}
				 
				 
				wTest<-wilcox.test(time~treatment,data=json_data[json_data$treatment=='featureFamily'|json_data$treatment=='featureProduct',]) 
				 
				print(wTest)
				 
				if(wTest$p.value>alpha){
					print(paste("Wilcoxon-Mann-Whitney test: Null Hypothesis not rejected. P-value:",wTest$p.value, sep = " "))
				}else{
					print(paste("Wilcoxon-Mann-Whitney test: Null Hypothesis rejected. P-value:",wTest$p.value, sep = " "))
				}
				 
				 
				print("")
				print("Means comparison")
				print(paste("Mean Analysis time for Feature Family: ",mean(time_featureFamily)))
				print(paste("Mean Analysis time for Feature Product: ",mean(time_featureProduct)))
				print(paste("Absolute difference: ",abs(mean(time_featureProduct)-mean(time_featureFamily))))
				if(mean(time_featureFamily)>mean(time_featureProduct)){
				    print(paste("Analysis time for Feature Family is ",100*(abs(mean(time_featureProduct)-mean(time_featureFamily))/mean(time_featureProduct)),"% greater than Analysis time for Feature Product"))
				
				}else{
				    print(paste("Analysis time for Feature Product is ",100*(abs(mean(time_featureProduct)-mean(time_featureFamily))/mean(time_featureFamily)),"% greater than Analysis time for Feature Family"))
				
				}

				@
				
				
				\subsection{RH2: }
				Research hypothesis RH2: Memory Consumption for Feature Family is equals than Memory Consumption for Feature Product.  
									
				\subsubsection{Memory Consumption for Feature Family}
				<<RH2_featureFamily, include=TRUE,echo=FALSE, warning=FALSE, message=FALSE, results='markup',  cache=FALSE, tidy=TRUE, tidy.opts=list(blank=FALSE, width.cutoff=50), out.height="0.4\\textheight">>=
				print(paste("Sample size: ",length(memory_featureFamily)))					
				summary(memory_featureFamily)
				reproducer::boxplotAndDensityCurveOnHistogram(subset(json_data,treatment=='featureFamily'), "memory", min(subset(json_data,treatment=='featureFamily')$memory), max(subset(json_data,treatment=='featureFamily')$memory))
				
				shap_featureFamily<-shapiro.test(memory_featureFamily)
				print(shap_featureFamily)
				if(shap_featureFamily$p.value>alpha){
					print(paste("Shapiro test: Null Hypothesis (normality) not rejected. P-value:",shap_featureFamily$p.value, sep = " "))
				}else{
					print(paste("Shapiro test: Null Hypothesis (normality) rejected. P-value:",shap_featureFamily$p.value, sep = " "))
				}
				@
				\subsubsection{Memory Consumption for Feature Product}
				<<RH2_featureProduct, include=TRUE,echo=FALSE, warning=FALSE, message=FALSE, results='markup',  cache=FALSE, tidy=TRUE, tidy.opts=list(blank=FALSE, width.cutoff=50), out.height="0.4\\textheight">>=
				print(paste("Sample size: ",length(memory_featureProduct)))					
				summary(memory_featureProduct)
				reproducer::boxplotAndDensityCurveOnHistogram(subset(json_data,treatment=='featureProduct'), "memory", min(subset(json_data,treatment=='featureProduct')$memory), max(subset(json_data,treatment=='featureProduct')$memory))
				
				shap_featureProduct<-shapiro.test(memory_featureProduct)
				print(shap_featureProduct)
				if(shap_featureProduct$p.value>alpha){
					print(paste("Shapiro test: Null Hypothesis (normality) not rejected. P-value:",shap_featureProduct$p.value, sep = " "))
				}else{
					print(paste("Shapiro test: Null Hypothesis (normality) rejected. P-value:",shap_featureProduct$p.value, sep = " "))
				}
				@
				
				 
				<<RH2, include=TRUE,echo=FALSE, warning=FALSE, message=FALSE, results='markup',  cache=FALSE, tidy=TRUE, tidy.opts=list(blank=FALSE, width.cutoff=50), out.height="0.4\\textheight">>=
				 
				boxplot_RH2 <- ggplot(json_data[json_data$treatment=='featureFamily'|json_data$treatment=='featureProduct',], aes(x =treatment , y = memory)) +
					geom_boxplot(fill = "#4271AE", colour = "#1F3552",alpha = 0.7,outlier.colour = "#1F3552", outlier.shape = 20)+
					theme_bw() +    
					scale_x_discrete(name = "Analysis Strategy",labels=c("Feature Family","Feature Product"))+
					ggtitle("Memory Consumption by Analysis Strategy")
								   
				boxplot_RH2
				 
				if(shap_featureFamily$p.value>alpha&shap_featureProduct$p.value>alpha){
				  
					print("Fisher's F-test to verify the homoskedasticity (homogeneity of variances)")
					
					fTest<-var.test(memory_featureFamily,memory_featureProduct)
					print(fTest)
						  
					print(paste("Homogeneity of variances: ",fTest$p.value>alpha, ". P-value: ", fTest$p.value, sep = ""))
						  
					print("Assuming that the two samples are taken from populations that follow a Gaussian distribution (if we cannot assume that, we must solve this problem using the non-parametric test called Wilcoxon-Mann-Whitney test)") 
					tTest<-t.test(memory_featureFamily,memory_featureProduct, var.equal=fTest$p.value>alpha, paired=FALSE)
					print(tTest)
					
					if(tTest$p.value>alpha){
						print(paste("T-test: Null Hypothesis not rejected. P-value:",tTest$p.value, sep = " "))
					}else{
					    print(paste("T-test: Null Hypothesis rejected. P-value:",tTest$p.value, sep = " "))
					}
				}
				 
				 
				wTest<-wilcox.test(memory~treatment,data=json_data[json_data$treatment=='featureFamily'|json_data$treatment=='featureProduct',]) 
				 
				print(wTest)
				 
				if(wTest$p.value>alpha){
					print(paste("Wilcoxon-Mann-Whitney test: Null Hypothesis not rejected. P-value:",wTest$p.value, sep = " "))
				}else{
					print(paste("Wilcoxon-Mann-Whitney test: Null Hypothesis rejected. P-value:",wTest$p.value, sep = " "))
				}
				 
				 
				print("")
				print("Means comparison")
				print(paste("Mean Memory Consumption for Feature Family: ",mean(memory_featureFamily)))
				print(paste("Mean Memory Consumption for Feature Product: ",mean(memory_featureProduct)))
				print(paste("Absolute difference: ",abs(mean(memory_featureProduct)-mean(memory_featureFamily))))
				if(mean(memory_featureFamily)>mean(memory_featureProduct)){
				    print(paste("Memory Consumption for Feature Family is ",100*(abs(mean(memory_featureProduct)-mean(memory_featureFamily))/mean(memory_featureProduct)),"% greater than Memory Consumption for Feature Product"))
				
				}else{
				    print(paste("Memory Consumption for Feature Product is ",100*(abs(mean(memory_featureProduct)-mean(memory_featureFamily))/mean(memory_featureFamily)),"% greater than Memory Consumption for Feature Family"))
				
				}
				
				@
				
				
				\subsection{RH3: }
				Research hypothesis RH3: Cpu Consumption for Feature Family is equals than Cpu Consumption for Feature Product.  
									
				\subsubsection{Cpu Consumption for Feature Family}
				<<RH3_featureFamily, include=TRUE,echo=FALSE, warning=FALSE, message=FALSE, results='markup',  cache=FALSE, tidy=TRUE, tidy.opts=list(blank=FALSE, width.cutoff=50), out.height="0.4\\textheight">>=
				print(paste("Sample size: ",length(cpu_featureFamily)))					
				summary(cpu_featureFamily)
				reproducer::boxplotAndDensityCurveOnHistogram(subset(json_data,treatment=='featureFamily'), "cpu", min(subset(json_data,treatment=='featureFamily')$cpu), max(subset(json_data,treatment=='featureFamily')$cpu))
				
				shap_featureFamily<-shapiro.test(cpu_featureFamily)
				print(shap_featureFamily)
				if(shap_featureFamily$p.value>alpha){
					print(paste("Shapiro test: Null Hypothesis (normality) not rejected. P-value:",shap_featureFamily$p.value, sep = " "))
				}else{
					print(paste("Shapiro test: Null Hypothesis (normality) rejected. P-value:",shap_featureFamily$p.value, sep = " "))
				}
				@
				\subsubsection{Cpu Consumption for Feature Product}
				<<RH3_featureProduct, include=TRUE,echo=FALSE, warning=FALSE, message=FALSE, results='markup',  cache=FALSE, tidy=TRUE, tidy.opts=list(blank=FALSE, width.cutoff=50), out.height="0.4\\textheight">>=
				print(paste("Sample size: ",length(cpu_featureProduct)))					
				summary(cpu_featureProduct)
				reproducer::boxplotAndDensityCurveOnHistogram(subset(json_data,treatment=='featureProduct'), "cpu", min(subset(json_data,treatment=='featureProduct')$cpu), max(subset(json_data,treatment=='featureProduct')$cpu))
				
				shap_featureProduct<-shapiro.test(cpu_featureProduct)
				print(shap_featureProduct)
				if(shap_featureProduct$p.value>alpha){
					print(paste("Shapiro test: Null Hypothesis (normality) not rejected. P-value:",shap_featureProduct$p.value, sep = " "))
				}else{
					print(paste("Shapiro test: Null Hypothesis (normality) rejected. P-value:",shap_featureProduct$p.value, sep = " "))
				}
				@
				
				 
				<<RH3, include=TRUE,echo=FALSE, warning=FALSE, message=FALSE, results='markup',  cache=FALSE, tidy=TRUE, tidy.opts=list(blank=FALSE, width.cutoff=50), out.height="0.4\\textheight">>=
				 
				boxplot_RH3 <- ggplot(json_data[json_data$treatment=='featureFamily'|json_data$treatment=='featureProduct',], aes(x =treatment , y = cpu)) +
					geom_boxplot(fill = "#4271AE", colour = "#1F3552",alpha = 0.7,outlier.colour = "#1F3552", outlier.shape = 20)+
					theme_bw() +    
					scale_x_discrete(name = "Analysis Strategy",labels=c("Feature Family","Feature Product"))+
					ggtitle("Cpu Consumption by Analysis Strategy")
								   
				boxplot_RH3
				 
				if(shap_featureFamily$p.value>alpha&shap_featureProduct$p.value>alpha){
				  
					print("Fisher's F-test to verify the homoskedasticity (homogeneity of variances)")
					
					fTest<-var.test(cpu_featureFamily,cpu_featureProduct)
					print(fTest)
						  
					print(paste("Homogeneity of variances: ",fTest$p.value>alpha, ". P-value: ", fTest$p.value, sep = ""))
						  
					print("Assuming that the two samples are taken from populations that follow a Gaussian distribution (if we cannot assume that, we must solve this problem using the non-parametric test called Wilcoxon-Mann-Whitney test)") 
					tTest<-t.test(cpu_featureFamily,cpu_featureProduct, var.equal=fTest$p.value>alpha, paired=FALSE)
					print(tTest)
					
					if(tTest$p.value>alpha){
						print(paste("T-test: Null Hypothesis not rejected. P-value:",tTest$p.value, sep = " "))
					}else{
					    print(paste("T-test: Null Hypothesis rejected. P-value:",tTest$p.value, sep = " "))
					}
				}
				 
				 
				wTest<-wilcox.test(cpu~treatment,data=json_data[json_data$treatment=='featureFamily'|json_data$treatment=='featureProduct',]) 
				 
				print(wTest)
				 
				if(wTest$p.value>alpha){
					print(paste("Wilcoxon-Mann-Whitney test: Null Hypothesis not rejected. P-value:",wTest$p.value, sep = " "))
				}else{
					print(paste("Wilcoxon-Mann-Whitney test: Null Hypothesis rejected. P-value:",wTest$p.value, sep = " "))
				}
				 
				 
				print("")
				print("Means comparison")
				print(paste("Mean Cpu Consumption for Feature Family: ",mean(cpu_featureFamily)))
				print(paste("Mean Cpu Consumption for Feature Product: ",mean(cpu_featureProduct)))
				print(paste("Absolute difference: ",abs(mean(cpu_featureProduct)-mean(cpu_featureFamily))))
				if(mean(cpu_featureFamily)>mean(cpu_featureProduct)){
				    print(paste("Cpu Consumption for Feature Family is ",100*(abs(mean(cpu_featureProduct)-mean(cpu_featureFamily))/mean(cpu_featureProduct)),"% greater than Cpu Consumption for Feature Product"))
				
				}else{
				    print(paste("Cpu Consumption for Feature Product is ",100*(abs(mean(cpu_featureProduct)-mean(cpu_featureFamily))/mean(cpu_featureFamily)),"% greater than Cpu Consumption for Feature Family"))
				
				}
				
				@
				
					
				\newpage
				\appendix
				\section{Session Information}
				<<echo=TRUE>>=
				sessionInfo()
				@
				
				\end{document}
			'''
			assertCompilesToWithFileExtension(rScript,".Rnw")

		]
	}
}
