const greeting = App.Talk.GetGreeting(new Date);
document.getElementById("hello").innerHTML = greeting;

const btn = document.createElement("button");
btn.id="btn";
btn.value="btnvalue";
btn.onclick = (e)=>{
    alert(`clientX:${e.clientX} clientY${e.clientY}`);
}
btn.innerText = "button";


document.getElementById("div").appendChild(btn);
