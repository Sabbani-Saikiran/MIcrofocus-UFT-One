
Browser("Demo Web Shop").Page("JPetStore Demo").Link("Fish").Click @@ script infofile_;_ZIP::ssf4.xml_;_
wait(2)
Browser("Demo Web Shop").Page("JPetStore Demo_2").Link("FI-SW-01").Click @@ script infofile_;_ZIP::ssf5.xml_;_
wait(2)
Browser("Demo Web Shop").Page("JPetStore Demo_3").Link("Add to Cart").Click @@ script infofile_;_ZIP::ssf6.xml_;_
wait(2)
Browser("Demo Web Shop").Page("JPetStore Demo_4").Link("Proceed to Checkout").Click @@ script infofile_;_ZIP::ssf7.xml_;_
wait(2)
Browser("Demo Web Shop").Page("JPetStore Demo_5").Sync
wait(2)
Browser("Demo Web Shop").CloseAllTabs @@ hightlight id_;_263624_;_script infofile_;_ZIP::ssf8.xml_;_
