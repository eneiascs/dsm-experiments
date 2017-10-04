package br.unb.autoexp.design

import br.unb.autoexp.autoExp.DesignType
import java.util.HashMap
import java.util.Map

class AnalysisDesignGeneratorFactory implements IDesignGeneratorFactory<AnalysisDesignGenerator> {
	
	static Map<DesignType,AnalysisDesignGenerator> generators=new HashMap<DesignType,AnalysisDesignGenerator>
	def static void register(DesignType designType,AnalysisDesignGenerator generator){
		generators.put(designType,generator)
	}
	def static void unregister(DesignType designType){
		generators.remove(designType)
	}
	def static AnalysisDesignGenerator getGenerator(DesignType designType){
		generators.get(designType)
	}
	

}