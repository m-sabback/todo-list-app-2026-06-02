let userValueList = JSON.parse(localStorage.getItem("userValues")) || [];

export function saveToLocalStorage(value) {
  userValueList.push(value);
  localStorage.setItem("userValues", JSON.stringify(userValueList));
}

export function getOneValueFromLocalStorage() {
  return userValueList.at(userValueList.length - 1);
}
export function getAllValueFromLocalStorage() {
  return [...userValueList];
}

export function removeOneValueFromLocalStorage(userValue) {
  userValueList = userValueList.filter((value) => value !== userValue);
  localStorage.setItem("userValues", JSON.stringify(userValueList));
}

export function removeAllValueFromLocalStorage() {
  localStorage.removeItem("userValues");
  userValueList = [];
}
