var play = false;
var score;
var count;
var timeremain;
var ans;

document.getElementById("startgame").onclick = function() {
    if (play == true) {
        location.reload();
    } else {
        play = true;
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        show("timeremain");
        timeremain = 120;
        document.getElementById("countdown").innerHTML = timeremain;
        hide("gameover");
        document.getElementById("startgame").innerHTML = '<span style="font-weight: bold; font-size: 19px; font-family:Gemunu Libre, sans-serif">RESET &ensp; GAME</font>';
        count();
        QNA();
    }
}
for (i = 1; i < 5; i++) {
    document.getElementById("box" + i).onclick = function() {
        if (play == true) {
            if (this.innerHTML == ans) {
                score++;
                document.getElementById("scorevalue").innerHTML = score;
                hide("wrong");
                show("correct");
                setTimeout(function() {
                    hide("correct");
                }, 1000);
                QNA();
            } else {
                hide("correct");
                show("wrong");
                setTimeout(function() {
                    hide("wrong");
                }, 1000);
            }

        }
    }
}

/*  */
// 
{ /*  */ }

function count() {
    action = setInterval(function() {
        timeremain -= 1;
        document.getElementById("countdown").innerHTML = timeremain;
        if (timeremain == 0) {
            stopCount();
            show("gameover");
            document.getElementById("gameover").innerHTML = '<span style="font-weight: mediem; font-size:5em ; font-family:Ultra, serif "> <p>Game&ensp;Over</p><p>Your Score is &ensp;' + score + '.</p></font>';
            hide("timeremain");
            hide("correct");
            hide("wrong");
            hide("body")

            play = false;
            document.getElementById("startgame").innerHTML =
                "Start Game"
        }
        if (timeremain == 30) {
            alert('You have 30 second');
        }
    }, 1000);
}

function stopCount() {
    clearInterval(action);
}

function hide(Id) {
    document.getElementById(Id).style.display = "none";
}

function show(Id) {
    document.getElementById(Id).style.display = "block";
}

function QNA() {
    var x = 1 + Math.round(50 * Math.random());
    var y = 1 + Math.round(50 * Math.random());
    ans = x * y;
    document.getElementById("question").innerHTML = x + " x " + y;
    var correctPos = 1 + Math.round(3 * Math.random());
    document.getElementById("box" + correctPos).innerHTML = ans;
    var answer = [ans];
    for (i = 1; i < 5; i++) {
        if (i != correctPos) {
            var wrongAns;
            do {
                wrongAns = (1 + Math.round(50 * Math.random())) * (1 + Math.round(50 * Math.random()));
            } while (answer.indexOf(wrongAns) > -1)
            document.getElementById("box" + i).innerHTML = wrongAns;
            answer.push(wrongAns);
        }
    }
}
