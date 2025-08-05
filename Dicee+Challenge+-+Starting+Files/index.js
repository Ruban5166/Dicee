
 var  img = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"]
    var title
function radomNum(){
    var randomNumber1 = Math.floor(Math.random()* 6)
    var value = randomNumber1 +1
    var image = img[randomNumber1]
    return {

        value,image
    }
  
}
var image1 = radomNum();
document.getElementsByClassName("img1")[0].setAttribute("src","images/"+ image1.image)



var image2 = radomNum();
document.getElementsByClassName("img2")[0].setAttribute("src","images/" +image2.image)


if(image1.value>image2.value){
   title = "🎌  Player 1 wins" 
}else if(image1.value<image2.value){
    title = "Player 2 wins 🎌 " 
}else{
    title = "🏳️ Draw" 
}


document.querySelector("h1").innerHTML = title;




