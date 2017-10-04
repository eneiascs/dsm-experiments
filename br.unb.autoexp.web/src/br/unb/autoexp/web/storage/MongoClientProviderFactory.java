package br.unb.autoexp.web.storage;

import java.util.HashMap;
import java.util.Map;

import org.eclipse.core.runtime.IConfigurationElement;
import org.eclipse.core.runtime.IExtensionPoint;
import org.eclipse.core.runtime.IExtensionRegistry;
import org.eclipse.core.runtime.RegistryFactory;

import br.unb.autoexp.web.storage.component.MongoClientProviderComponent;

public class MongoClientProviderFactory {
	private static MongoClientProvider clientProvider;

	public static MongoClientProvider get() {
		if (clientProvider == null) {

			Map<String, Object> properties = new HashMap<String, Object>();

			String uri = "mongodb://localhost:27017";
			String user = "";
			String password = "";
			if (System.getenv("DATABASE_URI") != null) {
				uri = System.getenv("DATABASE_URI");
			}
			if (System.getenv("DATABASE_USER") != null) {
				user = System.getenv("DATABASE_USER");
			}
			if (System.getenv("DATABASE_PASSWORD") != null) {
				password = System.getenv("DATABASE_PASSWORD");
			}
			properties.put(MongoClientProvider.PROP_URI, uri);
			properties.put(MongoClientProvider.PROP_USER, user);
			properties.put(MongoClientProvider.PROP_PASSWORD, password);
			clientProvider = new MongoClientProviderComponent().activate(properties);

		}
		return clientProvider;
	}

	public static void unGet() {
		if (clientProvider != null) {
			clientProvider.getMongoClient().close();
			clientProvider = null;
		}
	}

}
