var txtAnim = document.querySelector(".animation");

new Typewriter(txtAnim, {
   deleteSpeed: 60,
})

.changeDelay(60)
.pauseFor(600)
.typeString('<span style="font-size: 40px; font-family: Advent Pro">Développeuse Web</span>')
.pauseFor(500)
.deleteChars(16)
.typeString('<span style="font-size: 40px; font-family: Advent Pro">Apprentie Développeuse web</span>')
.start() 
