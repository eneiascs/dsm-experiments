package br.unb.autoexp.web.client;

import java.io.IOException;
import java.net.URI;

import javax.websocket.ClientEndpoint;
import javax.websocket.ContainerProvider;
import javax.websocket.DeploymentException;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.WebSocketContainer;

import org.apache.log4j.Logger;
import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.Status;
import org.eclipse.core.runtime.jobs.Job;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.inject.Inject;
import com.google.inject.Singleton;

import br.unb.autoexp.web.dohko.domain.TaskMessage;
import br.unb.autoexp.web.dohko.service.DohkoService;

@Singleton
@ClientEndpoint
public class NotificationClientEndpoint {
	static final Logger LOG = Logger.getLogger(NotificationClientEndpoint.class);
	static DohkoService service;

	@Inject
	private DohkoService dohkoService;

	public void createOrReuseConnection() throws DeploymentException, IOException {
		if (getSession() == null || !getSession().isOpen()) {

			connect();
		}
	}

	public NotificationClientEndpoint() {
		super();

	}

	private Session session;

	@OnOpen
	public void onOpen(Session session) {
		LOG.info(String.format("Connected to endpoint: %s", session.getBasicRemote()));

	}

	@OnMessage
	public void processMessage(String message, Session sesison) {

		LOG.info(String.format("Received message in client: %s", message));

		Job updateTaskStatusJob = new Job("Updating task status ...") {

			@Override
			protected IStatus run(IProgressMonitor monitor) {

				ObjectMapper mapper = new ObjectMapper();
				try {
					TaskMessage taskMessage = mapper.readerFor(TaskMessage.class).readValue(message);
					LOG.info(String.format("Task id: %s status: ", taskMessage.getTaskId(), taskMessage.getStatus()));
					service.updateTaskStatus(taskMessage);
				} catch (IOException e) {
					LOG.error(e.getMessage(), e);
					return Status.CANCEL_STATUS;
				}

				return Status.OK_STATUS;
			}

		};
		updateTaskStatusJob.setSystem(true);
		updateTaskStatusJob.schedule();

	}

	@OnError
	public void processError(Throwable t) {
		LOG.error(t.getMessage(), t);
	}

	public void connect() throws DeploymentException, IOException {
		WebSocketContainer container = ContainerProvider.getWebSocketContainer();
		service = dohkoService;
		String uri = String.format("ws://%s/notification/tasks", dohkoService.getDohkoAddress());
		LOG.info("Connecting to " + uri);
		session = container.connectToServer(NotificationClientEndpoint.class, URI.create(uri));

	}

	public Session getSession() {
		return session;
	}

}