var message = "Testing Prompts!"
alert(message);
var visitorName = prompt("What is your name?");
message = " We're Using Prompts in JavaScript!";
alert(visitorName + message);
message = "<p>" + visitorName + " can you believe we're concatenating?!?</p>"
document.write("<p>Looks like prompts are working!</p>");
document.write(message);
console.log("Program Complete");