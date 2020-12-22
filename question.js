function Quiz(questions){
    this. score= 0;
    this.questions=questions;
    this.questionIndex= 0;
}
Quiz.prototype.getQuestionIndex= function(){
    return this.questions[this.questionIndex];
}
Quiz.prototype.guess=function(answer){
    if(this.getQuestionIndex().isCorrectAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}
Quiz.prototype.isEnded=function(){
    return this.questionsIndex ===this.questions.length;

}
function Question(text,choices,answer){
    this.text =text;
    this.choices=choices;
    this.answer=answer;
}
Question.prototype. isCorrectAnswer=function(choice){
    return this.answer===choice;
}
function populate(){
    if(quiz.isEnded()){
        showScores()
    }else{
        var element=document.getElementById("question")
        element.innerHTML=quiz.getQuestionIndex().text;
        var choices=quiz.getQuestionIndex().choices;
        for(var i=0;i<choices.length;i++){
            var element=document.getElementById("choice"+i)
            element.innerHTML=choices[i];
            guess("btn"+i,choices[i]);
        }
    }
};
function guess(id,guess){
    var button= document.getElementById(id);
    button.onclick=function(){
        quiz.guess(guess);
        populate();
        showProgress();
    }
};
function showProgress(){
    var currentQuestionNumber=quiz.questionIndex+1;
    var element =document.getElementById("progress");
    element.innerHTML="Question"+currentQuestionNumber+"of"+quiz.questions.length;
};
function showScores(){
    var gameOverHTML="<h1>Result</h1>";
    gameOverHTML +="<h2 id='score'>Your Scores:"+quiz.score +"</h2>";
    var element=document.getElementById("quiz");
    element.innerHTML=gameOverHTML;
};
var questions=[
    new Question("Which command is used to display the top of the file??",["cat","head","more","grep"],"head"),
    new Question("The brain of any computer system is?",["ALU","Memory","CPU","Control Unit"],"CPU"),
    new Question("what is the capital of India?",["Mumbai","New Delhi","Kolkata","Kerala"],"New Delhi"),
    new Question("what is the capital of Gujarat?",["Gandhinagar","Jaipur","Amritsar","Noida"],"Gandhinagar"),


];
var quiz =new Quiz(questions);
//display quiz
populate();
showProgress();