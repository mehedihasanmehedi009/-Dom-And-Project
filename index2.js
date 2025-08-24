//  function get value
function getInputValueNumber(id) {
  const values = parseInt(document.getElementById(id).value);
  return values;
}
function getInputValue(id) {
  const field = document.getElementById(id);
  const fields = field.value;
  return fields;
}
// function getInput innerText

function getInputText(id) {
  const eliment = document.getElementById(id);
  const eliments = eliment.innerText;
  const elimentes = parseInt(eliments);
  return elimentes;
}

// function to set innerText
function setInnerText() {}
// add money function

const validPin = 1234;
document.getElementById("btn-money").addEventListener("click", function (e) {
  e.preventDefault();
  const banks = document.getElementById("bank").value;

  const Account = getInputValue("Account-Number");

  const Amount = getInputValueNumber("Amount-to");

  const pin = getInputValueNumber("add-pin");

  const Balances = getInputText("Balance");

  if (Account.length < 11) {
    alert("please provide valid account number");
    return;
  }
  if (pin !== validPin) {
    alert("please provide valid pin number ");
    return;
  }

  total = Amount + Balances;

  document.getElementById("Balance").innerText = total;
});

// Withdraw-money
document
  .getElementById("Withdraw-money")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const Amounts = parseInt(document.getElementById("Withdraw-amount").value);
    const Balancee = parseInt(document.getElementById("Balance").innerText);
    const total = Balancee - Amounts;
    document.getElementById("Balance").innerText = total;
  });

// toggling -function
document.getElementById("add-button").addEventListener("click", function (e) {
  document.getElementById("Cash-Out-Parent").style.display = "none";
  document.getElementById("Add-Money-parent").style.display = "block";
});

document
  .getElementById("Cash-Out-button")
  .addEventListener("click", function () {
    document.getElementById("Add-Money-parent").style.display = "none";
    document.getElementById("Cash-Out-Parent").style.display = "block";
    // console.log("mehedi hasan");
  });
