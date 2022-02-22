
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

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function error() {
    alert("New task can't be blank!")  
}

function validateForm(){
    var li = document.createElement("li");
    var inputVal = document.getElementById("myTask").value;
    var user = document.createTextNode(inputVal);
    
    li.appendChild(user);
    if(inputVal == "") {
        error()
    } else {
        document.getElementById("tasks").appendChild(li)
    }
    
    document.getElementById("myTask").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
    
}