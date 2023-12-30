For i = 1 To 10 Step 1
	systemutil.Run "notepad"
	Window("Notepad").WinEditor("Edit").Type RandomNumber(1,1000)
	window("Notepad").Close
	Window("Notepad").Dialog("Notepad").WinButton("Don't Save").Click


Next
