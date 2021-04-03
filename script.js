// creating 16x16 grid
const div = document.querySelector('.gridContainer');
// populate the container with 16*16 divs
populate(16);
// add hover effect
addHoverAll();
// add clear functionality
clearAll();

const current = document.querySelector('.range_input_value');
const range = document.querySelector('#range_input');
range.addEventListener('change',()=>{
  let n = range.value;
  console.log(n);
  populate(n);
  addHoverAll();
  clearAll();
  current.textContent = `${n}`;
});


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
      child.style.backgroundColor = 
      `rgb(${Math.random()*266},${Math.random()*266},${Math.random()*266})`;
    });
  });
}

function clearAll(){
  const childs = Array.from(document.querySelectorAll('.gridElement'));
  const clearBtn = document.querySelector('#clear');
  clearBtn.addEventListener('click',()=>{
    childs.forEach( child => {
      child.classList.remove('hovered');
      child.style.backgroundColor = 'transparent';
    });
  });
}



