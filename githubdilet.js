document.getElementById("input-text").addEventListener("input", function () {

    let inputvalu = document.getElementById("input-text");
    let finalvalue = inputvalu.value;
    let diletbtn = document.getElementById("dilet-btn");
    let title = document.getElementById("hide-text");


    if (finalvalue === "dilet") {
        diletbtn.removeAttribute("disabled");
    }
    else {
        diletbtn.setAttribute("disabled", true)
    }

})


document.getElementById("dilet-btn").addEventListener("click", function () {
    let title = document.getElementById("hide-text");
    let finalltitle = title.style.display = "none"
    let repetbtn = document.getElementById("repet-btn");
    let inputvalu = document.getElementById("input-text");
    let finalvalue = inputvalu.value;
    if (finalvalue === "dilet") {
        repetbtn.removeAttribute("disabled")
       
    }
    else {
        repetbtn.setAttribute("disabled", true)
    }
})

document.getElementById("repet-btn").addEventListener("click", function() {
    let title = document.getElementById("hide-text");
    title.style.display= "block"
})

