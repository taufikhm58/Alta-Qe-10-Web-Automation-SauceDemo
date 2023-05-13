package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class SalesPage {

    public static WebDriver driver;

    public SalesPage(WebDriver driver){
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    @FindBy(xpath = "//span[@class='title']")
    private WebElement verifySalesPage;

    @FindBy(xpath = "//select[@class='product_sort_container']")
    private WebElement sortProduct;

    @FindBy(xpath = "//button[@id='add-to-cart-sauce-labs-onesie']")
    private WebElement basket1;

    @FindBy(xpath = "//button[@id='add-to-cart-sauce-labs-bike-light']")
    private WebElement basket2;

    public boolean verifySalesPage(){
        return verifySalesPage.isDisplayed();
    }

    public void setSortProduct(String sort){
        Select a = new Select(sortProduct);
        a.selectByVisibleText(sort);
    }

    public void clickBasket1(){
        basket1.click();
    }

    public void clickBasket2(){
        basket2.click();
    }
}
