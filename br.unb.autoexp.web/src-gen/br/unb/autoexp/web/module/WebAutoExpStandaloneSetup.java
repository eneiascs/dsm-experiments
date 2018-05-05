/**
 * @Generated
 */
package br.unb.autoexp.web.module;

import org.eclipse.xtext.util.Modules2;
import br.unb.autoexp.AutoExpRuntimeModule;
import br.unb.autoexp.AutoExpStandaloneSetup;

import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.Module;

public class WebAutoExpStandaloneSetup extends AutoExpStandaloneSetup {

	public static void doSetup() {
		new AutoExpStandaloneSetup().createInjectorAndDoEMFRegistration();
	}

	public Injector createInjector(String language) {
		try {
			Module runtimeModule = getRuntimeModule();
			Injector injector = Guice.createInjector(runtimeModule);
			register(injector);
			return injector;
		} catch (Exception e) {
			System.err.println("Failed to create injector for " + language);
			throw new RuntimeException("Failed to create injector for "
					+ language, e);
		}
	}

	private Module getRuntimeModule() {
		org.eclipse.xtext.common.TerminalsStandaloneSetup.doSetup();
		AutoExpRuntimeModule original = new AutoExpRuntimeModule();
		WebAutoExpRuntimeModule module = new WebAutoExpRuntimeModule();
		Module mergedModule = Modules2.mixin((Module) original, module);
		return mergedModule;
	}
	
}
