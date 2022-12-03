var txtAnim = document.querySelector(".animation");

new Typewriter(txtAnim, {
   deleteSpeed: 60,
})

.changeDelay(60)
.pauseFor(600)
.typeString('<span style="font-size: 40px; font-family: Advent Pro"> Apprentie Développeuse Web</span>')
.pauseFor(500)
.deleteChars(26)
.typeString('<span style="font-size: 40px; font-family: Advent Pro">À la recherche d\'une\ entreprise</span>')
.start() 
