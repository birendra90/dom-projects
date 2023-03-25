// window vs document
// Difference between textContent | innerHTML | innerText
// How Browsers works
/* 
   Node Types
   1. Element nodes
   2. Text nodes
   3. Comment Nodes
*/
/*
   parentnode vs parentelement

   Parent Element returns null if the parent is not an element node,
   that is the main difference between parentElement and parentNode.
   In many cases one can use anyone of them, in most cases, they are the same. For instance:

  // returns the document node
  document.documentElement.parentNode; 

  // returns null
  document.documentElement.parentElement;
  
  // Assign html object to html variable
  const html = document.documentElement;

  console.log(html.parentNode); // > #document
  console.log(html.parentElement); // > null

  The HTML element (document.documentElement) doesn’t have a parent that is an element,
  it is a node, therefore, the parent element is null.

  In most cases, it is the same as parentNode. The only difference comes when a node's parentNode is not an element. If so, parentElement is null.

  As an example:

  document.body.parentNode; // the <html> element
  document.body.parentElement; // the <html> element

  document.documentElement.parentNode; // the document node
  document.documentElement.parentElement; // null

  (document.documentElement.parentNode === document);  // true
  (document.documentElement.parentElement === document);  // false
  Since the <html> element (document.documentElement) doesn't have a parent that is an element,
  parentElement is null. (There are other, more unlikely, cases where parentElement could be null,
  but you'll probably never come across them.)
*/


console.log("Learning DOM");

