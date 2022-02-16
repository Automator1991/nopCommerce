$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/CustomerRole.feature");
formatter.feature({
  "name": "Customers role",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add new Customer role",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User Launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdef.user_Launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User opens URL \"http://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdef.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.user_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can view Dashboad",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.user_can_view_Dashboad()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on customers Menu",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdef.user_click_on_customers_Menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on customers Roles Item",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.clickOnCustomersRolesItem()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Add new button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.click_on_Add_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can view Add new customer Roles page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.userCanViewAddNewCustomerRolesPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter customer Role info",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdef.userEnterCustomerRoleInfo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Save button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.click_on_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can view confirmation message \"The new customer role has been added successfully.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.user_can_view_confirmation_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Log out link",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.user_click_on_Log_out_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.close_browser()"
});
formatter.result({
  "status": "passed"
});
});