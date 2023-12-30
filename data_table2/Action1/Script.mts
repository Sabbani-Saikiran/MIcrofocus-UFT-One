systemutil.Run("C:\Program Files (x86)\OpenText\UFT One\samples\Flights Application\FlightsGUI.exe")
WpfWindow("OpenText MyFlight Sample").WpfEdit("agentName").Set "john"
WpfWindow("OpenText MyFlight Sample").WpfEdit("password").Set "HP"
WpfWindow("OpenText MyFlight Sample").WpfButton("OK").Click
WpfWindow("OpenText MyFlight Sample").WpfComboBox("fromCity").Select datatable("from",dtglobalsheet)
WpfWindow("OpenText MyFlight Sample").WpfComboBox("toCity").Select datatable("to",dtglobalsheet)
WpfWindow("OpenText MyFlight Sample").WpfButton("FIND FLIGHTS").Click
WpfWindow("OpenText MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 0,2
WpfWindow("OpenText MyFlight Sample").WpfButton("SELECT FLIGHT").Click
WpfWindow("OpenText MyFlight Sample").WpfEdit("passengerName").Set datatable("name",dtglobalsheet)
WpfWindow("OpenText MyFlight Sample").WpfButton("ORDER").Click
WpfWindow("OpenText MyFlight Sample").Close