// IIFE
(function() {
  const navEle = document.getElementById("nav");
  console.log("navEle >>", navEle)

  // get attribute
  const oldAttValue = navEle.getAttribute("href");
  console.log("oldAttValue >>", oldAttValue)

  // setAttributes
  navEle.setAttribute("href", "https://www.wikipedia.org");
  const newAttValue = navEle.getAttribute("href");
  console.log("newAttValue >>", newAttValue)

  // set the text content
  navEle.textContent = 'Navigate to Wikipedia';

  console.log("navEle >>", navEle)

  // Change Background Color
  const btnEle = document.getElementById("changeBackground");
  btnEle.addEventListener("click", () => {
    document.body.style.backgroundColor = "lightgreen";
  });

  const resetBtnEle = document.getElementById("reset");
  resetBtnEle.addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
  });

  // Access elements in the DOM
  /*
     1. getElementById() // return single node
     2. getElementsByClassName() // return array of nodes
     3. getElementsByName() // return array of nodes
     4. getElementsByTagName() // return array of nodes
     5. querySelectorAll() // return array of nodes
     6. querySelector() // return single node
  */

    const demoId = document.getElementById('demo');
    demoId.style.borderColor = "red";
    console.log("demoId >>", demoId);

    const demoClass = document.getElementsByClassName("demo");
    console.log("demoClass >>", demoClass);
    for(let i = 0; i < demoClass.length; i++) {
      demoClass[i].style.borderColor = "green";
    }

    const demoTag = document.getElementsByTagName("article");
    console.log("demoTag >>", demoTag);
    for(let i = 0; i < demoTag.length; i++) {
      demoTag[i].style.borderColor = "orange";
    }

    const demoQuery = document.querySelector('#demo-query');
    console.log("demoQuery >>", demoQuery);
    demoQuery.style.borderColor = "blue";


    const demoQueryAll = document.querySelectorAll('.demo-query-all');
    console.log("demoQueryAll >>", demoQueryAll);
    for(let i = 0; i < demoQueryAll.length; i++) {
      demoQueryAll[i].style.borderColor = "brown";
    }


  // Traverse the DOM
  
  /*    Property   =>   Get
     1. parentNode => Parent Node
     2. parentElement => Parent Element Node

     3. childNodes => Child Nodes
     4. children => Element Child Nodes

     5. firstChild => First Child Node
     6. firstElementChild => First Child Element Node

     7. lastChild => Last Child Node
     8. lastElementChild => Last Child Element Node

     9. previousSibling => Previous Sibling Node
     10. previousElementSibling => Previous Sibling Element Node

     11. nextSibling => 	Next Sibling Node
     12. nextElementSibling => Next Sibling Element Node
  */
  
  // parentNode and parentElement 
  const pEle = document.getElementsByTagName("p")[0];
  console.log("pEle >>>", pEle);
  console.log("pEle.parentNode >>>", pEle.parentNode);
  console.log("pEle.parentElement >>>", pEle.parentElement);

  // childNodes and children
  const ulEle = document.getElementsByTagName('ul')[0];
  console.log("ulEle >>>", ulEle);
  console.log("ulEle.childNodes >>>", ulEle.childNodes);
  console.log("ulEle.children >>>", ulEle.children);
  
  // ulEle.firstChild.style.background = 'yellow'; // Throwing an error
  ulEle.firstElementChild.style.background = 'yellow';

  for (let element of ulEle.children) {
    element.style.background = 'yellow';
  }
  
  ulEle.lastElementChild.style.background = 'fuchsia';

  const tiger = ulEle.children[1];
  tiger.nextElementSibling.style.background = 'coral';
  tiger.previousElementSibling.style.background = 'aquamarine';

  // Make Changes to the DOM
  
  // Creating New Node
  /* 
          Property/Method          =>          Descriptions
       1. createElement()          =>    Create a new element node
       2. createTextNode()         =>    Create a new text node
       3. node.textContent         =>    Get or set the text content of an element node
       4. node.innerHTML           =>    Get or set the HTML content of an element
  */

  const paragraph = document.createElement('p');
  console.log("paragraph >>>", paragraph);

  // A combination of createElement() and textContent creates a complete element node.
  paragraph.textContent = "I'm a brand new paragraph.";
  console.log("paragraph.textContent >>>", paragraph);

  /* An alternate method of setting the content of the element is with the innerHTML property,
     which allows you to add HTML as well as text to an element. */
  paragraph.innerHTML = "I'm a paragraph with <strong>bold</strong> text.";
  console.log("paragraph.innerHTML >>>", paragraph);

  // It is also possible to create a text node with the createTextNode() method.
  const text = document.createTextNode("I'm a new text node.");
  console.log("text >>>", text);

  // Inserting Nodes into the DOM
  /* 
          Property/Method             =>             Descriptions
       1. node.appendChild(newNode)          =>    Add a node as the last child of a parent element
       2. node.insertBefore(newNode, childNode)         =>    Insert a node into the parent element before a specified sibling node (2 Arguments)
       3. node.replaceChild(newNode, oldNode)         =>    Replace an existing node with a new node
  */

  const todoList = document.getElementById('inserting');
  const newTodo = document.createElement('li');
  newTodo.textContent = 'Do homework';
  todoList.appendChild(newTodo);

  const otherTodo = document.createElement('li');
  otherTodo.textContent = 'Pay bills';
  todoList.insertBefore(otherTodo, todoList.firstElementChild);

  const modifiedTodo = document.createElement('li');
  modifiedTodo.textContent = 'Feed the dog';
  todoList.replaceChild(modifiedTodo, todoList.children[2]);

  // Removing Nodes from the DOM
  /* 
          Property/Method               =>      Descriptions
       1. node.removeChild(newNode)     =>    Remove child node
       2. node.remove()                 =>    Remove node
  */
  todoList.removeChild(todoList.lastElementChild);
  todoList.children[1].remove(); // remove itself
  
  // Modify Attributes, Classes, and Styles in the DOM

  // Modifying Attributes
  /*
          Method             =>          Descriptions                =>            Example
       1. hasAttribute()     =>   Returns a true or false boolean         element.hasAttribute('href');
       2. getAttribute()     =>   Returns the value of a specified   =>   element.getAttribute('href');
                                  attribute or null
       3. setAttribute()     =>   Adds or updates value of a         =>   element.setAttribute('href', 'index.html');
                                  specified attribute
       4. removeAttribute()  =>   Removes an attribute from an       =>   element.removeAttribute('href');
                                  element
   */

  const img = document.querySelector('img');

  const isExistSrc = img.hasAttribute('src');
  console.log("isExistSrc >>>", isExistSrc);
  const srcValue =img.getAttribute('src');
  console.log("srcValue >>>", srcValue);
  img.removeAttribute('src');
  
  img.setAttribute('src', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg');

  // Modifying Classes
  /*
          Method/Property            =>          Descriptions                =>            Example
       1. className                  =>   Gets or sets class value                   element.className;
       2. classList.add()            =>   Adds one or more class values      =>   element.classList.add('active');
       3. classList.toggle()         =>   Toggles a class on or off          =>   element.classList.toggle('active');
       4. classList.contains()       =>   Checks if class value exists       =>   element.classList.contains('active');
       5. classList.replace()        =>   Replace an existing class value    =>   element.classList.replace('old', 'new');
                                          with a new class value
       6. classList.remove()         =>   Remove a class value               =>   element.classList.remove('active');
   */

  // Select the modify-class div
  const div = document.getElementById('modify-class');

  // Assign the warning class to the modify-class div
  div.className = 'warning';

  const activeDiv = document.querySelector('.active');

  activeDiv.classList.add('hidden');                
  activeDiv.classList.remove('hidden');
  activeDiv.classList.toggle('hidden');  // Off           // Switch between hidden true and false
  activeDiv.classList.replace('active', 'warning');
  activeDiv.classList.toggle('hidden'); // On

  // Modifying Styles

  // Select the modify-style div
  const divEle = document.getElementById('modify-style');

  divEle.setAttribute('style', 'text-align: center');

  divEle.style.height = '100px';
  divEle.style.width = '100px';
  divEle.style.border = '2px solid black';
  divEle.style.textAlign = 'center';
  
  // Make div into a circle and vertically center the text
  divEle.style.borderRadius = '50%';
  divEle.style.display = 'flex';
  divEle.style.justifyContent = 'center';
  divEle.style.alignItems = 'center';

  // Events in JavaScript

  // Function to modify the text content of the paragraph
  const changeText = () => {
    const p = document.querySelector('#eve');

    p.textContent = "I changed because of an inline event handler.";
  }
  
  // Add event handler as a property of the button element
  const button = document.querySelector('#btn');

  // button.onclick = changeText; // direct call on click

  button.addEventListener('click', changeText); // using event listener

  // Remove changeText function from button element
  button.removeEventListener('click', changeText);

  // Do check more events
  //   https://www.digitalocean.com/community/tutorials/understanding-events-in-javascript

  // Test the key and code properties
  document.addEventListener('keydown', event => {
    console.log('key: ' + event.key);
    console.log('code: ' + event.code);
  });


})();
