package br.unb.autoexp.rBaseApi.dto

import org.eclipse.xtend.lib.annotations.Accessors

@Accessors
class ResultDTO {
	String message
	boolean error
	new (){
		
	}
	new (String message, boolean error){
		this.message=message
		this.error=error
	}
}