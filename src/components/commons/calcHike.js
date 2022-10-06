export default function (date, period) {
    const numbers21 = [];
    const numbers22 = [];
    const numbers23 = [];
    const dataArray = date.split('.');
    let month = +dataArray[0];
    let year = +dataArray[1];
    const arraySeasons = [];

    // eslint-disable-next-line no-constant-condition
    while (true) {
        let number = month + period;
        month += period;
        if (month > 12) {
            year++
            month -= 12;
            number = month;
        }
        else if (year > 23) {
            break
        }
        if (year === 21) {
            numbers21.push(number);
        }
        else if (year === 22) {
            numbers22.push(number);
        }
        else if (year === 23) {
            numbers23.push(number);
        }

    }
    for (let i = 1; i <= 12; i++) {
        if (numbers22.find(number => i === number)) {
            arraySeasons.push({
                value: this.survey
            })
            continue
        }
        arraySeasons.push({});
    }
    console.log(numbers21, numbers22, numbers23);
    return arraySeasons;
}