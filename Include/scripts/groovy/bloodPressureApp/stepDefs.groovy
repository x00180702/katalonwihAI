package bloodPressureApp
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver

import static org.junit.Assert.assertEquals

import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When



class stepDefs {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */
	@Given("user goes to the 'Blood Pressure' application")
	def I_want_to_go_to_BP_App() {
		WebUI.openBrowser('https://bloodpressurecalculator.azurewebsites.net/')
		WebUI.navigateToUrl('https://bloodpressurecalculator.azurewebsites.net/')
	}

	@Given("user goes to the 'Blood Pressure Containerised' application")
	def I_want_to_go_to_BPC_App() {
		WebUI.openBrowser('http://20.150.152.147:22137')
		WebUI.navigateToUrl('http://20.150.152.147:22137')
	}

	@When("user enters {string} in the Systolic field on the 'Blood Pressure' calculator page")
	def user_enters_in_the_Systolic_field_on_the_calculator_page(String value) {
		WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Systolic_BP.Systolic'), value)
	}

	@When("user enters {string} in the Diastolic field on the 'Blood Pressure' calculator page")
	public void user_enters_in_the_Diastolic_field_on_the_calculator_page(String value) {
		WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Diastolic_BP.Diastolic'), value)
	}

	@When("user enters {string} in the Age field on the 'Blood Pressure' calculator page")
	public void user_enters_in_the_Age_field_on_the_calculator_page(String value) {
		WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Age_BP.Age'), value)
	}

	@When("user enters {string} in the Email field on the 'Blood Pressure' calculator page")
	public void user_enters_in_the_Email_field_on_the_calculator_page(String value) {
		WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Email_BP.Email'), value)
	}

	@When("user clears the Systolic field on the 'Blood Pressure' calculator page")
	def user_clears_Systolic_field_on_the_calculator_page() {
		WebUI.clearText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Systolic_BP.Systolic'))
	}

	@When("user clears the Diastolic field on the 'Blood Pressure' calculator page")
	def user_clears_Diastolic_field_on_the_calculator_page() {
		WebUI.clearText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Diastolic_BP.Diastolic'))
	}

	@When("user clears the Age field on the 'Blood Pressure' calculator page")
	def user_clears_Age_field_on_the_calculator_page() {
		WebUI.clearText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Age_BP.Age'))
	}

	@Then("user clicks on the submit button on the 'Blood Pressure' calculator page")
	def I_verify_the_status_in_submitButton() {
		WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Diastolic_btn btn-default'))
	}


	@Then("{string} results are displayed on 'Blood Pressure' calculator page")
	def verify_the_calculator_results(String expectValue) {
		String actualValue = WebUI.getText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/label_CalculatorResults'))
		assertEquals("Compared values are not equal ",expectValue, actualValue)
	}

	@Then("{string} results are not displayed on 'Blood Pressure' calculator page")
	def verify_not_the_calculator_results(String expectValue) {
		String actualValue = WebUI.getText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/label_CalculatorResults'))
		WebUI.verifyNotEqual(expectValue, actualValue)
	}

	@Then("'Systolic must be greater than Diastolic' error is displayed on 'Blood Pressure' calculator page")
	def verify_the_error_list_results() {
		String actualValue = WebUI.getText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/label_listError'))
		assertEquals("Compared values are not equal ",'Systolic must be greater than Diastolic', actualValue)
	}

	@Then("{string} error message is displayed under the {string} field on 'Blood Pressure' calculator page")
	def verify_the_field_error_message(String expectValue, String field) {
		String actualValue = WebUI.getText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/span_Error_'+field+'_Value'))
		assertEquals("Compared values are not equal ",expectValue, actualValue)
	}

	@Then("{string} data validation is displayed under the {string} field on 'Blood Pressure' calculator page")
	def verify_the_field_data_validation(String expectValue, String field) {
		String actualValue = WebUI.getText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/error_Validation_'+field+''))
		assertEquals("Compared values are not equal ",expectValue, actualValue)
	}


	@Then("user clicks on the 'Privacy Tab' button on the 'Blood Pressure' calculator page")
	def I_click_on_the_privacy_tab() {
		WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/link_Privacy_Tab'))
	}

	@Then("user clicks on the 'Home Tab' button on the 'Blood Pressure' calculator page")
	def I_click_on_the_home_tab() {
		WebUI.click(findTestObject('Object Repository/Page_Privacy Policy - BPCalculator/link_Home_tab'))
	}

	@Then("user clicks on the 'Privacy' Hyperlink on the 'Blood Pressure' calculator page")
	def I_click_on_the_privacy_hyperlink() {
		WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/link_Privacy_Tab'))
	}

	@Then("'Privacy Policy' header is displayed on Privacy Tab on the 'Blood Pressure' calculator page")
	def verify_the_privacy_header_tab() {
		String actualValue = WebUI.getText(findTestObject('Object Repository/Page_Privacy Policy - BPCalculator/privacy_header'))
		assertEquals("Compared values are not equal ",'Privacy Policy', actualValue)
	}

