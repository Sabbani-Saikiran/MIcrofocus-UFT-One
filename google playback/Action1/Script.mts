 @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Google").Page("Google").WebEdit("name:=q").Set "uft"
wait(5)
Browser("Google").Page("Google").WebButton("Google Search").Click @@ script infofile_;_ZIP::ssf2.xml_;_
browser("Google").Close
