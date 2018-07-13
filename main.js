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