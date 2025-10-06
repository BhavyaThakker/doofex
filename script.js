// script.js
window.onload = function() {
    let confColors = ["#fd8c24","#ffa600","#ffe27c","#2b1600","#fffbe9"];
    for(let i=0;i<30;i++){
        let c = document.createElement('div');
        c.className = 'confetti';
        c.style.left = Math.random()*100+'vw';
        c.style.top = '-5vh'; c.style.background = confColors[Math.floor(Math.random()*confColors.length)];
        c.style.width = c.style.height = (Math.random()*10+7)+'px';
        c.style.opacity = Math.random()*0.7+0.4;
        c.style.position='fixed';
        c.style.borderRadius = "50%";
        c.style.zIndex=9;
        document.body.appendChild(c);
        let duration = Math.random()*2+2.8;
        c.animate([
          {transform:`translateY(0) rotate(0deg)`},
          {transform:`translateY(110vh) rotate(${Math.random()*600+198}deg)`}
        ], {duration: duration*1000, easing:'cubic-bezier(.68,.12,.32,.87)'});
        setTimeout(()=>c.remove(), duration*1000);
    }
};
