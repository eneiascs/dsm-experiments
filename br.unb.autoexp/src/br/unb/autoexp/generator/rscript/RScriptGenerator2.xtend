package br.unb.autoexp.generator.rscript

import br.unb.autoexp.autoExp.Experiment
import br.unb.autoexp.autoExp.ExperimentalObject
import br.unb.autoexp.autoExp.ResearchHypothesis
import br.unb.autoexp.autoExp.ResearchHypothesisFormula
import br.unb.autoexp.autoExp.SimpleGoal
import br.unb.autoexp.autoExp.Treatment
import br.unb.autoexp.autoExp.impl.SimpleAbstractImpl
import br.unb.autoexp.autoExp.impl.SimpleGoalImpl
import br.unb.autoexp.autoExp.impl.StructuredAbstractImpl
import br.unb.autoexp.autoExp.impl.StructuredGoalImpl
import br.unb.autoexp.generator.ExperimentalDesignGenerator
import java.util.ArrayList
import java.util.List
import javax.inject.Inject
import br.unb.autoexp.autoExp.DependentVariable
import br.unb.autoexp.autoExp.impl.BuiltinDependentVariableImpl
import br.unb.autoexp.autoExp.CustomDependentVariable
import br.unb.autoexp.autoExp.impl.CustomDependentVariableImpl
import br.unb.autoexp.autoexp.BuiltinDependentVariable

class RScriptGenerator2 {
@Inject extension ExperimentalDesignGenerator 


def compileRScript(Experiment experiment) {
	'''
	\begin{document}
	�experiment.generateTitle�
	�experiment.generateAuthor�
	\maketitle
	�experiment.generateAbstract�
	�experiment.generateKeywords�
	\section{Goals}
	�experiment.generateGoals�
	\section{Research Questions}
	�experiment.generateQuestions�
	\section{Research Hypotheses}
	\subsection{Overview}
	�experiment.generateOverview�
	�FOR hypothesis:experiment.researchHypotheses�
		\subsection{�hypothesis.name�: �hypothesis.description�}
		�hypothesis.generate�
	�ENDFOR�
	�generateSessionInformation�
	\end{document}
	'''
}
	
	
	
	
	
	def String generateSessionInformation() {
		'''
			\newpage
			\appendix
			\section{Session Information}
			<<echo=TRUE>>=
			sessionInfo()
			@
		'''
	}
	
def String generate(ResearchHypothesis hypothesis)
	'''
	Research hypothesis �hypothesis.name�
			 
	<<�hypothesis.name�, include=TRUE,echo=FALSE >>=
		 
	�hypothesis.generateBoxplot�
	 
	�hypothesis.generateParametricTest� 
	 
	�hypothesis.generateNonParametricTest� 
	@
	'''
	
def String generateNonParametricTest(ResearchHypothesis hypothesis)
	'''
	wilcox.test(�hypothesis.formula.depVariable.name.convert�
		~treatment,data=json_data[json_data$treatment=='
			�hypothesis.formula.treatment1.name�'
			|json_data$treatment=='�hypothesis.formula.treatment2.name�',]) 
	'''

	
	def String generateParametricTest(ResearchHypothesis hypothesis)
		'''
			if(shap_�hypothesis.formula.treatment1.name�$p.value>alpha
					&shap_�hypothesis.formula.treatment2.name�$p.value>alpha){
			  
				fTest<-var.test(�hypothesis.formula.depVariable.name.convert�_�hypothesis.formula.treatment1.name�,
					�hypothesis.formula.depVariable.name.convert�_�hypothesis.formula.treatment2.name�)
				print(fTest)
					  
				print(paste("Homogeneity of variances: ",fTest$p.value>alpha, ". P-value: ", fTest$p.value, sep = ""))
					  
				tTest<-t.test(�hypothesis.formula.depVariable.name.convert�_�hypothesis.formula.treatment1.name�,
					�hypothesis.formula.depVariable.name.convert�_�hypothesis.formula.treatment2.name�, 
						var.equal=fTest$p.value>alpha, paired=FALSE)
				print(tTest)
				
				if(tTest$p.value>alpha){
					print(paste("T-test: Null Hypothesis not rejected. P-value:",tTest$p.value, sep = " "))
				}else{
				    print(paste("T-test: Null Hypothesis rejected. P-value:",tTest$p.value, sep = " "))
				}
			}
		'''
	def String generateBoxplot(ResearchHypothesis hypothesis)
		'''
			boxplot_�hypothesis.name� <- ggplot(json_data[json_data$treatment=='�hypothesis.formula.treatment1.name�'
				|json_data$treatment=='�hypothesis.formula.treatment2.name�',], 
				aes(x =treatment , y = �hypothesis.formula.depVariable.name.convert�)) +
				geom_boxplot(fill = "#4271AE", colour = "#1F3552",alpha = 0.7,outlier.colour = "#1F3552", 
				outlier.shape = 20)+
				theme_bw() +    
				scale_x_discrete(name = "�hypothesis.formula.treatment1.factor.description�",
				labels=c("�hypothesis.formula.treatment1.description�","�hypothesis.formula.treatment2.description�"))+
				ggtitle("�hypothesis.formula.depVariable.description� by �hypothesis.formula.treatment1.factor.description�")
							   
			boxplot_�hypothesis.name�
		'''
	
