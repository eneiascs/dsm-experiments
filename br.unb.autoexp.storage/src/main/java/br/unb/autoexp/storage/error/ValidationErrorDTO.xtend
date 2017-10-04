package br.unb.autoexp.storage.error

import java.util.ArrayList
import java.util.Collections

class ValidationErrorDTO {
	val fieldErrors = new ArrayList()

  
 
    def addFieldError(String path, String message) {
        
        fieldErrors.add(new FieldErrorDTO(path, message))
    }

    def getFieldErrors() {
        Collections.unmodifiableList(fieldErrors)
    }
}