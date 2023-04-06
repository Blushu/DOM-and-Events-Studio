// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function (e) {
	// Buttons
	let takeOffButton = document.getElementById("takeoff");
	let landingButton = document.getElementById("landing");
	let missionAbortButton = document.getElementById("missionAbort");
	let up = document.getElementById("up");
	let down = document.getElementById("down");
	let left = document.getElementById("left");
	let right = document.getElementById("right");

	// Flight Info
	let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
	let flightStatus = document.getElementById("flightStatus");
	let shuttleBackground = document.getElementById("shuttleBackground");

	// Initialize Rocket & Rocket position;
	const rocket = document.getElementById("rocket");
	rocket.style.position = "absolute";
	resetRocketPosition();

	takeOffButton.addEventListener("click", function (event) {
		if (spaceShuttleHeight.innerHTML !== "0") {
			window.alert("Space Shuttle already in flight.");
		} else {
			let takeOffConfirmation = window.confirm(
				"Confirm that the shuttle is ready for takeoff."
			);

			if (takeOffConfirmation) {
				// Update Flight status & background
				flightStatus.innerHTML = "Shuttle in flight.";
				shuttleBackground.style.backgroundColor = "blue";

				// Update Shuttle height display
				let currentHeight = Number(spaceShuttleHeight.innerHTML);
				spaceShuttleHeight.innerHTML = currentHeight + 10000;

				// update rocket image position;
				let currentRocketHeight = parseInt(rocket.style.bottom);
				rocket.style.bottom = currentRocketHeight + 10 + "px";
			}
		}
	});

	landingButton.addEventListener("click", function (event) {
		if (spaceShuttleHeight.innerHTML == "0") {
			window.alert("The shuttle is already on the ground.");
		} else {
			window.alert("The shuttle is landing. Landing gear engaged.");
			flightStatus.innerHTML = "The shuttle has landed.";
			shuttleBackground.style.backgroundColor = "green";
			spaceShuttleHeight.innerHTML = 0;
			resetRocketPosition();
		}
	});

	missionAbortButton.addEventListener("click", function (event) {
		if (spaceShuttleHeight.innerHTML == "0") {
			window.alert("The shuttle is already on the ground.");
		} else {
			let abort = window.confirm(
				"Confirm that you want to abort the mission."
			);

			if (abort) {
				flightStatus.innerHTML = "Mission aborted.";
				shuttleBackground.style.backgroundColor = "green";
				spaceShuttleHeight.innerHTML = 0;
				resetRocketPosition();
			}
		}
	});

	up.addEventListener("click", function (event) {
		if (spaceShuttleHeight.innerHTML == "0") {
			window.alert("Space Shuttle has not launched yet.");
		} else {
			let currentRocketHeight = parseInt(rocket.style.bottom);
			rocket.style.bottom = currentRocketHeight + 10 + "px";
		}
	});

	down.addEventListener("click", function (event) {
		if (spaceShuttleHeight.innerHTML == "0") {
			window.alert("Space Shuttle has not launched yet.");
		} else {
			let currentRocketHeight = parseInt(rocket.style.bottom);
			rocket.style.bottom = currentRocketHeight - 10 + "px";
		}
	});

	left.addEventListener("click", function (event) {
		if (spaceShuttleHeight.innerHTML == "0") {
			window.alert("Space Shuttle has not launched yet.");
		} else {
			let currentRocketXAxisPosition = parseInt(rocket.style.left);
			rocket.style.left = currentRocketXAxisPosition - 10 + "px";
		}
	});

	right.addEventListener("click", function (event) {
		if (spaceShuttleHeight.innerHTML == "0") {
			window.alert("Space Shuttle has not launched yet.");
		} else {
			let currentRocketXAxisPosition = parseInt(rocket.style.left);
			rocket.style.left = currentRocketXAxisPosition + 10 + "px";
		}
	});
});

function resetRocketPosition() {
	rocket.style.left = 0;
	rocket.style.bottom = 0;
}
