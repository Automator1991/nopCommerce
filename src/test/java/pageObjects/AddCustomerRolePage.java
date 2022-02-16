package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import utility.utility;

import java.awt.*;

public class AddCustomerRolePage extends utility {

	public WebDriver ldriver;


	public AddCustomerRolePage(WebDriver rdriver) {
		ldriver = rdriver;
		PageFactory.initElements(ldriver, this);
	}

	//By lnkCustomers_menu=By.xpath("//a[@class='nav-link' and @href='#']/p[contains(text(),'Customers')]");
	By btnAddNew = By.xpath("//*[@class='fas fa-plus-square']");
	By nameField = By.xpath("//*[@id='Name']");
	By btnSave = By.xpath("//button[@name='save']");
	By freeShipping = By.xpath("//*[@id='FreeShipping']");
	By checkboxExempt = By.xpath("//*[@id='IsTaxExempt']");
	By pageTitle = By.xpath("//*[@name='_RequestVerificationToken']");
	By activeCheckbox = By.xpath("//input[@id='Active' and @name='Active']");
	By customerRole = By.xpath("//p[text()=' Customer roles']");


	{

	}


	//Action Methods


	public void clickOnAddNewCustomer() {
		ldriver.findElement(btnAddNew).click();
	}


	public void setName(String name) {
		ldriver.findElement(nameField).sendKeys(name);
	}

	public void clickOnActive() {
		ldriver.findElement(activeCheckbox).click();
	}

	public void clickOnFreeShipping() {
		ldriver.findElement(freeShipping).click();
	}

	public void clickOnSave() {
		ldriver.findElement(btnSave).click();
	}


	public String getPageTitle() {
		return ldriver.getTitle();
	}


	public void clickCustomerRole() {
		WebElement customerRoleElement = ldriver.findElement(customerRole);
		javaScriptClick(customerRoleElement, ldriver);
	}


	public void checkboxExempt() {


		{

			ldriver.findElement(checkboxExempt).click();
			WebElement Tick = ldriver.findElement(By.xpath("//*[@id='IsTaxExempt']"));

			javaScriptClick(Tick,ldriver);
		}
	}
}