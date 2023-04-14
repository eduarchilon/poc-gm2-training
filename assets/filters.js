let labels = document.querySelectorAll('.group-filter-label')
let displays = document.querySelectorAll('.group-filter-display')

for (let i = 0; i < labels.length; i++) {
  labels[i].addEventListener('click', () => showDisplay(i))
}

let openDisplay = true

const showDisplay = (index) => {
  if (openDisplay === true) {
    displays[index].style.display = 'block'
    openDisplay = false
  } else {
    displays[index].style.display = 'none'
    openDisplay = true
  }
}
