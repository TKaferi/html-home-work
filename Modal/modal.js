var modal = document.getElementById("MyModal");
var btn = document.getElementById("btn");
var plus = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

plus.onclick = function() {
    modal.style.display = "none";
}