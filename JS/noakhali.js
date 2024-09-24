document
  .getElementById("donateNowNoakhali")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const donateNowInputNoakhali = parseFloat(
      document.getElementById("donateNowInputNoakhali").value
    );
    console.log(donateNowInputNoakhali);
    const balanceNoakhali = parseFloat(
      document.getElementById("noakhaliBalance").innerText
    );
    const mainBalance = parseFloat(
      document.getElementById("mainBalance").innerText
    );

    if (donateNowInputNoakhali > mainBalance) {
      alert("Insufficient Balance.");
      return;
    }

    if (isNaN(donateNowInputNoakhali) || donateNowInputNoakhali < 0) {
      alert("invalid amount.");
    } else if ((mainBalance) => donateNowInputNoakhali) {
      const newBalanceNoakhali = donateNowInputNoakhali + balanceNoakhali;
      console.log(newBalanceNoakhali);

      document.getElementById("noakhaliBalance").innerText = newBalanceNoakhali;

      const newMainbalance = mainBalance - donateNowInputNoakhali;
      document.getElementById("mainBalance").innerText = newMainbalance;
      document.getElementById("successModal").classList.remove("hidden");
      document.getElementById("donateNowInputNoakhali").value = "";
    } else {
      alert("Not enough balance");
    }
  });
function closeModal() {
  document.getElementById("successModal").classList.add("hidden");
}
