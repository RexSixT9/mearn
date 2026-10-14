function displayNumber(num) {
  result.value += num;
}

function clearBox() {
  result.value = "";
}

function removeLastItem() {
  result.value = result.value.slice(0, -1);
}

function evalExpression() {
  result.value = eval(result.value);
}