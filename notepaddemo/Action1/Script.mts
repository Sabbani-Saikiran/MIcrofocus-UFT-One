systemutil.Run("notepad")
Window("Notepad").WinEditor("Edit").Type "saikiran"
window("Notepad").Close
Window("Notepad").Dialog("Notepad").WinButton("Don't Save").Click


