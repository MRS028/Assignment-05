document.getElementById('donateNowAid').addEventListener('click',function(event){
    event.preventDefault();
    
    const donateNowInputAid = parseFloat(document.getElementById('donateNowInputAid').value);

    
    const balanceAid = parseFloat(
      document.getElementById("balanceAid").innerText
    );
    const mainBalance = parseFloat(
      document.getElementById("mainBalance").innerText
    );

    if (donateNowInputAid > mainBalance) {
      alert("Insufficient Balance.");
      return;
    }

    if (isNaN(donateNowInputAid) || donateNowInputAid < 0) {
      alert("invalid amount.");
    } else if ((mainBalance) => donateNowInputAid) {
      const newBalanceAid = donateNowInputAid + balanceAid;
      console.log(newBalanceAid);

      document.getElementById("balanceAid").innerText = newBalanceAid;

      const newMainbalance = mainBalance - donateNowInputAid;
      document.getElementById("mainBalance").innerText = newMainbalance;
      document.getElementById("successModal").classList.remove("hidden");
      document.getElementById("donateNowInputAid").value = "";
    } else {
      alert("Not enough balance");
    }

    
    console.log(donateNowInputAid);
})

function closeModal() {
    document.getElementById("successModal").classList.add("hidden");
  }