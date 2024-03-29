package br.unb.autoexp.generator.rscript

import br.unb.autoexp.autoExp.DependentVariable
import br.unb.autoexp.autoExp.Experiment
import br.unb.autoexp.autoExp.ExperimentalObject
import br.unb.autoexp.autoExp.ResearchHypothesis
import br.unb.autoexp.autoExp.ScaleType
import br.unb.autoexp.autoExp.SimpleGoal
import br.unb.autoexp.autoExp.Treatment
import br.unb.autoexp.autoExp.impl.SimpleAbstractImpl
import br.unb.autoexp.autoExp.impl.SimpleGoalImpl
import br.unb.autoexp.autoExp.impl.StructuredAbstractImpl
import br.unb.autoexp.autoExp.impl.StructuredGoalImpl
import br.unb.autoexp.generator.ExperimentalDesignGenerator
import java.util.List
import javax.inject.Inject

class RScriptGenerator {
@Inject extension ExperimentalDesignGenerator 

	def compileRScript(Experiment experiment) {
		'''
		\documentclass{article}
		\usepackage{authblk}
		\usepackage{float}
		\usepackage{multirow}
		\usepackage[utf8]{inputenc}
		\begin{document}
		«experiment.generateTitle»
		«experiment.generateAuthor»
		\maketitle
		«experiment.generateAbstract»
		«experiment.generateKeywords»
		<<setup, include=FALSE, echo=FALSE, warning=FALSE , message=FALSE >>=
		library(reproducer) # R package incl. software engineering data sets
		library(ggplot2) # R package to create high-quality graphics
		library(jsonlite)
		 
		alpha = «IF experiment.analysis?.significanceLevel !== null»«experiment.analysis.significanceLevel»«ELSE»0.05«ENDIF»
		 
		json_data = fromJSON("data.json")
		
		«FOR i:1..experiment.experimentalObjects.size»
			json_data$objectOrder[json_data$object == '«experiment.experimentalObjects.get(i-1).name»'] = «i»
		«ENDFOR»
		
		«FOR treatment:experiment.treatmentsInUse»
			json_data$treatmentDescription[json_data$treatment == '«treatment.name»'] = '«treatment.description»'
		«ENDFOR»
		«FOR object:experiment.experimentalObjects»
			json_data$objectLabel[json_data$object == '«object.name»'] = '«IF object.value===null»«object.description»«ELSE»«object.value»«ENDIF»'
		«ENDFOR»
		
		expectedRuns = «experiment.experimentalDesign.runs»
		«FOR variable:(experiment.researchHypotheses as List<ResearchHypothesis>).map[formula.depVariable].removeDuplicates»
			json_data$«variable.name.convert»[json_data$executionStatus!='FINISHED']=NA
			«FOR treatment:experiment.treatmentsInUse»				
				«FOR object:treatment.experimentalObjects»
					if (length(json_data$«variable.name.convert»[json_data$treatment == '«treatment.name»' & json_data$object == '«object.name»' & !is.na(json_data$«variable.name.convert»)])!=expectedRuns){
						json_data$«variable.name.convert»[json_data$treatment == '«treatment.name»' & json_data$object == '«object.name»']=NA
					}
				«ENDFOR» 
			«ENDFOR»
		«ENDFOR»
		
		json_data$treatment = as.factor(json_data$treatment)
		json_data$treatmentDescription = as.factor(json_data$treatmentDescription)
		json_data$object = as.factor(json_data$object)		
		«IF experiment.objectsScaleType.equals(ScaleType.NOMINAL)»
			json_data$objectLabel = as.factor(json_data$objectLabel)
		«ELSE»
			json_data$objectLabel = as.numeric(json_data$objectLabel)
		«ENDIF»		
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
		«experiment.description»
		
		«experiment.generateGoals»
		
		«experiment.generateQuestions»
		
		\section{Overview}
		
		«experiment.generateOverview»


		
		\subsection{Objects Overview}
		«FOR object:experiment.objectsInUse»
			\subsubsection{Overview for «object.description»}
			«experiment.generateObjectOverview(object)»	
		«ENDFOR»
		
		\section{Research Hypotheses}
		«FOR hypothesis:experiment.researchHypotheses»

		\subsection{«hypothesis.name»: «hypothesis.description»}
		«hypothesis.generate»
		
		«ENDFOR»
		
		\section{Result Summary}
		\subsection{Research Hypotheses}
		
		«experiment.generateResultsSummary»
		
		«experiment.generateResultsFile»
			
		«generateSessionInformation»
		
		\end{document}
		'''
	}
	

	
	def String generateResultsSummary(Experiment experiment)
		'''
		«FOR hypothesis:experiment.researchHypotheses»
			«hypothesis.generateSummary»
		«ENDFOR»
				
		'''
	
