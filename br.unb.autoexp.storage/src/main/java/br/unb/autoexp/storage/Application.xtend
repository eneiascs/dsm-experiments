package br.unb.autoexp.storage

import org.springframework.boot.CommandLineRunner
import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication

@SpringBootApplication
class Application  implements CommandLineRunner{
	
	def static void main(String[] args) {
		SpringApplication.run(typeof (Application), args)
	}
	
	override run(String... arg0) throws Exception {
	}
	
	    
	
}