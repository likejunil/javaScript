const result = document.querySelector('.result');
const offset = new Date().getTimezoneOffset();
const now = Date.now();
const today = now - offset;
const date = new Date(today);
const iso = date.toISOString();
const timeForHere = iso.substring(0, 19);
result.innerHTML = `
  now:${now}
  offset:${offset}
  today:${today}
  date:${date}
  iso:${iso}
  ${timeForHere}
  `;

const id = setInterval(() => {
  $(".result").empty();
  clearInterval(id);
  console.log("clear");
}, 3000);



