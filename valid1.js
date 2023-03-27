
 function validation(){
    var u = document.getElementById("log1").value;
   
    if(u==null || u==""){
       alert("User name Should Not be Empty.");
    }
}

function passLength(){
    var x = document.getElementById("pass1").value;
    if(x.length<6){
        alert("Password Should be Greater than 6 Character's.");
    }
}

 function showPass(){
     var s = document.getElementById("pass1");
     if(s.type == "password")
     {
         s.type = "text";
     }
     else
     {
         s.type="password";
     }
 }

   





