window.onload = function() {
    var body = document.body;
    var colorCodeElement = document.getElementById("colorCode");
    var colorNameElement = document.getElementById("colorName");
    var colorAddressElement = document.getElementById("colorAddress");
    var colorHistoryElement = document.getElementById("colorHistory");
  
    body.addEventListener("click", function(event) {
      var randomColor = getRandomColor();
      body.style.backgroundColor = randomColor;
      var color = tinycolor(randomColor);
      colorCodeElement.textContent = "Color Code: " + randomColor;
      colorNameElement.textContent = "Color Name: " + color.toName();
      colorAddressElement.textContent = "Color Address: " + window.location.href;
      createColorBox(randomColor);
    });
  
    function getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    function createColorBox(color) {
      var colorBox = document.createElement("div");
      colorBox.classList.add("colorBox");
      colorBox.style.backgroundColor = color;
      colorBox.textContent = color;
      colorHistoryElement.appendChild(colorBox);
    }
  };
  