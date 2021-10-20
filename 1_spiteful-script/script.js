const fs = require('fs');

const intervalToDuration = require('date-fns/intervalToDuration');
const formatDuration = require('date-fns/formatDuration');
const ruLocaleFns = require('date-fns/locale/ru');

const launchDate = new Date();
const data = fs.readFileSync('./log.txt', 'utf-8');

let scriptResponse = 'Окей, ты меня запустил. Ты доволен?';

if (data) {
  const timePassedSinceLastLaunch = formatDuration(
    intervalToDuration({ start: new Date(data), end: launchDate }),
    { locale: ruLocaleFns }
  )
    .replace('неделя', 'неделю')
    .replace('минута', 'минуту')
    .replace('секунда', 'секунду');

  scriptResponse = `Ну ты же уже запускал меня ${timePassedSinceLastLaunch} назад`;
}

console.log(scriptResponse);

fs.writeFileSync('./log.txt', launchDate.toString());
