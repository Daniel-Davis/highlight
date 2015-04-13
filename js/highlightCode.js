function highlightCode(node, keywords) { // initializes function to highlighCode and pass two arguments, node and keywords
  var text = node.textContent; // variable to hold the text contents of a given node
  node.textContent = ""; // Clear the node

  var match, pos = 0; // variable to hold the variable of 0 for the position
  while (match = keywords.exec(text)) { // while the match is similart to the text
    var before = text.slice(pos, match.index); // variable to hold the text info
    node.appendChild(document.createTextNode(before)); // creates a new node as a child node to the before variable
    var strong = document.createElement("strong"); // creates a variable to hold the strong string
    strong.appendChild(document.createTextNode(match[0])); // strong variable creats a new node at the beginning of the array of possible matches
    node.appendChild(strong); // creates new node for strong string value
    pos = keywords.lastIndex; // pos variable goes to the last in the index
  } // end of while loop
  var after = text.slice(pos); // variable after gets the text value of pos
  node.appendChild(document.createTextNode(after)); // creates a new node based off of that
}

