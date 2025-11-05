const formEl = document.querySelector('form');
const ageEl = document.querySelector('#age');
const nameEl = document.querySelector('#name');

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  if (ageEl.value === '' || nameEl.value === '') {
    alert("Please enter valid details");
    return;
  }

  const age = Number(ageEl.value);
  const name = nameEl.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  promise
    .then((message) => alert(message))
    .catch((message) => alert(message));
});