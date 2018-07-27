package testcase;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(strict = true, monochrome = true, features = "src/test/resources/features",
        glue = "testcase",
        plugin = {"pretty", "html:target/cucumber-html-report;", "json:target/cucumber.json"},
        tags = {"@cases"})
public class CucumbeRunner extends AbstractTestNGCucumberTests {
//    public static WebDriver driver = null;

//    @BeforeSuite(alwaysRun = true)
//    public void setUp() throws Exception {
//        driver = new FirefoxDriver();
//    }

//    @AfterSuite(alwaysRun = true)
//    public void quit() throws Exception {
//        driver.close();
//    }
}
