


const closeForm = () => {
    $(".form").hide(230);
    $(".body").css({background: ""})

}

let cancelBttn = $(".cancel")
let inquiry = document.getElementById("inquiry");



inquiry.addEventListener("click", (e) => {

    e.preventDefault();
    $(".form").show(200);
    $(".body").css({background: `linear-gradient(to left, #4747476c  40%, rgba(240, 240, 240, 0.92) ) , url("../newHead-min.jpg")`, backgroundPosition: "center", backgroundSize: "cover"})
})




cancelBttn.on("click", closeForm)






