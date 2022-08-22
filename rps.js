//initialising variables
let playerchoice;
let playerscore=0;
let computerscore=0;
//taking player choice
function playerInput(string){
    let pc=string;
    playerChoice(pc);
    }
function playerChoice(ps){
    playerchoice=ps;
    game()
}
//declaring dom
const rock=document.querySelector("#rock");
rock.addEventListener('click',()=>playerInput("rock"));
const paper=document.querySelector("#paper");
paper.addEventListener('click',()=>playerInput("paper"));
const scissor=document.querySelector("#scissor");
scissor.addEventListener('click',()=>playerInput("scissor"));
//taking computerchoice
function computerChoice()
{
    let array=['rock','paper','scissor'];
    return computerchoice= array[Math.floor(Math.random()*array.length)];
}
//function playround to play a single round
function playround(pc)
{
    let cc=computerChoice();
    if(pc=="rock"&&cc=="paper"|| pc=="paper"&&cc=="rock"||pc=="scissor"&&cc=="paper")
    {
        const pa=document.querySelector("#p1");
        playerscore=playerscore+1;
        pa.textContent="Player Wins "+pc+" beats "+cc+" Player score is "+playerscore ;
        
    }
   else if(pc==cc)
    {
        const pa=document.querySelector("#p1");
        pa.textContent="It's a tie";
    }
    else
    {
        const pa=document.querySelector("#p1");
        computerscore=computerscore+1;
        pa.textContent="Computer Wins "+cc+" beats "+pc+" Computer score is "+computerscore;
        
    }
}
//multiple rounds of the game
function game()
{
    playround(playerchoice); 
    scorecard();
}
function scorecard(){
    if(playerscore>computerscore)
    {
        const pb=document.querySelector("#p2");
        pb.textContent="Scoreboard is Playerscore= "+playerscore+" and Computerscore="+computerscore;
    }
    else
    {
        const pb=document.querySelector("#p2");
        pb.textContent="Scoreboard is Playerscore= "+playerscore+" and Computerscore="+computerscore;
       
    }

}
