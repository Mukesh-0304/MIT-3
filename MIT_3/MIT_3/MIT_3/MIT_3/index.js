function display(){
  
    var firstname = document.getElementById("textbox").value;
    var lastname = document.getElementById("textbox1").value;
    var email = document.getElementById("Email").value;
    var pass = document.getElementById("password").value;

    var firstname1 = document.getElementById("textbox");
    var lastname1 = document.getElementById("textbox1");
    var email1 = document.getElementById("Email");
    var pass1 = document.getElementById("password");


    if((firstname + lastname) == (pass))
    {
        demo.innerHTML = "username and password is same" 
    }
    else if(((firstname + lastname) >4) && ((pass >6) && (pass <= 16)))
    {
        demo.innerHTML = "login successful"
    }
    else{
        demo.innerHTML = "Cannot Login"
    }
    
}