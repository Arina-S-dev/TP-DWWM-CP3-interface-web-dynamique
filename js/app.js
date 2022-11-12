var app = {
  invaderHTMLElement: null,
  formHTMLElement: null,
  gridSize: 5,
  pixelSize: 20,
  styles: [
    'blue',
    'red',
    'green',
    'black',
  ],
  currentColor: 'blue',

  handlePixelClicked(event) {
    var pixelClicked = event.target;

    if(pixelClicked.classList.contains(app.currentColor)) { 
      pixelClicked.className = 'pixel';
    } else {
      pixelClicked.className = `pixel ${app.currentColor}`;
    }
  },
  drawGrid: function(gridSize, pixelSize) {
  app.invaderHTMLElement.innerHTML = '';
  
  for(var i = 0; i < gridSize; i++) {
    var columnHTMLElement = document.createElement('div');
  
    columnHTMLElement.classList.add('column');
  
    app.invaderHTMLElement.appendChild(columnHTMLElement);
  
    for(var j = 0; j < gridSize; j++) {
      
      var pixelHTMLElement = document.createElement('div');
  
      pixelHTMLElement.classList.add('pixel');

      pixelHTMLElement.style.width = `${pixelSize}px`;
      pixelHTMLElement.style.height = `${pixelSize}px`;

      pixelHTMLElement.addEventListener('click', app.handlePixelClicked);
  
      columnHTMLElement.appendChild(pixelHTMLElement);
    }
  }
  },

  drawForm: function() {
   
    var gridSizeInputHTMLElement = document.createElement('input');
   
    gridSizeInputHTMLElement.type = 'number';
    gridSizeInputHTMLElement.placeholder = 'Taille de la grille';
    
    app.formHTMLElement.appendChild(gridSizeInputHTMLElement);

    var pixelSizeInputHTMLElement = document.createElement('input');

    pixelSizeInputHTMLElement.type = 'number';
    pixelSizeInputHTMLElement.placeholder = 'Taille des pixels';
   
    pixelSizeInputHTMLElement.style.borderRadius = 0;

    app.formHTMLElement.appendChild(pixelSizeInputHTMLElement);

    var buttonHTMLElement = document.createElement('button');
    
    buttonHTMLElement.textContent = 'Valider';
    
    app.formHTMLElement.appendChild(buttonHTMLElement);

    app.formHTMLElement.addEventListener('submit', function(event) {
     
      event.preventDefault();

      app.gridSize = gridSizeInputHTMLElement.value;

      app.pixelSize = pixelSizeInputHTMLElement.value;

      app.drawGrid(app.gridSize, app.pixelSize);
    })
  },

  drawColorPalette: function() {
    
    var paletteContainerHTMLElement = document.createElement('div');

    paletteContainerHTMLElement.id = 'palette-container';

    for(var color of app.styles ) {
      
      var paletteColorHTMLElement = document.createElement('a');

      paletteColorHTMLElement.classList.add('palette-color');

      paletteColorHTMLElement.classList.add(color);

      paletteColorHTMLElement.addEventListener('click', function(event) {
        
        var oldActivedColor = document.getElementsByClassName('palette-color--active')[0];

        if(oldActivedColor) {

          oldActivedColor.classList.remove('palette-color--active');
        }

        var clickedColorHTMLElement = event.target;

        clickedColorHTMLElement.classList.add('palette-color--active');

        app.currentColor = clickedColorHTMLElement.classList[1];
      })

      paletteContainerHTMLElement.appendChild(paletteColorHTMLElement);
    }

    document.body.appendChild(paletteContainerHTMLElement);
  },

  init() {
    
    app.invaderHTMLElement = document.getElementById('invader');

    app.formHTMLElement = document.getElementsByClassName('configuration')[0];

    app.drawGrid(app.gridSize, app.pixelSize);
    app.drawForm();
    app.drawColorPalette();
  }
}

app.init();