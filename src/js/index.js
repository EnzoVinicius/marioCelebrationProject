const buttonTrailer = document.querySelector(".button-trailer");
const buttonCloseModal = document.querySelector(".close-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const videoLink = video.src;

function switchModal(){
	modal.classList.toggle("open");
}

buttonTrailer.addEventListener("click", () => {
	switchModal();
	video.setAttribute("src", videoLink);
});

buttonCloseModal.addEventListener("click", () => {
	switchModal();
	video.setAttribute("src", "");
});