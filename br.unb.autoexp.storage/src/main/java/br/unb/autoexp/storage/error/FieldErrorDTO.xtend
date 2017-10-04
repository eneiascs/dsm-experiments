package br.unb.autoexp.storage.error

import org.eclipse.xtend.lib.annotations.Accessors

@Accessors
class FieldErrorDTO {
	
    val String field;

    val String message;

    new(String field, String message) {
        this.field = field;
        this.message = message;
    }
	
}