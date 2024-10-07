// JS code for countdown timer for upcoming Falcon 9 launch.
// October 9, 2024, 11:33 AM

const countdownElement1 = document.getElementById('launch-countdown-1');
const launchDate1 = new Date('2024-10-09T11:33:00').getTime();  // October 9, 2024, 11:33 AM (local time)

const updateCountdown1 = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = launchDate1 - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  countdownElement1.innerHTML = `
    <h3>Countdown</h3>
    <div>${days}d ${hours}h ${minutes}m ${seconds}s</div>
  `;

  if (timeLeft < 0) {
    clearInterval(updateCountdown1);
    countdownElement1.innerHTML = "<h3>Launched!</h3>";
  }
}, 1000);

// JS code for countdown timer for upcoming Falcon 9 launch. October 30, 2024, 10:19 AM

const countdownElement2 = document.getElementById('launch-countdown-2');
const launchDate2 = new Date('2024-10-30T10:19:00').getTime();  // October 30, 2024, 10:19 AM (local time)

const updateCountdown2 = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = launchDate2 - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  countdownElement2.innerHTML = `
    <h3>Countdown</h3>
    <div>${days}d ${hours}h ${minutes}m ${seconds}s</div>
  `;

  if (timeLeft < 0) {
    clearInterval(updateCountdown2);
    countdownElement2.innerHTML = "<h3>Launched!</h3>";
  }
}, 1000);




//JS for smooth scrolling between sections

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//       e.preventDefault();
//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//         behavior: 'smooth'
//       });
//     });
//   });
  