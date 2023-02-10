var phoneModal = document.getElementById("phone-modal");
var phoneBtn = document.getElementById("phone");
var phoneSpan = document.getElementsByClassName("phone-close")[0];

phoneBtn.onclick = function() {
    phoneModal.style.display = "block";
}

phoneSpan.onclick = function() {
    phoneModal.style.display = "none";
}
