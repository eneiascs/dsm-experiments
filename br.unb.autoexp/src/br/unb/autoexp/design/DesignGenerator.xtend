package br.unb.autoexp.design

import br.unb.autoexp.autoExp.Experiment

interface DesignGenerator<T> {
	def T generate(Experiment experiment)
}