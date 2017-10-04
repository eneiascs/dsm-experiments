package br.unb.autoexp.generator

import org.eclipse.xtext.generator.OutputConfigurationProvider

class ScriptsOutputConfigurationProvider extends
          OutputConfigurationProvider {

  public static val SCRIPTS_GEN = "./dohko-gen"

  override getOutputConfigurations() {
    super.getOutputConfigurations() => [
      head.outputDirectory = br.unb.autoexp.generator.ScriptsOutputConfigurationProvider.SCRIPTS_GEN
    ]
  }
}