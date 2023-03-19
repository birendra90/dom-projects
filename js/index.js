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
     4. firstChild => First Child Node
     5. firstElementChild => First Child Element Node
     6. lastChild => Last Child Node
     7. lastElementChild => Last Child Element Node
     8. children => Element Child Nodes
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

})();
