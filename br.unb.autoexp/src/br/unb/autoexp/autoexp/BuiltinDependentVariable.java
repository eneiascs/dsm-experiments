package br.unb.autoexp.autoexp;

public enum BuiltinDependentVariable {
	CPU("cpu","CPU Consumption"),
	MEMORY("memory","Memory Consumption"),
	TIME("time", "Time Consumption");
	private String name;
	private String description;
	public static BuiltinDependentVariable getByName(String name){
		
		for (BuiltinDependentVariable variable : BuiltinDependentVariable.values()) {
			if(variable.getName().equals(name)) return variable;
		}
		return null;
	}
	private BuiltinDependentVariable(String name, String description) {
		this.name = name;
		this.description = description;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
}
