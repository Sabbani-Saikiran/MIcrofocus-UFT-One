 @@ hightlight id_;_1921976016_;_script infofile_;_ZIP::ssf2.xml_;_

x = WpfWindow("OpenText MyFlight Sample").WpfEdit("agentName").GetROProperty("text")
If len(x) = 0 Then
        Reporter.ReportEvent micPass, "username fied is blank","test is pass"
 else
        Reporter.ReportEvent micFail, "username field is not blank","test is fail"
End If

y = WpfWindow("OpenText MyFlight Sample").WpfEdit("password").GetROProperty("text")
If len(y) = 0 Then
        Reporter.ReportEvent micPass, "password fied is blank","test is pass"
 else
        Reporter.ReportEvent micFail, "password field is not blank","test is fail"
End If




WpfWindow("OpenText MyFlight Sample").WpfEdit("agentName").Set "john"



WpfWindow("OpenText MyFlight Sample").WpfEdit("password").SetSecure "658d7aeff09a5dac1faf" @@ hightlight id_;_1957786912_;_script infofile_;_ZIP::ssf3.xml_;_
wait(3)

okbutton = WpfWindow("OpenText MyFlight Sample").WpfButton("OK").GetROProperty("enabled")
If okbutton = true Then
        reporter.ReportEvent micPass, "ok button enabled","test is pass"
 else
        reporter.ReportEvent micFail, "ok button disabled","test is fail"
End If
WpfWindow("OpenText MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_1957787200_;_script infofile_;_ZIP::ssf4.xml_;_
wait(3)
WpfWindow("OpenText MyFlight Sample").Close






