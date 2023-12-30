systemutil.Run "notepad"
Window("Notepad").WinEditor("Edit").Type "Saikiran"
Window("Notepad").Close
Window("Notepad").Dialog("Notepad").WinButton("Don't Save").Click



