leap = (year) => {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      return "leapyear";
    } else return "Not leapyear";
  } else if (year % 4 == 0) {
    return "leapyear";
  } else return "Not leapyear";
};
