function padNumber(number) {
  return `0${number}`.slice(-2);
}

export function getReadableDate(date) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  return {
    days: padNumber(Math.floor(date / day)),
    hours: padNumber(Math.floor((date % day) / hour)),
    minutes: padNumber(Math.floor((date % hour) / minute)),
    seconds: padNumber(Math.floor((date % minute) / second)),
  };
}
