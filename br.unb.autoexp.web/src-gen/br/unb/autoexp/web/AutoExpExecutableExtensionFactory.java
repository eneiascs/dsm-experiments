/**
 * @Generated
 */
package br.unb.autoexp.web;

import org.dslforge.xtext.common.guice.AbstractGuiceAwareWebExecutableExtensionFactory;
import org.osgi.framework.Bundle;
import br.unb.autoexp.web.internal.Activator;

import com.google.inject.Injector;

public class AutoExpExecutableExtensionFactory extends AbstractGuiceAwareWebExecutableExtensionFactory {

	@Override
	public Bundle getBundle() {
		return Activator.getInstance().getBundle();
	}
	
	@Override
	public Injector getInjector() {
		return Activator.getInstance().getInjector(Activator.BR_UNB_AUTOEXP_AUTOEXP);
	}
}
