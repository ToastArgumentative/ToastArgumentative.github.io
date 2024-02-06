

function changeButtonName() {
  console.log("Button has been clicked")
  var button = document.getElementById("TheButton");
  if (button.innerText !== 'Click Me') {
      return; // If button text is not 'Click Me', do nothing
  }

  var timeLeft = 3; // Initial time in seconds
  button.innerText = 'Clicked (' + timeLeft + ')';
  var countdown = setInterval(function() {
      timeLeft--;
      button.innerText = 'Clicked (' + timeLeft + ')';
      if (timeLeft <= 0) {
          clearInterval(countdown);
          button.innerText = 'Click Me';
        console.log("Button refreshed.")
      }
  }, 1000); // Update every second
}

