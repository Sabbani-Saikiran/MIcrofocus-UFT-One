Browser("JPetStore Demo").Page("JPetStore Demo").Link("Fish").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("JPetStore Demo").Page("JPetStore Demo_2").WebElement("FI-SW-01").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("JPetStore Demo").Page("JPetStore Demo_2").Link("FI-SW-01").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("JPetStore Demo").Page("JPetStore Demo_3").Link("Add to Cart").Click @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("JPetStore Demo").Page("JPetStore Demo_4").WebNumber("EST-1").GetROProperty("value") @@ script infofile_;_ZIP::ssf9.xml_;_
 @@ script infofile_;_ZIP::ssf10.xml_;_
If x = 1 Then
	Reporter.ReportEvent micPass, "Test step is pass", "value is 1"
else
	Reporter.ReportEvent micFail,  "Test step is Fail", "value is not 1"
End If
Browser("JPetStore Demo").Page("JPetStore Demo_4").Link("Proceed to Checkout").Click
