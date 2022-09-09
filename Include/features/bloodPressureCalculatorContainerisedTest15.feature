@bpTest
Feature: Invalid (double) values

  
  Scenario: Test case 15
  
    Given user goes to the 'Blood Pressure Containerised' application
    When user enters "bloodPressureK1" in the Email field on the 'Blood Pressure' calculator pag
    When user enters "172.5" in the Systolic field on the 'Blood Pressure' calculator page
    And user enters "66.5" in the Diastolic field on the 'Blood Pressure' calculator page
    And user enters "18.2" in the Age field on the 'Blood Pressure' calculator page
    Then user clicks on the submit button on the 'Blood Pressure' calculator page
    Then "Please enter a valid value. The two nearest are 172 and 173." error message is displayed under the "Systolic" field on 'Blood Pressure Containerised' calculator page
    When user enters "172" in the Systolic field on the 'Blood Pressure' calculator page
    Then user clicks on the submit button on the 'Blood Pressure' calculator page
    Then "Please enter a valid value. The two nearest are 66 and 67." error message is displayed under the "Systolic" field on 'Blood Pressure Containerised' calculator page
    And user enters "66" in the Diastolic field on the 'Blood Pressure' calculator page 
    Then user clicks on the submit button on the 'Blood Pressure' calculator page
    Then "Please enter a valid value. The two nearest are 18 and 19." error message is displayed under the "Systolic" field on 'Blood Pressure Containerised' calculator page
    And user closes the 'Blood Pressure' calculator page