package testRunner;
//This is my test runner class

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		features=".//Features//",
		glue="stepDefinitions",
		monochrome=false,
		tags= {"@sanity2"},
		plugin= {"pretty","html:test-output"}
		)
public class TestRunner {

}
