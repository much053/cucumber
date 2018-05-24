package testcase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import static org.testng.Assert.assertEquals;

public class Search extends CucumbeRunner {

    @Given("^访问百度 \"([^\"]*)\"$")
    public void step0(String url) throws Throwable {
        driver.get(url);
    }

    @Given("^验证title$")
    public void step1() throws Throwable {
        assertEquals(driver.getTitle(), "百度一下，你就知道");
    }

    @When("^输入 \"(.*?)\"$")
    public void setp2(String text) throws Throwable {
        driver.findElement(By.xpath(".//*[@id='kw']")).sendKeys(text);
    }

    @Then("^点击搜索按钮$")
    public void step3() throws Throwable {
        driver.findElement(By.xpath(".//*[@id='su']")).click();
    }

    @Then("^清除搜索框$")
    public void step4() throws Throwable {
        driver.findElement(By.xpath(".//*[@id='kw']")).clear();
    }
}
