package br.unb.autoexp.storage.exception

import java.lang.RuntimeException

class ExperimentDesignNotFoundException extends RuntimeException {
	new (String id){
		super(String.format("No experiment design entry found with id: <%s>", id)) 
	} 
}