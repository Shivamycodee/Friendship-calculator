const Name_1 = document.getElementById("item-1")
const Name_2 = document.getElementById("item-2")
var friendshipAdvice= document.getElementById("friendship-advice")

var random = Math.floor(Math.random()*100 + 1 )

function advice(){
    if(random>=70)
        friendshipAdvice.innerText= Name_1.value + " and " +Name_2.value + " , you both are going to be BFF (best friend forever), help eachother at hard moments there will be some up and downs but both of you are going to face it together"
     if(random>=50 && random < 70 )
     friendshipAdvice.innerText= Name_1.value + " and " +Name_2.value + ", there would be some problems at the beginning but if you guys decided to face together and keep going on together than ther are 99.9% chances are that you both will be life long friends."
    if(random>=0 && random < 50 )
     friendshipAdvice.innerText= Name_1.value + " and " +Name_2.value + ", you guys have a bit low chances to be friend for long time but either you can believe this horerscope or do something furious that challange your both stars because anything is possible in the world"   
}