

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    clearError()
  }
  
}

function error() {
    var border = document.getElementById("grad")
    var txt = document.getElementById("errormsg")    
    border.style.borderColor = "red";

    txt.style.display = "initial"

    txt.style.color = "#eef5db";
    txt.style.textShadow = "2px 2px black"; 

  }

function clearError() {
    // This is some mad bubblegum but hey, as long as it works.
    var element = document.getElementById("grad")
    element.style.borderColor = "#4f6367";
    
    var text = document.getElementById("errormsg")
    text.style.display = "none"

}


function validateForm(){
    var li = document.createElement("li");
    var inputVal = document.getElementById("myTask").value;
    var user = document.createTextNode(inputVal);
    
    li.appendChild(user);
    if(inputVal == "") {
        error();
    } else {
        document.getElementById("tasks").appendChild(li);
        clearError();
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