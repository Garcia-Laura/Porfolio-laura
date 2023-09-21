'use strict';


console.log('>> Ready :)');
const wrappers = document.querySelectorAll(".js-wrapper")

const emojis_setTech = ["💻", "🖥️", "📱", "⌨️", "💾", "🖱️", "🕹️", "🔌", "⌨️"];


function randomEmoji() {
	// change the emoji array here and it will reflect
	return emojis_setTech[Math.floor(Math.random() * emojis_setTech.length)];
}

function createGrid() {
	const container = document.getElementById("grid-container");

	for (let i = 0; i < 100; i++) {
		// Reduced the grid to 10x10
		const emojiDiv = document.createElement("div");
		emojiDiv.className = "emoji";
		emojiDiv.textContent = randomEmoji();
		const delay = Math.random() * 2;

		// Apply the animation to only 50% of the emojis
		if (Math.random() > 0.5) {
			emojiDiv.classList.add("show-emoji");
		}

		emojiDiv.style.animationDelay = `${delay}s`;
		container.appendChild(emojiDiv);
	}
}

function updateGrid() {
	const emojisDivs = document.querySelectorAll(".emoji");
	emojisDivs.forEach((emojiDiv) => {
		if (emojiDiv.classList.contains("show-emoji")) {
			emojiDiv.textContent = randomEmoji();
		}
	});
}

function start() {
	alert("Starting the journey of education!");
}

createGrid();
setInterval(updateGrid, 10000);

// //  function handleClick(ev){
// //  	ev.preventDefault();
// // 	console.log("hola dos")
// //  }

// //  function addEventIcon(){
// // 	const menus = document.querySelectorAll(".js_menu");
// //  	for (const eachMenus of menus){
// //  		eachMenus.addEventListener("click", handleClick);
// //  	}
// // 	 console.log("click");
// }

const navButtons = document.querySelectorAll(".menu-nav ul li a");
let anchors =[
	document.querySelector('#sobreMi'),
	document.querySelector('#proyectos'),
	document.querySelector('#contacto'),
	
]
let anchorYPosition = new Array();

 function removeActive () {
	for (let button of navButtons){
		button.classList.remove('active')
	}
 } 
 function toggleActiveAnchor () {
	removeActive();
	this.classList.add('active');
 }

 function updateAnchorYPosition(){
	for (var i = 0; i < anchors.length; i++){
		anchorYPosition[i] = anchors[i].getBoundingClientRect().top;
	}
 }

 for (var i = 0; i < navButtons.length; i++){
	navButtons[i].addEventListener("click",toggleActiveAnchor )
 }

 anchorYPosition.forEach(element =>{
	console.log(element)
 });

 let currentAnchorIndex = null;

 window.onscroll = () =>{
	const offSet = window.innerHeight * 0.6;
	updateAnchorYPosition();
	for (let i = 0; i < anchorYPosition.length; i++){
		if(i != currentAnchorIndex && anchorYPosition[i] - offSet <= 0 && (i === 4) || anchorYPosition[i + 1] > 0)
	{
		currentAnchorIndex = i;
		removeActive();
		navButtons[i].classList.add('active');
	}
	}
 }


// function handleClick (){
	
// 	console.log("click");
// 	wrapper.classList.toggle("hidden");	
// 	console.log("click")
// }
// handleClick();

// const buttons = document.querySelectorAll(".js_menu");
// buttons.forEach(button => {
// 	button.addEventListener("click", () =>{
// 		const modalId = button.dataset.modalId
// 		const modal = document.getElementById(modalId)
// 		modal.classList.toggle("hidden");
// 		console.log("click");
// 	})
	
// })