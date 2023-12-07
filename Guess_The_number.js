function guess_number(number){

        var random = (Math.random() * 100)+1;
    
        if(random == number){
            console.log("Your guess was correct!");
            running = false;
        }

        if(random < number){
            console.log("Your guess was too high.");
        }

        if(random > number){
            console.log("Your guess was too low.");
        }
    }

number = parseInt(prompt('Guess a number 1 - 100'));

while(running == true){
    guess_number(number);
}