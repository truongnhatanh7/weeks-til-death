const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const container = $('.container');

// Read birthdate from url query
const urlParams = new URLSearchParams(window.location.search);
let birthday = urlParams.get('birthday')
if (!birthday) {
  birthday = '01/01/2000'
}

urlParams.set('birthday', birthday);

// parse birthdate
const birthdayDate = new Date(birthday);
console.log(birthdayDate)

// get current date
const currentDate = new Date();

// remaining weeks til 90 age
// Calculate the time difference in milliseconds
const timeDifferenceMs = currentDate.getTime()- birthdayDate.getTime();
console.log(timeDifferenceMs)
// Convert milliseconds to weeks
const weeks = Math.floor(timeDifferenceMs / (1000 * 60 * 60 * 24 * 7));
console.log(weeks)

// total weeks til 90 age
// const totalWeeks = Math.floor((new Date(currentYear + 90, currentMonth, currentDay) - birthdateDate) / 1000 / 60 / 60 / 24 / 7);
const endDate = new Date(birthday);
endDate.setFullYear(birthdayDate.getFullYear() + 90);

const timeDifferenceMs90 = endDate.getTime() - birthdayDate.getTime();
const totalWeeks = Math.floor(timeDifferenceMs90 / (1000 * 60 * 60 * 24 * 7));
console.log(totalWeeks)

// render weeks til 90 age
for (let i = 0; i < totalWeeks; i++) {
  const weeksElement = document.createElement('div');
  weeksElement.className = 'week-block';
  container.appendChild(weeksElement);
}

const weekBlocks = $$('.week-block');
for (let i = 0; i < weeks; i++) {
  weekBlocks[i].classList.add('past');
}

const announcement = $('.announcement');
announcement.innerHTML = `You birdthday: ${birthday}. You have lived ${weeks} weeks and you have ${totalWeeks - weeks} weeks left.`
announcement.style.textAlign = 'center';