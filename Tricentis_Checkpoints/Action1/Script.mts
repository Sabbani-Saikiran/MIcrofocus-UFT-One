Browser("Demo Web Shop").Page("Demo Web Shop").WebEdit("NewsletterEmail").Check CheckPoint("NewsletterEmail") @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Demo Web Shop").Page("Demo Web Shop").WebEdit("NewsletterEmail").Set "saikirandemo@gmail.com" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Demo Web Shop").Page("Demo Web Shop").WebEdit("NewsletterEmail").Check CheckPoint("NewsletterEmail_2") @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Demo Web Shop").Page("Demo Web Shop").Image("Tricentis Demo Web Shop").Check CheckPoint("Tricentis Demo Web Shop") @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Demo Web Shop").Page("Demo Web Shop").Check CheckPoint("Demo Web Shop_2") @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("Demo Web Shop").Page("Demo Web Shop").Sync
Browser("Demo Web Shop").Page("Demo Web Shop").Check CheckPoint("Demo Web Shop") @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Demo Web Shop").Page("Demo Web Shop").Link("Log in").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Demo Web Shop").Page("Demo Web Shop. Login").WebEdit("Email").Set "demo@gmail.com" @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Demo Web Shop").Page("Demo Web Shop. Login").WebEdit("Password").SetSecure "658bb43c1e4dcb44b0c697c310ced557" @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Demo Web Shop").Page("Demo Web Shop. Login").WebButton("Log in").Click @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Demo Web Shop").Page("Demo Web Shop. Login").Check CheckPoint("Demo Web Shop. Login") @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Demo Web Shop").Page("Demo Web Shop. Login").Check CheckPoint("Demo Web Shop. Login_2") @@ hightlight id_;_263624_;_script infofile_;_ZIP::ssf14.xml_;_
Browser("Demo Web Shop").Page("Demo Web Shop. Login").Sync
Browser("Demo Web Shop").CloseAllTabs @@ hightlight id_;_263624_;_script infofile_;_ZIP::ssf12.xml_;_