	def String generateSessionInformation() {
		'''
			\clearpage
			\appendix
			\section{Session Information}
			<<echo=FALSE, warning=FALSE , message=FALSE >>=
			sessionInfo()
			@
		'''
	}
	
	def String generate(ResearchHypothesis hypothesis){
		'''
		
		 «hypothesis.initializeResults»
		 
		 «hypothesis.generateOverview»
		 	
		«FOR obj:hypothesis.objects»
		
		\subsubsection{«hypothesis.name».«hypothesis.objects.indexOf(obj)+1»: Object «obj.description»}
		«hypothesis.generate(obj)»
		
		«ENDFOR»
		
		 
		«hypothesis.generateSummary»
		
		'''
	}	
	def String generateOverview(ResearchHypothesis hypothesis){
		val experiment=hypothesis.eContainer as Experiment
		'''			
			<<overview_«hypothesis.name», include=TRUE, echo=FALSE, warning=FALSE , message=FALSE >>=
			DF <- data_summary(subset(json_data, «FOR object:hypothesis.objectsInUse BEFORE "(" SEPARATOR "|" AFTER ")"»object == '«object.name»' «ENDFOR» & (treatment == '«hypothesis.formula.treatment1.name»' | treatment == '«hypothesis.formula.treatment2.name»')), varname = "«hypothesis.formula.depVariable.name.convert»", groupnames = c("treatmentDescription", "objectLabel", "objectOrder"))
			«generatePlotOverview(experiment, hypothesis.formula.depVariable)»
			@
		'''
	}
	
	
	def String generateResultsFile(Experiment experiment)
		'''
		<<echo=TRUE, echo=FALSE, warning=FALSE , message=FALSE >>=
		experimentResults = list(«FOR hypothesis:experiment.researchHypotheses» «hypothesis.name»_result«IF !hypothesis.name.equals( experiment.researchHypotheses.last.name)»,«ENDIF»«ENDFOR»)
		write(toJSON(experimentResults, pretty = TRUE, auto_unbox = TRUE), "experimentResults.json")

		@
		'''
	
	def String generateSummary(ResearchHypothesis hypothesis)
		'''
		<<echo=FALSE, echo=FALSE, warning=FALSE , message=FALSE >>=
		«hypothesis.name»_result = list(hypothesis = "«hypothesis.name»", results = c(result_«hypothesis.name»_less / result_«hypothesis.name»_objects, result_«hypothesis.name»_greater / result_«hypothesis.name»_objects, result_«hypothesis.name»_«hypothesis.formula.treatment1.name» / result_«hypothesis.name»_objects, result_«hypothesis.name»_«hypothesis.formula.treatment2.name» / result_«hypothesis.name»_objects, result_«hypothesis.name»_none / result_«hypothesis.name»_objects, result_«hypothesis.name»_inconclusive / result_«hypothesis.name»_objects), objectResults = list(«FOR object:hypothesis.objects» list(object = '«object.name»', result = result_object_«hypothesis.name»_«object.name»)«IF !object.name.equals(hypothesis.objects.last.name)», «ENDIF»«ENDFOR» ))	
		@
		
		\subsubsection{«hypothesis.name» Results: «hypothesis.formula.depVariable.description» «hypothesis.formula.treatment1.description» «hypothesis.formula.operator.typeName» «hypothesis.formula.treatment2.description»}
		
		
		\begin{table}[H]
		\centering
		\caption{«hypothesis.name» Results per Object}
		\begin{tabular}{ll}
		«FOR object:hypothesis.objects»
		\textbf{«object.description»} & \Sexpr{result_«hypothesis.name»_«object.name»} \\
		«ENDFOR»                            
		\end{tabular}
		\end{table}
	
		\begin{table}[H]
		\centering
		\caption{«hypothesis.name» Results Summary}
		\begin{tabular}{ll}
		\textbf{«hypothesis.formula.treatment1.description» \textless{} «hypothesis.formula.treatment2.description»:}& \Sexpr{100 * result_«hypothesis.name»_less / result_«hypothesis.name»_objects}\% \\
		\textbf{«hypothesis.formula.treatment1.description» \textgreater{} «hypothesis.formula.treatment2.description»:}& \Sexpr{100 * result_«hypothesis.name»_greater / result_«hypothesis.name»_objects}\%\\
		\textbf{«hypothesis.formula.treatment1.description»:} & \Sexpr{100 * result_«hypothesis.name»_«hypothesis.formula.treatment1.name» / result_«hypothesis.name»_objects}\%\\
		\textbf{«hypothesis.formula.treatment2.description»:} & \Sexpr{100 * result_«hypothesis.name»_«hypothesis.formula.treatment2.name» / result_«hypothesis.name»_objects}\%\\
		\textbf{None:}& \Sexpr{100 * result_«hypothesis.name»_none / result_«hypothesis.name»_objects}\%\\
		\textbf{Inconclusive:}& \Sexpr{100 * result_«hypothesis.name»_inconclusive / result_«hypothesis.name»_objects}\%
				
		
		\end{tabular}
		\end{table}
		
		
		
		'''
	
