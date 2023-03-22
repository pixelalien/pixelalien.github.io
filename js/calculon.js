let valueList = [];

const buttonWrapper = document.querySelector(".calc-buttons");
let memory = null;
function operator( memory ) {};

buttonWrapper.addEventListener("click", function(e) {
	let bVal = parseInt(e.target.innerText);
	if(bVal === NaN) {
		let pressed = e.target.innerText;
		operator(memory, pressed);
		console.log("pressed: ", pressed);
	}
	else {
		console.log("memory start: ",memory);
		memory = memory + bVal;
		console.log("bVal: ",bVal," memory: ",memory);
	}
	// if (event.currentTarget )
	// console.log(e.target.innerText)
}, false);
// function displayClick() {
// }
// const bw = document.querySelector(".calc-buttons")
function fts() {
	bw.addEventListener("click", function(){
		console.log("clickety click")
	}, false)
}

function updateResult(newValue) {
	document.querySelector(".result").innerText = newValue;
}
