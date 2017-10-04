package br.unb.autoexp.web.storage;

import java.util.HashMap;
import java.util.Map;

import br.unb.autoexp.storage.service.ExperimentDesignStorageService;
import br.unb.autoexp.storage.service.ExperimentExecutionStorageService;
import br.unb.autoexp.web.storage.component.ExperimentDesignStorageComponent;
import br.unb.autoexp.web.storage.component.ExperimentExecutionStorageComponent;

public class ExperimentExecutionStorageServiceFactory {
	private static ExperimentExecutionStorageService service;

	public static ExperimentExecutionStorageService get() {
		if (service == null) {
			Map<String, Object> properties = new HashMap<String, Object>();

			String databaseName = "experiments";

			if (System.getenv("DATABASE_NAME") != null) {
				databaseName = System.getenv("DATABASE_NAME");
			}

			properties.put(MongoClientProvider.PROP_DATABASE, databaseName);

			service = new ExperimentExecutionStorageComponent().activate(properties);

		}
		return service;
	}

	public static void unGet() {
		service = null;
	}

}
