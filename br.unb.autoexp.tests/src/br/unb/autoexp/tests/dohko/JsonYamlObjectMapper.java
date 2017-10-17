package br.unb.autoexp.tests.dohko;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.dataformat.yaml.YAMLFactory;
import com.fasterxml.jackson.module.jaxb.JaxbAnnotationIntrospector;
import com.fasterxml.jackson.module.jaxb.JaxbAnnotationModule;

public class JsonYamlObjectMapper extends ObjectMapper {
	/**
	 * Serial code version <code></code> for serialization.
	 */
	private static final long serialVersionUID = 2452118007833072309L;

	public JsonYamlObjectMapper() {
		super(new YAMLFactory());

		configure(SerializationFeature.INDENT_OUTPUT, true);
		enable(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY);

		registerModule(new JaxbAnnotationModule());
		setAnnotationIntrospector(new JaxbAnnotationIntrospector(getTypeFactory()));
	}

}