	def String generate(ResearchHypothesis hypothesis, ExperimentalObject object){
		'''
		 
		  «hypothesis.generateTreatmentsData(object)»
		   
		  \textbf{Comparison}
		   
		  <<«hypothesis.name»_«object.name», include=TRUE, echo=FALSE, warning=FALSE, message=FALSE >>=
		  «hypothesis.generateBoxplot(object)»
		  if(length(«hypothesis.formula.depVariable.name.convert»_«hypothesis.formula.treatment1.name»_«object.name») == expectedRuns & length(«hypothesis.formula.depVariable.name.convert»_«hypothesis.formula.treatment2.name»_«object.name») == expectedRuns){
		  	«hypothesis.generateTests(object)»		 
		  }
		 if(length(«hypothesis.formula.depVariable.name.convert»_«hypothesis.formula.treatment1.name»_«object.name») == expectedRuns & length(«hypothesis.formula.depVariable.name.convert»_«hypothesis.formula.treatment2.name»_«object.name») == expectedRuns){
		 	 «hypothesis.generateComparison(object)»
		 } 
		 if (length(«hypothesis.formula.depVariable.name.convert»_«hypothesis.formula.treatment1.name»_«object.name») != expectedRuns & length(«hypothesis.formula.depVariable.name.convert»_« hypothesis.formula.treatment2.name»_«object.name») != expectedRuns){
		  	result_object_«hypothesis.name»_«object.name» = 4
		 	result_«hypothesis.name»_«object.name» = "None"
		 	result_«hypothesis.name»_none = result_«hypothesis.name»_none + 1
		 }
		 if (length(«hypothesis.formula.depVariable.name.convert»_«hypothesis.formula.treatment1.name»_«object.name») == expectedRuns & length(«hypothesis.formula.depVariable.name.convert»_« hypothesis.formula.treatment2.name»_«object.name») != expectedRuns){
		 	result_object_«hypothesis.name»_«object.name» = 2
		 	result_«hypothesis.name»_«object.name» = "«hypothesis.formula.treatment1.description»"
		 	result_«hypothesis.name»_«hypothesis.formula.treatment1.name» = result_«hypothesis.name»_«hypothesis.formula.treatment1.name» + 1			
		 }
		 if (length(«hypothesis.formula.depVariable.name.convert»_«hypothesis.formula.treatment1.name»_«object.name») != expectedRuns & length(«hypothesis.formula.depVariable.name.convert»_« hypothesis.formula.treatment2.name»_«object.name») == expectedRuns){
		 	result_object_«hypothesis.name»_«object.name» = 3
		 	result_«hypothesis.name»_«object.name» = "«hypothesis.formula.treatment2.description»"
		 	result_«hypothesis.name»_«hypothesis.formula.treatment2.name» = result_«hypothesis.name»_«hypothesis.formula.treatment2.name» + 1			
		 }
		 @  
		'''	
		}
	
