package br.unb.autoexp.generator.rscript

import br.unb.autoexp.autoExp.Experiment
import br.unb.autoexp.autoExp.ExperimentalObject
import br.unb.autoexp.autoExp.ResearchHypothesis
import br.unb.autoexp.autoExp.SimpleGoal
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
		 
		alpha=«IF experiment.analysis?.significanceLevel!==null»«experiment.analysis.significanceLevel»«ELSE»0.05«ENDIF»
		 
		json_data = fromJSON("data.json")
		
		
		
		@
		\section{Description}
		«experiment.description»
		
		«experiment.generateGoals»
		
		«experiment.generateQuestions»
		
		\section{Research Hypotheses}

«««		«experiment.generateOverview»
«««		 
    	«FOR object:experiment.objectsInUse»
			\subsection{Overview for «object.description»}
			«experiment.generateObjectOverview(object)»	
		«ENDFOR»
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
	
	def String generate(ResearchHypothesis hypothesis)
		'''
«««		Research hypothesis «hypothesis.name»: «hypothesis.formula.depVariable.description» for «hypothesis.formula.treatment1.description» is «IF hypothesis.formula.operator.typeName.equals("=")»equals«ENDIF»«IF hypothesis.formula.operator.typeName.equals("<")»lower«ENDIF»«IF hypothesis.formula.operator.typeName.equals(">")»greater«ENDIF» than «hypothesis.formula.depVariable.description» for «hypothesis.formula.treatment2.description». «IF hypothesis.goal!==null» Related to «hypothesis.goal.name».«ENDIF» 
							
		 «hypothesis.initializeResults»	
		«FOR obj:hypothesis.objects»
		
		\subsubsection{«hypothesis.name».«hypothesis.objects.indexOf(obj)+1»: Object «obj.description»}
		«hypothesis.generate(obj)»
		
		«ENDFOR»
		
		 
		«hypothesis.generateSummary»
		
		
	
				
		'''
	
	def String generateResultsFile(Experiment experiment)
		'''
		<<echo=TRUE, echo=FALSE, warning=FALSE , message=FALSE >>=
		experimentResults=list(«FOR hypothesis:experiment.researchHypotheses»«hypothesis.name»_result«IF !hypothesis.name.equals(experiment.researchHypotheses.last.name)»,«ENDIF»«ENDFOR»)
		write(toJSON(experimentResults,pretty = TRUE, auto_unbox = TRUE), "experimentResults.json")

		@
		'''
	
	def String generateSummary(ResearchHypothesis hypothesis)
		'''
		<<echo=FALSE, echo=FALSE, warning=FALSE , message=FALSE >>=
		«hypothesis.name»_result=list(hypothesis="«hypothesis.name»",results=c(result_«hypothesis.name»_less/result_«hypothesis.name»_objects,result_«hypothesis.name»_greater/result_«hypothesis.name»_objects,result_«hypothesis.name»_«hypothesis.formula.treatment1.name»/result_«hypothesis.name»_objects,result_«hypothesis.name»_«hypothesis.formula.treatment2.name»/result_«hypothesis.name»_objects,result_«hypothesis.name»_none/result_«hypothesis.name»_objects,result_«hypothesis.name»_inconclusive/result_«hypothesis.name»_objects),objectResults =list(«FOR object:hypothesis.objects» list(object='«object.name»',result=result_object_«hypothesis.name»_«object.name»)«IF !object.name.equals(hypothesis.objects.last.name)»,«ENDIF»«ENDFOR» ))	
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
		\textbf{«hypothesis.formula.treatment1.description» \textless{} «hypothesis.formula.treatment2.description»:}& \Sexpr{100*result_«hypothesis.name»_less/result_«hypothesis.name»_objects}\% \\
		\textbf{«hypothesis.formula.treatment1.description» \textgreater{} «hypothesis.formula.treatment2.description»:}& \Sexpr{100*result_«hypothesis.name»_greater/result_«hypothesis.name»_objects}\%\\
		\textbf{«hypothesis.formula.treatment1.description»:}& \Sexpr{100*result_«hypothesis.name»_«hypothesis.formula.treatment1.name»/result_«hypothesis.name»_objects}\%\\
		\textbf{«hypothesis.formula.treatment2.description»:}& \Sexpr{100*result_«hypothesis.name»_«hypothesis.formula.treatment2.name»/result_«hypothesis.name»_objects}\%\\
		\textbf{None:}& \Sexpr{100*result_«hypothesis.name»_none/result_«hypothesis.name»_objects}\%\\
		\textbf{Inconclusive:}& \Sexpr{100*result_«hypothesis.name»_inconclusive/result_«hypothesis.name»_objects}\%
				
		
		\end{tabular}
		\end{table}
		
		
		
		'''
	
	def String generate(ResearchHypothesis hypothesis, ExperimentalObject object){
		'''
		 
		  «hypothesis.generateTreatmentsData(object)»
		   
		  \textbf{Comparison}
		   
		  <<«hypothesis.name»_«object.name», include=TRUE, echo=FALSE, warning=FALSE, message=FALSE >>=
		  «hypothesis.generateBoxplot(object)»
		  «hypothesis.generateParametricTest(object)»
		  «hypothesis.generateNonParametricTest(object)»
		  «hypothesis.generateComparison(object)»
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
		print(paste("Mean «hypothesis.formula.depVariable.description» for «hypothesis.formula.treatment1.description»: ",mean(subset(json_data,treatment=='«hypothesis.formula.treatment1.name»' & object=='«object.name»')$«hypothesis.formula.depVariable.name.convert»)))
		print(paste("Mean «hypothesis.formula.depVariable.description» for «hypothesis.formula.treatment2.description»: ",mean(subset(json_data,treatment=='«hypothesis.formula.treatment2.name»' & object=='«object.name»')$«hypothesis.formula.depVariable.name.convert»)))
		print(paste("Absolute difference: ",abs(mean(subset(json_data,treatment=='«hypothesis.formula.treatment1.name»' & object=='«object.name»')$«hypothesis.formula.depVariable.name.convert»)-mean(subset(json_data,treatment=='«hypothesis.formula.treatment2.name»' & object=='«object.name»')$«hypothesis.formula.depVariable.name.convert»))))
		if (result_«hypothesis.name»_«object.name»_tTest | result_«hypothesis.name»_«object.name»_wTest){
			if(mean(subset(json_data,treatment=='«hypothesis.formula.treatment1.name»' & object=='«object.name»')$«hypothesis.formula.depVariable.name.convert»)>mean(subset(json_data,treatment=='«hypothesis.formula.treatment2.name»' & object=='«object.name»')$«hypothesis.formula.depVariable.name.convert»)){
			  result_«hypothesis.name»_«object.name»="«hypothesis.formula.treatment1.description» \\textgreater{} «hypothesis.formula.treatment2.description»"
			  result_object_«hypothesis.name»_«object.name»=1
			  result_«hypothesis.name»_greater=result_«hypothesis.name»_greater+1
			}else {
			  result_«hypothesis.name»_«object.name»="«hypothesis.formula.treatment1.description» \\textless{} «hypothesis.formula.treatment2.description»"
			  result_object_«hypothesis.name»_«object.name»=0
			  result_«hypothesis.name»_less=result_«hypothesis.name»_less +1
			}	
			
		}else{
		  result_object_«hypothesis.name»_«object.name»=5
		  result_«hypothesis.name»_«object.name»="Inconclusive"
		  result_«hypothesis.name»_inconclusive=result_«hypothesis.name»_inconclusive+1
		}
		
		if(mean(subset(json_data,treatment=='«hypothesis.formula.treatment1.name»' & object=='«object.name»')$«hypothesis.formula.depVariable.name.convert»)>mean(subset(json_data,treatment=='«hypothesis.formula.treatment2.name»' & object=='«object.name»')$«hypothesis.formula.depVariable.name.convert»)){
		    cat(paste("«hypothesis.formula.depVariable.description» for «hypothesis.formula.treatment1.description» is ",100*(abs(mean(subset(json_data,treatment=='«hypothesis.formula.treatment2.name»' & object=='«object.name»')$«hypothesis.formula.depVariable.name.convert»)-mean(subset(json_data,treatment=='«hypothesis.formula.treatment1.name»' & object=='«object.name»')$«hypothesis.formula.depVariable.name.convert»))/mean(subset(json_data,treatment=='«hypothesis.formula.treatment2.name»' & object=='«object.name»')$«hypothesis.formula.depVariable.name.convert»)),"% greater than \n«hypothesis.formula.depVariable.description» for «hypothesis.formula.treatment2.description»"))
		
		}else{
		    cat(paste("«hypothesis.formula.depVariable.description» for «hypothesis.formula.treatment2.description» is ",100*(abs(mean(subset(json_data,treatment=='«hypothesis.formula.treatment2.name»' & object=='«object.name»')$«hypothesis.formula.depVariable.name.convert»)-mean(subset(json_data,treatment=='«hypothesis.formula.treatment1.name»' & object=='«object.name»')$«hypothesis.formula.depVariable.name.convert»))/mean(subset(json_data,treatment=='«hypothesis.formula.treatment1.name»' & object=='«object.name»')$«hypothesis.formula.depVariable.name.convert»)),"% greater than \n«hypothesis.formula.depVariable.description» for «hypothesis.formula.treatment1.description»"))
		
		}
		'''
	
	def String generateNonParametricTest(ResearchHypothesis hypothesis, ExperimentalObject  object)
		'''
			subset_«hypothesis.name»_«object.name»_«hypothesis.formula.treatment1.name»=subset(json_data,treatment=='«hypothesis.formula.treatment1.name»' & object=='«object.name»')
			subset_«hypothesis.name»_«object.name»_«hypothesis.formula.treatment2.name»=subset(json_data,treatment=='«hypothesis.formula.treatment2.name»' & object=='«object.name»')
			if (nrow(subset_«hypothesis.name»_«object.name»_«hypothesis.formula.treatment1.name») == 0 & nrow(subset_«hypothesis.name»_«object.name»_«hypothesis.formula.treatment2.name») == 0){
				result_object_«hypothesis.name»_«object.name»=4
				result_«hypothesis.name»_«object.name»="None"
				result_«hypothesis.name»_none = result_«hypothesis.name»_none +1
			}
			if (nrow(subset_«hypothesis.name»_«object.name»_«hypothesis.formula.treatment1.name») != 0 & nrow(subset_«hypothesis.name»_«object.name»_«hypothesis.formula.treatment2.name») == 0){
				result_object_«hypothesis.name»_«object.name»=2
				result_«hypothesis.name»_«object.name»="«hypothesis.formula.treatment1.description»"
				result_«hypothesis.name»_«hypothesis.formula.treatment1.name» = result_«hypothesis.name»_«hypothesis.formula.treatment1.name» +1			
			}
			if (nrow(subset_«hypothesis.name»_«object.name»_«hypothesis.formula.treatment1.name») == 0 & nrow(subset_«hypothesis.name»_«object.name»_«hypothesis.formula.treatment2.name») != 0){
				result_object_«hypothesis.name»_«object.name»=3
				result_«hypothesis.name»_«object.name»="«hypothesis.formula.treatment2.description»"
				result_«hypothesis.name»_«hypothesis.formula.treatment2.name» = result_«hypothesis.name»_«hypothesis.formula.treatment2.name» +1			
							
			}
			if (nrow(subset_«hypothesis.name»_«object.name»_«hypothesis.formula.treatment1.name») != 0 & nrow(subset_«hypothesis.name»_«object.name»_«hypothesis.formula.treatment2.name») != 0){
				result_«hypothesis.name»_«object.name»_wTest = FALSE			
				wTest=wilcox.test(«hypothesis.formula.depVariable.name.convert»~treatment,data=subset(json_data,(treatment=='«hypothesis.formula.treatment1.name»'|treatment=='«hypothesis.formula.treatment2.name»') & object=='«object.name»')) 
			 
				print(wTest)
			 
				if(wTest$p.value>alpha){
					print(paste("Wilcoxon-Mann-Whitney test: Null Hypothesis not rejected. P-value:",wTest$p.value, sep = " "))
					result_«hypothesis.name»_«object.name»_wTest = FALSE
				}else{
					print(paste("Wilcoxon-Mann-Whitney test: Null Hypothesis rejected. P-value:",wTest$p.value, sep = " "))
					result_«hypothesis.name»_«object.name»_wTest = TRUE
				}
			} 
		'''
	
	def String generateParametricTest(ResearchHypothesis hypothesis, ExperimentalObject  object)
		''' 
			result_«hypothesis.name»_«object.name»_tTest = FALSE
			if(shap_«hypothesis.formula.treatment1.name»_«object.name»$p.value>alpha&shap_«hypothesis.formula.treatment2.name»_«object.name»$p.value>alpha){
			  
				print("Fisher's F-test to verify the homoskedasticity (homogeneity of variances)")
				
				fTest=var.test(subset(json_data,treatment=='«hypothesis.formula.treatment1.name»' & object=='«object.name»')$«hypothesis.formula.depVariable.name.convert»,subset(json_data,treatment=='«hypothesis.formula.treatment2.name»' & object=='«object.name»')$«hypothesis.formula.depVariable.name.convert»)
				print(fTest)
					  
				print(paste("Homogeneity of variances: ",fTest$p.value>alpha, ". P-value: ", fTest$p.value, sep = ""))
					  
				print("Assuming that the two samples are taken from populations that follow a Gaussian distribution (if we cannot assume that, we must solve this problem using the non-parametric test called Wilcoxon-Mann-Whitney test)") 
				tTest=t.test(subset(json_data,treatment=='«hypothesis.formula.treatment1.name»' & object=='«object.name»')$«hypothesis.formula.depVariable.name.convert»,subset(json_data,treatment=='«hypothesis.formula.treatment2.name»' & object=='«object.name»')$«hypothesis.formula.depVariable.name.convert», var.equal=fTest$p.value>alpha, paired=FALSE)
				print(tTest)
				if(tTest$p.value>alpha){
					print(paste("T-test: Null Hypothesis not rejected. P-value:",tTest$p.value, sep = " "))
					
				}else{
				    print(paste("T-test: Null Hypothesis rejected. P-value:",tTest$p.value, sep = " "))
				    result_«hypothesis.name»_«object.name»_tTest = TRUE
				}
			}
		'''
	def String generateBoxplot(ResearchHypothesis hypothesis, ExperimentalObject  object)
		'''
			boxplot_«hypothesis.name»_«object.name» = ggplot(subset(json_data,(treatment=='«hypothesis.formula.treatment1.name»'|treatment=='«hypothesis.formula.treatment2.name»') & object=='«object.name»'), aes(x =treatment , y = «hypothesis.formula.depVariable.name.convert»)) +
				geom_boxplot(fill = "#4271AE", colour = "#1F3552",alpha = 0.7,outlier.colour = "#1F3552", outlier.shape = 20)+
				theme_bw() +    
				scale_x_discrete(name = "«hypothesis.formula.treatment1.factor.description»",labels=c(«FOR treatment:hypothesis.getTreatments»"«treatment.description»"«IF !treatment.name.equals(hypothesis.getTreatments.last.name)»,«ENDIF»«ENDFOR»))+
				ggtitle("«hypothesis.formula.depVariable.description» by «hypothesis.formula.treatment1.factor.description» for «object.description»") + 
				ylab("«hypothesis.formula.depVariable.description» «IF hypothesis.formula.depVariable.unit!==null»(«hypothesis.formula.depVariable.unit»)«ENDIF»")			   
			boxplot_«hypothesis.name»_«object.name»
		'''
	
	def String generateTreatmentsData(ResearchHypothesis hypothesis, ExperimentalObject  object)
		'''
			«FOR treatment:hypothesis.getTreatments»
				\textbf{«hypothesis.formula.depVariable.description» for «treatment.description»}
				<<«hypothesis.name»_«treatment.name»_«object.name», include=TRUE, echo=FALSE, warning=FALSE , message=FALSE >>=
				print(paste("Sample size: ",length(subset(json_data,treatment=='«treatment.name»' & object=='«object.name»')$«hypothesis.formula.depVariable.name.convert»)))					
				summary(subset(json_data,treatment=='«treatment.name»' & object=='«object.name»')$«hypothesis.formula.depVariable.name.convert»)
				reproducer::boxplotAndDensityCurveOnHistogram(subset(json_data,treatment=='«treatment.name»' & object=='«object.name»'), "«hypothesis.formula.depVariable.name.convert»", min(subset(json_data,treatment=='«treatment.name»'& object=='«object.name»')$«hypothesis.formula.depVariable.name.convert»), max(subset(json_data,treatment=='«treatment.name»'& object=='«object.name»')$«hypothesis.formula.depVariable.name.convert»))

				shap_«treatment.name»_«object.name»=shapiro.test(subset(json_data,treatment=='«treatment.name»' & object=='«object.name»')$«hypothesis.formula.depVariable.name.convert»)
				print(shap_«treatment.name»_«object.name»)
				if(shap_«treatment.name»_«object.name»$p.value>alpha){
					print(paste("Shapiro test: Null Hypothesis (normality) not rejected. P-value:",shap_«treatment.name»_«object.name»$p.value, sep = " "))
				}else{
					print(paste("Shapiro test: Null Hypothesis (normality) rejected. P-value:",shap_«treatment.name»_«object.name»$p.value, sep = " "))
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
	
	
	
		
	def String generateObjectOverview(Experiment experiment,ExperimentalObject object)
	'''
		<<«object.name», include=TRUE, echo=FALSE, warning=FALSE , message=FALSE >>=
		«FOR variable:(experiment.researchHypotheses as List<ResearchHypothesis>).map[formula.depVariable]»
			boxplot_«object.name»_«variable.name.convert» = ggplot(subset(json_data,(«FOR treatment:experiment.treatmentsInUse»treatment=='«treatment.name»' «IF !treatment.name.equals(experiment.treatmentsInUse.last.name)»|«ENDIF»«ENDFOR»)& object=='«object.name»'), aes(x =treatment , y = «variable.name.convert»)) +
				geom_boxplot(fill = "#4271AE", colour = "#1F3552",alpha = 0.7,outlier.colour = "#1F3552", outlier.shape = 20)+
				theme_bw() +    
				scale_x_discrete(name = "«experiment.treatmentsInUse.head.factor.description»",labels=c(«FOR treatment:experiment.treatmentsInUse»'«treatment.description»'«IF !treatment.name.equals(experiment.treatmentsInUse.last.name)»,«ENDIF»«ENDFOR»))+
				ggtitle("«variable.description» by «experiment.treatmentsInUse.head.factor.description» for «object.name»") + 
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
