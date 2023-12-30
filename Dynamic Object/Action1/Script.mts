systemutil.Run "chrome", "https://petstore.octoperf.com/"

Browser("title:=JPetStore Demo").Page("title:=JPetStore Demo").link("href:=https://petstore.octoperf.com/actions/Catalog.action").Click
