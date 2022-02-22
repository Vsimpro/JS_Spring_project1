// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


function validateForm(){
    var list = document.createElement("li");
    var inputVal = document.getElementById("myTask")
    var user = document.createTextNode(inputVal)
    
    list.appendChild(user);
    
    if(inputVal === "") {
        alert("New task can't be blank!")   
    } else {
        document.getElementById("tasks").appendChild(list)
    }
    
    document.getElementById("myTask").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("pppp");
    span.className = "close";
    span.appendChild(txt);
    list.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
    
}