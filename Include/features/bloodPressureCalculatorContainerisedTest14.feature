@bpcTest
Feature: Check All Results Together

  
  Scenario: Test case 14
  
    Given user goes to the 'Blood Pressure Containerised' application
    When user enters "bloodPressureK14" in the Email field on the 'Blood Pressure' calculator page
    When user enters "181" in the Systolic field on the 'Blood Pressure' calculator page
    And user enters "92" in the Diastolic field on the 'Blood Pressure' calculator page
    And user enters "60" in the Age field on the 'Blood Pressure' calculator page
    Then user clicks on the submit button on the 'Blood Pressure' calculator page
    Then "High Blood Pressure" results are displayed on 'Blood Pressure' calculator page
    Then "Average value for your age group [60 and over] is 135/88" results are displayed under the 'Age' label on 'Blood Pressure' calculator page
    Then "Mean Arterial Pressure: 242" results are displayed under the 'Mean Arterial Pressure' label on 'Blood Pressure' calculator page
    Then "Pulse Pressure: 90" results are displayed under the 'Pulse Pressure' label on 'Blood Pressure' calculator page
    And user closes the 'Blood Pressure' calculator page