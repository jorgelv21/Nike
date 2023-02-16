const logo = document.querySelector("#logo")
const soccer = document.getElementById("soccer-btn")
const member = document.getElementById('member-img')

logo.addEventListener("click", ()=>{
    location.href = "#"
})

function invincible(){
    location.href = "https://www.nike.com.br/hotsite/novo-invincible3"
}

function womanlink(){
    location.href = "https://www.nike.com.br/nav/esportes/corrida/esportes/treinoacademia/esportes/yoga/genero/feminino"
}

function womanknow(){
    location.href = "https://www.nike.com.br/sc/feminino-1"
}

soccer.addEventListener('click', ()=>{
    location.href = "https://www.nike.com.br/hotsite/gearup-pack"
})

member.addEventListener("click", ()=>{
    location.href = "https://www.nike.com.br/sc/membros-nike-cadastro"
})