	def String initializeResults(ResearchHypothesis hypothesis)
		'''
		<<«hypothesis.name», include=TRUE, echo=FALSE, warning=FALSE , message=FALSE >>=
		
		result_«hypothesis.name»_objects=«hypothesis.objects.size»
		result_«hypothesis.name»_less=0
		result_«hypothesis.name»_greater=0
		result_«hypothesis.name»_«hypothesis.formula.treatment1.name»=0
		result_«hypothesis.name»_«hypothesis.formula.treatment2.name»=0
		result_«hypothesis.name»_none=0
		result_«hypothesis.name»_inconclusive=0
		@
		'''
	def String generateComparison(ResearchHypothesis hypothesis, ExperimentalObject  object)
			'''
			print("")
			print("Means comparison")
			print(paste("Mean «hypothesis.formula.depVariable.description» for «hypothesis.formula.treatment1.description»: ", mean(subset(json_data, treatment == '«hypothesis.formula.treatment1.name»' & object == '«object.name»')$«hypothesis.formula.depVariable.name.convert»)))
			print(paste("Mean «hypothesis.formula.depVariable.description» for «hypothesis.formula.treatment2.description»: ", mean(subset(json_data, treatment == '«hypothesis.formula.treatment2.name»' & object == '«object.name»')$«hypothesis.formula.depVariable.name.convert»)))
			print(paste("Absolute difference: ", abs(mean(subset(json_data, treatment == '«hypothesis.formula.treatment1.name»' & object == '«object.name»')$«hypothesis.formula.depVariable.name.convert») - mean(subset(json_data, treatment == '«hypothesis.formula.treatment2.name»' & object == '«object.name»')$«hypothesis.formula.depVariable.name.convert»))))
			if (result_«hypothesis.name»_«object.name»_tTest | result_«hypothesis.name»_«object.name»_wTest){
				if(mean(subset(json_data, treatment == '«hypothesis.formula.treatment1.name»' & object == '«object.name»')$«hypothesis.formula.depVariable.name.convert») > mean(subset(json_data, treatment == '«hypothesis.formula.treatment2.name»' & object == '«object.name»')$«hypothesis.formula.depVariable.name.convert»)){
			  	result_«hypothesis.name»_«object.name» = "«hypothesis.formula.treatment1.description» \\textgreater{} «hypothesis.formula.treatment2.description»"
			  	result_object_«hypothesis.name»_«object.name» = 1
			  	result_«hypothesis.name»_greater = result_«hypothesis.name»_greater + 1
				}else {
			  	result_«hypothesis.name»_«object.name» = "«hypothesis.formula.treatment1.description» \\textless{} «hypothesis.formula.treatment2.description»"
			  	result_object_«hypothesis.name»_«object.name» = 0
			  	result_«hypothesis.name»_less = result_«hypothesis.name»_less + 1
				}	
			
			}else{
				result_object_«hypothesis.name»_«object.name» = 5
				result_«hypothesis.name»_«object.name» = "Inconclusive"
				result_«hypothesis.name»_inconclusive = result_«hypothesis.name»_inconclusive + 1
			}
			
			if(mean(subset(json_data,treatment == '«hypothesis.formula.treatment1.name»' & object == '«object.name»')$«hypothesis.formula.depVariable.name.convert») > mean(subset(json_data, treatment == '«hypothesis.formula.treatment2.name»' & object == '«object.name»')$«hypothesis.formula.depVariable.name.convert»)){
				cat(paste("«hypothesis.formula.depVariable.description» for «hypothesis.formula.treatment1.description» is ", 100 * (abs(mean(subset(json_data, treatment == '«hypothesis.formula.treatment2.name»' & object == '«object.name»')$«hypothesis.formula.depVariable.name.convert») - mean(subset(json_data, treatment == '«hypothesis.formula.treatment1.name»' & object == '«object.name»')$«hypothesis.formula.depVariable.name.convert»)) / mean(subset(json_data, treatment == '«hypothesis.formula.treatment2.name»' & object == '«object.name»')$«hypothesis.formula.depVariable.name.convert»)), "% greater than \n «hypothesis.formula.depVariable.description» for «hypothesis.formula.treatment2.description»"))				
			}else{
			    cat(paste("«hypothesis.formula.depVariable.description» for «hypothesis.formula.treatment2.description» is ", 100 * (abs(mean(subset(json_data, treatment == '«hypothesis.formula.treatment2.name»' & object == '«object.name»')$«hypothesis.formula.depVariable.name.convert») - mean(subset(json_data, treatment == '«hypothesis.formula.treatment1.name»' & object == '«object.name»')$«hypothesis.formula.depVariable.name.convert»)) / mean(subset(json_data, treatment == '«hypothesis.formula.treatment1.name»' & object == '«object.name»')$«hypothesis.formula.depVariable.name.convert»)), "% greater than \n«hypothesis.formula.depVariable.description» for «hypothesis.formula.treatment1.description»"))			    
			}	
			'''
	
