package br.unb.autoexp.tests.dohko

import com.beust.jcommander.IStringConverter
import java.io.IOException
import org.excalibur.core.execution.domain.ApplicationDescriptor

class ApplicationDescriptorConverter implements IStringConverter<ApplicationDescriptor>
{




    val YAML_OBJECT_MAPPER = new JsonYamlObjectMapper();

    override ApplicationDescriptor convert(String input)
    {
        try 
        {  
        	
            YAML_OBJECT_MAPPER.readValue(input, typeof (ApplicationDescriptor))
        }
        catch (IOException e)
        {
            throw new IllegalArgumentException(e.getMessage(), e);
        } 
    }
}
