var right = document.getElementById("logo-img");


document.getElementById("logo-svg").addEventListener("load", function() {
    var doc = this.getSVGDocument();
    var right = doc.getElementById("Right"); 
    // TweenLite.to(right, 10,{transformOrigin:"center",rotation:360,scale:800/600});
});
    
 

function showHide() {
    //Change elements of form and thank you
    var hide = document.getElementById("mail");
    var show = document.getElementById("thankyou");
    
    hide.style.display = 'none';
    show.style.display = 'block';
    //Write input to database
    saveEmail()

}

function saveEmail() {
    var email = document.getElementById("MERGE0").value.toString();
    name = email.split("@")[0]
    firebase.database().ref('Email/' + name).set({
      adress: email,
    });
  }