	def String generateNonParametricTest(ResearchHypothesis hypothesis, ExperimentalObject  object)
		'''
			result_«hypothesis.name»_«object.name»_wTest = FALSE			
			wTest = wilcox.test(«hypothesis.formula.depVariable.name.convert»~treatment, data=subset(json_data, (treatment == '«hypothesis.formula.treatment1.name»' | treatment == '«hypothesis.formula.treatment2.name»') & object == '«object.name»')) 
			print(wTest)
			if(wTest$p.value > alpha){
				print(paste("Wilcoxon-Mann-Whitney test: Null Hypothesis not rejected. P-value:", wTest$p.value, sep = " "))
				result_«hypothesis.name»_«object.name»_wTest = FALSE
			}else{
				print(paste("Wilcoxon-Mann-Whitney test: Null Hypothesis rejected. P-value:", wTest$p.value, sep = " "))
				result_«hypothesis.name»_«object.name»_wTest = TRUE
			}
		'''
	
	def String generateTests(ResearchHypothesis hypothesis, ExperimentalObject  object)
				''' 
				result_«hypothesis.name»_«object.name»_tTest = FALSE
				result_«hypothesis.name»_«object.name»_wTest = FALSE
				
				if(shap_«hypothesis.formula.treatment1.name»_«object.name»$p.value > alpha&shap_«hypothesis.formula.treatment2.name»_«object.name»$p.value > alpha){
					print("Fisher's F-test to verify the homoskedasticity (homogeneity of variances)")
				
					fTest = var.test(subset(json_data, treatment == '«hypothesis.formula.treatment1.name»' & object == '«object.name»')$«hypothesis.formula.depVariable.name.convert», subset(json_data,treatment == '«hypothesis.formula.treatment2.name»' & object == '«object.name»')$«hypothesis.formula.depVariable.name.convert»)
					print(fTest)
					  
					print(paste("Homogeneity of variances: ", fTest$p.value > alpha, ". P-value: ", fTest$p.value, sep = ""))
					  
					print("Assuming that the two samples are taken from populations that follow a Gaussian distribution (if we cannot assume that, we must solve this problem using the non-parametric test called Wilcoxon-Mann-Whitney test)") 
					tTest = t.test(subset(json_data, treatment == '«hypothesis.formula.treatment1.name»' & object == '«object.name»')$«hypothesis.formula.depVariable.name.convert», subset(json_data, treatment == '«hypothesis.formula.treatment2.name»' & object == '«object.name»')$«hypothesis.formula.depVariable.name.convert», var.equal = fTest$p.value > alpha, paired = FALSE)
					print(tTest)
					if(tTest$p.value > alpha){
						print(paste("T-test: Null Hypothesis not rejected. P-value:", tTest$p.value, sep = " "))
					
					}else{
				    	print(paste("T-test: Null Hypothesis rejected. P-value:", tTest$p.value, sep = " "))
				    	result_«hypothesis.name»_«object.name»_tTest = TRUE
					}
				}else{
					wTest = wilcox.test(«hypothesis.formula.depVariable.name.convert»~treatment, data=subset(json_data, (treatment == '«hypothesis.formula.treatment1.name»' | treatment == '«hypothesis.formula.treatment2.name»') & object == '«object.name»')) 
					print(wTest)
					if(wTest$p.value > alpha){
						print(paste("Wilcoxon-Mann-Whitney test: Null Hypothesis not rejected. P-value:", wTest$p.value, sep = " "))
						result_«hypothesis.name»_«object.name»_wTest = FALSE
					}else{
						print(paste("Wilcoxon-Mann-Whitney test: Null Hypothesis rejected. P-value:", wTest$p.value, sep = " "))
						result_«hypothesis.name»_«object.name»_wTest = TRUE
					}
				}				
				'''
	def String generateBoxplot(ResearchHypothesis hypothesis, ExperimentalObject  object)
		'''
			DF=subset(json_data,(treatment == '«hypothesis.formula.treatment1.name»' | treatment == '«hypothesis.formula.treatment2.name»') & object == '«object.name»')
			DF$treatmentDescription = ordered(DF$treatmentDescription, levels = levels(DF$treatmentDescription)[order(as.numeric(by(DF$«hypothesis.formula.depVariable.name.convert», DF$treatmentDescription, mean)))])
			boxplot_«hypothesis.name»_«object.name» = ggplot(DF, aes(x =treatmentDescription , y = «hypothesis.formula.depVariable.name.convert»)) +
				geom_boxplot(fill = "#4271AE", colour = "#1F3552",alpha = 0.7,outlier.colour = "#1F3552", outlier.shape = 20)+
				theme_bw() +    
				scale_x_discrete(name = "«hypothesis.formula.treatment1.factor.description»")+
				ggtitle("«hypothesis.formula.depVariable.description» by «hypothesis.formula.treatment1.factor.description» for «object.description»") + 
				ylab("«hypothesis.formula.depVariable.description» «IF hypothesis.formula.depVariable.unit!==null»(«hypothesis.formula.depVariable.unit»)«ENDIF»")			   
			boxplot_«hypothesis.name»_«object.name»
		'''
	
