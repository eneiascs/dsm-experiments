package br.unb.autoexp.web.servlet;

import java.io.IOException;
import java.util.Date;
import java.util.concurrent.ThreadLocalRandom;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import br.unb.autoexp.storage.entity.dto.ExecutionStatusDTO;
import br.unb.autoexp.storage.entity.dto.ExperimentDesignDTO;
import br.unb.autoexp.storage.service.ExperimentDesignStorageService;
import br.unb.autoexp.storage.service.ExperimentExecutionStorageService;
import br.unb.autoexp.web.storage.ExperimentDesignStorageServiceFactory;
import br.unb.autoexp.web.storage.ExperimentExecutionStorageServiceFactory;

public class SimulationServlet extends HttpServlet {
	private static final Object PROP_CONTINUE_ON_INSERT_ERROR = null;

protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	String jobId=new Date().toString();
		
		
    	ExperimentDesignStorageService experimentDesignProvider=ExperimentDesignStorageServiceFactory.get();
    	experimentDesignProvider.create(ExperimentDesignDTO.getBuilder().name("test-client").build());
    	
		ExperimentExecutionStorageService experimentExecutionClient=ExperimentExecutionStorageServiceFactory.get();
		//resp.getWriter().println(String.format("<h3>find by id: %s</h3>",experimentDesignProvider.findById("59ac3ef9857aba00016e6bcf")));	
//		resp.getWriter().println(String.format("<h3>find by id: %s</h3>",experimentExecutionClient.findById("59ac2950781b58602b76a596")));	
//		
		
//		experimentDesignProvider.findAll().forEach((exp)->{
//			exp.setJobId("test-client-update");
//			experimentDesignProvider.update(exp);
//		});
		experimentExecutionClient.findAll().forEach((execution)->{
			if(!execution.getExecutionStatus().name().equals(ExecutionStatusDTO.FINISHED.name())){
				execution.setCpu(ThreadLocalRandom.current().nextLong(1L, 1000L));
				execution.setTime(ThreadLocalRandom.current().nextLong(1L, 1000L));
				execution.setMemory(ThreadLocalRandom.current().nextLong(1L, 1000L));
				execution.setExecutionStatus(ExecutionStatusDTO.FINISHED);
				experimentExecutionClient.update(execution);
			}
			
		});
		experimentExecutionClient.findAll().forEach((execution)->{
			try {
				resp.getWriter().println(String.format("<h3>%s</h3>",execution));
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		});
		
//		MappingService mappingService=MappingServiceFactory.get("/home/eneiascs/eclipse/java-neon/eclipse/dslforge/ReanaSpl/src-gen/preconditions.json");
//		List<MappingDTO> list=mappingService.findAll();
//		for (MappingDTO mappingDTO : list) {
//			resp.getWriter().println(String.format("<h3>%s</h3>",mappingDTO.getTaskName()));
//		}
//		resp.getWriter().println(String.format("<h3>%s</h3>",mappingService.findByTaskName("FACTORIAL_strategy_featureFamily_intercloud").getTaskName()));
//		//    	ExperimentDesignDTO exp=experimentDesignProvider.findById("59a9b26e781b581e1022856b");
//    	ExperimentDesignDTO exp2=experimentDesignProvider.findByJobId("Fri Sep 01 19:18:06 GMT 2017");
//    	
//    	experimentDesignProvider.create(ExperimentDesignDTO.getBuilder().jobId(jobId).name("web-test").build());
//    	
//    	List<ExperimentDesignDTO>experiments2=experimentDesignProvider.findByName("reanaSpl");
//    	List<ExperimentDesignDTO>experiments3=experimentDesignProvider.findAll();
//    	 resp.getWriter().println(String.format("<h3>%s</h3>",exp.getName()));
//    	List<ExperimentDesignDTO>experiments=new ArrayList<>();
//    	
//    	resp.setContentType("text/html");
//        resp.getWriter().println("<h3>Experiments</h3>");
//        for (ExperimentDesignDTO experimentDesignDTO : experiments3) {
//        	experimentDesignDTO.setDesign("updated-web-test");
//        	
//        	experimentDesignDTO.setCreationDate(new Date());
//        	   resp.getWriter().println(String.format("<h3>%s</h3>",experimentDesignProvider.update(experimentDesignDTO)));
//		}
//        List<ExperimentExecutionDTO> list=new ArrayList<ExperimentExecutionDTO>();
//        
//		list.add(ExperimentExecutionDTO.getBuilder().jobId(jobId).taskName("test-web").cpu(10L).build());
//		list.add(ExperimentExecutionDTO.getBuilder().jobId(jobId).taskName("test-web").cpu(11L).build());
//		list.add(ExperimentExecutionDTO.getBuilder().jobId(jobId).taskName("test-web").cpu(11L).build());
//		

//		experimentExecutionClient.create(list);
//		List<ExperimentExecutionDTO> execs=experimentExecutionClient.findAll();
//		for (ExperimentExecutionDTO experimentExecutionDTO : execs) {
//			System.out.println(experimentExecutionDTO);
//			experimentExecutionDTO.setExecutionStatus(ExecutionStatusDTO.FINISHED);
//			experimentExecutionDTO.setObject("web-updated");
//			resp.getWriter().println(String.format("<h3>%s</h3>",experimentExecutionClient.update(experimentExecutionDTO)));
//		}
//		
//		System.out.println("Id: "+experimentExecutionClient.findById("59a45329857aba0001cc9808"));
//		
//		execs=experimentExecutionClient.findByJobId(jobId);
//		for (ExperimentExecutionDTO experimentExecutionDTO : execs) {
//			System.out.println(experimentExecutionDTO);
//		}
//		
		
      
    	
    }

}