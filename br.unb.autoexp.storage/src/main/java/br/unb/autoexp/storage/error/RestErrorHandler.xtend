package br.unb.autoexp.storage.error

import java.util.List
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.MessageSource
import org.springframework.context.i18n.LocaleContextHolder
import org.springframework.http.HttpStatus
import org.springframework.validation.FieldError
import org.springframework.web.bind.MethodArgumentNotValidException
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.ResponseStatus

@ControllerAdvice
final class RestErrorHandler {
	@Autowired
	MessageSource messageSource;
 
	@ExceptionHandler(typeof (MethodArgumentNotValidException))
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ResponseBody
	def ValidationErrorDTO processValidationError(MethodArgumentNotValidException ex) {

		processFieldErrors(ex.bindingResult.fieldErrors)
	}

	def ValidationErrorDTO processFieldErrors(List<FieldError> fieldErrors) {
		val dto = new ValidationErrorDTO()
		fieldErrors.forEach [
			dto.addFieldError(field, resolveLocalizedErrorMessage)
		]
		dto
	}

	def String resolveLocalizedErrorMessage(FieldError fieldError) {

		if (messageSource.getMessage(fieldError, LocaleContextHolder.getLocale()).equals(
			fieldError.getDefaultMessage()))
			messageSource.getMessage(fieldError, LocaleContextHolder.getLocale())
		else
			fieldError.codes.head
	}
}
