$(document).ready(function () {
  const metodButton = document.querySelectorAll(".metod__block");
  const metodModal = document.querySelectorAll(".metod__modal-item");
  const modalClose = document.querySelector(".metod__modal__close");

  for (let i = 0; i < metodButton.length; i++) {
    metodButton[i].addEventListener("click", function () {
      metodModal[i].classList.add("active");
      modalClose.classList.add("active");
    });
  }

  modalClose.addEventListener("click", function () {
    for (let i = 0; i < metodModal.length; i++) {
      metodModal[i].classList.remove("active");
      modalClose.classList.remove("active");
    }
  });
});
