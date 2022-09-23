const btnShare = document.querySelectorAll(".btn-share");
const shareBox = document.querySelector(".share-box");

btnShare.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
        shareBox.classList.toggle("active");
    })
});


document.addEventListener("click", (event) => {
  const isClickInside = shareBox.contains(event.target);
  const isClickInside2 = btnShare[0].contains(event.target);

  if (!isClickInside && !isClickInside2) {
    shareBox.classList.remove("active");
    btnShare[0].classList.remove("active");
  }
});
