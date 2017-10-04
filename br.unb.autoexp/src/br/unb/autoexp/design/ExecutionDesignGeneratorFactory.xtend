package br.unb.autoexp.design

import br.unb.autoexp.autoExp.DesignType
import java.util.HashMap
import java.util.Map

class ExecutionDesignGeneratorFactory implements IDesignGeneratorFactory<ExecutionDesignGenerator>{
	static Map<DesignType,ExecutionDesignGenerator> generators=new HashMap<DesignType,ExecutionDesignGenerator>
	def static void register(DesignType designType,ExecutionDesignGenerator generator){
		generators.put(designType,generator)
	}
	def static void unregister(DesignType designType){
		generators.remove(designType)
	}
	def static ExecutionDesignGenerator getGenerator(DesignType designType){
		generators.get(designType)
	}
	
}