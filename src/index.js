import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import Swiper from 'swiper';

// import Swiper, { Navigation, Pagination } from 'swiper';
// // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
//   const swiper = new Swiper(...);

const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

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
