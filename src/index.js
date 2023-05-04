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

const swiperFeedback = new Swiper('.swiper-feedback', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const swiperHero = new Swiper('.swiper-hero', {
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});
