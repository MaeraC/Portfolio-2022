var txtAnim = document.querySelector(".animation");

new Typewriter(txtAnim, {
   deleteSpeed: 50,
})

.changeDelay(70)
.pauseFor(600)
.typeString('<span style="font-size: 40px; font-family: Advent Pro">Développeuse Web en alternance</span>')
.pauseFor(500)
.deleteChars(30)
.typeString('<span style="font-size: 40px; font-family: Advent Pro">À la recherche d\'une\ entreprise</span>')
.start() 
