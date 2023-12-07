 function guess_number(){
    const prompt=require("prompt-sync")({sigint:true});
    const random = (Math.floor(Math.random() * 100)+1);
    var number = parseInt(prompt('Guess a number between 1-100: '));

    while(random != number){
        if(number < 0 || number > 100){
            console.log("Number is out of range");
        }
        if(random > number){
            console.log("Your number was too small.\n");
            number = parseInt(prompt('Guess a number between 1-100: '));
        }
        if(random < number){
            console.log("Your number is too big.\n");
            number = parseInt(prompt('Guess a number between 1-100: '));
        }
    }
    console.log("Your number was correct!\n");
}

guess_number();