	def String generateTreatmentsData(ResearchHypothesis hypothesis, ExperimentalObject  object)
		'''
			«FOR treatment:hypothesis.getTreatments»
				\textbf{«hypothesis.formula.depVariable.description» for «treatment.description»}
				<<«hypothesis.name»_«treatment.name»_«object.name», include = TRUE, echo = FALSE, warning = FALSE , message = FALSE >>=
				«hypothesis.formula.depVariable.name.convert»_«treatment.name»_«object.name» = subset(json_data, treatment == '«treatment.name»' & object == '«object.name»' & !is.na(«hypothesis.formula.depVariable.name.convert»))$« hypothesis.formula.depVariable.name.convert»
				print(paste("Sample size: ", length(«hypothesis.formula.depVariable.name.convert»_« treatment.name»_«object.name»)))					
				summary(subset(json_data, treatment == '«treatment.name»' & object == '«object.name»')$« hypothesis.formula.depVariable.name.convert»)
				
				if(length(«hypothesis.formula.depVariable.name.convert»_« treatment.name»_«object.name») == expectedRuns){		
					reproducer::boxplotAndDensityCurveOnHistogram(subset(json_data, treatment == '«treatment.name»' & object == '«object.name»'), "«hypothesis.formula.depVariable.name.convert»", min(subset(json_data, treatment == '«treatment.name»'& object == '«object.name»')$«hypothesis.formula.depVariable.name.convert»), max(subset(json_data, treatment == '«treatment.name»' & object == '«object.name»')$«hypothesis.formula.depVariable.name.convert»))

					shap_«treatment.name»_«object.name» = shapiro.test(subset(json_data, treatment == '«treatment.name»' & object == '«object.name»')$«hypothesis.formula.depVariable.name.convert»)
					print(shap_«treatment.name»_«object.name»)
					if(shap_«treatment.name»_«object.name»$p.value > alpha){
						print(paste("Shapiro test: Null Hypothesis (normality) not rejected. P-value:",shap_«treatment.name»_«object.name»$p.value, sep = " "))
					}else{
						print(paste("Shapiro test: Null Hypothesis (normality) rejected. P-value:",shap_«treatment.name»_«object.name»$p.value, sep = " "))
					}
				}
				@
			«ENDFOR»		
		'''
	
	def String generateTitle(Experiment experiment)
		'''
			\title{«experiment.description»}
		'''		
	
	def String generateAuthor(Experiment experiment)
		'''
			\author{«FOR author:experiment.authors»«author.fullName»«IF !author.name.equals(experiment.authors.last.name)», «ENDIF»«ENDFOR»}
		'''
	
