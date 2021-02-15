function checkCash() {
  let price = parseFloat(document.getElementById("price").value);
  let cash = parseFloat(document.getElementById("cash").value);
  notesAndCoins = [];
  if (price > cash) {
    alert("sorry,you did not pay enough!!");
    return;
  } else if (price == cash) {
    alert("the paymant was successful");
    return;
  } else if (price < cash) {
    let change = cash * 100 - price * 100;
    while (change >= 2000) {
      notesAndCoins.push("twenty € ");
      change -= 2000;
    }
    while (change >= 1000) {
      notesAndCoins.push("ten € ");
      change -= 1000;
    }
    while (change >= 500) {
      notesAndCoins.push("five € ");
      change -= 500;
    }
    while (change >= 200) {
      notesAndCoins.push("Two € ");
      change -= 200;
    }
    while (change >= 100) {
      notesAndCoins.push("one € ");
      change -= 100;
    }
    while (change >= 50) {
      notesAndCoins.push("fifty Cents ");
      change -= 50;
    }
    while (change >= 20) {
      notesAndCoins.push("Twenty Cents ");
      change -= 20;
    }
    while (change >= 10) {
      notesAndCoins.push("ten Cents ");
      change -= 10;
    }
    while (change >= 5) {
      notesAndCoins.push("five Cents ");
      change -= 5;
    }
    while (change >= 2) {
      notesAndCoins.push("two Cents ");
      change -= 2;
    }
    while (change >= 1) {
      notesAndCoins.push("one Cent ");
      change -= 1;
    }
  }
  return alert("the change for this payment is: " + notesAndCoins);
}
