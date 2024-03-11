const open = document.querySelector('[data-action="open-modal"]');
const modal = document.querySelector(".js-backdrop");
const close = document.querySelector('[data-action="close-modal"]');
const body = document.body;

function toOpenModal() {
  body.classList.toggle("show-modal");
}
open.addEventListener("click", toOpenModal);
close.addEventListener("click", toOpenModal);
modal.addEventListener("click", () => {
  if (event.target === modal) {
    body.classList.remove("show-modal");
  }
});
