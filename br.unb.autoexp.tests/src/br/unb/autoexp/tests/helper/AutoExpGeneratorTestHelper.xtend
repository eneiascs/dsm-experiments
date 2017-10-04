package br.unb.autoexp.tests.helper

import java.io.IOException
import java.util.ArrayList
import org.eclipse.xtext.util.IAcceptor
import org.eclipse.xtext.xbase.testing.CompilationTestHelper
import org.eclipse.xtext.xbase.testing.CompilationTestHelper.Result
import org.junit.Assert

class AutoExpGeneratorTestHelper extends CompilationTestHelper {
	/**
	 * Asserts that the expected code is generated for the given source.
	 * 
	 * @param source some valid source code written in the language under test
	 * @param expected the expected source code.
	 * @param fileExtension file extension used to filter generated files
	 * @throws IOException if the resource loading fails 
	 */
	def assertCompilesToWithFileExtension(CharSequence source, CharSequence expected, String fileExtension) throws IOException {
		val called = new ArrayList<Boolean>()
		called.add(false)
		compile(source, new IAcceptor<CompilationTestHelper.Result>() {

			override accept(Result r) {
				r.allGeneratedResources.keySet.forEach[if (it.endsWith(fileExtension))
					Assert.assertEquals(expected.toString, r.allGeneratedResources.get(it).toString)	
				]
				
				
				called.add(true)
			}
		})
		Assert.assertTrue("Nothing was generated but the expectation was :\n" + expected, called.last)
	}

}
