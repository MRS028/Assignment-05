document
  .getElementById("donateNowFeni")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const donateNowInputFeni = parseFloat(
      document.getElementById("donateNowInputFeni").value
    );
    
    const balanceFeni = parseFloat(
      document.getElementById('feniBalance').innerText
    );
    const mainBalance = parseFloat(
      document.getElementById("mainBalance").innerText
    );
    if (donateNowInputFeni > mainBalance) {
        alert("Insufficient Balance.");
        return;
      }
      if (isNaN(donateNowInputFeni) || donateNowInputFeni < 0) {
        alert("invalid amount.");
      } else if (mainBalance => donateNowInputFeni) {
        const newBalanceFeni = donateNowInputFeni + balanceFeni;
        console.log(newBalanceFeni);
  
        document.getElementById("feniBalance").innerText = newBalanceFeni;
  
        const newMainbalance = mainBalance - donateNowInputFeni;
        document.getElementById('mainBalance').innerText = newMainbalance;

        document.getElementById("successModal").classList.remove("hidden");
        document.getElementById("donateNowInputFeni").value = "";
      } else {
        alert("Not enough balance");
      }

    
  });
  function closeModal() {
    document.getElementById("successModal").classList.add("hidden");
  }

  // document.getElementById('historyBtnColorChange').addEventListener('click',function(){
    
  //   addTransaction('donateNowInputFeni');
    
        
  //   })