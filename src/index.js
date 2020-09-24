// Предварительно установленную дату взяла 31 декабря 2020 года
// количество знаков оставшихся дней определила 3 (потому что в году не более 366 дней)
// Не могу понять зачем в условии указан selector: '#timer-1', зачем/где его использовать?????

const daysRef = document.querySelector('span[data-value="days"]');
const hoursRef = document.querySelector('span[data-value="hours"]');
const minsRef = document.querySelector('span[data-value="mins"]');
const secsRef = document.querySelector('span[data-value="secs"]');

class CountdownTimer {
  constructor(selector, targetDate) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  interval = setInterval(() => {
    const currentDate = Date.now();
    // число уникальное время 1600968351389
    const time = this.targetDate.getTime() - currentDate;
    // разница между установленной будущей датой и текущим временем

    updateTime(time);
  }, 1000);
}

function updateTime(time) {
  const days = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(3,'0');
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  daysRef.textContent = `${days}`;
  hoursRef.textContent = `${hours}`;
  minsRef.textContent = `${mins}`;
  secsRef.textContent = `${secs}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

const copyOfTimer = new CountdownTimer('#timer-1', new Date('Dec 31, 2020'));
