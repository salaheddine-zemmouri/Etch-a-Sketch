// creating 16x16 grid
const div = document.querySelector('.container');
// populate the container with 16*16 divs
populate(16);
// add hover effect
addHoverAll();
// add clear functionality
clearAll();

function populate(size){
  div.textContent='';
  for(let i = 1; i <= size*size; i++){
    let child = document.createElement('div');
    child.classList.add('gridElement');
    div.appendChild(child);
  }
  div.setAttribute('style',`
  display:grid;
  justify-items:center;
  grid-template-columns:repeat(${size},1fr);
  grid-template-rows:repeat(${size},1fr);
  `);
}

function addHoverAll(){
  const childs = Array.from(document.querySelectorAll('.gridElement'));
  childs.forEach( child => {
    child.addEventListener('mouseover',()=>{
      child.classList.add('hovered');
    });
  });
}

function clearAll(){
  const childs = Array.from(document.querySelectorAll('.gridElement'));
  const clearBtn = document.querySelector('#clear');
  clearBtn.addEventListener('click',()=>{
    childs.forEach( child => {
      child.classList.remove('hovered');
    });
    let n = Number(prompt('Enter the sketchpad size <100'));
    populate(n);
    addHoverAll();
  });
}
