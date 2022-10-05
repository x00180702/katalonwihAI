@bpcTest

Feature: Empty Fields

  
  Scenario: Test case 7
  
    Given user goes to the 'Blood Pressure Containerised' application
    When user enters "bloodPressureK7" in the Email field on the 'Blood Pressure' calculator page
    When user clears the Systolic field on the 'Blood Pressure' calculator page
    And user clears the Diastolic field on the 'Blood Pressure' calculator page
    And user clears the Age field on the 'Blood Pressure' calculator page
    Then user clicks on the submit button on the 'Blood Pressure' calculator page
    Then "Please fill out this field." error message is displayed under the "Systolic" field on 'Blood Pressure Containerised' calculator page
    And user enters "120" in the Systolic field on the 'Blood Pressure' calculator page
    Then user clicks on the submit button on the 'Blood Pressure' calculator page
    Then "Please fill out this field." error message is displayed under the "Diastolic" field on 'Blood Pressure Containerised' calculator page
    And user closes the 'Blood Pressure' calculator page