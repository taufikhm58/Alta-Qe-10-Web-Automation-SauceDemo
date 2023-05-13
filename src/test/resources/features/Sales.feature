@Sales @Practice
Feature: Sales Flow
  As a user I want to make purchase on sauce demo

  Scenario: User make a purchase with 2 items
    Given User already on website sauce demo
    When User input "standard_user" as userName and input "secret_sauce" as password
    Then user already on sales page
    When User sort product list by "Price (low to high)"
    And User pick 2 items from the basket Sauce Labs Onesie and Sauce Labs Bike Light