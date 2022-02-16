Feature: Customers role


  @sanity2
  Scenario: Add new Customer role
    Given User Launch Chrome browser
    When User opens URL "http://admin-demo.nopcommerce.com/login"
    And User enters Email as "admin@yourstore.com" and Password as "admin"
    And Click on Login
    Then User can view Dashboad
    When User click on customers Menu
    And click on customers Roles Item
    And click on Add new button
	Then User can view Add new customer Roles page
    When User enter customer Role info
	And click on Save button
   Then User can view confirmation message "The new customer role has been added successfully."
   And 	User click on Log out link
    And close browser