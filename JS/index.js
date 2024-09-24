document.getElementById('blogButton').addEventListener('click',function(event){
    event.preventDefault();
    window.location.href ="blog.html";
})
function buttonColorChange(id){
    document.getElementById('historyBtnColorChange').classList.add('bg-[#B4F461]');
    document.getElementById('donationBtnColorChange').classList.add('bg-[#B4F461]');
    document.getElementById(id).classList.remove('bg-[#B4F461]');
}


document.getElementById('historyBtnColorChange').addEventListener('click',function(){
    buttonColorChange('donationBtnColorChange');
})
document.getElementById('donationBtnColorChange').addEventListener('click',function(){
    buttonColorChange('historyBtnColorChange');
})