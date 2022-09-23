const btnShare = document.querySelector(".btn-share");
const authorShare = document.querySelector(".author-share");
const shareBox = document.querySelector(".share-box");

btnShare.addEventListener("click", () => {
  authorShare.classList.toggle("active");
 });


document.addEventListener("click", (event) => {
  const isClickInside = shareBox.contains(event.target);
  const isClickInside2 = btnShare.contains(event.target);

  if (!isClickInside && !isClickInside2) {
    authorShare.classList.remove("active");
  }

});