	def String generateTreatmentsData(ResearchHypothesis hypothesis)
		'''
			�FOR treatment:hypothesis.formula.hyphotesisTreatments�
				\subsubsection{�hypothesis.formula.depVariable.description� for �treatment.description�}
				<<�hypothesis.name�_�treatment.name�, include=TRUE,echo=FALSE, warning=FALSE, message=FALSE, results='markup',  cache=FALSE, tidy=TRUE, tidy.opts=list(blank=FALSE, width.cutoff=50), out.height="0.4\\textheight">>=
				print(paste("Sample size: ",length(�hypothesis.formula.depVariable.name.convert�_�treatment.name�)))					
				summary(�hypothesis.formula.depVariable.name.convert�_�treatment.name�)
				reproducer::boxplotAndDensityCurveOnHistogram(subset(json_data,treatment=='�treatment.name�'), "�hypothesis.formula.depVariable.name.convert�", min(subset(json_data,treatment=='�treatment.name�')$�hypothesis.formula.depVariable.name.convert�), max(subset(json_data,treatment=='�treatment.name�')$�hypothesis.formula.depVariable.name.convert�))

				shap_�treatment.name�<-shapiro.test(�hypothesis.formula.depVariable.name.convert�_�treatment.name�)
				print(shap_�treatment.name�)
				if(shap_�treatment.name�$p.value>alpha){
					print(paste("Shapiro test: Null Hypothesis (normality) not rejected. P-value:",shap_�treatment.name�$p.value, sep = " "))
				}else{
					print(paste("Shapiro test: Null Hypothesis (normality) rejected. P-value:",shap_�treatment.name�$p.value, sep = " "))
				}
				@
			�ENDFOR�		
		'''
	
	def String generateTitle(Experiment experiment)
		'''
			\title{�experiment.description�}
		'''		
	
	def String generateAuthor(Experiment experiment)
		'''
			\author{�FOR author:experiment.authors��author.fullName�
			�IF !author.name.equals(experiment.authors.last.name)�, �ENDIF��ENDFOR�}
		'''
	
