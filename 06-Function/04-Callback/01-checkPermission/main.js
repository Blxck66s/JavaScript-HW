checkPermission = (x, y, z) => {
  if (x == "ADMIN") {
    y();
  } else z();
};

function AG() {
  alert("ACCESS GRANTED");
}

function AD() {
  alert("ACCESS DENIED");
}

checkPermission("ADMIN", AG, AD);
