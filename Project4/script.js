let attempt = 3;
let randomNumber = Math.floor(Math.random() * 101);


function submit() {
    const userInput = parseInt(document.querySelector("#number").value);
    const result = document.querySelector("#result");

    if (isNaN(userInput))
    {
        result.innerHTML = "Pelase enter correct value <br>";
        return false;
    }

    do {
        if (attempt <= 0)
        {
            result.innerHTML = "Attempts Finished <br>";
            result.innerHTML += "The number was : " + randomNumber;
            return false;  // stop game if no attempts left
        }


        if (randomNumber < userInput) {
            attempt--;
            result.innerHTML = "Too High <br>";
            result.innerHTML += "Attempts left : " + attempt;
         
        }
        else if (randomNumber > userInput) {
            attempt--;
            result.innerHTML = "Too Loo <br>";
            result.innerHTML += "Attempts left : " + attempt;
            
        }
        else  {
            result.innerHTML = "You Won <br>";
            result.innerHTML += "Attempts left : " + attempt;
            return false;
        }

        if (attempt > 0)
        {
            return false;
        }

    }
    while (attempt > 0);

     return false;

}
