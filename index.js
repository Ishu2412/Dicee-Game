function random(){
  return (Math.floor)(Math.random()*6)+1;
}
var randomNo1=random();
if (randomNo1===1){
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
  }
else if(randomNo1===2){
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
  }
else if (randomNo1===3){
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
  }
else if (randomNo1===4){
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
  }
else if (randomNo1===5){
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
  }
else{
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
  }

randomNo2=random();
if (randomNo2===1){
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
  }
else if(randomNo2===2){
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
  }
else if (randomNo2===3){
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
  }
else if (randomNo2===4){
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
  }
else if (randomNo2===5){
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
  }
else{
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
  }

if(randomNo1>randomNo2){
  document.querySelector("h4").innerHTML="🚩Player 1 wins!";
}
else if(randomNo1<randomNo2){
  document.querySelector("h4").innerHTML="Player 2 wins!🚩";
}
else{
  document.querySelector("h4").innerHTML="Draw!";
}
