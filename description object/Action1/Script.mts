systemutil.Run "chrome", "https://petstore.octoperf.com/"

Dim browser1
Set browser1 = description.Create
browser1("title").value = "JPetStore Demo"

Dim page1
Set page1 = description.Create
page1("title").value =  "JPetStore Demo"

Dim link1
Set link1 = description.Create
link1("href").value = "https://petstore.octoperf.com/actions/Catalog.action"

Browser(browser1).page(page1).link(link1).Click

