let data = new Date
let horas = data.getHours()
let minutos = String(data.getMinutes())
let h1HTML = document.getElementById("titulo")
let dia = data.getDay()
let diaHTML = document.getElementById("dia")
let h3HTML = document.getElementById("h3")
let horaHTML = document.getElementById("hora")
let imgHTML = document.getElementById("img")
h3HTML = h3HTML.addEventListener("click", diaclick)
horaHTML = horaHTML.innerText = (`Agora são ${horas} horas`)
if(horas >18){
imgHTML = imgHTML.setAttribute("src", "noite.jpg")

}else if(horas >12){
  imgHTML = imgHTML.setAttribute("src", "tarde.jpg")
}else{
  imgHTML = imgHTML.setAttribute("src", "manha.jpg")
}

function diaclick(){
switch(dia){
  case 0 :
  alert("Hoje é Domingo")
  diaHTML = diaHTML.innerHTML = ("Hoje é Domingo")
  break
  case 1 :
  alert("Hoje é Segunda")
  diaHTML = diaHTML.innerHTML = ("Hoje é Segunda")
  break
  case 2 :
  alert("Hoje é Terça")
  diaHTML = diaHTML.innerHTML = ("Hoje é Terça")
  break
  case 3 : 
  alert("Hoje é quarta")
  diaHTML = diaHTML.innerHTML = ("Hoje é quarta")
  break
  case 4 :
  alert("Hoje é quinta ")
  diaHTML = diaHTML.innerHTML = ("Hoje é quinta")
  break
  case 5 : 
  alert("Hoje é sexta")
  diaHTML = diaHTML.innerHTML = ("Hoje é sexta")
  break
  case 6 : 
  alert("Hoje é sábado")
  diaHTML = diaHTML.innerHTML = ("Hoje é sábado")
  break
  default:
    alert("ERRO")
}
}
h1HTML = h1HTML.innerHTML = (`Agora são: ${horas}:${minutos.padStart(2, "0")}`)
