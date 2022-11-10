function handlePixelClicked(event) {
    var pixelClicked = event.target;
  
    pixelClicked.classList.toggle('black');
  }

  function drawForm() {
    var formHTMLElement = document.getElementsByClassName('configuration')[0];
  
    var gridSizeInputHTMLElement = document.createElement('input');
  
    gridSizeInputHTMLElement.type = 'number';
    gridSizeInputHTMLElement.placeholder = 'Taille de la grille';
  
    formHTMLElement.appendChild(gridSizeInputHTMLElement);
  
    var buttonHTMLElement = document.createElement('button');
  
    buttonHTMLElement.textContent = 'Valider';
  
    formHTMLElement.appendChild(buttonHTMLElement);
  }

function drawGrid() {
    var invaderHTMLElement = document.getElementById('invader');
  
    for(var i = 0; i < 8; i++) {
      var columnHTMLElement = document.createElement('div');
  
      columnHTMLElement.classList.add('column');
  
      invaderHTMLElement.appendChild(columnHTMLElement);
  
      for(var j = 0; j < 8; j++) {

        var pixelHTMLElement = document.createElement('div');
  
        pixelHTMLElement.classList.add('pixel');

        pixelHTMLElement.addEventListener('click', handlePixelClicked);
  
        columnHTMLElement.appendChild(pixelHTMLElement);
      }
    }
  }
  
  drawGrid();

  drawForm();