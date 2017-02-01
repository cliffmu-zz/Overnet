document.getElementById('blacklist.txt').onchange = 

var loc = document.title.indexOf("ClickHole") != -1;
if (document.title.indexOf("ClickHole") != -1) {
  //Creative Elements
  var rbox = document.createElement("BUTTON")
  var rtxt = document.createTextNode("FAKE");
  rbox.appendChild(rtxt);
  rbox.style.position="absolute";
  rbox.style.width="100px";
  rbox.style.height="100px";
  rbox.style.top="10px";
  rbox.style.right="10px";
  rbox.style.zIndex="9999";
  //Appending to DOM
  document.body.appendChild(rbox);
}
else {
  var rbox = document.createElement("BUTTON")
  // var rtxt = document.createTextNode("NOT FAKE");
  var rtxt = document.createTextNode(loc);
  rbox.appendChild(rtxt);
  rbox.style.position="absolute";
  rbox.style.width="100px";
  rbox.style.height="100px";
  rbox.style.top="10px";
  rbox.style.right="10px";
  rbox.style.zIndex="9999";
  //Appending to DOM
  document.body.appendChild(rbox);
}
