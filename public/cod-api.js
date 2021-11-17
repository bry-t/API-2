const baseURL = 'https://call-of-duty-modern-warfare.p.rapidapi.com/warzone-matches'
const headers = {"headers":{
    "x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
    "x-rapidapi-key": config.API_KEY
}}
let url;
let apiKey = config.API_KEY
console.log(apiKey);
let searchForm = document.querySelector('form')

let username = document.getElementById('username')
let platform = document.getElementById('platform')
let gameCards = document.getElementById('gameCards')



searchForm.addEventListener('submit', fetchMatchHistory)

function fetchMatchHistory(e) {
    e.preventDefault()


    let userPlatform = platform.options[platform.selectedIndex].value
    let newUser = username.value.replace("#", "%23")

    url = `${baseURL}/${newUser}/${userPlatform}`
    // console.log(url)
    fetch(url, headers)
    .then(res => res.json())
    .then(data => displayMatchHistory(data))
}

function displayMatchHistory(data) {    
    while(gameCards.firstChild){
        gameCards.removeChild(gameCards.firstChild)
    }
    

    for(let i = 0; i <= 4; i++){
    let card = document.createElement('div')
    card.setAttribute('class', "card")
    card.style.width = "12rem"
    let cardBody = document.createElement('div')
    cardBody.setAttribute('class', "card-body")
    let h5 = document.createElement('h5')
    h5.setAttribute('class', "card-title")
    h5.innerHTML = "Recent Game"

    let typeH6 = document.createElement('h6')
    typeH6.setAttribute('id', `type`)
    typeH6.setAttribute('class', "card-subtitle mb-2 text-muted")
    typeH6.innerText = "Game Mode: "
    let typeOne = document.createElement("p")
    let modeIndex = data.matches[i].mode
//! If statement changes key : value pair string
        if(modeIndex === "br_brduos"){
            typeOne.innerHTML = "Dous"
            } else if(modeIndex === "br_brtrios") {
                typeOne.innerHTML = "Trios"
            } else if (modeIndex === "br_brsolos") {
                typeOne.innerHTML = "Solos"
            } else if(modeIndex === "br_brquads") {
                typeOne.innerHTML = "Quads"
            } else if(modeIndex === "br_rebirth_rbrthquad"){
                typeOne.innerHTML = "Rebirth Resurgence Quads"
            } else {
                typeOne.innerHTML = "Rotating Game Mode"
            }

    typeH6.appendChild(typeOne)

            //DMG CARD 
    let dmgH6 = document.createElement('h6')
    dmgH6.setAttribute('id', `dmg`)
    dmgH6.setAttribute('class', "card-subtitle mb-2 text-muted")
    dmgH6.innerText = "Damage: "
    let dmgOne = document.createElement("p")
    dmgOne.innerHTML = data.matches[i].playerStats.damageDone
    dmgH6.appendChild(dmgOne)

            //KILL ENTRY
    let killH6 = document.createElement('h6')
    killH6.setAttribute('id', `kill`)
    killH6.setAttribute('class', "card-subtitle mb-2 text-muted")
    killH6.innerText = "Kills: "
    let killOne = document.createElement("p")
    killOne.innerHTML = data.matches[i].playerStats.kills
    killH6.appendChild(killOne)


    gameCards.appendChild(card)
    card.appendChild(cardBody)
    cardBody.appendChild(h5)
    cardBody.appendChild(typeH6)
    cardBody.appendChild(dmgH6)
    cardBody.appendChild(killH6)
}

    console.log(data)
}

    // let recentTypeOne = document.getElementById(`type${i}`)
    // console.log(recentTypeOne);

  // if(modeIndex.length === 9){
    //     typeOne.innerHTML = modeIndex.substr(modeIndex.length - 4).toUpperCase()
    //     } else if(modeIndex.length === 10) {
    //         typeOne.innerHTML = modeIndex.substr(modeIndex.length - 5).toUpperCase()
    //     } else {
    //         console.log("Invalid String Format")
    //     }
