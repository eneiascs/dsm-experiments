package br.unb.autoexp.rBaseApi.client

import javax.ws.rs.core.Response

interface RBaseApiClient {
	def Response runAnalysis(String filePath)
}