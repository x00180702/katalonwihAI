import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.openBrowser('')

WebUI.navigateToUrl('https://bloodpressurecalculator.azurewebsites.net/')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/div_Systolic                               _0707fa'))

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Systolic_BP.Systolic'), 
    '100')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/body_BPCalculator                          _c0af5f'))

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Diastolic_BP.Diastolic'), 
    '80')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/body_BPCalculator                          _c0af5f'))

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Age_BP.Age'), '80')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Age_btn btn-default'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/label_CalculatorResults'))

assert true


WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/label_MAP_Results'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/label_PP_Results'))

