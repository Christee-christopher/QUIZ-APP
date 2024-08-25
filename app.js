const question =document.getElementById("question")
const choices= Array.from(document.getElementByClassName("choice-text"))


let currentQuestion={}
let acceptingAnswers= true
let score = 0
let availableQuestions = []

const questions= [
    {
        Question:"Inside which HTML element do we put JavaScript?",
    
            choice1: "<javascript>", 
            choice2: "<scripting>", 
            choice3: "<script>", 
            choice4: "<js>", 
            answer: 3
        
    },
    {
        Question:"where is the correct place to insert a JavaScript?",
    
            choice1: " The <body> section ", 
            choice2: " Both the <head> sevtion and the <body>", 
            choice3: "<script>", 
            choice4: "Anywhere in your HTML", 
            answer: 2
    },
    {
        Question:"what is the correct syntax for referring to an external script called *xxx.js*?",
    
        choice1: "<script src=*xxx.js*>", 
        choice2: "<script name=*xxx.js*>", 
        choice3: "<script>", 
        choice4: "<js>", 
        answer: 3
    },
    {
        Question:"How do you create a function in JavaScript?",
    
        choice1: "function myFunction()", 
        choice2: "function:myFunction() ", 
        choice3: "function = myFunction()", 
        choice4: "Function+MyFunction()",
        answer:1 
    },
    {
        
        Question:"How do you call a function named *myFunction* ?",
    
        choice1: " myFunction()", 
        choice2: " call function myFunction() ", 
        choice3: "call myFunction()", 
        choice4: "call MyFunction", 
        answer:1
    },
    {
    Question:"How do you round the number 7.25, to the nearest integer?",
    
    choice1: " Math.round(7.25)", 
    choice2: " round(7.25)", 
    choice3: "Math.rnd(7.25)", 
    choice4: "rnd(7.25)", 
    answer: 1
},
{
    Question:"How do you find the number with the highest value of x and y?",
    
    choice1: " Math.max(x, y)", 
    choice2: " top(x, y)", 
    choice3: "Math.ceil(x,y)", 
    choice4: "ceil(x,y)", 
    answer: 1
},


]
const CORRECT_BONUS =10
const MAX_QUESTIONS=7

startGame= () => {
    questionCounter =0;
    score=0;
    availableQuestions = [...questions]

    console.log(availableQuestions);
    getNewQuestion()
    
}

getNewQuestion = () =>{
    questionCounter
}


startGame();


                            