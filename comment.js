document.getElementById("btn-click").addEventListener("click", function () {

    let comment = document.getElementById("comment-box");
    let finalcommet =  comment.value;

    let main = document.getElementById("parent");
    let p = document.createElement("p");
    p.style.width = "50%"
    p.innerText = finalcommet ;
    comment.value = "";
    main.appendChild(p);
})
