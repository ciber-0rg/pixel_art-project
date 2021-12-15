const pixelPaleta = document.querySelectorAll(".color"); // fazendo o array com toda a paleta de cores
const pixel = document.getElementsByClassName('pixel'); // fazendo array com todos elemento com class pixels
const clearButton = document.querySelector('#clear-board');

function makePixelGrid() {
  const numberOfLines = 20;
  const pixelGrid = document.querySelector('#pixel-board');

  for (let index = 0; index < numberOfLines; index += 1) { // (for de fora) linha por linha. 1. entra na primeira linha. 3. vai pra segunda linha. ++
    const line = document.createElement('div');
    line.className = 'line';
    pixelGrid.appendChild(line);

    for (let index2 = 0; index2 < numberOfLines; index2 += 1) { // (for de dentro) coluna por coluna. 2. faz coluna por coluna. 4. faz coluna por coluna. ++

      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      const actualLine = document.querySelectorAll('.line');
      actualLine[index].appendChild(pixel);
    }
  }
}

makePixelGrid();

function selectColorToPlay(event) {
  const colorBlack = document.querySelector('.selected'); // chamou o elemento que tem a classe selected
  colorBlack.classList.remove('selected'); // removeu a classe selected do elemento chamado acima
  event.target.classList.add('selected'); // adicionou a classe selected ao elemento evento(clickado)
}

pixelPaleta[0].addEventListener('click', selectColorToPlay);
pixelPaleta[1].addEventListener('click', selectColorToPlay);
pixelPaleta[2].addEventListener('click', selectColorToPlay);
pixelPaleta[3].addEventListener('click', selectColorToPlay);

function putColorIntoPixel(event) {
  const selected = document.querySelector('.selected'); // chamou o elemento que tem a classe selectec
  const pixelToBeColored = event.target; // jogou o elemento evento para dentro de pixelColor
  pixelToBeColored.id = selected.id; // jogou a id de selected pra pixelColor
}

for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', putColorIntoPixel); // varre todo o gride adicionando cor
}

function clearBoard(){
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].removeAttribute('id');
    pixel[index].id = 'white';
  }
}

clearButton.addEventListener("click", clearBoard);