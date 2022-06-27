const main = document.querySelector('.main');

// div.setAttribute('style', 'color: blue; background: red; height:500px; width:500px;');    
let rows = document.getElementsByClassName("gridRow");


function makeRows(rownum) {

let rows = document.querySelector("gridRow");
    
    for (r = 0; r < rownum; r++) {
        let row = document.createElement("div");
        main.appendChild(row).className = "gridRow";
    };
};

makeRows(16)
    function makeColumns(collnum) {
        for (i = 0; i < 16; i++) {
            for (j = 0; j < collnum; j++) {
                let col = document.createElement("div");
                rows[j].appendChild(col).className = "gridcol";
            };
    
        };
    };
makeColumns(16);

const col = document.querySelectorAll('.gridcol');
col.forEach(col => {
    col.addEventListener('click',function(e){
        col.style.cssText = "background-color: black;"
    })

});