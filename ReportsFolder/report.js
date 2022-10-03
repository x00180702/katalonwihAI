$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/bloodPressureCalculatorTest1.feature");
formatter.feature({
  "name": "Low Blood Pressure",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@bpTest"
    }
  ]
});
formatter.scenario({
  "name": "Test case 1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@bpTest"
    }
  ]
});
formatter.step({
  "name": "user goes to the \u0027Blood Pressure\u0027 application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.I_want_to_go_to_BP_App()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"70\" in the Systolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Systolic_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"40\" in the Diastolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Diastolic_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"80\" in the Age field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Age_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the submit button on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.I_verify_the_status_in_submitButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Low Blood Pressure\" results are displayed on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_calculator_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.I_verify_the_status_in_closeBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("Include/features/bloodPressureCalculatorTest10.feature");
formatter.feature({
  "name": "Empty Age Field",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@bpTest"
    }
  ]
});
formatter.scenario({
  "name": "Test case 10",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@bpTest"
    }
  ]
});
formatter.step({
  "name": "user goes to the \u0027Blood Pressure\u0027 application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.I_want_to_go_to_BP_App()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clears the Systolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.user_clears_Systolic_field_on_the_calculator_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clears the Diastolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.user_clears_Diastolic_field_on_the_calculator_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clears the Age field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.user_clears_Age_field_on_the_calculator_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the submit button on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.I_verify_the_status_in_submitButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"The Systolic field is required.\" error message is displayed under the \"Systolic\" field on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_field_error_message(String,String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to get text of object\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword.getText(GetTextKeyword.groovy:88)\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword.execute(GetTextKeyword.groovy:67)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.getText(WebUiBuiltInKeywords.groovy:918)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$getText$3.call(Unknown Source)\n\tat bloodPressureApp.stepDefs.verify_the_field_error_message(stepDefs.groovy:127)\n\tat ✽.\"The Systolic field is required.\" error message is displayed under the \"Systolic\" field on \u0027Blood Pressure\u0027 calculator page(Include/features/bloodPressureCalculatorTest10.feature:12)\nCaused by: java.lang.IllegalArgumentException: Object is null\n\tat com.kms.katalon.core.helper.KeywordHelper.checkTestObjectParameter(KeywordHelper.java:33)\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword$_getText_closure1.doCall(GetTextKeyword.groovy:76)\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword$_getText_closure1.call(GetTextKeyword.groovy)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword.getText(GetTextKeyword.groovy:88)\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword.execute(GetTextKeyword.groovy:67)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.getText(WebUiBuiltInKeywords.groovy:918)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$getText$3.call(Unknown Source)\n\tat bloodPressureApp.stepDefs.verify_the_field_error_message(stepDefs.groovy:127)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:68)\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\n\tat bloodPressureMonolith.run(bloodPressureMonolith:5)\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\n\tat com.kms.katalon.core.common.CommonExecutor.accessTestCaseMainPhase(CommonExecutor.java:65)\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:151)\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:106)\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:185)\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\n\tat TempTestSuite1664804332681.run(TempTestSuite1664804332681.groovy:36)\n",
  "status": "failed"
});
formatter.step({
  "name": "\"The Diastolic field is required.\" error message is displayed under the \"Diastolic\" field on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_field_error_message(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "\"The Age field is required.\" error message is displayed under the \"Age\" field on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_field_error_message(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user closes the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.I_verify_the_status_in_closeBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Include/features/bloodPressureCalculatorTest11.feature");
formatter.feature({
  "name": "Out of range age value",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@bpTest"
    }
  ]
});
formatter.scenario({
  "name": "Test case 11",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@bpTest"
    }
  ]
});
formatter.step({
  "name": "user goes to the \u0027Blood Pressure\u0027 application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.I_want_to_go_to_BP_App()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"20\" in the Systolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Systolic_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"200\" in the Diastolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Diastolic_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"101\" in the Age field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Age_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the submit button on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.I_verify_the_status_in_submitButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Invalid Systolic Value\" error message is displayed under the \"Systolic\" field on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_field_error_message(String,String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to get text of object\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword.getText(GetTextKeyword.groovy:88)\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword.execute(GetTextKeyword.groovy:67)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.getText(WebUiBuiltInKeywords.groovy:918)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$getText$3.call(Unknown Source)\n\tat bloodPressureApp.stepDefs.verify_the_field_error_message(stepDefs.groovy:127)\n\tat ✽.\"Invalid Systolic Value\" error message is displayed under the \"Systolic\" field on \u0027Blood Pressure\u0027 calculator page(Include/features/bloodPressureCalculatorTest11.feature:12)\nCaused by: java.lang.IllegalArgumentException: Object is null\n\tat com.kms.katalon.core.helper.KeywordHelper.checkTestObjectParameter(KeywordHelper.java:33)\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword$_getText_closure1.doCall(GetTextKeyword.groovy:76)\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword$_getText_closure1.call(GetTextKeyword.groovy)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword.getText(GetTextKeyword.groovy:88)\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword.execute(GetTextKeyword.groovy:67)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.getText(WebUiBuiltInKeywords.groovy:918)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$getText$3.call(Unknown Source)\n\tat bloodPressureApp.stepDefs.verify_the_field_error_message(stepDefs.groovy:127)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:68)\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\n\tat bloodPressureMonolith.run(bloodPressureMonolith:5)\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\n\tat com.kms.katalon.core.common.CommonExecutor.accessTestCaseMainPhase(CommonExecutor.java:65)\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:151)\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:106)\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:185)\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\n\tat TempTestSuite1664804332681.run(TempTestSuite1664804332681.groovy:36)\n",
  "status": "failed"
});
formatter.step({
  "name": "\"Invalid Diastolic Value\" error message is displayed under the \"Diastolic\" field on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_field_error_message(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "\"Invalid Age Range. Calculations are for ages over 15 \u0026 under 100\" error message is displayed under the \"Age\" field on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_field_error_message(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user closes the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.I_verify_the_status_in_closeBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Include/features/bloodPressureCalculatorTest12.feature");
formatter.feature({
  "name": "Check Mean Arterial Pressure",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@bpTest"
    }
  ]
});
formatter.scenario({
  "name": "Test case 12",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@bpTest"
    }
  ]
});
formatter.step({
  "name": "user goes to the \u0027Blood Pressure\u0027 application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.I_want_to_go_to_BP_App()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"75\" in the Systolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Systolic_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"45\" in the Diastolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Diastolic_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"20\" in the Age field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Age_field_on_the_calculator_page(String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to set text \u002720\u0027 of object \u0027Object Repository/Page_BP Category Calculator - BPCalculator/input_Age_BP.Age\u0027\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\n\tat com.kms.katalon.core.webui.keyword.builtin.SetTextKeyword.setText(SetTextKeyword.groovy:66)\n\tat com.kms.katalon.core.webui.keyword.builtin.SetTextKeyword.execute(SetTextKeyword.groovy:37)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.setText(WebUiBuiltInKeywords.groovy:980)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$setText$1.call(Unknown Source)\n\tat bloodPressureApp.stepDefs.user_enters_in_the_Age_field_on_the_calculator_page(stepDefs.groovy:78)\n\tat ✽.user enters \"20\" in the Age field on the \u0027Blood Pressure\u0027 calculator page(Include/features/bloodPressureCalculatorTest12.feature:10)\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d105.0.5195.52)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027jgunter-VirtualBox\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.15.0-48-generic\u0027, java.version: \u00271.8.0_342\u0027\nDriver info: com.kms.katalon.selenium.driver.CChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.52, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: /tmp/.com.google.Chrome.CiEzZF}, goog:chromeOptions: {debuggerAddress: localhost:45845}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 117c2e108f703e97069c2316fa196824\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027BP_Age\u0027]}\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat com.kms.katalon.selenium.driver.CChromeDriver.execute(CChromeDriver.java:19)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:432)\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:348)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:311)\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.lambda$new$1(EventFiringWebDriver.java:105)\n\tat com.sun.proxy.$Proxy24.findElements(Unknown Source)\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElements(EventFiringWebDriver.java:182)\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findElementByNormalMethods(WebUiCommonHelper.java:1016)\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findElementsBySelectedMethod(WebUiCommonHelper.java:911)\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findElementsBySelectedMethod(WebUiCommonHelper.java:894)\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findElementsBySelectedMethod(WebUiCommonHelper.java:889)\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findElementsByDefault(WebUiCommonHelper.java:885)\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findElementsWithSelfHealing(WebUiCommonHelper.java:733)\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findWebElements(WebUiCommonHelper.java:718)\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findWebElement(WebUiCommonHelper.java:1365)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIAbstractKeyword.findWebElement(WebUIAbstractKeyword.groovy:27)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIAbstractKeyword.findWebElement(WebUIAbstractKeyword.groovy:26)\n\tat com.kms.katalon.core.webui.keyword.builtin.SetTextKeyword$_setText_closure1.doCall(SetTextKeyword.groovy:51)\n\tat com.kms.katalon.core.webui.keyword.builtin.SetTextKeyword$_setText_closure1.call(SetTextKeyword.groovy)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\n\tat com.kms.katalon.core.webui.keyword.builtin.SetTextKeyword.setText(SetTextKeyword.groovy:66)\n\tat com.kms.katalon.core.webui.keyword.builtin.SetTextKeyword.execute(SetTextKeyword.groovy:37)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.setText(WebUiBuiltInKeywords.groovy:980)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$setText$1.call(Unknown Source)\n\tat bloodPressureApp.stepDefs.user_enters_in_the_Age_field_on_the_calculator_page(stepDefs.groovy:78)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:68)\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\n\tat bloodPressureMonolith.run(bloodPressureMonolith:5)\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\n\tat com.kms.katalon.core.common.CommonExecutor.accessTestCaseMainPhase(CommonExecutor.java:65)\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:151)\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:106)\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:185)\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\n\tat TempTestSuite1664804332681.run(TempTestSuite1664804332681.groovy:36)\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks on the submit button on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.I_verify_the_status_in_submitButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "\"Low Blood Pressure\" results are displayed on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_calculator_results(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "\"Average value for your age group [20-24] is 120/79\" results are displayed under the \u0027Age\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_age_results(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "\"Mean Arterial Pressure: 105\" results are displayed under the \u0027Mean Arterial Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_mean_arterial_pressure_results(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "\"Pulse Pressure: 31\" results are displayed under the \u0027Pulse Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_pule_pressure_results(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user closes the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.I_verify_the_status_in_closeBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Include/features/bloodPressureCalculatorTest13.feature");
formatter.feature({
  "name": "Check Pulse Pressure",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@bpTest"
    }
  ]
});
formatter.scenario({
  "name": "Test case 13",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@bpTest"
    }
  ]
});
formatter.step({
  "name": "user goes to the \u0027Blood Pressure\u0027 application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.I_want_to_go_to_BP_App()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"106\" in the Systolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Systolic_field_on_the_calculator_page(String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to set text \u0027106\u0027 of object \u0027Object Repository/Page_BP Category Calculator - BPCalculator/input_Systolic_BP.Systolic\u0027\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\n\tat com.kms.katalon.core.webui.keyword.builtin.SetTextKeyword.setText(SetTextKeyword.groovy:66)\n\tat com.kms.katalon.core.webui.keyword.builtin.SetTextKeyword.execute(SetTextKeyword.groovy:37)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.setText(WebUiBuiltInKeywords.groovy:980)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$setText$1.call(Unknown Source)\n\tat bloodPressureApp.stepDefs.user_enters_in_the_Systolic_field_on_the_calculator_page(stepDefs.groovy:68)\n\tat ✽.user enters \"106\" in the Systolic field on the \u0027Blood Pressure\u0027 calculator page(Include/features/bloodPressureCalculatorTest13.feature:8)\nCaused by: org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d105.0.5195.52)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027jgunter-VirtualBox\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.15.0-48-generic\u0027, java.version: \u00271.8.0_342\u0027\nDriver info: com.kms.katalon.selenium.driver.CChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.52, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: /tmp/.com.google.Chrome.rxKZZ3}, goog:chromeOptions: {debuggerAddress: localhost:40607}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 24e8f48a918a3ebf0c07ddfdfbf4e9b1\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027BP_Systolic\u0027]}\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat com.kms.katalon.selenium.driver.CChromeDriver.execute(CChromeDriver.java:19)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByXPath(RemoteWebDriver.java:432)\n\tat org.openqa.selenium.By$ByXPath.findElements(By.java:348)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:311)\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.lambda$new$1(EventFiringWebDriver.java:105)\n\tat com.sun.proxy.$Proxy24.findElements(Unknown Source)\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElements(EventFiringWebDriver.java:182)\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findElementByNormalMethods(WebUiCommonHelper.java:1016)\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findElementsBySelectedMethod(WebUiCommonHelper.java:911)\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findElementsBySelectedMethod(WebUiCommonHelper.java:894)\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findElementsBySelectedMethod(WebUiCommonHelper.java:889)\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findElementsByDefault(WebUiCommonHelper.java:885)\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findElementsWithSelfHealing(WebUiCommonHelper.java:733)\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findWebElements(WebUiCommonHelper.java:718)\n\tat com.kms.katalon.core.webui.common.WebUiCommonHelper.findWebElement(WebUiCommonHelper.java:1365)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIAbstractKeyword.findWebElement(WebUIAbstractKeyword.groovy:27)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIAbstractKeyword.findWebElement(WebUIAbstractKeyword.groovy:26)\n\tat com.kms.katalon.core.webui.keyword.builtin.SetTextKeyword$_setText_closure1.doCall(SetTextKeyword.groovy:55)\n\tat com.kms.katalon.core.webui.keyword.builtin.SetTextKeyword$_setText_closure1.call(SetTextKeyword.groovy)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\n\tat com.kms.katalon.core.webui.keyword.builtin.SetTextKeyword.setText(SetTextKeyword.groovy:66)\n\tat com.kms.katalon.core.webui.keyword.builtin.SetTextKeyword.execute(SetTextKeyword.groovy:37)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.setText(WebUiBuiltInKeywords.groovy:980)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$setText$1.call(Unknown Source)\n\tat bloodPressureApp.stepDefs.user_enters_in_the_Systolic_field_on_the_calculator_page(stepDefs.groovy:68)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:68)\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\n\tat bloodPressureMonolith.run(bloodPressureMonolith:5)\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\n\tat com.kms.katalon.core.common.CommonExecutor.accessTestCaseMainPhase(CommonExecutor.java:65)\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:151)\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:106)\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:185)\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\n\tat TempTestSuite1664804332681.run(TempTestSuite1664804332681.groovy:36)\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters \"66\" in the Diastolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Diastolic_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"45\" in the Age field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Age_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the submit button on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.I_verify_the_status_in_submitButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "\"Ideal Blood Pressure\" results are displayed on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_calculator_results(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "\"Average value for your age group [45-49] is 127/84\" results are displayed under the \u0027Age\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_age_results(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "\"Mean Arterial Pressure: 150\" results are displayed under the \u0027Mean Arterial Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_mean_arterial_pressure_results(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "\"Pulse Pressure: 41\" results are displayed under the \u0027Pulse Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_pule_pressure_results(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user closes the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.I_verify_the_status_in_closeBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Include/features/bloodPressureCalculatorTest14.feature");
formatter.feature({
  "name": "Check All Results Together",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@bpTest"
    }
  ]
});
formatter.scenario({
  "name": "Test case 14",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@bpTest"
    }
  ]
});
formatter.step({
  "name": "user goes to the \u0027Blood Pressure\u0027 application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.I_want_to_go_to_BP_App()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"181\" in the Systolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Systolic_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"92\" in the Diastolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Diastolic_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"60\" in the Age field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Age_field_on_the_calculator_page(String)"
});
