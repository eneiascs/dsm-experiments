package br.unb.autoexp.converter

import java.math.BigDecimal
import org.eclipse.xtext.common.services.DefaultTerminalConverters
import org.eclipse.xtext.conversion.IValueConverter
import org.eclipse.xtext.conversion.ValueConverter
import org.eclipse.xtext.conversion.ValueConverterException
import org.eclipse.xtext.nodemodel.INode

class BigDecimalValueConverter extends DefaultTerminalConverters {
	@ValueConverter(rule="BigDecimalType")
	def IValueConverter<BigDecimal> BIG_DECIMAL() {
		new IValueConverter<BigDecimal>() {

			override toString(BigDecimal value) throws ValueConverterException {
				value.toString
			}

			override toValue(String string, INode node) throws ValueConverterException {
				
					
					new BigDecimal(string)

				
			}

		}
	}
}
