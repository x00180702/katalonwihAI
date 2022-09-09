@bpcTest
Feature: Pre-High Blood Pressure

  
  Scenario: Test case 2
  
    Given user goes to the 'Blood Pressure Containerised' application
    When user enters "bloodPressureK2" in the Email field on the 'Blood Pressure' calculator page
    And user enters "80" in the Diastolic field on the 'Blood Pressure' calculator page
    And user enters "80" in the Age field on the 'Blood Pressure' calculator page
    Then user clicks on the submit button on the 'Blood Pressure' calculator page
    Then "Pre-High Blood Pressure" results are displayed on 'Blood Pressure' calculator page
    And user closes the 'Blood Pressure' calculator page