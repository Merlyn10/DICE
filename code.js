
var roll_btn=document.getElementById("roll")
roll_btn.addEventListener("click", function(e){

var rnum1=Math.floor(Math.random()*6)+1
var rimg1="Images/img"+rnum1+".png"
var img1=document.getElementById('img1')
img1.setAttribute("src",rimg1)

var rnum2=Math.floor(Math.random()*6)+1
var rimg2="Images/img"+rnum2+".png"
var img2=document.getElementById('img2')
img2.setAttribute("src",rimg2)

player1=0;
player2=0;

var resp=document.getElementById("res")
if(rnum1>rnum2)
    resp.innerHTML="Player 1 Won"
else if(rnum2>rnum1)
        resp.innerHTML="Player 2 Won"
    else
        resp.innerHTML="Draw"
})