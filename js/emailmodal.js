var emailModal = document.getElementById("email-modal");
var emailBtn = document.getElementById("email");
var emailSpan = document.getElementsByClassName("email-close")[0];

emailBtn.onclick = function() {
    emailModal.style.display = "block";
}

emailSpan.onclick = function() {
    emailModal.style.display = "none";
}
