const toggle = document.querySelector('#cb1');
const mounthly = document.querySelectorAll('.monthly');
const yearly = document.querySelectorAll('.yearly');

// when the toggle is checked
toggle.addEventListener('change', function() {
  console.log('hi');
  mounthly.forEach((el) => {
    el.classList.toggle("hidden");
  });
  yearly.forEach((el) => {
    el.classList.toggle("hidden");
  });
});