const DINO = document.querySelector('.dino');
const BACKGROUND = document.querySelector('.background');
let isjumping = false;
let gameOver = false;
let position = 100;  
document.addEventListener('keydown', (event) => {    
    if(!isjumping)if (event.code === 'Space') jump();    
}); 

function jump(){
    isjumping = true;
    console.log(`jump`);
    let upInterval = setInterval(() =>{
        if(position >= 300){
            let downInterval = setInterval(() => {
                if(position <= 100){
                    clearInterval(downInterval); 
                    clearInterval(upInterval);                   
                    isjumping = false;
                }else{
                    position -= 20;
                }
            },20);            
        }else{
            position += 20;
        }
        DINO.style.bottom = position + 'px';
    },20);
}

function createCactus (){
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    BACKGROUND.appendChild(cactus);
 let leftInterval = setInterval(()=>{    
        if(cactusPosition === -60){
            console.log('remove cactus');
            clearInterval(leftInterval);
            BACKGROUND.removeChild(cactus);
        }else{
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
        if(cactusPosition <= 60 && cactusPosition >= 1) {
            if(position <= 160){                 
                console.log(`Game Over p=${position}, cp=${cactusPosition}`);
                gameOver = true
                clearInterval(leftInterval);
                document.body.innerHTML = '<img class="gameover" src="gameover.png"></img>'
            }
        }
 },20); 
 console.log(gameOver); 
 if(!gameOver) setTimeout(createCactus,randomTime);
}

createCactus();