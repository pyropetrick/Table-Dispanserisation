function getYearExams(month, year, period, arr, end = 48) {
  const numberExams = [];
  // eslint-disable-next-line no-constant-condition
  while (year < 24) {
    if (end) end--
    else break
    let number = month + period;
    month += period;


    if (month > 36) {
      year++
      month -= 36
      number = month;
    } else if (month > 24) {
      year++
      month -= 24
      number = month
    } else if (month > 12) {
      year++
      month -= 12;
      number = month;
    }

    if (year === 23) {
      numberExams.push(number);

    }

  }
  return arr.push(numberExams)
}

function getSeasonsExam(year, seasons, exam) {
  for (let i = 1; i <= 12; i++) {

    if (year.flatMap(item => item).find(number => i === number)) {
      seasons.push({
        value: exam
      })
      continue
    }

    seasons.push({});
  }
  return seasons;
}

export default function (date, {doctorExam, surveys, end}, {everySurvey, everyExam}) {
  const year23 = [];
  const dataArray = date.split('.');
  let month = +dataArray[0];
  let year = +dataArray[1];
  const arraySeasons = [];
  getYearExams(month, year, doctorExam, year23, end)
  getYearExams(month, year, surveys, year23, end)
  getSeasonsExam(year23, arraySeasons, everyExam, end).forEach((item, index) => {
    if (year23[1].find(number => number === index + 1)) {
      item.value += ` , ${everySurvey}`
    }
  });


  return arraySeasons;
}