# React-Tutorial
1.What is Emmet?
Answer:  Emmet is tool for programmers which converts the abbrevations into full code. it is used to increase productivity of the programmer. Emmet is commonly used with HTML, XML and CSS but it's use is not limited to these languages only. it can be used with other programming languages too. 
Example:if you need simple boilerplate of html just write html5 and you will get it in your vs code.
Steps to configure the Emmet in your VSCode
1. Open settings
2. Configure Emmet abbrevations as follows a. "javascript": "javascriptreact", // for .jsx files b."typescript": "typescriptreact" // for .tsx files Likewise we setup emmet for other files too.

2.what is abbreviations?
Answer:abbreviations are shortened form of words or phrases. 

3.Difference between a Library and Framework? 
Library: It is basically collection of code which have some functions ,docs etc that is being packed together and used over and over In library we are calling code.
Framework:It is collection of libraries.But in this framework is calling our code.
Example:We can think about home as library and school as Framework. In home ,we have power to do lot of things whenever we want.Basically we are making call where to put t shirt, wherever we can eat food and all that is our call.But in school we have restrictions like where we need to put our bags, where we can eat lunch and study room everything is fixed .Because school has some rules or can say that’s their call ..also you can think in Django we need to give template file name as template because Django wants you to name as Django.can we change it?yes but have some steps like go to setting and so on .

4.What is CDN? Why do we use it? 
CDN is content delivery network.It is globally distributed network of servers that stores and deliver some or all of your website content.
Example:lets say you are trying to access website which server is in East side of US and you are trying to access from North.So lets say distance is 2000 miles .so multiple users trying to access that website .so every time distance effecting the speed because general rule is more the distance, more is effecting on website speed .now CDN comes into picture .lets say it is close to you and only 50 miles from you but it does not having anything that you trying to access.So very  first time CDN will go , access that from original server but in case of other users now it is stored others users don’t have to wait so long because CDN has it.it will not effect on website speed.



5.What is crossorigin in script tag? 
In ReactJS, Cross-Origin Resource Sharing (CORS) refers to the method that allows you to make requests to the server deployed at a different domain. As a reference, if the frontend and backend are at two different domains, we need CORS there.
 
6.What is diference between React and ReactDOM ?
ReactJS made of two parts first is components, that are the pieces that contain HTML code and what you want to see in the user interface, and the second one is HTML document where all your components will be rendered.
The react package is required to create and use components and hooks, react-dom contains react-dom/client and react-dom/server to render you app in the browser's DOM or inside a string (or a stream) on the server. 

7.What is difference between react.development.js and react.production.js files via CDN? 
Development mode includes useful warnings and gives you access to tools that make development and debugging easier. Production mode minifies your code and better represents the performance your app will have on end users' devices.
Code is very optimized very less size of files.minified we can say .in production.js

