function thousands_separators(num) {
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
}
function myBalanceFunction() {
  var balance = prompt("Please Enter Your Balance", "");
  var bBalance = balance;
  var fullValue = (100 * bBalance) / 60;
  var investAmount = (fullValue * 40) / 100;
  var aproxProfit = (fullValue * 70) / 100;
  var netProfit = aproxProfit - investAmount;
  if (balance != null) {
    document.querySelector("#demo").innerHTML =
      "Your current balance is : " +
      thousands_separators(bBalance) +
      " Taka <br><br> If you invest " +
      thousands_separators(investAmount.toFixed(2)) +
      " Taka <br><br>Your Will Get Product Of : " +
      thousands_separators(fullValue.toFixed(2)) +
      " Taka <br><br>If you sell that product on 70% rate, You will gain " +
      thousands_separators(aproxProfit.toFixed(2)) +
      " Taka <br><br>In that case your net cash profit will be : " +
      thousands_separators(netProfit.toFixed(2)) +
      " Taka";
  }
}

function myCashFunction() {
  var person = prompt("Please Enter Your Cash", "");
  var bBalance = person;
  var fullValue = (100 * bBalance) / 40;
  var investAmount = (fullValue * 60) / 100;
  var aproxProfit = (fullValue * 70) / 100;
  var netProfit = aproxProfit - bBalance;
  if (person != null) {
    document.querySelector("#demo").innerHTML =
      "If you invest : " +
      thousands_separators(bBalance) +
      " Taka <br><br> you need balance of " +
      thousands_separators(investAmount.toFixed(2)) +
      " Taka <br><br>Your Will Get Product Of : " +
      thousands_separators(fullValue.toFixed(2)) +
      " Taka <br><br>If you sell that product on 70% rate, You will gain " +
      thousands_separators(aproxProfit.toFixed(2)) +
      " Taka <br><br>In that case your net cash profit will be : " +
      thousands_separators(netProfit.toFixed(2)) +
      " Taka";
  }
}

function my60_40Function() {
  var person = prompt("Please Enter Your 100% Amount", "");
  var bBalance = person;
  var s60_percent = (bBalance / 100) * 60;
  var f40_percent = (bBalance / 100) * 40;

  if (person != null) {
    document.querySelector("#demo").innerHTML =
      "Your bill is : " +
      thousands_separators(person) +
      " Taka <br><br> 60% of " +
      person +
      " is : " +
      thousands_separators(s60_percent.toFixed(2)) +
      " Taka <br><br> 40% of " +
      person +
      " is : " +
      thousands_separators(f40_percent.toFixed(2));
  }
}
