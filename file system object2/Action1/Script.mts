Dim fso, obj
Set obj = createobject("Scripting.FileSystemObject")
Set fso = obj.CreateTextFile("D:\my details.txt",2)
fso.Write "Saikiran"
fso.Write vbcrlf
fso.Write "saikirandemo@gmail.com"
fso.Write vbcrlf
fso.Write "9700102308"
Set fso = nothing
Set obj = nothing
