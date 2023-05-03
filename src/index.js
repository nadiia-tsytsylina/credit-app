import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form-email');
const input = document.querySelector('.form-input');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (input.value === '') {
    Notify.failure('Please fill the email field');
  } else {
    Notify.success(
      `Thank you, we will send you details on email: ${input.value}`
    );
    form.reset();
  }
}

const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
