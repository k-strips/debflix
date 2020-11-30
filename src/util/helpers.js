//hours, minutes time converter
export const calcTime = (time) => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};

//format money with currency and comma

export const dollarFormater = (figure) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  return formatter.format(figure);
};

//random number generator
export const randomInt = () => {
  let num = Math.floor(Math.random() * 19);
  return num;
};
