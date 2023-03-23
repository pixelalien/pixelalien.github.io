let valueList = [];

const buttonWrapper = document.querySelector(".calc-buttons");
const lcd = document.querySelector(".result");
let memory = [];
let temp1 = null;
let temp2 = null;
let lastOp = null;
let oVal = null;
let equals = false;

function displayClick(temp1) {
	// // console.log("display start mem: ", temp1);
	lcd.innerText = temp1;
};

function operatorSpecial( currentNum, memory, pressed, total ) {
	if(pressed == "←") {
		// console.log("backspace start - lastOp: ",lastOp," start currentNum: ", currentNum)
		if(currentNum && lastOp !== "stop") {
			// console.log("start currentNum: ", currentNum);
			currentNum = currentNum.substring(0, currentNum.length - 1);
			// console.log('backspace currentNum: ',currentNum);
			lastOp = "←";
			return currentNum;
		}
		else if (!currentNum) {
			// console.log("currentNum not set");
			if (memory.length > 0) {
				// an operator was the last click
				i = memory.length - 1;
				tVal = memory[i];
				// console.log("i: ",i," array memory: ", memory, " array tVal: ", tVal)
				memory.pop();
				memory.pop();
				currentNum = tVal.toString();
				// console.log("array currentNum: ", currentNum, "type: ",typeof(currentNum)," temp1: ",temp1," temp2: ",temp2);
				// currentNum = currentNum.substring(0, currentNum.length - 1);
				lastOp = "stop";
				return currentNum;
			}
			if(lastOp) {
				lastOp = null;
			}
		}
		else {
			return currentNum
		}
		// console.log("backspace end - lastOp: ",lastOp," start currentNum: ", currentNum)
	}
	else if (pressed === "C") {
		memory = [];
		temp1 = null;
		temp2 = null;
		lastOp = null;
		return 0;
	}
	else {
		equals = true;
		oVal = operator(temp1, temp2, lastOp);
		return oVal;
	}
}
function operator( currentNum, temp2, pressed ) {

	lastOp = pressed;
	if(currentNum && temp2) {
		memory.push(currentNum);
		n1 = parseInt(temp2);
		n2 = parseInt(currentNum);
		if(pressed == "+") {
			// add the numbers
			nSum = n1 + n2;
			return nSum;
		}
		else if(pressed == "-") {
			// subtract the numbers
			nSum = n1 - n2;
			return nSum;
		}
		else if(pressed == "×") {
			// multiply the numbers
			nSum = n1 * n2;
			return nSum;
		}
		else if(pressed == "÷") {
			// subtract the numbers
			nSum = n1 / n2;
			return nSum;
		}
	}
	else if (currentNum) {
		// set temp value for next number
		memory.push(currentNum);
		memory.push(pressed);
		return currentNum;
	}
	else {
		// console.log("currentNum not set");
	}
};

buttonWrapper.addEventListener("click", function(e) {
	let bVal = parseInt(e.target.innerText);
	if(Number.isNaN(bVal)) {
		// operator button
		// console.log("temp1 start: ",temp1);
		let pressed = e.target.innerText;
		if (pressed === "←" || pressed === "C") {
			oVal = operatorSpecial(temp1, memory, pressed);
			temp1 = oVal;
		}
		else if (pressed === "=") {
			total = true;
			oVal = operatorSpecial(temp1, memory, pressed );
			temp1 = oVal;
			console.log("equal currentNum: "," temp1: ",temp1," temp2: ",temp2);
		}

		else {
			if (equals) {
				temp2 = null;
				equals = false;
			}
			oVal = operator(temp1, temp2, pressed);
			temp2 = oVal;
			temp1 = null
		}
		
		displayClick(oVal);

		// console.log("pressed: ", pressed, "end mem: ", memory);
		
		
	}
	else {
		// number button
		// console.log("temp1 start: ",temp1, "bVal: ",bVal, "bVal Type: ",typeof(bVal), "input type: ",typeof(e.target.innerText));
		if(temp1 === null || temp1 === 0) {
			temp1 = e.target.innerText;
			// console.log('null click temp1: ',temp1);
			displayClick(temp1)
		}
		else {
			temp1 = temp1 + e.target.innerText;
			// console.log('click temp1: ',temp1);
			displayClick(temp1)
		}
		
		// console.log("tVal: ",e.target.innerText," temp1: ",temp1);
	}
	// if (event.currentTarget )
	// // console.log(e.target.innerText)
}, false);
// function displayClick() {
// }
// const bw = document.querySelector(".calc-buttons")
function fts() {
	bw.addEventListener("click", function(){
		// console.log("clickety click")
	}, false)
}

function updateResult(newValue) {
	document.querySelector(".result").innerText = newValue;
}
