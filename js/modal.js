document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".backdrop"); // УВАГА: тут backdrop, не modal!
  const modalBtnOpen = document.querySelector(".modal-btn-open");
  const modalBtnClose = document.querySelector(".modal-btn-close");

  const toggleModal = () => {
    modal.classList.toggle("is-hidden");
  };

  modalBtnOpen.addEventListener("click", toggleModal);
  modalBtnClose.addEventListener("click", toggleModal);
});
