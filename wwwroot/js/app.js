"use strict";
var greeting = App.Talk.GetGreeting(new Date);
document.getElementById("hello").innerHTML = greeting;
var btn = document.createElement("button");
btn.id = "btn";
btn.value = "btnvalue";
btn.onclick = function (e) {
    alert("clientX:" + e.clientX + " clientY" + e.clientY);
};
btn.innerText = "button";
document.getElementById("div").appendChild(btn);
//# sourceMappingURL=app.js.map