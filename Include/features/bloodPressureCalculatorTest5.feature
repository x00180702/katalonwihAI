@bpTest
Feature: Equal Values Error

  
  Scenario: Test case 5
  
    Given user goes to the 'Blood Pressure' application
    When user enters "90" in the Systolic field on the 'Blood Pressure' calculator page
    And user enters "90" in the Diastolic field on the 'Blood Pressure' calculator page
    And user enters "20" in the Age field on the 'Blood Pressure' calculator page
    Then user clicks on the submit button on the 'Blood Pressure' calculator page
    Then 'Systolic must be greater than Diastolic' error is displayed on 'Blood Pressure' calculator page
    And user closes the 'Blood Pressure' calculator page