	def String generateAbstract(Experiment experiment)
		'''
		
		�IF experiment.abstract?.class?.equals(SimpleAbstractImpl)�
			\abstract{�(experiment.abstract as SimpleAbstractImpl).description�}
		�ELSEIF experiment.abstract?.class?.equals(StructuredAbstractImpl)�
			�val abstract=(experiment.abstract as StructuredAbstractImpl)�
			\begin{abstract}
			�IF !abstract.context.isNullOrEmpty�
			\textbf{Context:} �abstract.context�
			�ENDIF�
			 
			�IF !abstract.objective.isNullOrEmpty�
			\textbf{Objective:} �abstract.objective�
			�ENDIF�
			 
			�IF !abstract.method.isNullOrEmpty�
			\textbf{Method:} �abstract.method�
			�ENDIF�
			 
			�IF !abstract.results.isNullOrEmpty�
			\textbf{Results:} �abstract.results�
			�ENDIF�
			 
			�IF !abstract.conclusion.isNullOrEmpty�
			\textbf{Conclusion:} �abstract.conclusion�
			�ENDIF�
			\end{abstract}
			 
		�ENDIF�
		
		'''		
	
	
	def String generateKeywords(Experiment experiment)
		'''
		�IF !experiment.keywords.isNullOrEmpty�
			%\keywords{�FOR keyword:experiment.keywords��keyword.description��IF !keyword.equals(experiment.keywords.last)�,�ENDIF��ENDFOR�}
		�ENDIF�
		
		'''
	def String generateGoals(Experiment experiment)
		'''
		�IF !experiment.goals.isNullOrEmpty�
		\begin{itemize}
		�FOR goal:experiment.goals�
			�IF goal.class.equals(SimpleGoalImpl)�
				\item{�(goal as SimpleGoal).name�: �(goal as SimpleGoal).description�}
			�ELSEIF goal.class.equals(StructuredGoalImpl)�
				�val structuredGoal=(goal as StructuredGoalImpl)�
				\item{�structuredGoal.name�: 
				�IF !structuredGoal.object.isNullOrEmpty�
					\textbf{Object:} �structuredGoal.object�. 
				�ENDIF�
				�IF !structuredGoal.technique.isNullOrEmpty�
					\textbf{Technique:} �structuredGoal.technique�. 
				�ENDIF�				
				�IF !structuredGoal.quality.isNullOrEmpty�
					\textbf{Quality:} �structuredGoal.quality�. 
				�ENDIF�				
				�IF !structuredGoal.ptView.isNullOrEmpty�
					\textbf{Point of View:} �structuredGoal.ptView�. 
				�ENDIF�				
				�IF !structuredGoal.contextOf.isNullOrEmpty�
					\textbf{Context Of:} �structuredGoal.contextOf�. 
				�ENDIF�
				}

			�ENDIF�
		�ENDFOR�
		\end{itemize}
		�ENDIF�
		'''
	def String generateQuestions(Experiment experiment)
		'''
		\begin{itemize}
		
		�FOR question:experiment.researchQuestions�
		\item{�question.description� �IF question.goal!==null�. Related to �question.goal.name��ENDIF�}
		�ENDFOR�
		
		\end{itemize}
					
		'''
	def String generateOverview(Experiment experiment)
		'''
		<<overview, include=TRUE, echo=FALSE, warning=FALSE, message=FALSE, results='markup', cache=FALSE, tidy=TRUE, tidy.opts=list(blank=FALSE, width.cutoff=50), out.height="0.4\\textheight">>=

		�FOR variable:experiment.experimentalDesign.dependentVariables�
			�FOR treatment:experiment.treatments�
				�variable.name.convert�_�treatment.name�<-subset(json_data,treatment=='�treatment.name�')$�variable.name.convert�
			�ENDFOR�
			boxplot_�variable.name.convert� <- ggplot(json_data, aes(x =treatment , y = �variable.name.convert�)) +
				geom_boxplot(fill = "#4271AE", colour = "#1F3552",alpha = 0.7,outlier.colour = "#1F3552", outlier.shape = 20)+
				theme_bw() +    
				scale_x_discrete(name = "�experiment.treatments.head.factor.description�",labels=c(�FOR treatment:experiment.treatments�'�treatment.description�'�IF !treatment.name.equals(experiment.treatments.last.name)�,�ENDIF��ENDFOR�))+
				ggtitle("�variable.description� by �experiment.treatments.head.factor.description�")
				   
				boxplot_�variable.name.convert�
				
		�ENDFOR�
		@					
		'''
	
	
		
	def String generateObjectOverview(Experiment experiment,ExperimentalObject object)
	'''
		<<�object.name��, include=TRUE,echo=FALSE, warning=FALSE, message=FALSE, results='markup',  cache=FALSE, tidy=TRUE, tidy.opts=list(blank=FALSE, width.cutoff=50), out.height="0.4\\textheight">>=
		�FOR variable:experiment.experimentalDesign.dependentVariables�
			boxplot_�object.name�_�variable.name.convert� <- ggplot(json_data[json_data$object=='�object.name�',], aes(x =treatment , y = �variable.name.convert�)) +
				geom_boxplot(fill = "#4271AE", colour = "#1F3552",alpha = 0.7,outlier.colour = "#1F3552", outlier.shape = 20)+
				theme_bw() +    
				scale_x_discrete(name = "�experiment.treatments.head.factor.description�",labels=c(�FOR treatment:experiment.treatments�'�treatment.description�'�IF !treatment.name.equals(experiment.treatments.last.name)�,�ENDIF��ENDFOR�))+
				ggtitle("�variable.description� by �experiment.treatments.head.factor.description� for �object.name�")
				   
				boxplot_�object.name�_�variable.name.convert�
				
		�ENDFOR�		
		
		
		
		@	
	'''
	
			
	
	def List<Treatment> getHyphotesisTreatments(ResearchHypothesisFormula formula){
		val treatments=new ArrayList<Treatment>()
		treatments.add(formula.treatment1)
		treatments.add(formula.treatment2)
		
		treatments
	}
	
	
	def convert(String depVariable) {
		switch(depVariable){
			case "cpuConsumption":"cpu"
			case "memoryConsumption":"memory"
			default: depVariable
		}
	}

}