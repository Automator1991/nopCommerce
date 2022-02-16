package utility;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class utility {

    public void javaScriptClick(WebElement element,WebDriver driver) {
        JavascriptExecutor js = (JavascriptExecutor)driver;
        js.executeScript("arguments[0].click();", element);
    }


    public void Checkbox(WebElement Check,WebDriver driver2){
        JavascriptExecutor jd=(JavascriptExecutor) driver2;
                jd.executeScript("arguments[0].click();",Check);
    }
}
