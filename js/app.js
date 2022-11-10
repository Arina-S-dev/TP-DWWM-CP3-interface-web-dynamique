function drawGrid() {
    var invaderHTMLElement = document.getElementById('invader');
  
    for(var i = 0; i < 8; i++) {
      var columnHTMLElement = document.createElement('div');
  
      columnHTMLElement.classList.add('column');
  
      invaderHTMLElement.appendChild(columnHTMLElement);
  
      for(var j = 0; j < 8; j++) {

        var pixelHTMLElement = document.createElement('div');
  
        pixelHTMLElement.classList.add('pixel');
  
        columnHTMLElement.appendChild(pixelHTMLElement);
      }
    }
  }
  
  drawGrid();