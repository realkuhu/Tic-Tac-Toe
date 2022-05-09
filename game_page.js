var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");
document.getElementById("player1_name").innerHTML = player1_name;
document.getElementById("player2_name").innerHTML = player2_name;s
console.log("player1_name");
document.getElementById("player_question").innerHTML = "Question Turn - "+player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - "+player2_name;

function send() {
    number1 = document.getElementById("number1_input").value;
    number2 = document.getElementById("number2_input").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 +"X"+ number2 +"</h4>";
    input_box="<br> Answer: <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'> Check </button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}


function check(){
    answer = document.getElementById("input_check_box").value;
    if(answer == actual_answer){
        if(answer_turn == "player1"){
            player1_score += 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score += 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById(player_question).innerHTML = "Question Turn - " + player2_name;        
    }
    else{
        question_turn = "player1";
        document.getElementById(player_question).innerHTML = "Question Turn - " + player1_name;
    }

    document.getElementById("input_check_box").innerHTML = "";
}

function logout() {
    window.location="game_login.html";
    localStorage.removeItem("player1_name");
    localStorage.removeItem("player2_name");
}