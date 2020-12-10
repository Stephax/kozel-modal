const modalBtn = document.getElementById("x-mas-modal-btn");
const xMasModal = document.getElementById("x-mas-modal");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener('click', function(){
    xMasModal.classList.toggle("open-x-mas-modal")
});

closeBtn.addEventListener("click", function(){
    xMasModal.classList.remove("open-x-mas-modal")
});

