/**
  Make the text within the button display the number of times the button has been clicked.
*/

(function() {
  console.log("Example: Counter");
  let count = 0;
  const btnEle = document.getElementById("counter");
  btnEle.addEventListener("click", function() {
    count++;
    const countEle = document.getElementById("count");
    countEle.textContent = count;
  });
})();
