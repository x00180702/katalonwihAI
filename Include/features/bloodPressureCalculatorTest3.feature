@bpTest
Feature: Ideal Blood Pressure

  
  Scenario: Test case 3
  
    Given user goes to the 'Blood Pressure' application
    When user enters "100" in the Systolic field on the 'Blood Pressure' calculator page
    And user enters "60" in the Diastolic field on the 'Blood Pressure' calculator page
    And user enters "60" in the Age field on the 'Blood Pressure' calculator page
    Then user clicks on the submit button on the 'Blood Pressure' calculator page
    Then "Ideal Blood Pressure" results are displayed on 'Blood Pressure' calculator page
    And user closes the 'Blood Pressure' calculator page