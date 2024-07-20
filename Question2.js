function changeColor() {
    const selectColor = document.getElementById("colorSelect");
    const color = selectColor.value;
  
    const change = document.getElementById("textColor");
    change.style.color = color;
  }
  