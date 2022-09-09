@bpTest
Feature: Check Privacy Hyperlink

  
  Scenario: Test case 9
  
    Given user goes to the 'Blood Pressure' application
    When user clicks on the 'Privacy' Hyperlink on the 'Blood Pressure' calculator page
    Then 'Privacy Policy' header is displayed on Privacy Tab on the 'Blood Pressure' calculator page
    Then 'Use this page to detail your site's privacy policy.' body is displayed on Privacy Tab on the 'Blood Pressure' calculator page
    And user clicks on the 'Home Tab' button on the 'Blood Pressure' calculator page
    Then 'BP Category Calculator' header is displayed on Home Tab on the 'Blood Pressure' calculator page
    Then '© 2020 - BPCalculator - Privacy' header is displayed on Home Tab on the 'Blood Pressure' calculator page
    And user closes the 'Blood Pressure' calculator page
