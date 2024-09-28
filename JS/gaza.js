document
  .getElementById("donateNowGaza")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const donateNowInputGaza = parseFloat(
      document.getElementById("donateNowInputGaza").value
    );

    const balanceGaza = parseFloat(
      document.getElementById("gazaBalance").innerText
    );
    const mainBalance = parseFloat(
      document.getElementById("mainBalance").innerText
    );
    if (donateNowInputGaza > mainBalance) {
      alert("Insufficient Balance for donation.");
      document.getElementById("donateNowInputGaza").value = "";

      return;
    }
    if (isNaN(donateNowInputGaza) || donateNowInputGaza <= 0) {
      alert("invalid amount for donation.");
      document.getElementById("donateNowInputGaza").value = "";
    } else if ((mainBalance) => donateNowInputGaza) {
      const newBalanceGaza = donateNowInputGaza + balanceGaza;

      document.getElementById("gazaBalance").innerText = newBalanceGaza;

      const newMainbalance = mainBalance - donateNowInputGaza;
      document.getElementById("mainBalance").innerText = newMainbalance;

      document.getElementById("successModal").classList.remove("hidden");
      document.getElementById("donateNowInputGaza").value = "";

      const div = document.createElement("div");
      div.classList.add("p-5", "rounded", "border-2", "m-2");

      const now = new Date();

      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
      };

      const dateTime = now.toLocaleString("en-US", {
        ...options,
        timeZone: "Asia/Dhaka",
      });

      div.innerHTML = `
        <div class="space-y-4 my-5"> 
          <p class="font-bold">${donateNowInputGaza} Taka is Donated for Gaza,Palestine.</p> 
          <p>Date: ${dateTime} (Bangladesh Standard Time)</p>
        </div>
      `;

      document.getElementById("historyShow").appendChild(div);
    } else {
      alert("Not enough balance for donation.");
      document.getElementById("donateNowInputGaza").value = "";
    }
  });
function closeModal() {
  document.getElementById("successModal").classList.add("hidden");
}
