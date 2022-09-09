@bpcTest
Feature: Low Blood Pressure

  
  Scenario: Test case 1
  
    Given user goes to the 'Blood Pressure Containerised' application
    When user enters "bloodPressureK1" in the Email field on the 'Blood Pressure' calculator page
    And user enters "70" in the Systolic field on the 'Blood Pressure' calculator page
    And user enters "40" in the Diastolic field on the 'Blood Pressure' calculator page
    And user enters "80" in the Age field on the 'Blood Pressure' calculator page
    Then user clicks on the submit button on the 'Blood Pressure' calculator page
    Then "Low Blood Pressure" results are displayed on 'Blood Pressure' calculator page
    And user closes the 'Blood Pressure' calculator page