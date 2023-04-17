Feature: Browse for search text

  Scenario: The user searches for the search text in regular search
    When I launch DuckDuckGo search engine
    And I type the search term in the input box
    And I wait for 2 seconds
    And I click the submit button
    And I wait for 2 seconds
    Then I scroll down
    And I wait for 2 seconds
    And I click the More Results button
    And I wait for 2 seconds
    And I click the More Results button
    And I wait for 2 seconds

