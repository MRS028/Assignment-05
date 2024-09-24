document
  .getElementById("blogButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "blog.html";
  });
// Common Function buttonColorChange
function buttonColorChange(id) {
  document
    .getElementById("historyBtnColorChange")
    .classList.add("bg-[#B4F461]");

  document
    .getElementById("donationBtnColorChange")
    .classList.add("bg-[#B4F461]");

  document.getElementById(id).classList.remove("bg-[#B4F461]");
}
document
  .getElementById("historyBtnColorChange")
  .addEventListener("click", function () {
    buttonColorChange("donationBtnColorChange");
  });
document
  .getElementById("donationBtnColorChange")
  .addEventListener("click", function () {
    buttonColorChange("historyBtnColorChange");
  });
// Common Function showPage
function showPage(id) {
  document.getElementById("donationChange").classList.add("hidden");
  document.getElementById("historyShow").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}
document
  .getElementById("donationBtnColorChange")
  .addEventListener("click", function () {
    showPage("donationChange");
  });
document
  .getElementById("historyBtnColorChange")
  .addEventListener("click", function () {
    showPage("historyShow");
  });
