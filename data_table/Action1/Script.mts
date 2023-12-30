Systemutil.Run ("C:\Program Files (x86)\OpenText\UFT One\samples\Flights Application\FlightsGUI.exe")
WpfWindow("OpenText MyFlight Sample").WpfEdit("agentName").Set "john"
WpfWindow("OpenText MyFlight Sample").WpfEdit("password").SetSecure "658c02f7e3eb9a15e7cd" @@ hightlight id_;_2138144264_;_script infofile_;_ZIP::ssf30.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_2142099112_;_script infofile_;_ZIP::ssf31.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfComboBox("fromCity").Select datatable("from",dtglobalsheet) @@ hightlight id_;_2132789232_;_script infofile_;_ZIP::ssf33.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfComboBox("toCity").Select datatable("to",dtglobalsheet) @@ hightlight id_;_2138146184_;_script infofile_;_ZIP::ssf35.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2132791392_;_script infofile_;_ZIP::ssf36.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 0,0 @@ hightlight id_;_2132791584_;_script infofile_;_ZIP::ssf37.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_2138149400_;_script infofile_;_ZIP::ssf38.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfEdit("passengerName").Set datatable("passengername",dtglobalsheet) @@ hightlight id_;_2138149544_;_script infofile_;_ZIP::ssf39.xml_;_
WpfWindow("OpenText MyFlight Sample").WpfButton("ORDER").Click @@ hightlight id_;_2138151032_;_script infofile_;_ZIP::ssf40.xml_;_
WpfWindow("OpenText MyFlight Sample").Close @@ hightlight id_;_2623816_;_script infofile_;_ZIP::ssf41.xml_;_
