package br.unb.autoexp.template.wizard;

import java.io.File;

import org.eclipse.core.runtime.Assert;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.jface.wizard.Wizard;
import org.eclipse.ui.IWorkbench;

public abstract class AbstractNewResourceWizard extends Wizard {
	/**
	 * Remember the selection during initialization for populating the default
	 * container.
	 */
	private IStructuredSelection selection;

	/**
	 * The container of the resource to create
	 */
	protected String containerName = null;

	/**
	 * Remember the workbench during initialization.
	 */
	private IWorkbench workbench;

	public AbstractNewResourceWizard(IStructuredSelection selection) {
		this();
		setSlection(selection);
	}

	public AbstractNewResourceWizard() {
	}

	public AbstractNewResourceWizard(File container) {
		Assert.isNotNull(container);
		this.containerName = container.getName();
	}

	public AbstractNewResourceWizard(String containerName) {
		Assert.isNotNull(containerName);
		this.containerName = containerName;
	}

	public void init(IWorkbench workbench, IStructuredSelection selection) {
		this.workbench = workbench;
		this.selection = selection;
	}

	public IWorkbench getWorkbench() {
		return workbench;
	}

	public void setWorkbench(IWorkbench workbench) {
		this.workbench = workbench;
	}

	public void setSlection(IStructuredSelection selection) {
		this.selection = selection;
	}

	public IStructuredSelection getSelection() {
		return selection;
	}
}