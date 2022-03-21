SystemUtil.Run "chrome.exe","https://www.demoblaze.com/"
Wait 5
Browser("STORE").Page("STORE").Link("Phones").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Wait 5
Browser("STORE").Page("STORE_2").Link("Laptops").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Wait 5
Browser("STORE").Page("STORE_2").Link("Monitors").Click @@ script infofile_;_ZIP::ssf3.xml_;_
Wait 5
Browser("STORE").Page("STORE_2").Image("asusm").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Wait 5
Browser("STORE").Page("STORE_3").WebButton("Add to cart").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Wait 5
Browser("STORE").HandleDialog micOK @@ hightlight id_;_197238_;_script infofile_;_ZIP::ssf6.xml_;_
