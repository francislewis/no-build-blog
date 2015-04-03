 var req = new XMLHttpRequest();
  req.onload = function() {
    var xmpNode = document.getElementById('content');
    xmpNode.appendChild(document.createTextNode(this.responseText));
  }
  req.open('GET', '/How-to/navbar.html', false);
  req.send();
