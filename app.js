let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#d40000";

let item = "";

document.getElementById("btn1").onclick = function() {
  item = "burger";
  tg.MainButton.setText("Показать бургер");
  tg.MainButton.show();
};

document.getElementById("btn2").onclick = function() {
  item = "fries";
  tg.MainButton.setText("Показать картофель");
  tg.MainButton.show();
};

tg.onEvent("mainButtonClicked", function() {
  tg.sendData(item);
});
