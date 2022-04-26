const password = document.querySelector(".form-control");
const number = 8;
const letters = /[a-z]/i;
const numbers = /[0-9]/i;
const special = /[!@#$%^&*()]/;
const give = document.querySelector(".give");

const passBad = () => {
	if (password.value.length <= number) {
		give.textContent = "Masz słabe hasło😯";
		give.style.color = "#ff0000";
		give.style.fontSize = "19px";
	}
};

const passGood = () => {
	if (password.value.length >= number) {
		give.textContent = "Masz dobre hasło😁";
		give.style.color = "#ffff00";
		give.style.fontSize = "22px";
	}
};

const passVeryGood = () => {
	if (
		password.value.length >= number &&
		password.value.match(letters) &&
		password.value.match(numbers) &&
		password.value.match(special)
	) {
		give.textContent = "Masz bardzo dobre hasło😍";
		give.style.color = "#66ff00";
		give.style.fontSize = "24px";
	}
};

const nothing = () => {
	if (password.value == "") {
		give.textContent = "Podaj hasło";
		give.style.color = "black";
	}
};
password.addEventListener("keyup", passBad);
password.addEventListener("keyup", passGood);
password.addEventListener("keyup", passVeryGood);
password.addEventListener("keyup", nothing);
