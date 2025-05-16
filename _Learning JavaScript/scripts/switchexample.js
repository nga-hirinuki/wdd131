function changeBackground() {
    const selectedColor = document.getElementById("colorSelect").value;
  
    switch (selectedColor) {
      case "red":
        document.body.style.backgroundColor = "red";
        break;
      case "blue":
        document.body.style.backgroundColor = "blue";
        break;
      case "green":
        document.body.style.backgroundColor = "green";
        break;
      case "yellow":
        document.body.style.backgroundColor = "yellow";
        break;
      default:
        document.body.style.backgroundColor = "white";
    }
  }