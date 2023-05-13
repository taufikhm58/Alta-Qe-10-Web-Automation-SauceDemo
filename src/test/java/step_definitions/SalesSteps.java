package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.example.pageObject.SalesPage;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class SalesSteps {
    private WebDriver webDriver;

    public SalesSteps(){
        super();
        this.webDriver = Hooks.webDriver;
    }

    @Then("user already on sales page")
    public void verifySalesPage(){
        SalesPage salesPage = new SalesPage(webDriver);
        Assert.assertTrue(salesPage.verifySalesPage());
    }

    @When("User sort product list by \"(.*)\"")
    public void sortProduct(String sort) throws InterruptedException {
        SalesPage salesPage = new SalesPage(webDriver);
        salesPage.setSortProduct(sort);
        Thread.sleep(3000);
    }

    @And("User pick 2 items from the basket Sauce Labs Onesie and Sauce Labs Bike Light")
    public void click2Product() throws InterruptedException {
        SalesPage salesPage = new SalesPage(webDriver);
        salesPage.clickBasket1();
        Thread.sleep(3000);
        salesPage.clickBasket2();
        Thread.sleep(3000);
    }

}
