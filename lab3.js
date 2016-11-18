//Button to toggle menu
function toggleMenu() {
  var menuBox = document.getElementById('menu-box');    
  if(menuBox.style.display == "block") { 
    // if is menuBox displayed, hide it
    menuBox.style.display = "none";
    print('menu is hidden!');
  }
  else { // if is menuBox hidden, display it
    menuBox.style.display = "block";
    print('menu is back!');
  }
}

//Button to toggle menu with events
let toggle = document.getElementById('menu1');
var menuBox1 = document.getElementById('menu-box1');
menuBox1.style.display = "none";
toggle.addEventListener('click', function(event) {
  if(menuBox1.style.display == "block") { 
    // if is menuBox displayed, hide it
    menuBox1.style.display = "none";
    print('menu is hidden!');
  }
  else { // if is menuBox hidden, display it
    menuBox1.style.display = "block";
    print('menu is back!');
  }
});


// color menu
var e = document.getElementById("color-menu");
  var value = e.options[e.selectedIndex].value;
  var text = e.options[e.selectedIndex].text;
 console.log(e.options[e.selectedIndex].value);
let color = function(event) {
  if(e.options[e.selectedIndex].value !== "choice")
  print('Your Color:  ' + e.value);
}
e.addEventListener('click', color);



// status bar text function
function print(text) {
  let con = document.getElementById('console');
  let lista = con.getElementsByTagName('pre');
  if( lista.length === 0 ) {  
    let e = document.createElement('pre');
    e.style.backgroundColor = 'black';
    e.style.color = 'lightblue';
    e.innerText = text;
    con.appendChild(e);
  } else {
    let e = lista[0];
    e.innerText +=  '\n'+ text;
  }
}
