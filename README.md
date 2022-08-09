# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Duration: Weekend Challenge

Your project description goes here.

Project Description: Calculator

Create a user interface where the user can input two values (2 input elements) and the select type of mathematical operation. When the submit (= button) is clicked, capture this input, bundle it up in an object, and send this object to the server via a POST. There should also be a 'C' button that will clear the user input fields.

Build out the server-side logic to compute the numbers as appropriate. The server should be able to handle Addition, Subtraction, Multiplication, and Division. Once the calculation is complete, send back the OK. You should do a GET request after the POST to get the actual calculation.


Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).




## Checklist
- [x] create .gitgnore file
- [x] create folder structure
- [x] no package json is available so install express with init --yes and npm install express afterwards
- [x] add start script to package.json
- [x] create express app and declare port to use
- [x] add app.listen to bottom of server js
- [x]  add app.use for static files (html, css, js)
- [x] add body parser for posts
- [x] format html to start interface build
- [x] setup click hanlders in client.js
- [x] setup input values in js
- [x] add equation list with place holder data
- [x]  create GET route for /equation to see array list of equations
- [x] display equation list via AJAX on client side
- [x] display answer in sepeart h1 div
- [x] display list of equations

- [] add .catch
- [] make code stronger so submission on blank inputs prompts alert error