	def String generateAbstract(Experiment experiment)
		'''
		
		«IF experiment.abstract?.class?.equals(SimpleAbstractImpl)»
			\abstract{«(experiment.abstract as SimpleAbstractImpl).description»}
		«ELSEIF experiment.abstract?.class?.equals(StructuredAbstractImpl)»
			«val abstract=(experiment.abstract as StructuredAbstractImpl)»
			\begin{abstract}
			«IF !abstract.context.isNullOrEmpty»
			\textbf{Context:} «abstract.context»
			«ENDIF»
			 
			«IF !abstract.objective.isNullOrEmpty»
			\textbf{Objective:} «abstract.objective»
			«ENDIF»
			 
			«IF !abstract.method.isNullOrEmpty»
			\textbf{Method:} «abstract.method»
			«ENDIF»
			 
			«IF !abstract.results.isNullOrEmpty»
			\textbf{Results:} «abstract.results»
			«ENDIF»
			 
			«IF !abstract.conclusion.isNullOrEmpty»
			\textbf{Conclusion:} «abstract.conclusion»
			«ENDIF»
			\end{abstract}
			 
		«ENDIF»
		
		'''		
	
	
	def String generateKeywords(Experiment experiment)
		'''
		«IF !experiment.keywords.isNullOrEmpty»
			%\keywords{«FOR keyword:experiment.keywords»«keyword.description»«IF !keyword.equals(experiment.keywords.last)»,«ENDIF»«ENDFOR»}
		«ENDIF»
		
		'''
	def String generateGoals(Experiment experiment)
		'''
		«IF !experiment.goals.isNullOrEmpty»
		\section{Goals}
		\begin{itemize}
		«FOR goal:experiment.goals»
			«IF goal.class.equals(SimpleGoalImpl)»
				\item{«(goal as SimpleGoal).name»: «(goal as SimpleGoal).description»}
			«ELSEIF goal.class.equals(StructuredGoalImpl)»
				«val structuredGoal=(goal as StructuredGoalImpl)»
				\item{«structuredGoal.name»: 
				«IF !structuredGoal.object.isNullOrEmpty»
					\textbf{Object:} «structuredGoal.object». 
				«ENDIF»
				«IF !structuredGoal.technique.isNullOrEmpty»
					\textbf{Technique:} «structuredGoal.technique». 
				«ENDIF»				
				«IF !structuredGoal.quality.isNullOrEmpty»
					\textbf{Quality:} «structuredGoal.quality». 
				«ENDIF»				
				«IF !structuredGoal.ptView.isNullOrEmpty»
					\textbf{Point of View:} «structuredGoal.ptView». 
				«ENDIF»				
				«IF !structuredGoal.contextOf.isNullOrEmpty»
					\textbf{Context Of:} «structuredGoal.contextOf». 
				«ENDIF»
				}

			«ENDIF»
		«ENDFOR»
		\end{itemize}
		«ENDIF»
		'''
	def String generateQuestions(Experiment experiment)
		'''
		«IF !experiment.researchQuestions.isNullOrEmpty»
		\section{Research Questions}
		\begin{itemize}
		
		«FOR question:experiment.researchQuestions»
		\item{«question.description» «IF question.goal!==null». Related to «question.goal.name»«ENDIF»}
		«ENDFOR»
		
		\end{itemize}
		«ENDIF»			
		'''
	
	def String generateOverview(Experiment experiment)
	'''
		
		«FOR variable:(experiment.researchHypotheses as List<ResearchHypothesis>).map[formula.depVariable].removeDuplicates»
			<<overview_«variable.name.convert», include=TRUE, echo=FALSE, warning=FALSE , message=FALSE >>=
			DF<-data_summary(subset(json_data,«FOR object:experiment.objectsInUse BEFORE "(" SEPARATOR "|"»object=='«object.name»'«ENDFOR») & !is.na(«variable.name.convert»)), varname="«variable.name.convert»", groupnames=c("treatmentDescription", "objectLabel", "objectOrder"))
			«generatePlotOverview(experiment, variable)»
			@
		«ENDFOR»			
	'''
	
