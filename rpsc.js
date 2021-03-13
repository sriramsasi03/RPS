var userscore=0;
var compscore=0;
var compguess;
function displaycomp(){
    compguess=Math.floor(Math.random()*3);
    if(compguess==0)document.getElementById('comp').src='rock.jpg';
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
    if(compguess==0);
    if(compguess==1){
        compscore++;
        updatecompscore();
    }
    if(compguess==2){
        userscore++;
        updateuserscore();
    }
}
function clickpaper(){
    displaycomp();
    document.getElementById('user').src='paper.jpg';
    if(compguess==1);
    if(compguess==2){
        compscore++;
        updatecompscore();
    }
    if(compguess==0){
        userscore++;
        updateuserscore();
    }
}
function clickscissors(){
    displaycomp();
    document.getElementById('user').src='scissors.jpg';
    if(compguess==2);
    if(compguess==0){
        compscore++;
        updatecompscore();
    }
    if(compguess==1){
        userscore++;
        updateuserscore();
    }
}