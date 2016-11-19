//Button to toggle menu
function toggleMenu() {
  var menuBox = document.getElementById('nav-trigger');    
  if(menuBox.style.display === "block") { 
    // if is menuBox displayed, hide it
    menuBox.style.display = "none";
    print('menu is hidden!');
  }
  else { // if is menuBox hidden, display it
    menuBox.style.display = "block";
    print('menu is shown!');
  }
}

// status bar text function
function print(text) {
  let con = document.getElementById('console');
  let lista = con.getElementsByTagName('pre');
  if( lista.length === 0 ) {  
    let e = document.createElement('pre');
    e.style.backgroundColor = 'black';
    e.style.color = 'lightblue';
    e.innerText = text + '\n';
    con.appendChild(e);
  } else {
    let e = lista[0];
    e.innerText +=  text + '\n';
  }
}

// color menu
window.onload=function(){
var e = document.getElementById("color-menu");
  var value = e.options[e.selectedIndex].value;
  var text = e.options[e.selectedIndex].text;
 console.log(e.options[e.selectedIndex].value);
let color = function(event) {
  if(e.options[e.selectedIndex].value !== "choice")
  print('Your Color:  ' + e.value);
}
e.addEventListener('click', color);
}

