document
  .getElementById("donateNowAid")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const donateNowInputAid = parseFloat(
      document.getElementById("donateNowInputAid").value
    );

    const balanceAid = parseFloat(
      document.getElementById("balanceAid").innerText
    );
    const mainBalance = parseFloat(
      document.getElementById("mainBalance").innerText
    );

    if (donateNowInputAid > mainBalance) {
      alert("Insufficient Balance for donation.");
      return;
    }

    if (isNaN(donateNowInputAid) || donateNowInputAid <= 0) {
      alert("invalid amount for donation.");
    } else if ((mainBalance) => donateNowInputAid) {
      const newBalanceAid = donateNowInputAid + balanceAid;

      document.getElementById("balanceAid").innerText = newBalanceAid;

      const newMainbalance = mainBalance - donateNowInputAid;
      document.getElementById("mainBalance").innerText = newMainbalance;
      document.getElementById("successModal").classList.remove("hidden");
      document.getElementById("donateNowInputAid").value = " ";

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
          <p>${donateNowInputAid} Taka is Donated for Aid for Injured in the Quota Movement.</p> 
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
