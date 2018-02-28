// var body = document.getElementById("body");

// function askPassword(){
//     var password = prompt("Please Enter the Password");
// }

// askPassword();

//     if (password == "google") {
//         $(".secretPage").removeClass("hidden");
//     }
//     else{
//     	alert("Sorry, that's the wrong password.");
//     }

var password = prompt("This page is protected due to legal requirements. If you would like access to this case study, email me at peter.braunstein@uconn.edu\n\rPlease enter the password.");
    if (password == null) {
      window.stop();
      window.history.back();
      console.log("null baby");
    }
  	else if (password == "okgoogle") {
  		alert("You got it!\n\rClick 'OK' to view the page.");
        console.log("Someone accessed a private page.");
    }
    else{
      window.stop();
      alert("Sorry that's not the passoword. I'm sending you back to the page you were just on.")
    	window.history.back();
    }
