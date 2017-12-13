let modal = document.getElementById('bc-menu');
let modalBody = document.getElementById('modal-body');
let btnBar = document.getElementById('btn-bar');
let modalBackdrop = document.getElementById('modalBackdrop');
let close = document.getElementById('close');

// Function
let navMedia = () => this.matchMedia("(max-width: 766px)").matches ? modal.classList.add('modal') : modal.classList.remove('modal');

// Events
window.addEventListener('load', () => navMedia());
window.addEventListener('resize', () => navMedia());
btnBar.addEventListener('click', () => {
  modalBody.classList.remove('is-clicked2');
  modalBody.classList.add('is-clicked');
  modalBackdrop.classList.add('modal-backdrop');
});

close.addEventListener('click', () => {
  modalBody.classList.remove('is-clicked');
  modalBody.classList.add('is-clicked2');

  // background
  let nameClass = modalBody.className.slice(28, 39);
  console.log(nameClass);
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (nameClass == 'is-clicked2')
        resolve('exito');
    }, 100);
  });

  promise
    .then(() => modal.classList.remove('show'))
    .catch(err => console.error(err));

  modalBackdrop.classList.remove('modal-backdrop');
});
