function populate(){
    if(quiz.isfinish()){
        showScores();
    }
    else{
        // show questions
        var element = document.getElementById("question");
        element.innerHTML=quiz.getQuestionIndex().text;
     //  show choices
        var choices = quiz.getQuestionIndex().choices;
        for(i=0;i<choices.length;i++){
            var element = document.getElementById("choice"+i);
            element.innerHTML= choices[i];
            guess("btn"+i,choices[i]);
        }
        showProgress();
    }
};

function showScores(){
    var gameOverHTML ="<h1> Result </h1>";
    gameOverHTML += "<h2 id='score'> Your score: "+ quiz.score + "</h2>";
    var element = document.getElementById("quiz")
    element.innerHTML = gameOverHTML;
};
function guess(id,guess){
    var button = document.getElementById(id);
    button.onclick =function(){
        quiz.guess(guess);
        populate();
    }
};
function showProgress(){
    var currentQuestionNumber = quiz.questionIndex +1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question "+ currentQuestionNumber + " of "+quiz.questions.length;
}



var questions =[
    new Question("Which is your fav tutorials", ["1","2","3","4"],"4"),
    new Question("What is SDLC", ["SDLC","software","life","cycle"],"SDLC"),
    new Question("What is your name2", ["A","B","C","D"],"C"),
    new Question("What is your name3", ["A","B","C","D"],"C"),
    new Question("What is your name4", ["A","B","C","D"],"C"),
];
var quiz = new Quiz(questions);

populate();