	protected def CharSequence generatePlotOverview(Experiment experiment, DependentVariable variable)
		'''«IF experiment.objectsScaleType.equals(ScaleType.NOMINAL)»
			DF$objectLabel <- factor(DF$objectLabel, levels=c(«FOR object:experiment.experimentalObjects SEPARATOR ","»"«object.description»"«ENDFOR»))
		«ENDIF»
		
		ggplot(DF, aes(x=objectLabel, y=«variable.name.convert», group=treatmentDescription, color=treatmentDescription)) + 
		    geom_errorbar(aes(ymin=«variable.name.convert»-sd, ymax=«variable.name.convert»+sd), width=.1, linetype=3) +
		    geom_line() + geom_point()+
		   scale_color_brewer(palette="Paired") +
		   theme_bw() +
		  «IF experiment.objectsScaleType.equals(ScaleType.NOMINAL)»
		  	scale_x_discrete(name = "«experiment.objectsDescription»")+
		  «ENDIF»
		  «IF experiment.objectsScaleType.equals(ScaleType.ABSOLUTE)»
		  	scale_x_continuous(name = "«experiment.objectsDescription»", breaks_continuous(data=DF$objectLabel,steps=10))+
		  «ENDIF»
		  «IF experiment.objectsScaleType.equals(ScaleType.LOGARITHMIC)»
		  	scale_x_log10(name = "«experiment.objectsDescription»(log scale)", breaks_log(data=DF$objectLabel,steps=10))+
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
		  ggtitle("«variable.description» Overview") + 
		  theme(legend.title = element_blank())	
		'''
	
	
	def String generateOverview(Experiment experiment, Treatment treatment)
	'''
		<<«treatment.name», include=TRUE, echo=FALSE, warning=FALSE , message=FALSE >>=
		«FOR variable:(experiment.researchHypotheses as List<ResearchHypothesis>).map[formula.depVariable].removeDuplicates»
			DF=subset(json_data,«FOR object:treatment.experimentalObjects BEFORE "(" SEPARATOR "|" AFTER ")"»object=='«object.name»'«ENDFOR» & treatment=='«treatment.name»')
			DF$objectLabel = ordered(DF$objectLabel, levels=levels(DF$objectLabel)[order(as.numeric(by(DF$«variable.name.convert», DF$objectLabel, mean)))])   
			boxplot_«treatment.name»_«variable.name.convert» = ggplot(DF, aes(x =objectLabel , y = «variable.name.convert»)) +
				geom_boxplot(fill = "#4271AE", colour = "#1F3552",alpha = 0.7,outlier.colour = "#1F3552", outlier.shape = 20)+
				theme_bw() +    
				scale_x_discrete(name = "Experimental Object")+
				ggtitle("«variable.description» by «treatment.factor.description» for «treatment.description»") + 
				ylab("«variable.description» «IF variable.unit!==null»(«variable.unit»)«ENDIF»")   
				boxplot_«treatment.name»_«variable.name.convert»				
		«ENDFOR»
		@	
	'''
	
		
	def String generateObjectOverview(Experiment experiment,ExperimentalObject object)
	'''
		<<«object.name», include=TRUE, echo=FALSE, warning=FALSE , message=FALSE >>=
		«FOR variable:(experiment.researchHypotheses as List<ResearchHypothesis>).map[formula.depVariable].removeDuplicates»
			DF=subset(json_data,(«FOR treatment:experiment.treatmentsInUse SEPARATOR "|"»treatment=='«treatment.name»'«ENDFOR»)& object=='«object.name»')
			DF$treatmentDescription = ordered(DF$treatmentDescription, levels=levels(DF$treatmentDescription)[order(as.numeric(by(DF$«variable.name.convert», DF$treatmentDescription, mean)))])   
			boxplot_«object.name»_«variable.name.convert» = ggplot(DF, aes(x =treatmentDescription , y = «variable.name.convert»)) +
				geom_boxplot(fill = "#4271AE", colour = "#1F3552",alpha = 0.7,outlier.colour = "#1F3552", outlier.shape = 20)+
				theme_bw() +    
				scale_x_discrete(name = "«experiment.treatmentsInUse.head.factor.description»")+
				ggtitle("«variable.description» by «experiment.treatmentsInUse.head.factor.description» for «object.description»") + 
				ylab("«variable.description» «IF variable.unit!==null»(«variable.unit»)«ENDIF»")   
				boxplot_«object.name»_«variable.name.convert»
				
		«ENDFOR»		
		
		
		
		@	
	'''
	
			
	
	
	
	
	def convert(String depVariable) {
		switch(depVariable){
			case "cpuConsumption":"cpu"
			case "memoryConsumption":"memory"
			default: depVariable
		}
	}

}
