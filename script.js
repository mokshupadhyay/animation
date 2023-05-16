function validate()
{
    if(   document.getElementById("username").value == "moksh"
       && document.getElementById("password").value == "hii" )
    {
        alert( "Login Successful" );
        location.href="index1.html";
    }
    else
    {
        alert( "Entry Denied" );
        location.href="fail.html";
    }
}

// const examplebutton = document.getElementById("examplebutton");
// button.addEventListener("click",()=>{
//     window.open("index1.html","_blank");
// });