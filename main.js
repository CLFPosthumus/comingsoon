var right = document.getElementById("logo-img");

//document.getElementById("logo-svg").this.getSVGDocument().getElementById("SIX")
document.getElementById("logo-svg").addEventListener("load", function() {
    var doc = this.getSVGDocument();
    var crown = doc.getElementById("Crown"); 
    var separator = doc.getElementById("Separator"); 
    var left = doc.getElementById("Left"); 
    var right = doc.getElementById("Right"); 
    var six = doc.getElementById("SIX"); 
    var four = doc.getElementById("4"); 
    var nine = doc.getElementById("9"); 
    
    TweenLite.from(right, 0.4, {x: '2000%',  delay: .1});    
    TweenLite.to(right, 0.4, {});


    TweenLite.from(left, 0.4, {x: '-1000%',  delay: .3});    
    TweenLite.to(left, 0.4, {});


    TweenLite.from(four, 0.4, {css:{alpha:0},delay: .5});    
    TweenLite.to(four, 0.4, {});

    TweenLite.from(six, 0.4, {css:{alpha:0},  delay: .7});    
    TweenLite.to(six, 0.4, {});

    // TweenLite.from(six, 0.4, {x: '2500%' , delay: .3});    
    // TweenLite.to(six, 0.4, {});

    TweenLite.from(nine, 0.4, {css:{alpha:0}, delay: .9});    
    TweenLite.to(nine, 0.4, {});
    
    

    TweenLite.from(separator, 0.4,{delay: 1.5})
    TweenLite.from(separator, 0.4,{transformOrigin:"center", rotation:720})
    
    TweenLite.from(crown, 0.4, {y: '-100%',  delay: 2});    
    TweenLite.to(crown, 0.4, {});
});
    
// document.getElementById("logo-svg").getSVGDocument().getElementById("Right"); 
//     TweenLite.to(right, {transformOrigin:"center",rotation:360,scale:800/600});
// });
    
 

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