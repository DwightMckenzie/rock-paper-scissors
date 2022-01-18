function play() {
    let uChoice = document.getElementById('user').value;
    let cChoice = Math.random();
    var msg = "";
    let dsply = document.getElementById('dsply');

    if (cChoice < 0.33) {
    	cChoice = "rock";
    } else if(cChoice <= 0.66) {
    	cChoice = "paper";
    } else {
    	cChoice = "scissors";
    }

    compare(uChoice,cChoice);
    
    function compare(u, c) {

        // console.log('u: ' + u);
        // console.log('c: ' + c);

        if (u === c) {
            msg =  "<b>Score: </b>Players tie!";     
        } else if (u === "rock") {
            if (c === "scissors") {
                msg = `<b>User:</b> ${u} <br> <b>Computer:</b> ${c} <br>Rock crushes scissors, <br><b>Player wins</b>`;
            } else if (c === "paper") {
                msg = `<b>User:</b> ${u} <br> <b>Computer:</b> ${c} <br>Paper covers rock, <br><b>Computer wins</b>`;
            }
        } else if (u === "paper") {
            if (c === "rock") {
                msg = `<b>User:</b> ${u} <br> <b>Computer:</b> ${c} <br>Paper covers rock, <br><b>Player wins</b>`;
            } else if (c === "scissors") {
                msg = `<b>User:</b> ${u} <br> <b>Computer:</b> ${c} <br>Scissors cut paper, <br><b>Computer wins</b>`;
            }
        } else if (u === "scissors") {
            if (c === "paper") {
                msg = `<b>User:</b> ${u} <br> <b>Computer:</b> ${c} <br>Scissors cuts paper, <br><b>Player wins</b>`;
            } else if (c === "rock") {
                msg = `<b>User:</b> ${u} <br> <b>Computer:</b> ${c} <br>Rock crushes scissors, <br><b>Computer wins</b>`;
            }
        }

        dsply.innerHTML = msg;

    };

}