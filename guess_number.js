 function guess_number(){
    // define prompt
    let prompt=require("prompt-sync")({sigint:true});
    // setting random as const so it can't be reassigned later
    const random = (Math.floor(Math.random() * 100)+1);
    // not seeting number to const because it needs to be reassigned to avoid infinite loop
    let number = parseInt(prompt('Guess a number between 1-100: '));

    /*************************************************************************************
     * Main loop of the program, goes until number is guessed compares the user input to 
     * the randomly generated number.
     * First if checks if number is in range, if not says number is out of range.
     * Second if checks if the user number is less than the random number, says number was
     * too small.
     * Third if checks if user number was greater than the random number, says number was 
     * too big
     *************************************************************************************/
    while(random != number){
        if(number <= 0 || number >= 100){
            console.log("Number is out of range.\n");
            number = parseInt(prompt('Guess a number between 1-100: '));
        }
        else{
            if(random > number){
                console.log("Your number was too small.\n");
                number = parseInt(prompt('Guess a number between 1-100: '));
            }
            if(random < number){
                console.log("Your number is too big.\n");
                number = parseInt(prompt('Guess a number between 1-100: '));
            }
        }
    }
    // returns that the number was correct if loop broken
    console.log("Your number was correct!\n");
}
// function call
guess_number();