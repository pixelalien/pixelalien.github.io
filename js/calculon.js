let valueList = [];
const buttonWrapper = document.querySelector(".calc-buttons");

function displayClick() {
	buttonWrapper.addEventListener("click", function(e) {
		// if (event.currentTarget )
		console.log(e.currentTarget)
	}, false);
}

function updateResult(newValue) {
	document.querySelector(".result").innerText = newValue;
}
