const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropmenu = document.querySelector('.dropdown')
const head = document.querySelector('.sidebar')

toggleBtn.onclick = function () {
    dropmenu.classList.toggle('open')
    const isopen = dropmenu.classList.contains('open') 

    toggleBtnIcon.classList = isopen
    '<i class="fa-solid fa-bars"></i>'
    '<i class="fa-solid fa-x"></i>'
}

// const head = document.querySelector('.sidebar')
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
    dropmenu.classList.toggle('open')
}


const counters = document.querySelectorAll('.counter');

const startCounting = (counter) => {
  const target = +counter.getAttribute('data-target');
  let count = 0;

  const update = () => {
    const increment = target / 100;

    if (count < target) {
      count += increment;
      counter.innerText = Math.ceil(count).toLocaleString();
      requestAnimationFrame(update);
    } else {
      counter.innerText = target.toLocaleString();
    }
  };

  update();
};

// Trigger when visible
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCounting(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => {
  observer.observe(counter);
});