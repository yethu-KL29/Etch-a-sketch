let color;
let c= "black";
let click = true;

let col = document.querySelectorAll('.squares');
const picker = document.querySelector('#picker');
let colormode = document.querySelector('.colormode');
let clear = document.querySelector('.eraser');
let random = document.querySelector('.rainbow');
let reset = document.querySelector('.clear')

// picker.addEventListener('onchange',function (e){
//   color = e.target.value
//  })
 
function change(choice){
colormode.addEventListener('click',function(e){
  c =choice;
  console.log(c)
  colormode.style.backgroundColor = c;
})

}








clear.addEventListener('click',function(e){
  c = "white"
  })



random.addEventListener('click',function(e){
  c = `hsl(${Math.random() * 360}, 100%, 50%)`;
})


reset.addEventListener('click',function(e){
  let board  = document.querySelector(".main");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "white");
})

// let c = document.getElementById('colorpicker')

function makegrid(size) {
    let board  = document.querySelector(".main");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;
  
    let amount = size * size;
    for (let i = 0; i < amount; i++) {
      let square = document.createElement("div");
      square.classList.add("squares")
      board.insertAdjacentElement("beforeend", square);
    }
     col = document.querySelectorAll('.squares');
    col.forEach(col => { 
     col.addEventListener('mouseover',function(e){

      if(click){
        console.log("click")
        col.style.cssText =  `background-color : ${c}`
      }
      
    })
    

});

  }


    

  document.querySelector('body').addEventListener('click',function(e){
    click = !click
  })



  makegrid(16);


  

let size = document.querySelector(".size")

    
    


function changesize(input){
    makegrid(input);
    size.innerHTML =  `${input} x ${input}`
    
}




