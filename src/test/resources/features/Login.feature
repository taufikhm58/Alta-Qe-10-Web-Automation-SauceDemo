@Login @Practice
Feature: Login
  As a user I want to login website sauce demo
  
   Scenario: Normal login
    Given User already on website sauce demo
    When User input "standard_user" as userName and input "secret_sauce" as password
    Then user already on sales page

#    Scenario: Invalid login
#      Given User already on website sauce demo
#      When User input "standard_user" as userName and input "" as password
#      Then User see error "Epic sadface: Password is requireds" on login page

#  Scenario: Invalid login
#    Given User already on website sauce demo
#    When User input "" as userName and input "secret_sauce" as password
#    Then User see error "Epic sadface: Username is required" on login page
#
#  Scenario: Invalid login
#    Given User already on website sauce demo
#    When User input "Arum" as userName and input "123" as password
#    Then User see error "Epic sadface: Username and password do not match any user in this service" on login page

  Scenario Outline: Invalid Login
    Given User already on website sauce demo
    When User input "<userName>" as userName and input "<password>" as password
    Then User see error "<errorText>" on login page
  Examples:
    | userName      | password     | errorText                                                                 |
    | standard_user |              | Epic sadface: Password is required                                        |
    |               | secret_sauce | Epic sadface: Username is required                                        |
    | arum          | 123          | Epic sadface: Username and password do not match any user in this service |


