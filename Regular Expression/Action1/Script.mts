WpfWindow("OpenText MyFlight Sample").WpfEdit("agentName").Set "john" @@ hightlight id_;_2142287656_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfEdit("password").SetSecure "658e4d22394a03b2e7ca" @@ hightlight id_;_1956244568_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_2142289048_;_script infofile_;_ZIP::ssf5.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_1952677384_;_script infofile_;_ZIP::ssf6.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 0,0 @@ hightlight id_;_1952679784_;_script infofile_;_ZIP::ssf7.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_1952679112_;_script infofile_;_ZIP::ssf8.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfEdit("passengerName").Set "user1" @@ hightlight id_;_1952679736_;_script infofile_;_ZIP::ssf9.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfButton("ORDER").Click @@ hightlight id_;_1921513136_;_script infofile_;_ZIP::ssf10.xml_;_
wait(5)
WpfWindow("OpenText MyFlight Sample").WpfObject("Order 121 completed").Check CheckPoint("Order 121 completed") @@ hightlight id_;_1956177408_;_script infofile_;_ZIP::ssf11.xml_;_
WpfWindow("OpenText MyFlight Sample").Close @@ hightlight id_;_329208_;_script infofile_;_ZIP::ssf12.xml_;_
