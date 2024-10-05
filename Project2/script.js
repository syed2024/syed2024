function colour(name) {
    const body1 = document.getElementById("buttonDiv1"); 
    body1.style.backgroundColor = name;
   
}


const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const text = document.getElementById("text");

let currentSize = 10;

increase.addEventListener("click", () => {
    if(currentSize < 100)
    {
        currentSize += 1;
        text.style.fontSize = currentSize + "px";
    }
});


decrease.addEventListener("click", () => {
    
    if(currentSize > 10)
    {
        currentSize -= 1;
        text.style.fontSize = currentSize + "px";
    }
});


const form = document.querySelector('form');
form.addEventListener('submit' , function (e) {

 e.preventDefault();
 const A = parseInt(document.querySelector('#A').value);
 const B = parseInt(document.querySelector('#B').value);

 const result = document.querySelector('#results');

 result.innerHTML = A+B;
  prompt(A+B);


});