package br.unb.autoexp.web.dohko.domain;

/**
 *     Copyright (C) 2013-2017  the original author or authors.
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License,
 *     any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <http://www.gnu.org/licenses/>
 */

import java.util.Date;

import org.excalibur.core.execution.domain.TaskStatusType;

import com.fasterxml.jackson.annotation.JsonFormat;

public class TaskMessage {
	private String taskId;
	private String jobId;
	private String taskName;
	private TaskStatusType status;
	private String output;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "MMM d, yyyy h:mm:ss a")
	private Date date;

	public TaskMessage() {
		super();

	}

	public TaskMessage(String taskId, String taskName, TaskStatusType status, String output, Date date) {
		super();
		this.taskId = taskId;
		this.taskName = taskName;
		this.status = status;
		this.output = output;
		this.date = date;
	}

	public TaskStatusType getStatus() {
		return status;
	}

	public void setStatus(TaskStatusType status) {
		this.status = status;
	}

	public String getOutput() {
		return output;
	}

	public void setOutput(String output) {
		this.output = output;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getTaskId() {
		return taskId;
	}

	public void setTaskId(String taskId) {
		this.taskId = taskId;
	}

	public String getTaskName() {
		return taskName;
	}

	public void setTaskName(String taskName) {
		this.taskName = taskName;
	}

	@Override
	public String toString() {
		return "TaskMessage [status=" + status.getName() + ", output=" + output + "]";
	}

	public String getJobId() {
		return jobId;
	}

	public void setJobId(String jobId) {
		this.jobId = jobId;
	}

}