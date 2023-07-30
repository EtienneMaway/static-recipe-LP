/** @format */

const menuBar = document.getElementById("menu");
const hamburgerMenu = document.getElementById("burger");
const closeMenu = document.getElementById("close-menu");

hamburgerMenu.addEventListener("click", () => {
	if (menuBar.classList.contains("hidden")) {
		menuBar.classList.remove("hidden");
		hamburgerMenu.classList.add("hidden");
		closeMenu.classList.remove("hidden");
	}
});

closeMenu.addEventListener("click", () => {
	hamburgerMenu.classList.remove("hidden");
	menuBar.classList.add("hidden");
	closeMenu.classList.add("hidden");
});
