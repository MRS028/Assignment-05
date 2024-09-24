document
  .getElementById("donateNowFeni")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const donateNowInputFeni = parseFloat(
      document.getElementById("donateNowInputFeni").value
    );

    const balanceFeni = parseFloat(
      document.getElementById("feniBalance").innerText
    );
    const mainBalance = parseFloat(
      document.getElementById("mainBalance").innerText
    );
    if (donateNowInputFeni > mainBalance) {
      alert("Insufficient Balance for donation.");
      document.getElementById("donateNowInputFeni").value = "";

      return;
    }
    if (isNaN(donateNowInputFeni) || donateNowInputFeni <= 0) {
      alert("invalid amount for donation.");
    } else if ((mainBalance) => donateNowInputFeni) {
      const newBalanceFeni = donateNowInputFeni + balanceFeni;

      document.getElementById("feniBalance").innerText = newBalanceFeni;

      const newMainbalance = mainBalance - donateNowInputFeni;
      document.getElementById("mainBalance").innerText = newMainbalance;

      document.getElementById("successModal").classList.remove("hidden");
      document.getElementById("donateNowInputFeni").value = "";

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
          <p>${donateNowInputFeni} Taka is Donated for Donate for Flood at Feni,Bangladesh.</p> 
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
