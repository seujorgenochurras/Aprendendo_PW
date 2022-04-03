const horaHTML = document.getElementById("hora")
const imgHTML = document.getElementById("img")
const saudaHTML = document.getElementById("saudacao")
let data = new Date()
let hora = data.getHours()

let minuto = data.getMinutes()
let dia = data.getDay()
function horaCalc(){
  if(hora >= 18){
    saudaHTML.innerHTML = (`Boa noite`)
    imgHTML.src = "noite.png"

    document.body.style.background = "#001648"
  } else if(hora >=12){
    saudaHTML.innerHTML = (`Boa tarde`)
    imgHTML.src = "tarde.png"
    document.body.style.background = "#e27309"
  } else{
    saudaHTML.innerHTML = (`Bom dia`)
    imgHTML.src = "manha.png"
    document.body.style.background = "#f08e5f"
  }
}
function carregar(){
  horaHTML.innerHTML = (`Agora são ${hora} horas`)
 horaCalc();
}