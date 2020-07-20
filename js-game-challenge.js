const userInput=document.querySelector(".input");
const userSubmit=document.querySelector(".submit");
const userPrevGuess=document.querySelector(".prevGuess");
const returnResult=document.querySelector(".result");
const hint=document.querySelector(".moreHint");
const userTries=document.querySelector(".tries");
const  img=document.querySelector(".congrat");
let userMax=document.querySelector(".max");


const userSubmit1=document.querySelector(".submit1");
// let answer=Math.floor(Math.random()*100)+1;
let count=1;
let tries=1;
let userMaxValue;
let answer;
function numberRange(){
    let userMaxValue=Number(userMax.value);
     answer=Math.floor(Math.random()*userMaxValue+1);
     return answer;
}

// // userSubmit1.addEventListener("click", ());


function checkMyGuess(){
    
    let userGuess=Number(userInput.value);
    let num=tries++;
    if(count===1){
        userPrevGuess.textContent="Previous Guess:";
    }
    if(userGuess===answer){
        returnResult.textContent="Bingle! You guess right";
        hint.textContent=" ";
        showImg();
        
    }else if(userGuess<answer){
        returnResult.textContent="Sorry! You are wrong";
                hint.textContent="Your guess is less than the actual number!";
                
                userTries.textContent="Your have tried " +num + " wrong";

    } else if(userGuess>answer){
        returnResult.textContent="Sorry! You are wrong";
        hint.textContent="Your guess is higher than the actual number" ;
        userTries.textContent="Your have tried " +num + "wrong";
    }
        userPrevGuess.textContent+=userGuess+" ,";
   
  
   count++;
}
 hint.style.fontWeight="bold";
userSubmit.addEventListener("click", checkMyGuess);

// show a img if a user guest guessed right
function showImg() {
    let src = "https://lh5.googleusercontent.com/proxy/SEy-yxUJn0F3dUjIKI_D6D2HNDxRQJvbCqM_mvD-z6bkRsY70zWNUPj0bWGFSmkx0FYGcFeqP5H2nlBTKsBtO9Ck4gCk68ZmLBwLBDDCayTm3f4Ga3FUjIfZtpDpdMPU0ZgnybdTVlE";
    image("https://lh5.googleusercontent.com/proxy/SEy-yxUJn0F3dUjIKI_D6D2HNDxRQJvbCqM_mvD-z6bkRsY70zWNUPj0bWGFSmkx0FYGcFeqP5H2nlBTKsBtO9Ck4gCk68ZmLBwLBDDCayTm3f4Ga3FUjIfZtpDpdMPU0ZgnybdTVlE", 600,300, "congrat");
}


function image(src, width, height, alt) {
    let img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;
    document.body.appendChild(img);
}
