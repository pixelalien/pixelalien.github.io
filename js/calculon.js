let valueList = [];

const buttonWrapper = document.querySelector(".calc-buttons");
const lcd = document.querySelector(".result");
let memory = [];
let temp1 = null;
let temp2 = null;
let lastOp = null;

function displayClick(temp1) {
	// console.log("display start mem: ", temp1);
	lcd.innerText = temp1;
};

function operator( currentNum, memory, pressed ) {
	if(pressed == "←") {
		if(currentNum) {
			console.log("start currentNum: ", currentNum);
			currentNum = currentNum.substring(0, currentNum.length - 1);
			console.log('backspace currentNum: ',currentNum);
			lastOp = "←";
			return currentNum;
		}
		else {
			console.log("currentNum not set");
			if(lastOp) {
				let lastOp = null;
			}
		}
	}
	else if (pressed === "C") {
		memory = null;
		temp1 = null;
		temp2 = null;
		lastOp = null;
		return 0;
	}
	else if(pressed == "+") {
		lastOp = pressed;
		if(currentNum && memory) {
			// add the numbers
			n1 = parseInt(memory);
			n2 = parseInt(currentNum);
			nSum = n1 + n2;
			return nSum;
		}
		else if (currentNum) {
			// set temp value for next number
			return currentNum;
		}
		else {
			console.log("currentNum not set");
		}
	}
};

buttonWrapper.addEventListener("click", function(e) {
	let bVal = parseInt(e.target.innerText);
	if(Number.isNaN(bVal)) {
		// operator button
		console.log("temp1 start: ",temp1);
		let pressed = e.target.innerText;

		memory = operator(temp1, memory, pressed);
		
		temp1 = null;
		displayClick(memory);
		console.log("pressed: ", pressed, "end mem: ", memory);
		if (lastOp === "←") {
			
		}
	}
	else {
		// number button
		console.log("temp1 start: ",temp1, "bVal: ",bVal, "bVal Type: ",typeof(bVal), "input type: ",typeof(e.target.innerText));
		if(temp1 === null) {
			temp1 = e.target.innerText;
			console.log('null click temp1: ',temp1);
			displayClick(temp1)
		}
		else {
			temp1 = temp1 + e.target.innerText;
			console.log('click temp1: ',temp1);
			displayClick(temp1)
		}
		
		console.log("tVal: ",e.target.innerText," temp1: ",temp1);
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
