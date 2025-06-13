let randomNumber = Math.floor(Math.random() *10) +1 ;
let guess =prompt("Guess A Number Between 1 and 10: ");
// guess = parseInt(guess);

if(guess === null) {
    alert("Game Over!🚫");
}
else{
    if(guess < randomNumber ){
        alert("Too Low!⬇️ Try Again!🔄");
    }
    else if(guess > randomNumber){
        alert("Too High!⬆️ Try Again!🔄");
    }
    else{
        alert("Congratulations!You Win🏆");
    }
}