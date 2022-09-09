@bpTest
Feature: Invalid (double) values

  
  Scenario: Test case 15
  
    Given user goes to the 'Blood Pressure' application
    When user enters "172.5" in the Systolic field on the 'Blood Pressure' calculator page
    And user enters "66.5" in the Diastolic field on the 'Blood Pressure' calculator page
    And user enters "18.2" in the Age field on the 'Blood Pressure' calculator page
    Then user clicks on the submit button on the 'Blood Pressure' calculator page
    Then "The value '172.5' is not valid for Systolic." data validation is displayed under the "Systolic" field on 'Blood Pressure' calculator page
    Then "The value '66.5' is not valid for Diastolic." data validation is displayed under the "Diastolic" field on 'Blood Pressure' calculator page
    Then "The value '18.2' is not valid for Age." data validation is displayed under the "Age" field on 'Blood Pressure' calculator page
    And user closes the 'Blood Pressure' calculator page