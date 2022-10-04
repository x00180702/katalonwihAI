@bpcTest

Feature: Check Previous Results Negative

  
  Scenario: Test case 9
  
  Given user goes to the 'Blood Pressure Containerised' application
    When user enters "bloodPressureK9" in the Email field on the 'Blood Pressure' calculator page
    When user enters "180" in the Systolic field on the 'Blood Pressure' calculator page
    And user enters "90" in the Diastolic field on the 'Blood Pressure' calculator page
    And user enters "40" in the Age field on the 'Blood Pressure' calculator page
    Then user clicks on the submit button on the 'Blood Pressure' calculator page
    Then "High Blood Pressure" results are displayed on 'Blood Pressure' calculator page
    Then 'Your Previous Readings' header is displayed on Table on the 'Blood Pressure Containerised' calculator page
    Then "Low" is not displayed on Table on the 'Blood Pressure Containerised' calculator page
    Then "140" is not displayed on Table on the 'Blood Pressure Containerised' calculator page
    Then "60" is not displayed on Table on the 'Blood Pressure Containerised' calculator page
    And user closes the 'Blood Pressure' calculator page