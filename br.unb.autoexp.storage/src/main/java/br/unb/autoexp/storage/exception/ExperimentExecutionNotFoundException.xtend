package br.unb.autoexp.storage.exception

import java.lang.RuntimeException

class ExperimentExecutionNotFoundException extends RuntimeException {
	new (String id){
		super(String.format("No experiment execution entry found with id: <%s>", id)) 
	} 
}