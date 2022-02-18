function validateForm(){
    var task = document.forms["myForm"]["newTask"];
    //alert("Debug purposes: " + task.value);

    if(task.value == "new task") {
        alert("New task can't be blank!")
    }
    if (task.value.length <= 3){
        alert("New task must be over 3 characters long!")
    }
    
}