const section = document.querySelector(".section-quote");
const quote = document.createElement("p");

section.classList.add("bg-section");

quote.innerHTML = "<em>" + "Je ne suis pas un excellent programmeur. Je suis juste un bon programmeur avec d'excellentes habitudes." + "</em>" + "<br></br>" + "- Kent Beck"

section.appendChild(quote);