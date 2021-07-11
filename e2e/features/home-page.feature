@foo
Feature: Home page

  Background: Navigation
    Given Go to the Angular App

  Scenario: Clicking button
    When I click "add" button
    Then Text should show 1
    When I click "add" button
    Then Text should show 2
    When I click "remove" button
    Then Text should show 0
    When I click "add" button
    Then Text should show 1
