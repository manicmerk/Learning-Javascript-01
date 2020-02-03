var message = "Testing Prompts!"
alert(message);
var visitorName = prompt("What is your name?");
message = " We're Using Prompts in JavaScript!";
alert(visitorName + message);
message = "<p>" + visitorName + " can you believe we're concatenating?!?</p>"
document.write("<p>Looks like prompts are working!</p>");
document.write(message);
message = "<p>" + visitorName + " let's try the more complex message+=</p>" + "<br>" + "<br>"
message += "Will this actually work?" + "<br>" + "<br>" 
message += "<p>" + visitorName + " if we see this, then it did!</p>"
document.write(message);
console.log("Program Complete");