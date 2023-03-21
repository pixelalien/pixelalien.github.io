let valueList = [];
const buttonWrapper = document.querySelector(".calc-buttons");

function displayClick() {
	buttonWrapper.addEventListener("click", function () {
		// if (event.currentTarget )
		console.log(event.currentTarget)
	});
}

function updateResult(newValue) {
	document.querySelector(".result").innerText = newValue;
}
