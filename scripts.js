// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function (e) {
  // Buttons
  let takeOffButton = document.getElementById("takeoff");
  let landButton = document.getElementById("landing");

  // Shuttle Info
  let flightStatus = document.getElementById("flightStatus");
  let shuttleBackground = document.getElementById("shuttleBackground");
  let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

  // Handle Takeoff button
  takeOffButton.addEventListener("click", function (event) {
    let response = window.confirm(
      "Confirm that the shuttle is ready for takeoff."
    );

    if (response) {
      // Set Flight Status
      flightStatus.innerHTML = "Shuttle in flight.";

      // Change Background color
      shuttleBackground.style.backgroundColor = "blue";
      // shuttleBackground.style["background-color"] = 'blue';

      // Updating Space Shuttle Height
      let currentShuttleHeight = Number(spaceShuttleHeight.innerHTML);
      spaceShuttleHeight.innerHTML = currentShuttleHeight + 10000;
    }
  });

  // Handle Land button
  landButton.addEventListener("click", function (event) {
    window.alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed.";
    shuttleBackground.style.backgroundColor = "green";
    spaceShuttleHeight.innerHTML = 0;
  });
});
