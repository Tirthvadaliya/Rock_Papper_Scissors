let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");


const genComputerChoice=()=>
{
    const option=["rock","paper","scissors"];
    const rndIndx = Math.floor(Math.random() * 3);
    return option[rndIndx]; 
};


const drawgame=()=>
{
  console.log("Game was Draw!");
    msg.innerText="Game was Draw! Please Try Again!";
    msg.style.backgroundColor="#081b31";


};



const showWinner =(userwin,userChoice,ComputerChoice)=>
{
 if(userwin)
 {
    userScore++;
    userScorepara.innerText=userScore;
    console.log("You Win!");
    msg.innerText=`You Win! Your ${userChoice} beats ${ComputerChoice}`;
    msg.style.backgroundColor="green";
}
else
{
    compScore++;
    compScorepara.innerText=compScore;
    console.log("You Loss!");
    msg.innerText=`You Loss! ${userChoice} beats Your ${ComputerChoice}`;
    msg.style.backgroundColor="red";

 }
};



const playgame=(userChoice)=>
{
    console.log("user choice = ",userChoice);
    //generate computer choice - modular function
    const ComputerChoice= genComputerChoice();
    console.log("user choice = ",ComputerChoice);

    if(userChoice === ComputerChoice)
    {
      drawgame();
    }

    else
    {
     let userwin=true;

     if(userChoice=== "rock")
     {
        //scissors,paper
        userwin = ComputerChoice === "paper" ? false : true;
     }

     else if(userChoice=== "paper")
     {
        // rock,scissors
        userwin = ComputerChoice === "scissors" ? false : true;
     }

     else
     {
         //rock,paper
        userwin = ComputerChoice === "rock" ? false : true;
     }
     showWinner(userwin,userChoice,ComputerChoice);
    }
};



choices.forEach((choice) => // this is access all choices
{
   choice.addEventListener("click",()=>{ 
    const userChoice=choice.getAttribute("id");
    // console.log("Button was Clicked!",userChoice);
    playgame(userChoice);
   });
});
