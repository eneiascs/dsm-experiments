package br.unb.autoexp.web.mapping;

import java.util.HashMap;
import java.util.Map;

import br.unb.autoexp.web.mapping.component.MappingComponent;

public class MappingServiceFactory {
	private static MappingService service;

	public static MappingService get(String filePath) {

		Map<String, Object> properties = new HashMap<String, Object>();
		properties.put(MappingService.FILE_PATH, filePath);

		service = new MappingComponent().activate(properties);

		return service;
	}

}
