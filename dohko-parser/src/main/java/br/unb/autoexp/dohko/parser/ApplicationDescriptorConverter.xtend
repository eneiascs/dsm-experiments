package br.unb.autoexp.dohko.parser

import com.beust.jcommander.IStringConverter
import java.io.IOException
import org.excalibur.core.execution.domain.ApplicationDescriptor
import org.excalibur.jackson.databind.JsonYamlObjectMapper

class ApplicationDescriptorConverter implements IStringConverter<ApplicationDescriptor>
{

    val YAML_OBJECT_MAPPER = new JsonYamlObjectMapper();

    override ApplicationDescriptor convert(String input)
    {
        try 
        {  
            YAML_OBJECT_MAPPER.readValue(input, ApplicationDescriptor);
        }
        catch (IOException e)
        {
            throw new IllegalArgumentException(e.getMessage(), e);
        }
    }
}
