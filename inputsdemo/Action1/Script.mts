systemutil.Run("C:\Program Files (x86)\OpenText\UFT One\samples\Flights Application\FlightsGUI.exe")
wait(2)
wpfwindow("OpenText MyFlight Sample").WpfEdit("agentName").Set "john"
wait(2)
wpfwindow("OpenText MyFlight Sample").WpfEdit("password").Set "HP"
wait(2)
wpfwindow("OpenText MyFlight Sample").WpfButton("OK").Click
wait(2)
wpfwindow("OpenText MyFlight Sample").Close
