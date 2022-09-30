@bpcTest
Feature: Invalid (char) values

  
  Scenario: Test case 16
  
    Given user goes to the 'Blood Pressure Containerised' application
    When user enters "bloodPressureK1" in the Email field on the 'Blood Pressure' calculator page
    When user enters "e" in the Systolic field on the 'Blood Pressure' calculator page
    And user enters "e" in the Diastolic field on the 'Blood Pressure' calculator page
    And user enters "1e" in the Age field on the 'Blood Pressure' calculator page
    Then user clicks on the submit button on the 'Blood Pressure' calculator page
    Then "Please enter a number." error message is displayed under the "Systolic" field on 'Blood Pressure Containerised' calculator page
    When user enters "172" in the Systolic field on the 'Blood Pressure' calculator page
    Then user clicks on the submit button on the 'Blood Pressure' calculator page
    Then "Please enter a number." error message is displayed under the "Systolic" field on 'Blood Pressure Containerised' calculator page
    And user enters "66" in the Diastolic field on the 'Blood Pressure' calculator page 
    Then user clicks on the submit button on the 'Blood Pressure' calculator page
    Then "Please enter a number." error message is displayed under the "Systolic" field on 'Blood Pressure Containerised' calculator page
    And user closes the 'Blood Pressure' calculator page