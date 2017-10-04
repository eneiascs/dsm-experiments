package br.unb.autoexp.web.storage;

import java.util.HashMap;
import java.util.Map;

import org.eclipse.core.runtime.IConfigurationElement;
import org.eclipse.core.runtime.IExtensionPoint;
import org.eclipse.core.runtime.IExtensionRegistry;
import org.eclipse.core.runtime.RegistryFactory;

import br.unb.autoexp.storage.service.ExperimentDesignStorageService;
import br.unb.autoexp.web.storage.component.ExperimentDesignStorageComponent;
import br.unb.autoexp.web.ws.client.ExperimentDesignClient;

public class ExperimentDesignStorageServiceFactory {
	private static ExperimentDesignStorageService service;

	public static ExperimentDesignStorageService get() {
		if (service == null) {

			String databaseName = "experiments";
			
			if (System.getenv("DATABASE_NAME") != null) {
				databaseName = System.getenv("DATABASE_NAME");
			}
			

			Map<String, Object> properties = new HashMap<String, Object>();
			properties.put(MongoClientProvider.PROP_DATABASE, databaseName);

			service = new ExperimentDesignStorageComponent().activate(properties);

		

		}
		return service;
	}

	public static void unGet() {
		service = null;
	}

}
