document.getElementById('donateNowAid').addEventListener('click',function(event){
    event.preventDefault();
    
    const donateNowInputAid = parseFloat(document.getElementById('donateNowInputAid').value);

    
    console.log(donateNowInputAid);
})