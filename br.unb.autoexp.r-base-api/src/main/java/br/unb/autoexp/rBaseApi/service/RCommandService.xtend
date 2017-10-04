package br.unb.autoexp.rBaseApi.service

import br.unb.autoexp.rBaseApi.dto.ResultDTO

interface RCommandService {


/**
	 * Run command to generate pdf file
	 * @param file Script file used to run.
	 * @return  Command return information
	 */
	def ResultDTO generatePdfFile(String file)

	


}
