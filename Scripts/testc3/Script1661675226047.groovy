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

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/body_BPCalculator                          _c0af5f'))

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Systolic_BP.Systolic'), 
    '90')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/body_BPCalculator                          _c0af5f'))

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Diastolic_BP.Diastolic'), 
    '90')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/body_BPCalculator                          _c0af5f'))

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Age_BP.Age'), '40')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Age_btn btn-default'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/label_listError'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/body_BPCalculator                          _c0af5f_1'))

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Systolic_BP.Systolic'), 
    '')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/body_BPCalculator                          _c0af5f_1'))

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Diastolic_BP.Diastolic'), 
    '')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/body_BPCalculator                          _c0af5f_1'))

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Age_BP.Age'), '')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Age_btn btn-default'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/span_The Systolic field is required'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/span_The Diastolic field is required'))

WebUI.click(findTestObject('null'))

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Systolic_BP.Systolic'), 
    '200')

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Diastolic_BP.Diastolic'), 
    '200')

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Age_BP.Age'), '900')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/error_DiastolicField'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/error_SystolicField'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/link_Privacy_Tab'))

WebUI.click(findTestObject('Object Repository/Page_Privacy Policy - BPCalculator/privacy_header'))

WebUI.click(findTestObject('Object Repository/Page_Privacy Policy - BPCalculator/privacy_body'))

WebUI.click(findTestObject('Object Repository/Page_Privacy Policy - BPCalculator/link_Home_tab'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/link_Privacy_Tab'))

WebUI.click(findTestObject('Object Repository/Page_Privacy Policy - BPCalculator/a_BPCalculator'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/home_header'))

WebUI.openBrowser('')

WebUI.navigateToUrl('https://bloodpressurecalculator.azurewebsites.net/')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/body_BPCalculator                          _c0af5f'))

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Systolic_BP.Systolic'), 
    '90')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/body_BPCalculator                          _c0af5f'))

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Diastolic_BP.Diastolic'), 
    '90')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/body_BPCalculator                          _c0af5f'))

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Age_BP.Age'), '40')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Age_btn btn-default'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/label_listError'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/body_BPCalculator                          _c0af5f_1'))

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Systolic_BP.Systolic'), 
    '')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/body_BPCalculator                          _c0af5f_1'))

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Diastolic_BP.Diastolic'), 
    '')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/body_BPCalculator                          _c0af5f_1'))

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Age_BP.Age'), '')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Age_btn btn-default'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/span_The Systolic field is required'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/span_The Diastolic field is required'))

WebUI.click(findTestObject('null'))

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Systolic_BP.Systolic'), 
    '200')

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Diastolic_BP.Diastolic'), 
    '200')

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Age_BP.Age'), '900')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/error_DiastolicField'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/error_SystolicField'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/link_Privacy_Tab'))

WebUI.click(findTestObject('Object Repository/Page_Privacy Policy - BPCalculator/privacy_header'))

WebUI.click(findTestObject('Object Repository/Page_Privacy Policy - BPCalculator/privacy_body'))

WebUI.click(findTestObject('Object Repository/Page_Privacy Policy - BPCalculator/link_Home_tab'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/link_Privacy_Tab'))

WebUI.click(findTestObject('Object Repository/Page_Privacy Policy - BPCalculator/a_BPCalculator'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/home_header'))

WebUI.openBrowser('')

WebUI.navigateToUrl('https://bloodpressurecalculator.azurewebsites.net/')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/home_Footer'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/home_Footer'))

WebUI.openBrowser('')

WebUI.navigateToUrl('https://bloodpressurecalculator.azurewebsites.net/')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/body_BPCalculator                          _c0af5f'))

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Systolic_BP.Systolic'), 
    '90')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/body_BPCalculator                          _c0af5f'))

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Diastolic_BP.Diastolic'), 
    '90')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/body_BPCalculator                          _c0af5f'))

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Age_BP.Age'), '40')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Age_btn btn-default'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/label_listError'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/body_BPCalculator                          _c0af5f_1'))

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Systolic_BP.Systolic'), 
    '')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/body_BPCalculator                          _c0af5f_1'))

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Diastolic_BP.Diastolic'), 
    '')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/body_BPCalculator                          _c0af5f_1'))

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Age_BP.Age'), '')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Age_btn btn-default'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/span_The Systolic field is required'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/span_The Diastolic field is required'))

WebUI.click(findTestObject('null'))

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Systolic_BP.Systolic'), 
    '200')

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Diastolic_BP.Diastolic'), 
    '200')

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Age_BP.Age'), '900')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/error_DiastolicField'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/error_SystolicField'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/link_Privacy_Tab'))

WebUI.click(findTestObject('Object Repository/Page_Privacy Policy - BPCalculator/privacy_header'))

WebUI.click(findTestObject('Object Repository/Page_Privacy Policy - BPCalculator/privacy_body'))

WebUI.click(findTestObject('Object Repository/Page_Privacy Policy - BPCalculator/link_Home_tab'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/link_Privacy_Tab'))

WebUI.click(findTestObject('Object Repository/Page_Privacy Policy - BPCalculator/a_BPCalculator'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/home_header'))

WebUI.openBrowser('')

WebUI.navigateToUrl('https://bloodpressurecalculator.azurewebsites.net/')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/body_BPCalculator                          _c0af5f'))

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Systolic_BP.Systolic'), 
    '90')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/body_BPCalculator                          _c0af5f'))

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Diastolic_BP.Diastolic'), 
    '90')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/body_BPCalculator                          _c0af5f'))

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Age_BP.Age'), '40')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Age_btn btn-default'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/label_listError'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/body_BPCalculator                          _c0af5f_1'))

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Systolic_BP.Systolic'), 
    '')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/body_BPCalculator                          _c0af5f_1'))

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Diastolic_BP.Diastolic'), 
    '')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/body_BPCalculator                          _c0af5f_1'))

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Age_BP.Age'), '')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Age_btn btn-default'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/span_The Systolic field is required'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/span_The Diastolic field is required'))

WebUI.click(findTestObject('null'))

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Systolic_BP.Systolic'), 
    '200')

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Diastolic_BP.Diastolic'), 
    '200')

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Age_BP.Age'), '900')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/error_DiastolicField'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/error_SystolicField'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/link_Privacy_Tab'))

WebUI.click(findTestObject('Object Repository/Page_Privacy Policy - BPCalculator/privacy_header'))

WebUI.click(findTestObject('Object Repository/Page_Privacy Policy - BPCalculator/privacy_body'))

WebUI.click(findTestObject('Object Repository/Page_Privacy Policy - BPCalculator/link_Home_tab'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/link_Privacy_Tab'))

WebUI.click(findTestObject('Object Repository/Page_Privacy Policy - BPCalculator/a_BPCalculator'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/home_header'))

WebUI.openBrowser('')

WebUI.navigateToUrl('https://bloodpressurecalculator.azurewebsites.net/')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/home_Footer'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/home_Footer'))

WebUI.openBrowser('')

WebUI.navigateToUrl('https://bloodpressurecalculator.azurewebsites.net/')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/body_BPCalculator                          _c0af5f'))

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Systolic_BP.Systolic'), 
    '172.5')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/body_BPCalculator                          _c0af5f'))

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Diastolic_BP.Diastolic'), 
    '55.5')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/body_BPCalculator                          _c0af5f'))

WebUI.setText(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Age_BP.Age'), '22.5')

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/input_Age_btn btn-default'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/error_Validation_Systolic'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/error_Validation_Diastolic'))

WebUI.click(findTestObject('Object Repository/Page_BP Category Calculator - BPCalculator/error_Validation_Age'))

