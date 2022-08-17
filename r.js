let computerscore=0;
let playerscore=0;
  function computerchoice()
    {
    let array=['rock','paper','scissor'];
    let random=[Math.floor(Math.random()*array.length)];
    return (array[random]);
    }

    function playround(pc)
    {   

        
       let cc=computerchoice();
        if(pc=='rock'&&cc=='scissor' || pc=='paper'&&cc=='rock' || pc=='scissor'&&cc=='paper')
        {
            alert("Player wins! "+pc+" beats "+cc );
            playerscore=playerscore+1;
            console.log("ps is"+playerscore);
        }
        else if(pc==cc)
        {
            alert("It's a tie,player choice and computer choice was "+pc );
        }
        else
        {
            alert("Computer wins "+cc +" beats " +pc);
            computerscore=computerscore+1;
            console.log("cs is"+computerscore);
        }

    }
game();

function game()
{
    for(let i=1;i<=5;i++)
    {
       
        let playerchoice=prompt("Enter your choice-rock,paper or scissor ","");
        let score=playround(playerchoice);
     }
     if(playerscore>computerscore)
     {
        console.log("Player is the ultimate winner with points"+playerscore);
     }
     else
     {
        console.log("Computer is the ultimate winner with points"+computerscore);
     }

}
