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
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to get text of object\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword.getText(GetTextKeyword.groovy:88)\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword.execute(GetTextKeyword.groovy:67)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.getText(WebUiBuiltInKeywords.groovy:918)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$getText$3.call(Unknown Source)\n\tat bloodPressureApp.stepDefs.verify_the_field_error_message(stepDefs.groovy:127)\n\tat ✽.\"The Systolic field is required.\" error message is displayed under the \"Systolic\" field on \u0027Blood Pressure\u0027 calculator page(Include/features/bloodPressureCalculatorTest10.feature:12)\nCaused by: java.lang.IllegalArgumentException: Object is null\n\tat com.kms.katalon.core.helper.KeywordHelper.checkTestObjectParameter(KeywordHelper.java:33)\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword$_getText_closure1.doCall(GetTextKeyword.groovy:76)\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword$_getText_closure1.call(GetTextKeyword.groovy)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword.getText(GetTextKeyword.groovy:88)\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword.execute(GetTextKeyword.groovy:67)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.getText(WebUiBuiltInKeywords.groovy:918)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$getText$3.call(Unknown Source)\n\tat bloodPressureApp.stepDefs.verify_the_field_error_message(stepDefs.groovy:127)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:68)\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\n\tat bloodPressureMonolith.run(bloodPressureMonolith:4)\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:369)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:369)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:369)\n\tat com.kms.katalon.core.common.CommonExecutor.accessTestCaseMainPhase(CommonExecutor.java:65)\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:151)\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:106)\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:185)\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\n\tat TempTestSuite1664828477740.run(TempTestSuite1664828477740.groovy:36)\n",
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
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to get text of object\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:64)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:26)\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword.getText(GetTextKeyword.groovy:88)\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword.execute(GetTextKeyword.groovy:67)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.getText(WebUiBuiltInKeywords.groovy:918)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$getText$3.call(Unknown Source)\n\tat bloodPressureApp.stepDefs.verify_the_field_error_message(stepDefs.groovy:127)\n\tat ✽.\"Invalid Systolic Value\" error message is displayed under the \"Systolic\" field on \u0027Blood Pressure\u0027 calculator page(Include/features/bloodPressureCalculatorTest11.feature:12)\nCaused by: java.lang.IllegalArgumentException: Object is null\n\tat com.kms.katalon.core.helper.KeywordHelper.checkTestObjectParameter(KeywordHelper.java:33)\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword$_getText_closure1.doCall(GetTextKeyword.groovy:76)\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword$_getText_closure1.call(GetTextKeyword.groovy)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:20)\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword.getText(GetTextKeyword.groovy:88)\n\tat com.kms.katalon.core.webui.keyword.builtin.GetTextKeyword.execute(GetTextKeyword.groovy:67)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.getText(WebUiBuiltInKeywords.groovy:918)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$getText$3.call(Unknown Source)\n\tat bloodPressureApp.stepDefs.verify_the_field_error_message(stepDefs.groovy:127)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:68)\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:74)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:68)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\n\tat bloodPressureMonolith.run(bloodPressureMonolith:4)\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:369)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:369)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:369)\n\tat com.kms.katalon.core.common.CommonExecutor.accessTestCaseMainPhase(CommonExecutor.java:65)\n\tat com.kms.katalon.core.main.TestSuiteExecutor.accessTestSuiteMainPhase(TestSuiteExecutor.java:151)\n\tat com.kms.katalon.core.main.TestSuiteExecutor.execute(TestSuiteExecutor.java:106)\n\tat com.kms.katalon.core.main.TestCaseMain.startTestSuite(TestCaseMain.java:185)\n\tat com.kms.katalon.core.main.TestCaseMain$startTestSuite$0.call(Unknown Source)\n\tat TempTestSuite1664828477740.run(TempTestSuite1664828477740.groovy:36)\n",
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
  "name": "\"Average value for your age group [20-24] is 120/79\" results are displayed under the \u0027Age\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_age_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Mean Arterial Pressure: 105\" results are displayed under the \u0027Mean Arterial Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_mean_arterial_pressure_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Pulse Pressure: 31\" results are displayed under the \u0027Pulse Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_pule_pressure_results(String)"
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
  "status": "passed"
});
formatter.step({
  "name": "user enters \"66\" in the Diastolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Diastolic_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"45\" in the Age field on the \u0027Blood Pressure\u0027 calculator page",
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
  "name": "\"Ideal Blood Pressure\" results are displayed on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_calculator_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Average value for your age group [45-49] is 127/84\" results are displayed under the \u0027Age\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_age_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Mean Arterial Pressure: 150\" results are displayed under the \u0027Mean Arterial Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_mean_arterial_pressure_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Pulse Pressure: 41\" results are displayed under the \u0027Pulse Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_pule_pressure_results(String)"
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
  "name": "\"High Blood Pressure\" results are displayed on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_calculator_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Average value for your age group [60 and over] is 135/88\" results are displayed under the \u0027Age\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_age_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Mean Arterial Pressure: 242\" results are displayed under the \u0027Mean Arterial Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_mean_arterial_pressure_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Pulse Pressure: 90\" results are displayed under the \u0027Pulse Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_pule_pressure_results(String)"
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
formatter.uri("Include/features/bloodPressureCalculatorTest15.feature");
formatter.feature({
  "name": "Invalid (double) values",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@bpTest"
    }
  ]
});
formatter.scenario({
  "name": "Test case 15",
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
  "name": "user enters \"172.5\" in the Systolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Systolic_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"66.5\" in the Diastolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Diastolic_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"18.2\" in the Age field on the \u0027Blood Pressure\u0027 calculator page",
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
  "name": "\"The value \u0027172.5\u0027 is not valid for Systolic.\" data validation is displayed under the \"Systolic\" field on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_field_data_validation(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"The value \u002766.5\u0027 is not valid for Diastolic.\" data validation is displayed under the \"Diastolic\" field on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_field_data_validation(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"The value \u002718.2\u0027 is not valid for Age.\" data validation is displayed under the \"Age\" field on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_field_data_validation(String,String)"
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
formatter.uri("Include/features/bloodPressureCalculatorTest16.feature");
formatter.feature({
  "name": "Invalid (char) values",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@bpTest"
    }
  ]
});
formatter.scenario({
  "name": "Test case 16",
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
  "name": "user enters \"e\" in the Systolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Systolic_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"e\" in the Diastolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Diastolic_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"e\" in the Age field on the \u0027Blood Pressure\u0027 calculator page",
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
  "name": "\"Please enter a valid number.\" data validation is displayed under the \"Systolic\" field on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_field_data_validation(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Please enter a valid number.\" data validation is displayed under the \"Diastolic\" field on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_field_data_validation(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Please enter a valid number.\" data validation is displayed under the \"Age\" field on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_field_data_validation(String,String)"
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
formatter.uri("Include/features/bloodPressureCalculatorTest17.feature");
formatter.feature({
  "name": "Check Using Scenario Outline",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@bpTest"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Test case 17",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user goes to the \u0027Blood Pressure\u0027 application",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \u003cSystolic\u003e in the Systolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \u003cDiastolic\u003e in the Diastolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \u003cAgeValue\u003e in the Age field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on the submit button on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.step({
  "name": "\u003cResult\u003e results are displayed on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.step({
  "name": "\u003cAge\u003e results are displayed under the \u0027Age\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.step({
  "name": "\u003cMAP\u003e results are displayed under the \u0027Mean Arterial Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.step({
  "name": "\u003cPP\u003e results are displayed under the \u0027Pulse Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.step({
  "name": "user closes the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Systolic",
        "Diastolic",
        "AgeValue",
        "Result",
        "Age",
        "MAP",
        "PP"
      ]
    },
    {
      "cells": [
        "\"70\"",
        "\"40\"",
        "\"15\"",
        "\"Low Blood Pressure\"",
        "\"Average value for your age group [15-19] is 120/78\"",
        "\"Mean Arterial Pressure: 96\"",
        "\"Pulse Pressure: 31\""
      ]
    },
    {
      "cells": [
        "\"90\"",
        "\"60\"",
        "\"20\"",
        "\"Ideal Blood Pressure\"",
        "\"Average value for your age group [20-24] is 120/79\"",
        "\"Mean Arterial Pressure: 130\"",
        "\"Pulse Pressure: 31\""
      ]
    },
    {
      "cells": [
        "\"140\"",
        "\"80\"",
        "\"25\"",
        "\"Pre-High Blood Pressure\"",
        "\"Average value for your age group [25-29] is 121/80\"",
        "\"Mean Arterial Pressure: 193\"",
        "\"Pulse Pressure: 61\""
      ]
    },
    {
      "cells": [
        "\"180\"",
        "\"100\"",
        "\"30\"",
        "\"High Blood Pressure\"",
        "\"Average value for your age group [30-34] is 123/82\"",
        "\"Mean Arterial Pressure: 246\"",
        "\"Pulse Pressure: 81\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test case 17",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "user enters \"15\" in the Age field on the \u0027Blood Pressure\u0027 calculator page",
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
  "name": "\"Average value for your age group [15-19] is 120/78\" results are displayed under the \u0027Age\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_age_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Mean Arterial Pressure: 96\" results are displayed under the \u0027Mean Arterial Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_mean_arterial_pressure_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Pulse Pressure: 31\" results are displayed under the \u0027Pulse Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_pule_pressure_results(String)"
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
formatter.scenario({
  "name": "Test case 17",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "user enters \"90\" in the Systolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Systolic_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"60\" in the Diastolic field on the \u0027Blood Pressure\u0027 calculator page",
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
  "name": "\"Ideal Blood Pressure\" results are displayed on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_calculator_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Average value for your age group [20-24] is 120/79\" results are displayed under the \u0027Age\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_age_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Mean Arterial Pressure: 130\" results are displayed under the \u0027Mean Arterial Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_mean_arterial_pressure_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Pulse Pressure: 31\" results are displayed under the \u0027Pulse Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_pule_pressure_results(String)"
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
formatter.scenario({
  "name": "Test case 17",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "user enters \"140\" in the Systolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Systolic_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"80\" in the Diastolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Diastolic_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"25\" in the Age field on the \u0027Blood Pressure\u0027 calculator page",
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
  "name": "\"Pre-High Blood Pressure\" results are displayed on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_calculator_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Average value for your age group [25-29] is 121/80\" results are displayed under the \u0027Age\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_age_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Mean Arterial Pressure: 193\" results are displayed under the \u0027Mean Arterial Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_mean_arterial_pressure_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Pulse Pressure: 61\" results are displayed under the \u0027Pulse Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_pule_pressure_results(String)"
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
formatter.scenario({
  "name": "Test case 17",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "user enters \"180\" in the Systolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Systolic_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"100\" in the Diastolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Diastolic_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"30\" in the Age field on the \u0027Blood Pressure\u0027 calculator page",
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
  "name": "\"High Blood Pressure\" results are displayed on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_calculator_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Average value for your age group [30-34] is 123/82\" results are displayed under the \u0027Age\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_age_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Mean Arterial Pressure: 246\" results are displayed under the \u0027Mean Arterial Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_mean_arterial_pressure_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Pulse Pressure: 81\" results are displayed under the \u0027Pulse Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_pule_pressure_results(String)"
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
formatter.uri("Include/features/bloodPressureCalculatorTest18.feature");
formatter.feature({
  "name": "Check Using Scenario Outline - Negaive Test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@bpTest"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Test case 18",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user goes to the \u0027Blood Pressure\u0027 application",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \u003cSystolic\u003e in the Systolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \u003cDiastolic\u003e in the Diastolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \u003cAgeValue\u003e in the Age field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on the submit button on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.step({
  "name": "\u003cResult\u003e results are not displayed on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.step({
  "name": "\u003cAge\u003e results are not displayed under the \u0027Age\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.step({
  "name": "\u003cMAP\u003e results are not displayed under the \u0027Mean Arterial Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.step({
  "name": "\u003cPP\u003e results are not displayed under the \u0027Pulse Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.step({
  "name": "user closes the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Systolic",
        "Diastolic",
        "AgeValue",
        "Result",
        "Age",
        "MAP",
        "PP"
      ]
    },
    {
      "cells": [
        "\"70\"",
        "\"40\"",
        "\"15\"",
        "\"Ideal Blood Pressure\"",
        "\"Average value for your age group [25-29] is 127/84\"",
        "\"Mean Arterial Pressure: 151\"",
        "\"Pulse Pressure: 11\""
      ]
    },
    {
      "cells": [
        "\"90\"",
        "\"60\"",
        "\"20\"",
        "\"High Blood Pressure\"",
        "\"Average value for your age group [30-34] is 120/79\"",
        "\"Mean Arterial Pressure: 131\"",
        "\"Pulse Pressure: 21\""
      ]
    },
    {
      "cells": [
        "\"140\"",
        "\"80\"",
        "\"25\"",
        "\"Low Blood Pressure\"",
        "\"Average value for your age group [15-19] is 121/80\"",
        "\"Mean Arterial Pressure: 194\"",
        "\"Pulse Pressure: 31\""
      ]
    },
    {
      "cells": [
        "\"180\"",
        "\"100\"",
        "\"30\"",
        "\"Pre-High Blood Pressure\"",
        "\"Average value for your age group [20-24] is 123/82\"",
        "\"Mean Arterial Pressure: 245\"",
        "\"Pulse Pressure: 41\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test case 18",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "user enters \"15\" in the Age field on the \u0027Blood Pressure\u0027 calculator page",
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
  "name": "\"Ideal Blood Pressure\" results are not displayed on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_not_the_calculator_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Average value for your age group [25-29] is 127/84\" results are not displayed under the \u0027Age\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_not_the_age_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Mean Arterial Pressure: 151\" results are not displayed under the \u0027Mean Arterial Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_not_the_mean_arterial_pressure_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Pulse Pressure: 11\" results are not displayed under the \u0027Pulse Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_not_the_pule_pressure_results(String)"
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
formatter.scenario({
  "name": "Test case 18",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "user enters \"90\" in the Systolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Systolic_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"60\" in the Diastolic field on the \u0027Blood Pressure\u0027 calculator page",
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
  "name": "\"High Blood Pressure\" results are not displayed on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_not_the_calculator_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Average value for your age group [30-34] is 120/79\" results are not displayed under the \u0027Age\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_not_the_age_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Mean Arterial Pressure: 131\" results are not displayed under the \u0027Mean Arterial Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_not_the_mean_arterial_pressure_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Pulse Pressure: 21\" results are not displayed under the \u0027Pulse Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_not_the_pule_pressure_results(String)"
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
formatter.scenario({
  "name": "Test case 18",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "user enters \"140\" in the Systolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Systolic_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"80\" in the Diastolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Diastolic_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"25\" in the Age field on the \u0027Blood Pressure\u0027 calculator page",
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
  "name": "\"Low Blood Pressure\" results are not displayed on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_not_the_calculator_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Average value for your age group [15-19] is 121/80\" results are not displayed under the \u0027Age\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_not_the_age_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Mean Arterial Pressure: 194\" results are not displayed under the \u0027Mean Arterial Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_not_the_mean_arterial_pressure_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Pulse Pressure: 31\" results are not displayed under the \u0027Pulse Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_not_the_pule_pressure_results(String)"
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
formatter.scenario({
  "name": "Test case 18",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "user enters \"180\" in the Systolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Systolic_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"100\" in the Diastolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Diastolic_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"30\" in the Age field on the \u0027Blood Pressure\u0027 calculator page",
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
  "name": "\"Pre-High Blood Pressure\" results are not displayed on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_not_the_calculator_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Average value for your age group [20-24] is 123/82\" results are not displayed under the \u0027Age\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_not_the_age_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Mean Arterial Pressure: 245\" results are not displayed under the \u0027Mean Arterial Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_not_the_mean_arterial_pressure_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Pulse Pressure: 41\" results are not displayed under the \u0027Pulse Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_not_the_pule_pressure_results(String)"
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
formatter.uri("Include/features/bloodPressureCalculatorTest19.feature");
formatter.feature({
  "name": "Boundary Value Analysis Testing",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@bpTest"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Test case 19",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user goes to the \u0027Blood Pressure\u0027 application",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \u003cSystolic\u003e in the Systolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \u003cDiastolic\u003e in the Diastolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \u003cAgeValue\u003e in the Age field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on the submit button on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.step({
  "name": "\u003cResult\u003e results are displayed on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.step({
  "name": "\u003cAge\u003e results are displayed under the \u0027Age\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.step({
  "name": "\u003cMAP\u003e results are displayed under the \u0027Mean Arterial Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.step({
  "name": "\u003cPP\u003e results are displayed under the \u0027Pulse Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.step({
  "name": "user closes the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Systolic",
        "Diastolic",
        "AgeValue",
        "Result",
        "Age",
        "MAP",
        "PP"
      ]
    },
    {
      "cells": [
        "\"70\"",
        "\"40\"",
        "\"15\"",
        "\"Low Blood Pressure\"",
        "\"Average value for your age group [15-19] is 120/78\"",
        "\"Mean Arterial Pressure: 96\"",
        "\"Pulse Pressure: 31\""
      ]
    },
    {
      "cells": [
        "\"90\"",
        "\"60\"",
        "\"20\"",
        "\"Ideal Blood Pressure\"",
        "\"Average value for your age group [20-24] is 120/79\"",
        "\"Mean Arterial Pressure: 130\"",
        "\"Pulse Pressure: 31\""
      ]
    },
    {
      "cells": [
        "\"140\"",
        "\"80\"",
        "\"25\"",
        "\"Pre-High Blood Pressure\"",
        "\"Average value for your age group [25-29] is 121/80\"",
        "\"Mean Arterial Pressure: 193\"",
        "\"Pulse Pressure: 61\""
      ]
    },
    {
      "cells": [
        "\"180\"",
        "\"100\"",
        "\"30\"",
        "\"High Blood Pressure\"",
        "\"Average value for your age group [30-34] is 123/82\"",
        "\"Mean Arterial Pressure: 246\"",
        "\"Pulse Pressure: 81\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test case 19",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "user enters \"15\" in the Age field on the \u0027Blood Pressure\u0027 calculator page",
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
  "name": "\"Average value for your age group [15-19] is 120/78\" results are displayed under the \u0027Age\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_age_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Mean Arterial Pressure: 96\" results are displayed under the \u0027Mean Arterial Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_mean_arterial_pressure_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Pulse Pressure: 31\" results are displayed under the \u0027Pulse Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_pule_pressure_results(String)"
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
formatter.scenario({
  "name": "Test case 19",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "user enters \"90\" in the Systolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Systolic_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"60\" in the Diastolic field on the \u0027Blood Pressure\u0027 calculator page",
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
  "name": "\"Ideal Blood Pressure\" results are displayed on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_calculator_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Average value for your age group [20-24] is 120/79\" results are displayed under the \u0027Age\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_age_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Mean Arterial Pressure: 130\" results are displayed under the \u0027Mean Arterial Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_mean_arterial_pressure_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Pulse Pressure: 31\" results are displayed under the \u0027Pulse Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_pule_pressure_results(String)"
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
formatter.scenario({
  "name": "Test case 19",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "user enters \"140\" in the Systolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Systolic_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"80\" in the Diastolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Diastolic_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"25\" in the Age field on the \u0027Blood Pressure\u0027 calculator page",
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
  "name": "\"Pre-High Blood Pressure\" results are displayed on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_calculator_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Average value for your age group [25-29] is 121/80\" results are displayed under the \u0027Age\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_age_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Mean Arterial Pressure: 193\" results are displayed under the \u0027Mean Arterial Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_mean_arterial_pressure_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Pulse Pressure: 61\" results are displayed under the \u0027Pulse Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_pule_pressure_results(String)"
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
formatter.scenario({
  "name": "Test case 19",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "user enters \"180\" in the Systolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Systolic_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"100\" in the Diastolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Diastolic_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"30\" in the Age field on the \u0027Blood Pressure\u0027 calculator page",
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
  "name": "\"High Blood Pressure\" results are displayed on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_calculator_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Average value for your age group [30-34] is 123/82\" results are displayed under the \u0027Age\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_age_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Mean Arterial Pressure: 246\" results are displayed under the \u0027Mean Arterial Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_mean_arterial_pressure_results(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Pulse Pressure: 81\" results are displayed under the \u0027Pulse Pressure\u0027 label on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_pule_pressure_results(String)"
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
formatter.uri("Include/features/bloodPressureCalculatorTest2.feature");
formatter.feature({
  "name": "Pre-High Blood Pressure",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@bpTest"
    }
  ]
});
formatter.scenario({
  "name": "Test case 2",
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
  "name": "user enters \"100\" in the Systolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Systolic_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"80\" in the Diastolic field on the \u0027Blood Pressure\u0027 calculator page",
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
  "name": "\"Pre-High Blood Pressure\" results are displayed on \u0027Blood Pressure\u0027 calculator page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefs.verify_the_calculator_results(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: Compared values are not equal  expected:\u003c[Pre-High] Blood Pressure\u003e but was:\u003c[Ideal] Blood Pressure\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat org.junit.Assert$assertEquals.callStatic(Unknown Source)\n\tat bloodPressureApp.stepDefs.verify_the_calculator_results(stepDefs.groovy:110)\n\tat ✽.\"Pre-High Blood Pressure\" results are displayed on \u0027Blood Pressure\u0027 calculator page(Include/features/bloodPressureCalculatorTest2.feature:12)\n",
  "status": "failed"
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
formatter.uri("Include/features/bloodPressureCalculatorTest20.feature");
formatter.feature({
  "name": "Multiple Scenarios in 1 script",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@bpTest"
    }
  ]
});
formatter.scenario({
  "name": "Multi-Test case 1",
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
  "name": "user enters \"40\" in the Age field on the \u0027Blood Pressure\u0027 calculator page",
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
formatter.scenario({
  "name": "Multi-Test case 2",
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
  "name": "user enters \"110\" in the Systolic field on the \u0027Blood Pressure\u0027 calculator page",
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
  "name": "user enters \"20\" in the Age field on the \u0027Blood Pressure\u0027 calculator page",
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
  "name": "\"Ideal Blood Pressure\" results are displayed on \u0027Blood Pressure\u0027 calculator page",
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
formatter.scenario({
  "name": "Multi-Test case 3",
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
  "name": "user enters \"121\" in the Systolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Systolic_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"82\" in the Diastolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Diastolic_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"55\" in the Age field on the \u0027Blood Pressure\u0027 calculator page",
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
  "name": "\"Pre-High Blood Pressure\" results are displayed on \u0027Blood Pressure\u0027 calculator page",
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
formatter.scenario({
  "name": "Multi-Test case 4",
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
  "name": "user enters \"140\" in the Systolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Systolic_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"100\" in the Diastolic field on the \u0027Blood Pressure\u0027 calculator page",
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
  "name": "\"High Blood Pressure\" results are displayed on \u0027Blood Pressure\u0027 calculator page",
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
formatter.uri("Include/features/bloodPressureCalculatorTest3.feature");
formatter.feature({
  "name": "Ideal Blood Pressure",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@bpTest"
    }
  ]
});
formatter.scenario({
  "name": "Test case 3",
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
  "name": "user enters \"100\" in the Systolic field on the \u0027Blood Pressure\u0027 calculator page",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefs.user_enters_in_the_Systolic_field_on_the_calculator_page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"60\" in the Diastolic field on the \u0027Blood Pressure\u0027 calculator page",
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
  "name": "\"Ideal Blood Pressure\" results are displayed on \u0027Blood Pressure\u0027 calculator page",
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
formatter.uri("Include/features/bloodPressureCalculatorTest4.feature");
formatter.feature({
  "name": "High Blood Pressure",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@bpTest"
    }
  ]
});
formatter.scenario({
  "name": "Test case 4",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@bpTest"
    }
  ]
});
formatter.step({
  "name": "user goes to the \u0027Blood Pressure Containerised\u0027 application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefs.I_want_to_go_to_BPC_App()"
});
