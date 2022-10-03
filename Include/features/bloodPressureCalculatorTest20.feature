@bpTest
Feature: Multiple Scenarios in 1 script

  
  Scenario: Multi-Test case 1
  
    Given user goes to the 'Blood Pressure' application
    When user enters "70" in the Systolic field on the 'Blood Pressure' calculator page
    And user enters "40" in the Diastolic field on the 'Blood Pressure' calculator page
    And user enters "40" in the Age field on the 'Blood Pressure' calculator page
    Then user clicks on the submit button on the 'Blood Pressure' calculator page
    Then "Low Blood Pressure" results are displayed on 'Blood Pressure' calculator page
    And user closes the 'Blood Pressure' calculator page
    
  Scenario: Multi-Test case 2
  
    Given user goes to the 'Blood Pressure' application
    When user enters "110" in the Systolic field on the 'Blood Pressure' calculator page
    And user enters "40" in the Diastolic field on the 'Blood Pressure' calculator page
    And user enters "20" in the Age field on the 'Blood Pressure' calculator page
    Then user clicks on the submit button on the 'Blood Pressure' calculator page
    Then "Ideal Blood Pressure" results are displayed on 'Blood Pressure' calculator page
    And user closes the 'Blood Pressure' calculator page
    
  Scenario: Multi-Test case 3
  
    Given user goes to the 'Blood Pressure' application
    When user enters "121" in the Systolic field on the 'Blood Pressure' calculator page
    And user enters "82" in the Diastolic field on the 'Blood Pressure' calculator page
    And user enters "55" in the Age field on the 'Blood Pressure' calculator page
    Then user clicks on the submit button on the 'Blood Pressure' calculator page
    Then "Pre-High Blood Pressure" results are displayed on 'Blood Pressure' calculator page
    And user closes the 'Blood Pressure' calculator page
    
  Scenario: Multi-Test case 4
  
    Given user goes to the 'Blood Pressure' application
    When user enters "140" in the Systolic field on the 'Blood Pressure' calculator page
    And user enters "100" in the Diastolic field on the 'Blood Pressure' calculator page
    And user enters "80" in the Age field on the 'Blood Pressure' calculator page
    Then user clicks on the submit button on the 'Blood Pressure' calculator page
    Then "High Blood Pressure" results are displayed on 'Blood Pressure' calculator page
    And user closes the 'Blood Pressure' calculator page