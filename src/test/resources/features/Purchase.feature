@Purchase @DailyTask
Feature: Purchase Flow
  As a user I want to make purchase on sauce demo

  Scenario: User make a purchase with 2 items
    Given User already on website sauce demo
    When User input "standard_user" as userName and input "secret_sauce" as password
    Then User already on landing page
    And User sort product by "Name (Z to A)"
    And User pick item Sauce Labs Onesie
    And User pick item Test.allTheThings() T-Shirt (Red)
    Then User click Chart icon
    Then User verify that products in Chart Page
    Then User remove item Test.allTheThings() T-Shirt (Red)
    And User click CHECKOUT button
    Then User already on CHECKOUT: YOUR INFORMATION page
    Then User input "TAUFIK" as firstName, "HM" as lastName and "15146" as postalCode
    Then User click continue
    And User already on CHECKOUT: OVERVIEW page
    Then User click FINISH button
    And  CHECKOUT COMPLETE! and showing "THANK YOU FOR YOUR ORDER" text
