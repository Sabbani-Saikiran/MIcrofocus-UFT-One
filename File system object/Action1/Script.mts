'Dim fso, obj
'Set obj = createobject("Scripting.FileSystemObject")
'Set fso = obj.CreateTextFile("D:\emp.txt",2)
'fso.Write "my name is saikiran"
'fso.Write vbcrlf
'fso.Write "i am a continuous learner"
'Set fso = nothing
'Set obj = nothing

Dim fso, obj
Set obj = createobject("Scripting.FileSystemObject")
Set fso = obj.OpenTextFile("D:\emp.txt",1)
x = fso.ReadAll
msgbox x
