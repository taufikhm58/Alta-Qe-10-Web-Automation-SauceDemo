$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Purchase.feature");
formatter.feature({
  "line": 2,
  "name": "Purchase Flow",
  "description": "As a user I want to make purchase on sauce demo",
  "id": "purchase-flow",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Purchase"
    },
    {
      "line": 1,
      "name": "@DailyTask"
    }
  ]
});
formatter.before({
  "duration": 15447614300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User make a purchase with 2 items",
  "description": "",
  "id": "purchase-flow;user-make-a-purchase-with-2-items",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User already on website sauce demo",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User input \"standard_user\" as userName and input \"secret_sauce\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User already on landing page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User sort product by \"Name (Z to A)\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User pick item Sauce Labs Onesie",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User pick item Test.allTheThings() T-Shirt (Red)",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click Chart icon",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User verify that products in Chart Page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User remove item Test.allTheThings() T-Shirt (Red)",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User click CHECKOUT button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User already on CHECKOUT: YOUR INFORMATION page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User input \"TAUFIK\" as firstName, \"HM\" as lastName and \"15146\" as postalCode",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User click continue",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User already on CHECKOUT: OVERVIEW page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click FINISH button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "CHECKOUT COMPLETE! and showing \"THANK YOU FOR YOUR ORDER\" text",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.verifyLandingPage()"
});
formatter.result({
  "duration": 207549700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 12
    },
    {
      "val": "secret_sauce",
      "offset": 50
    }
  ],
  "location": "LoginSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 3418727900,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyLandPage()"
});
formatter.result({
  "duration": 41806600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name (Z to A)",
      "offset": 22
    }
  ],
  "location": "PurchaseSteps.sortProduct(String)"
});
formatter.result({
  "duration": 3138088300,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickItemBasket1()"
});
formatter.result({
  "duration": 3066808200,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickItemBasket2()"
});
formatter.result({
  "duration": 3069902400,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickItemBasket3()"
});
formatter.result({
  "duration": 3092293100,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyListOfProduct()"
});
formatter.result({
  "duration": 3045313100,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickRemoveItemBasket4()"
});
formatter.result({
  "duration": 3734279100,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickCheckOutButton()"
});
formatter.result({
  "duration": 3084520500,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyCheckOut()"
});
formatter.result({
  "duration": 3081613400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TAUFIK",
      "offset": 12
    },
    {
      "val": "HM",
      "offset": 35
    },
    {
      "val": "15146",
      "offset": 56
    }
  ],
  "location": "PurchaseSteps.inputCredential(String,String,String)"
});
formatter.result({
  "duration": 3385742200,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickContinueButton()"
});
formatter.result({
  "duration": 3108428100,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyOverview()"
});
formatter.result({
  "duration": 3098801200,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.clickFinishButton()"
});
formatter.result({
  "duration": 3087009200,
  "status": "passed"
});
formatter.match({
  "location": "PurchaseSteps.verifyCheckOutComplete()"
});
formatter.result({
  "duration": 3050152400,
  "status": "passed"
});
formatter.after({
  "duration": 3477061800,
  "status": "passed"
});
});