dashdelete = (text) => {
  textarr = text.split("-");
  textarr2 = textarr[1]; //?
  textarr = textarr[0] + textarr[1][0].toUpperCase() + textarr2.slice(1);

  return textarr;
};

dashdelete("background-color"); //?
