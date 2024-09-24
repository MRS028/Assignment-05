document
  .getElementById("donateNowNoakhali")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const donateNowInputNoakhali = parseFloat(
      document.getElementById("donateNowInputNoakhali").value
    );
    const balanceNoakhali = parseFloat(
      document.getElementById("noakhaliBalance").innerText
    );
    const mainBalance = parseFloat(
      document.getElementById("mainBalance").innerText
    );

    if (donateNowInputNoakhali > mainBalance) {
      alert("Insufficient Balance for donation.");
      document.getElementById("donateNowInputNoakhali").value = "";

      return;
    }

    if (isNaN(donateNowInputNoakhali) || donateNowInputNoakhali <= 0) {
      alert("invalid amount for donation.");
    } else if ((mainBalance) => donateNowInputNoakhali) {
      const newBalanceNoakhali = donateNowInputNoakhali + balanceNoakhali;

      document.getElementById("noakhaliBalance").innerText = newBalanceNoakhali;

      const newMainbalance = mainBalance - donateNowInputNoakhali;
      document.getElementById("mainBalance").innerText = newMainbalance;
      document.getElementById("successModal").classList.remove("hidden");
      document.getElementById("donateNowInputNoakhali").value = "";

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
          <p>${donateNowInputNoakhali} Taka is Donated for Donate for Flood at Noakhali,Bangladesh.</p> 
          <p>Date: ${dateTime} (Bangladesh Standard Time)</p>
        </div>
      `;

      document.getElementById("historyShow").appendChild(div);
    } else {
      alert("Not enough balance for donation.");
    }
  });
function closeModal() {
  document.getElementById("successModal").classList.add("hidden");
}
