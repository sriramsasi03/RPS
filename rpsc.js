var userscore=0;
var compscore=0;
var compguess;
function displaycomp(){
    compguess=Math.floor(Math.random()*3);
    if(compguess==0)document.getElementById('comp').src='rock_1.jpg';
    if(compguess==1)document.getElementById('comp').src='paper.jpg';
    if(compguess==2)document.getElementById('comp').src='scissors.jpg';
}
function updatecompscore(){
    document.getElementById('compans').innerHTML=compscore;
}
function updateuserscore(){
    document.getElementById('userans').innerHTML=userscore;
}
function clickrock(){
    displaycomp();
    document.getElementById('user').src='rock.jpg';
    if(compguess==0&&compscore<5&&userscore<5);
    if(compguess==1&&compscore<5&&userscore<5){
        compscore++;
        updatecompscore();
    }
    if(compguess==2&&compscore<5&&userscore<5){
        userscore++;
        updateuserscore();
    }
    displaywinner();
}
function clickpaper(){
    displaycomp();
    document.getElementById('user').src='paper.jpg';
    if(compguess==1&&compscore<5&&userscore<5);
    if(compguess==2&&compscore<5&&userscore<5){
        compscore++;
        updatecompscore();
    }
    if(compguess==0&&compscore<5&&userscore<5){
        userscore++;
        updateuserscore();
    }
    displaywinner();
}
function clickscissors(){
    displaycomp();
    document.getElementById('user').src='scissors_1.jpg';
    if(compguess==2&&compscore<5&&userscore<5);
    if(compguess==0&&compscore<5&&userscore<5){
        compscore++;
        updatecompscore();
    }
    if(compguess==1&&compscore<5&&userscore<5){
        userscore++;
        updateuserscore();
    }
    displaywinner();
}
function displaywinner(){
    if(compscore==5)document.getElementById('winner').innerHTML="<b>OOPS! Computer Won, Better Luck next time</b>";
    else if(userscore==5)
    document.getElementById('winner').innerHTML="<b>Yay! U won the game</b>";
    if(compscore==5||userscore==5){
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
    }
}
function clickRestart(){
    compscore=0;
    userscore=0;
    updatecompscore();
    updateuserscore();
    document.getElementById("b1").disabled = false;
    document.getElementById("b2").disabled = false;
    document.getElementById("b3").disabled = false;
    document.getElementById('winner').innerHTML=" ";
}