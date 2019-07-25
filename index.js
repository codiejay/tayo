// The mail details
let mailName = $("#mailName");
let mailEmail = $("#mailEmail");
let mailMessage = $("#mailMessage")


// Your web app's Firebase configuration

 var firebaseConfig = {
    apiKey: "AIzaSyAUV7fEjX-SUcX2l3o_xHqI5CWOO-4j1n8",
    authDomain: "tayoaina-f9081.firebaseapp.com",
    databaseURL: "https://tayoaina-f9081.firebaseio.com",
    projectId: "tayoaina-f9081",
    storageBucket: "tayoaina-f9081.appspot.com",
    messagingSenderId: "718770936154",
    appId: "1:718770936154:web:78c15c51c8e0b14c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const dataBase = firebase.firestore();

  $("#mailSubmit").on("click", (e) => {
      e.preventDefault()
      if(mailName.val() &&  mailMessage.val() && mailEmail.val()){

        dataBase.collection("mails").add({ 
            usersName: mailName.val(),
            userEmail: mailEmail.val(),
            userMessage: mailMessage.val()
            
        })
        .then( (docRef) => {
            $(".form").empty();
            $(".form").append(`<h1>
            YAY! I got your mail! I'll get back to you ASAP
             </h1>
             <a href="http://tayoaina.com/">Go back to HOME PAGE </a>` )
        } )
          
      }
    
  })




  




















const closeForm = () => {
        $(".form").hide(230);
        $(".body").css({background: ""})

    }

let cancelBttn = $(".cancel")
    let inquiry = document.getElementById("inquiry");
    
    

    inquiry.addEventListener("click", () => {
        $(".form").show(200);
        $(".body").css({background: "#fff"})
    })

    cancelBttn.on("click", closeForm)

    



   

    