	@Then("'Use this page to detail your site's privacy policy.' body is displayed on Privacy Tab on the 'Blood Pressure' calculator page")
	def verify_the_privacy_body_tab() {
		String actualValue = WebUI.getText(findTestObject('Object Repository/Page_Privacy Policy - BPCalculator/privacy_body'))
		assertEquals("Compared values are not equal ",'Use this page to detail your site\'s privacy policy.', actualValue)
	}


	@Then("'BP Category Calculator' header is displayed on Home Tab on the 'Blood Pressure' calculator page")
	def verify_the_home_header_tab() {
		String actualValue = WebUI.getText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/home_header'))
		assertEquals("Compared values are not equal ",'BP Category Calculator', actualValue)
	}

	@Then("'© 2020 - BPCalculator - Privacy' header is displayed on Home Tab on the 'Blood Pressure' calculator page")
	def verify_the_home_footer_tab() {
		String actualValue = WebUI.getText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/home_Footer'))
		assertEquals("Compared values are not equal ",'© 2020 - BPCalculator - Privacy', actualValue)
	}

	@Then("{string} results are displayed under the 'Age' label on 'Blood Pressure' calculator page")
	def verify_the_age_results(String expectValue) {
		String actualValue = WebUI.getText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/label_Age_Results'))
		assertEquals("Compared values are not equal ",expectValue, actualValue)
	}



	@Then("{string} results are displayed under the 'Mean Arterial Pressure' label on 'Blood Pressure' calculator page")
	def verify_the_mean_arterial_pressure_results(String expectValue) {
		String actualValue = WebUI.getText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/label_MAP_Results'))
		assertEquals("Compared values are not equal ",expectValue, actualValue)
	}


	@Then("{string} results are displayed under the 'Pulse Pressure' label on 'Blood Pressure' calculator page")
	def verify_the_pule_pressure_results(String expectValue) {
		String actualValue = WebUI.getText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/label_PP_Results'))
		assertEquals("Compared values are not equal ",expectValue, actualValue)
	}


	@Then("user closes the 'Blood Pressure' calculator page")
	def I_verify_the_status_in_closeBrowser() {
		WebUI.closeBrowser()
	}


	@Then("{string} results are not displayed under the 'Age' label on 'Blood Pressure' calculator page")
	def verify_not_the_age_results(String expectValue) {
		String actualValue = WebUI.getText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/label_Age_Results'))
		WebUI.verifyNotEqual(expectValue, actualValue)
	}



	@Then("{string} results are not displayed under the 'Mean Arterial Pressure' label on 'Blood Pressure' calculator page")
	def verify_not_the_mean_arterial_pressure_results(String expectValue) {
		String actualValue = WebUI.getText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/label_MAP_Results'))
		WebUI.verifyNotEqual(expectValue, actualValue)
	}


	@Then("{string} results are not displayed under the 'Pulse Pressure' label on 'Blood Pressure' calculator page")
	def verify_not_the_pule_pressure_results(String expectValue) {
		String actualValue = WebUI.getText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/label_PP_Results'))
		WebUI.verifyNotEqual(expectValue, actualValue)
	}

	@Then("{string} error message is displayed on the 'Blood Pressure Containerised' calculator page")
	def verify_the_field_error_message_BPC(String expectValue) {
		String actualValue = WebUI.getText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/error_bPCError'))
		assertEquals("Compared values are not equal ",expectValue, actualValue)
	}

	@Then("{string} error message is displayed under the {string} field on 'Blood Pressure Containerised' calculator page")
	def verify_the_field_error_message_BPC(String expectValue, String field) {
		String actualValue = WebUI.getAttribute(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/span_Error_'+field+'_BPC', 'validationMessage'))
		assertEquals("Compared values are not equal ",expectValue, actualValue)
	}
	
	@Then("'Your Previous Readings' header is displayed on Table on the 'Blood Pressure Containerised' calculator page")
	def verify_the_table_header() {
		String actualValue = WebUI.getText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/pr_table_header'))
		assertEquals("Compared values are not equal ",'Your Previous Readings', actualValue)
	}
	
	@Then("{string} is displayed on Table on the 'Blood Pressure Containerised' calculator page")
	def verify_the_table_body(String expectValue) {
		String actualValue = WebUI.getText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/pr_table_body'))
		WebUI.verifyMatch(actualValue, ".*"+expectValue+".*", true)
	}
	
	@Then("{string} is not displayed on Table on the 'Blood Pressure Containerised' calculator page")
	def verify_not_the_table_body(String expectValue) {
		String actualValue = WebUI.getText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/pr_table_body'))
		WebUI.verifyNotMatch(actualValue, ".*"+expectValue+".*", true)
	}

}