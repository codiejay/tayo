


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






