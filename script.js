var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
// console.log(randomNumber1);
var image1 = 'images/dice1.png';
var image2 = 'images/dice2.png';
var image3 = 'images/dice3.png';
var image4 = 'images/dice4.png';
var image5 = 'images/dice5.png';
var image6 = 'images/dice6.png';

var images_arr = [image1,image2,image3,image4,image5,image6];
var random_image1 = images_arr[randomNumber1-1];
var random_image2 = images_arr[randomNumber2-1];

var dice_1 = document.querySelector(".img1");
var dice_2 = document.querySelector(".img2");
dice_1.setAttribute("src",random_image1);
dice_2.setAttribute("src",random_image2);

// document.querySelector("h1").innerHTML;
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}else if(randomNumber1 == randomNumber2){
    document.querySelector("h1").innerHTML = "Draw";
}
else{
    document.querySelector("h1").innerHTML = "Player 2 wins"
}



