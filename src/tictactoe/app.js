

// find location of click and add x or o
// determine player1 or player2
// keep score
// find a winner via 3 in a row

console.log('hey app.js here')

let previousGamePiece = null

function addGamePiece(selectedElement) {
  //create new element
  let newElement = document.createElement('h1')
  if (previousGamePiece === 'x') {
  // add text to element
  newElement.innerHTML = 'o'

  previousGamePiece = 'o'
  } else {

    newElement.innerHTML = 'x'

    previousGamePiece = 'x'
  }
  
  selectedElement.style.backgroundColor = 'Pink'
  // add element with text to selectedElement on page
  selectedElement.appendChild(newElement)
  console.log('show clicked div', document.querySelector('div'))
}

if (player1 = 'x') {
  newElement.innerHTML = 'o'
} else {
  newElement.innerHTML = 'x'
}